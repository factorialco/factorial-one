import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { Observable } from "zen-observable-ts"
import {
  PromiseState,
  promiseToObservable,
} from "../../lib/promise-to-observable"
import type { FiltersDefinition, FiltersState } from "./Filters/types"
import { ItemActionsDefinition } from "./item-actions"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "./navigationFilters/types"
import { SortingsDefinition } from "./sortings"
import {
  BaseFetchOptions,
  DataSource,
  InfiniteScrollPaginatedResponse,
  PageBasedPaginatedResponse,
  PaginatedResponse,
  PromiseOrObservable,
  RecordType,
} from "./types"

/**
 * Represents an error that occurred during data fetching
 */
export interface DataError {
  message: string
  cause?: unknown
}

/**
 * Response structure for non-paginated data
 */
type SimpleResult<T> = T[]

/**
 * Hook options for useData
 */
interface UseDataOptions<Filters extends FiltersDefinition> {
  filters?: Partial<FiltersState<Filters>>
  onError?: (error: DataError) => void
}

/**
 * Hook return type for useData
 */
interface UseDataReturn<Record> {
  data: Array<Record>
  isInitialLoading: boolean
  isLoading: boolean
  isLoadingMore: boolean
  error: DataError | null
  paginationInfo: PaginatedResponse<Record> | null

  // For page-based pagination:
  setPage: (page: number) => void

  // For infinite-scroll pagination:
  loadMore: () => void

  totalItems: number | undefined
}

type DataType<T> = PromiseState<T>

/**
 * Custom hook for handling data fetching state
 */
function useDataFetchState<Record>() {
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [data, setData] = useState<Array<Record>>([])
  const [error, setError] = useState<DataError | null>(null)

  return {
    isInitialLoading,
    setIsInitialLoading,
    data,
    setData,
    error,
    setError,
  }
}

/**
 * Custom hook for handling pagination state
 */
function usePaginationState<Record>() {
  const [paginationInfo, setPaginationInfo] =
    useState<PaginatedResponse<Record> | null>(null)
  return { paginationInfo, setPaginationInfo }
}

/**
 * A core React hook that manages data fetching, state management, and pagination within the Collections ecosystem.
 *
 * ## Why a Separate Hook?
 *
 * `useData` exists as a separate hook for three main reasons:
 *
 * - **Visualization-Specific Needs**: Different visualizations have unique data requirements:
 *   - Card visualizations need grid-aligned pagination (multiples of grid columns)
 *   - Table visualizations work best with row-optimized data fetching
 *   - Custom visualizations may need specialized data transformations
 *
 * - **Separation of Concerns**: Maintains clear boundaries between:
 *   - Data source configuration (managed by `useDataSource`)
 *   - Data fetching & state management (handled by `useData`)
 *   - UI presentation (implemented by visualization components)
 *
 * - **Extensibility**: New visualization types can be added without modifying core data logic,
 *   as each visualization directly controls how it consumes data
 *
 * ## Core Features
 *
 * - Handles multiple data source types seamlessly (synchronous, Promise-based, Observable-based)
 * - Manages pagination state with automatic page handling
 * - Provides consistent loading states (`isInitialLoading`, `isLoading`)
 * - Implements standardized error handling with detailed error information
 * - Performs automatic cleanup of subscriptions to prevent memory leaks
 * - Supports filter application with proper filter state management
 *
 * ## Usage in Visualizations
 *
 * Each visualization component calls `useData` directly to maintain control over its specific data needs:
 *
 * ```tsx
 * // Example: CardCollection customizing pagination before calling useData
 * function CardCollection({ source }) {
 *   // Override source to ensure grid-friendly pagination (multiples of 2,3,4)
 *   const adaptedSource = useMemo(() => ({
 *     ...source,
 *     dataAdapter: {
 *       ...source.dataAdapter,
 *       perPage: source.dataAdapter.perPage ?? 24,
 *     }
 *   }), [source]);
 *
 *   // Let useData handle the data fetching with our customized source
 *   const { data, isInitialLoading, paginationInfo, setPage } = useData(adaptedSource);
 *
 *   // Rendering logic follows...
 * }
 * ```
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 *
 * @param source - The data source object containing dataAdapter and filter state
 * @param options - Optional configuration including filter overrides
 *
 * @returns {UseDataReturn<Record>} An object containing:
 * - data: The current collection records
 * - isInitialLoading: Whether this is the first data load
 * - isLoading: Whether any data fetch is in progress
 * - error: Any error that occurred during data fetching
 * - paginationInfo: Pagination state and metadata if available
 * - setPage: Function to navigate to a specific page
 */
export function useData<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
>(
  source: DataSource<
    Record,
    Filters,
    Sortings,
    ItemActionsDefinition<Record>,
    NavigationFilters
  >,
  { filters, onError }: UseDataOptions<Filters> = {}
): UseDataReturn<Record> {
  const {
    dataAdapter,
    currentFilters,
    currentSortings,
    search,
    currentSearch,
    isLoading,
    setIsLoading,
    currentNavigationFilters,
  } = source
  const cleanup = useRef<(() => void) | undefined>()

  const {
    isInitialLoading,
    setIsInitialLoading,
    data,
    setData,
    error,
    setError,
  } = useDataFetchState<Record>()

  const { paginationInfo, setPaginationInfo } = usePaginationState<Record>()

  const [totalItems, setTotalItems] = useState<number | undefined>(undefined)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const isLoadingMoreRef = useRef(false)

  const mergedFilters = useMemo(
    () => ({ ...currentFilters, ...filters }),
    [currentFilters, filters]
  )

  const deferredSearch = useDeferredValue(currentSearch)

  const searchValue = !search?.enabled
    ? undefined
    : search?.sync
      ? currentSearch
      : deferredSearch

  const handleFetchSuccess = useCallback(
    (
      result: PaginatedResponse<Record> | SimpleResult<Record>,
      appendMode: boolean
    ) => {
      if ("records" in result) {
        if (appendMode) {
          // Append records for infinite scroll
          setData((prevData) => [...prevData, ...result.records])
        } else {
          // Replace data for normal pagination or initial load
          setData(result.records)
        }

        // Use a default value of "pages" when paginationType is undefined
        const paginationType = dataAdapter.paginationType || "pages"

        // Update pagination info based on the pagination type
        if (paginationType === "pages") {
          // For page-based pagination
          setPaginationInfo({
            records: result.records,
            type: "pages",
            total: result.total,
            // Safely access currentPage with a default value of 1
            currentPage: "currentPage" in result ? result.currentPage : 1,
            perPage: result.perPage,
            // Safely access pagesCount with a fallback calculation
            pagesCount:
              "pagesCount" in result
                ? result.pagesCount
                : Math.ceil(result.total / result.perPage),
          })
        } else if (paginationType === "infinite-scroll") {
          // For infinite scroll pagination
          setPaginationInfo({
            records: result.records,
            type: "infinite-scroll",
            total: result.total,
            perPage: result.perPage,
            cursor:
              "cursor" in result && result.cursor !== undefined
                ? result.cursor
                : appendMode
                  ? result.perPage
                  : 0,
            hasMore:
              "hasMore" in result
                ? result.hasMore
                : data.length + result.records.length < result.total,
          })
        }

        setTotalItems(result.total)
      } else {
        // For non-paginated results, always replace
        setData(result)
        setTotalItems?.(result.length)
      }

      // At the end:
      setError(null)
      setIsInitialLoading(false)
      setIsLoading(false)
      setIsLoadingMore(false)
      isLoadingMoreRef.current = false
    },
    [
      dataAdapter,
      setPaginationInfo,
      setData,
      setError,
      setIsInitialLoading,
      setIsLoading,
      setIsLoadingMore,
      setTotalItems,
      isLoadingMoreRef,
    ]
  )

  const handleFetchError = useCallback(
    (error: unknown) => {
      setError({
        message: "Error fetching data",
        cause: error,
      })
      onError?.({
        message: "Error fetching data",
        cause: error,
      })
      setIsInitialLoading(false)
      setIsLoading(false)
      // Clear the cleanup reference when an error occurs
      cleanup.current = undefined
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want to re-run this effect when the onError changes
    [setError, setIsInitialLoading, setIsLoading]
  )

  type ResultType = PaginatedResponse<Record> | SimpleResult<Record>

  const fetchDataAndUpdate = useCallback(
    async (
      filters: FiltersState<Filters>,
      currentPage = 1,
      navigationFilters: NavigationFiltersState<NavigationFilters>,
      appendMode = false
    ) => {
      try {
        // Clean up any existing subscription before creating a new one
        if (cleanup.current) {
          cleanup.current()
          cleanup.current = undefined
        }

        const baseFetchOptions: BaseFetchOptions<
          Filters,
          Sortings,
          NavigationFilters
        > = {
          filters,
          search: searchValue,
          sortings: currentSortings,
          navigationFilters,
        }

        const fetcher = (): PromiseOrObservable<ResultType> => {
          setTotalItems(undefined)

          // TODO: Default perPage value from somewhere
          const defaultPerPage = 20

          // Safely access perPage, defaulting to 20 if not available
          const perPageValue =
            "perPage" in dataAdapter && dataAdapter.perPage !== undefined
              ? dataAdapter.perPage
              : defaultPerPage

          // In useData.ts, in the fetchDataAndUpdate function
          return dataAdapter.paginationType === "pages"
            ? dataAdapter.fetchData({
                ...baseFetchOptions,
                pagination: { currentPage, perPage: perPageValue },
              })
            : dataAdapter.fetchData({
                ...baseFetchOptions,
                // Use the currentPage parameter as the cursor for infinite scroll
                pagination: { cursor: currentPage, perPage: perPageValue },
              })
        }

        const result = fetcher()

        // Handle synchronous data
        if (!("then" in result || "subscribe" in result)) {
          handleFetchSuccess(result, appendMode)
          return
        }

        // TODO: check this
        const observable: Observable<DataType<ResultType>> =
          "subscribe" in result ? result : promiseToObservable(result)

        const subscription = observable.subscribe({
          next: (state) => {
            if (state.loading) {
              setIsLoading(true)
            } else if (state.error) {
              handleFetchError(state.error)
            } else if (state.data) {
              handleFetchSuccess(state.data, appendMode)
            }
          },
          error: handleFetchError,
          complete: () => {
            cleanup.current = undefined
          },
        })

        cleanup.current = () => subscription.unsubscribe()
      } catch (error) {
        handleFetchError(error)
      }
    },
    [
      handleFetchError,
      dataAdapter,
      currentSortings,
      searchValue,
      handleFetchSuccess,
      setIsLoading,
    ]
  )

  const setPage = useCallback(
    (page: number) => {
      // Return early if not page-based pagination or trying to set the same page
      if (
        !isPageBasedPagination(paginationInfo) ||
        paginationInfo.currentPage === page
      ) {
        return
      }

      setIsLoading(true)
      fetchDataAndUpdate(mergedFilters, page, currentNavigationFilters)
    },
    [
      fetchDataAndUpdate,
      mergedFilters,
      setIsLoading,
      paginationInfo,
      currentNavigationFilters,
    ]
  )

  function isInfiniteScrollPagination<Record>(
    pagination: PaginatedResponse<Record> | null
  ): pagination is InfiniteScrollPaginatedResponse<Record> {
    return pagination !== null && pagination.type === "infinite-scroll"
  }

  const loadMore = useCallback(() => {
    if (!paginationInfo || isLoading) return

    if (!isInfiniteScrollPagination(paginationInfo)) {
      console.warn(
        "loadMore is only applicable for infinite-scroll pagination type"
      )
      return
    }

    if (paginationInfo.hasMore) {
      const currentCursor = paginationInfo.cursor ?? 0

      setIsLoadingMore(true)
      setIsLoading(true)
      isLoadingMoreRef.current = true

      fetchDataAndUpdate(
        mergedFilters,
        currentCursor,
        currentNavigationFilters,
        true
      )
    }
  }, [
    fetchDataAndUpdate,
    isLoading,
    mergedFilters,
    paginationInfo,
    currentNavigationFilters,
    setIsLoading,
    setIsLoadingMore,
  ])

  useEffect(() => {
    if (!isLoadingMoreRef.current) {
      setIsLoading(true)
      // Explicitly pass 0 as the initial position for infinite scroll
      const initialPosition =
        dataAdapter.paginationType === "infinite-scroll" ? 0 : 1
      fetchDataAndUpdate(
        mergedFilters,
        initialPosition,
        currentNavigationFilters
      )
    }

    return () => {
      cleanup.current?.()
    }
  }, [
    fetchDataAndUpdate,
    mergedFilters,
    setIsLoading,
    currentNavigationFilters,
  ])

  return {
    data,
    isInitialLoading,
    isLoading,
    isLoadingMore,
    error,
    paginationInfo,
    setPage,
    loadMore,
    totalItems,
  }
}

// TODO: move them to utils file???
// Type guard functions to check pagination types
function isPageBasedPagination<TRecord>(
  pagination: PaginatedResponse<TRecord> | null
): pagination is PageBasedPaginatedResponse<TRecord> {
  return pagination !== null && pagination.type === "pages"
}

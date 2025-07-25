import { getValueByPath } from "@/lib/objectPaths"
import { groupBy } from "lodash"
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { Observable } from "zen-observable-ts"
import type {
  FiltersDefinition,
  FiltersState,
} from "../../components/OneFilterPicker/types"
import {
  PromiseState,
  promiseToObservable,
} from "../../lib/promise-to-observable"
import { ItemActionsDefinition } from "./item-actions"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "./navigationFilters/types"
import { SortingsDefinition } from "./sortings"
import { SummariesDefinition } from "./summary"
import {
  BaseFetchOptions,
  DataSource,
  GroupingDefinition,
  InfiniteScrollPaginatedResponse,
  PageBasedPaginatedResponse,
  PaginatedResponse,
  PaginationInfo,
  PaginationType,
  PromiseOrObservable,
  RecordType,
  SortingsStateMultiple,
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
 * Symbol used to identify the groupId in the data
 */
export const GROUP_ID_SYMBOL = Symbol("groupId")
export type WithGroupId<RecordType> = RecordType & {
  [GROUP_ID_SYMBOL]: unknown | undefined
}

/**
 * Hook return type for useData
 */
interface UseDataReturn<R> {
  data: Data<R>
  isInitialLoading: boolean
  isLoading: boolean
  isLoadingMore: boolean
  error: DataError | null
  paginationInfo: PaginationInfo | null

  // For page-based pagination:
  setPage: (page: number) => void

  // For infinite-scroll pagination:
  loadMore: () => void
  totalItems: number | undefined
  summaries?: R // Add summaries to the return type
}

type DataType<T> = PromiseState<T>

export type GroupRecord<RecordType> = {
  key: string
  label: string | Promise<string>
  itemCount: number | undefined | Promise<number | undefined>
  records: RecordType[]
}

export type Data<RecordType> = {
  records: WithGroupId<RecordType>[]
} & (
  | {
      type: "grouped"
      groups: GroupRecord<WithGroupId<RecordType>>[]
    }
  | {
      type: "flat"
    }
)

/**
 * Custom hook for handling data fetching state
 */
function useDataFetchState<Record>() {
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [data, setData] = useState<Record[]>([])
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
function usePaginationState() {
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo | null>(
    null
  )
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
 * @template R - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 *
 * @param source - The data source object containing dataAdapter and filter state
 * @param options - Optional configuration including filter overrides
 *
 * @returns {UseDataReturn<R>} An object containing:
 * - data: The current collection records
 * - isInitialLoading: Whether this is the first data load
 * - isLoading: Whether any data fetch is in progress
 * - error: Any error that occurred during data fetching
 * - paginationInfo: Pagination state and metadata if available
 * - setPage: Function to navigate to a specific page
 */
export function useData<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  source: DataSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActionsDefinition<R>,
    NavigationFilters,
    Grouping
  >,
  { filters, onError }: UseDataOptions<Filters> = {}
): UseDataReturn<R> {
  const {
    dataAdapter,
    currentFilters,
    currentSortings,
    search,
    currentSearch,
    isLoading,
    setIsLoading,
    currentNavigationFilters,
    currentGrouping,
    grouping,
    idProvider = (item, index): string | number =>
      "id" in item ? `${item.id}` : index || JSON.stringify(item),
  } = source
  const cleanup = useRef<(() => void) | undefined>()

  const {
    isInitialLoading,
    setIsInitialLoading,
    data: rawData,
    setData: setRawData,
    error,
    setError,
  } = useDataFetchState<R>()

  const { paginationInfo, setPaginationInfo } = usePaginationState()

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

  const [summariesData, setSummariesData] = useState<R | undefined>(undefined)

  /**
   * Merges 2 arrays of items using the idProvider to update the existing items
   * and add the new items
   */
  const mergeItems = (
    prevData: R[],
    newData: R[],
    idProvider: (item: R, index?: number) => string | number | symbol
  ): R[] => {
    {
      // The Map order is guaranteed to be the same as the order of the items in the array. Check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps
      const idMap = new Map(
        prevData.map((item, index) => [idProvider(item, index), item])
      )

      for (const [index, record] of newData.entries()) {
        const id = idProvider(record, index)
        idMap.set(id, record)
      }

      return Array.from(idMap.values())
    }
  }

  const handleFetchSuccess = useCallback(
    (result: PaginatedResponse<R> | SimpleResult<R>, appendMode: boolean) => {
      // Extract summaries data if available
      const extractedSummaries =
        "summaries" in result ? result.summaries : undefined
      setSummariesData(extractedSummaries)
      let records: R[] = []
      if ("records" in result) {
        records = result.records
        // Use a default value of "pages" when paginationType is undefined
        const paginationType: PaginationType | undefined =
          dataAdapter.paginationType

        // Update pagination info based on the pagination type
        if (
          paginationType &&
          ["pages", "infinite-scroll"].includes(paginationType)
        ) {
          // For page-based pagination
          setPaginationInfo({
            total: result.total,
            perPage: result.perPage,
            type: paginationType,
            // Pages pagination
            ...(paginationType === "pages" && {
              currentPage: "currentPage" in result ? result.currentPage : 1,
              pagesCount:
                "pagesCount" in result
                  ? result.pagesCount
                  : Math.ceil(result.total / result.perPage),
            }),
            // Infinite scroll pagination
            ...(paginationType === "infinite-scroll" && {
              cursor:
                "cursor" in result && result.cursor !== undefined
                  ? result.cursor
                  : appendMode
                    ? String(result.perPage)
                    : "0",
              hasMore:
                "hasMore" in result
                  ? result.hasMore
                  : rawData.length + result.records.length < result.total,
            }),
          })
          setTotalItems(result.total)
        }
      } else {
        // For non-paginated results, always replace
        records = result
        setTotalItems?.(result.length)
      }

      setRawData(
        appendMode
          ? (prevData) => mergeItems(prevData, records, idProvider)
          : records
      )
      setError(null)
      setIsInitialLoading(false)
      setIsLoading(false)
      setIsLoadingMore(false)
      isLoadingMoreRef.current = false
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want to re-run this callback when data.length changes
    [
      setRawData,
      dataAdapter,
      setPaginationInfo,
      setError,
      setIsInitialLoading,
      setIsLoading,
      setIsLoadingMore,
      setTotalItems,
      setSummariesData,
      isLoadingMoreRef,
    ]
  )

  const data = useMemo(() => {
    // Add the groupId to the data if grouping is enabled
    const data: WithGroupId<R>[] = rawData.map((record) => ({
      ...record,
      [GROUP_ID_SYMBOL]:
        (currentGrouping?.field &&
          getValueByPath(record, currentGrouping.field as string)) ||
        undefined,
    }))

    /**
     * Grouped data
     */
    if (
      currentGrouping &&
      currentGrouping.field &&
      grouping &&
      (grouping.groupBy as Record<string, unknown>)[
        currentGrouping.field as string
      ]
    ) {
      const groupedData = groupBy(data, GROUP_ID_SYMBOL)
      const fieldName = currentGrouping.field as string
      const groupConfig = (grouping.groupBy as Record<string, unknown>)[
        fieldName
      ] as {
        label: (
          groupId: unknown,
          filters: FiltersState<FiltersDefinition>
        ) => string | Promise<string>
        itemCount?: (
          groupId: unknown,
          filters: FiltersState<FiltersDefinition>
        ) => number | undefined | Promise<number | undefined>
      }

      return {
        type: "grouped" as const,
        records: data,
        groups: Object.entries(groupedData).map(([key, value]) => ({
          key,
          label: groupConfig.label(key as unknown, mergedFilters),
          itemCount: groupConfig.itemCount?.(key as unknown, mergedFilters),
          records: value,
        })),
      }
    }

    /**
     * Flat data
     */
    return { type: "flat" as const, records: data }
  }, [rawData, currentGrouping, grouping, mergedFilters])

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

  type ResultType = PaginatedResponse<R> | SimpleResult<R>

  // Define a type for the fetch parameters to make the function more maintainable
  type FetchDataParams<
    Filters extends FiltersDefinition,
    NavigationFilters extends NavigationFiltersDefinition,
  > = {
    filters: FiltersState<Filters>
    currentPage?: number
    navigationFilters: NavigationFiltersState<NavigationFilters>
    appendMode?: boolean
    cursor?: string | null
  }

  const fetchDataAndUpdate = useCallback(
    async ({
      filters,
      currentPage = 1,
      navigationFilters,
      appendMode = false,
      cursor = null,
    }: FetchDataParams<Filters, NavigationFilters>) => {
      try {
        // Clean up any existing subscription before creating a new one
        if (cleanup.current) {
          cleanup.current()
          cleanup.current = undefined
        }

        const sortings: SortingsStateMultiple = [
          ...(currentSortings
            ? [
                {
                  field: currentSortings.field as string,
                  order: currentSortings.order,
                },
              ]
            : []),
          ...(currentGrouping
            ? [
                {
                  field: currentGrouping.field as string,
                  order: currentGrouping.order,
                },
              ]
            : []),
        ]

        const baseFetchOptions: BaseFetchOptions<Filters, NavigationFilters> = {
          filters,
          search: searchValue,
          sortings,
          navigationFilters,
        }

        function fetcher(): PromiseOrObservable<ResultType> {
          setTotalItems(undefined)

          // TODO: Default perPage value from somewhere
          const defaultPerPage = 20

          // Safely access perPage, defaulting to 20 if not available
          const perPageValue =
            "perPage" in dataAdapter && dataAdapter.perPage !== undefined
              ? dataAdapter.perPage
              : defaultPerPage

          // Use appropriate pagination type based on dataAdapter configuration
          if (dataAdapter.paginationType === "pages") {
            return dataAdapter.fetchData({
              ...baseFetchOptions,
              pagination: { currentPage, perPage: perPageValue },
            })
          } else if (dataAdapter.paginationType === "infinite-scroll") {
            // For infinite scroll, use the cursor parameter directly
            return dataAdapter.fetchData({
              ...baseFetchOptions,
              pagination: { cursor, perPage: perPageValue },
            })
          } else {
            return dataAdapter.fetchData({
              ...baseFetchOptions,
              pagination: {},
            }) as PromiseOrObservable<ResultType>
          }
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
      currentGrouping,
      searchValue,
      handleFetchSuccess,
      setIsLoading,
    ]
  )

  // In setPage function
  const setPage = useCallback(
    (page: number) => {
      // Return early if not page-based pagination or trying to set the same page
      if (!isPageBasedPagination(paginationInfo)) {
        return
      }

      setIsLoading(true)
      // Use named parameters with currentPage
      fetchDataAndUpdate({
        filters: mergedFilters,
        currentPage: page,
        navigationFilters: currentNavigationFilters,
      })
    },
    [
      fetchDataAndUpdate,
      mergedFilters,
      setIsLoading,
      paginationInfo,
      currentNavigationFilters,
    ]
  )

  // In loadMore function
  const loadMore = useCallback(() => {
    if (!paginationInfo || isLoading) return

    if (!isInfiniteScrollPagination(paginationInfo)) {
      console.warn(
        "loadMore is only applicable for infinite-scroll pagination type"
      )
      return
    }

    if (paginationInfo.hasMore) {
      // Extract the cursor from paginationInfo
      const currentCursor = paginationInfo.cursor

      setIsLoadingMore(true)
      setIsLoading(true)
      isLoadingMoreRef.current = true

      // Use named parameters
      fetchDataAndUpdate({
        filters: mergedFilters,
        navigationFilters: currentNavigationFilters,
        appendMode: true,
        cursor: currentCursor,
      })
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
      fetchDataAndUpdate({
        filters: mergedFilters,
        currentPage: initialPosition,
        navigationFilters: currentNavigationFilters,
        cursor: dataAdapter.paginationType === "infinite-scroll" ? "0" : null, // Pass "0" as initial cursor
      })
    }
  }, [
    fetchDataAndUpdate,
    mergedFilters,
    setIsLoading,
    currentNavigationFilters,

    dataAdapter.paginationType,
  ])

  useEffect(() => {
    return () => {
      cleanup.current?.()
    }
  }, [])

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
    summaries: summariesData, // Add summaries to the return object
  }
}

// TODO: move them to utils file???
// Type guard functions to check pagination types
export function isPageBasedPagination<R extends RecordType>(
  pagination: PaginationInfo | null
): pagination is PageBasedPaginatedResponse<R> {
  return pagination !== null && pagination.type === "pages"
}

// Type guard function to check if the pagination is infinite scroll
export function isInfiniteScrollPagination<R extends RecordType>(
  pagination: PaginationInfo | null
): pagination is InfiniteScrollPaginatedResponse<R> {
  return pagination !== null && pagination.type === "infinite-scroll"
}

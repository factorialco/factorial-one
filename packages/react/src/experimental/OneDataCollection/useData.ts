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
  GroupingDefinition,
  PaginatedResponse,
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
}

/**
 * Pagination state and controls
 */
interface PaginationInfo {
  total: number
  currentPage: number
  perPage: number
  pagesCount: number
}

/**
 * Hook return type for useData
 */
interface UseDataReturn<Record> {
  data: Data<Record>
  isInitialLoading: boolean
  isLoading: boolean
  error: DataError | null
  paginationInfo: PaginationInfo | null
  setPage: (page: number) => void
  totalItems: number | undefined
}

type DataType<T> = PromiseState<T>

type GroupRecord<RecordType> = {
  key: string
  label: string | Promise<string>
  itemCount: number | undefined | Promise<number | undefined>
  records: RecordType[]
}

export type Data<RecordType> = {
  records: RecordType[]
} & (
  | {
      type: "grouped"
      groups: GroupRecord<RecordType>[]
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
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  source: DataSource<
    R,
    Filters,
    Sortings,
    ItemActionsDefinition<R>,
    NavigationFilters,
    Grouping
  >,
  { filters }: UseDataOptions<Filters> = {}
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
    (result: PaginatedResponse<R> | SimpleResult<R>) => {
      let records: R[] = []
      if ("records" in result) {
        records = result.records
        setPaginationInfo({
          total: result.total,
          currentPage: result.currentPage,
          perPage: result.perPage,
          pagesCount: result.pagesCount,
        })
        setTotalItems(result.total)
      } else {
        records = result
        setTotalItems?.(result.length)
      }

      setRawData(records)

      setError(null)
      setIsInitialLoading(false)
      setIsLoading(false)
    },
    [setRawData, setError, setPaginationInfo, setIsInitialLoading, setIsLoading]
  )

  const data = useMemo(() => {
    // Group the data if grouping is enabled
    if (
      currentGrouping &&
      currentGrouping.field &&
      grouping &&
      grouping.groupBy[currentGrouping.field as keyof R]
    ) {
      const groupedData = groupBy(rawData, currentGrouping.field as keyof R)

      return {
        type: "grouped" as const,
        records: rawData,
        groups: Object.entries(groupedData).map(([key, value]) => ({
          key,
          label: grouping.groupBy[currentGrouping.field as keyof R]!.label(
            key as R[keyof R],
            mergedFilters
          ),
          itemCount: grouping.groupBy[
            currentGrouping.field as keyof R
          ]?.itemCount?.(key as R[keyof R], mergedFilters),
          records: value,
        })),
      }
    }

    return { type: "flat" as const, records: rawData }
  }, [rawData, currentGrouping, grouping, mergedFilters])

  const handleFetchError = useCallback(
    (error: unknown) => {
      setError({
        message: "Error fetching data",
        cause: error,
      })
      setIsInitialLoading(false)
      setIsLoading(false)
      // Clear the cleanup reference when an error occurs
      cleanup.current = undefined
    },
    [setError, setIsInitialLoading, setIsLoading]
  )

  type ResultType = PaginatedResponse<R> | SimpleResult<R>

  const fetchDataAndUpdate = useCallback(
    async (
      filters: FiltersState<Filters>,
      currentPage = 1,
      navigationFilters: NavigationFiltersState<NavigationFilters>
    ) => {
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

        const fetcher = (): PromiseOrObservable<ResultType> => {
          setTotalItems(undefined)
          return dataAdapter.paginationType === "pages"
            ? dataAdapter.fetchData({
                ...baseFetchOptions,
                pagination: { currentPage, perPage: dataAdapter.perPage || 20 },
              })
            : dataAdapter.fetchData({
                ...baseFetchOptions,
              })
        }

        const result = fetcher()

        // Handle synchronous data
        if (!("then" in result || "subscribe" in result)) {
          handleFetchSuccess(result)
          return
        }

        const observable: Observable<DataType<ResultType>> =
          "subscribe" in result ? result : promiseToObservable(result)

        const subscription = observable.subscribe({
          next: (state) => {
            if (state.loading) {
              setIsLoading(true)
            } else if (state.error) {
              handleFetchError(state.error)
            } else if (state.data) {
              handleFetchSuccess(state.data)
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

  const setPage = useCallback(
    (page: number) => {
      // Return early if trying to set the same page
      if (paginationInfo?.currentPage === page) {
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

  useEffect(() => {
    setIsLoading(true)
    // Always fetch page 1 when filters change
    fetchDataAndUpdate(mergedFilters, 1, currentNavigationFilters)

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
    error,
    paginationInfo,
    setPage,
    totalItems,
  }
}

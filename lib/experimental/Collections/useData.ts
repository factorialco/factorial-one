import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Observable } from "zen-observable-ts"
import {
  PromiseState,
  promiseToObservable,
} from "../../lib/promise-to-observable"
import { ActionsDefinition } from "./actions"
import type { FiltersDefinition, FiltersState } from "./Filters/types"
import { SortingsDefinition } from "./sortings"
import {
  DataSource,
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
  data: Array<Record>
  isInitialLoading: boolean
  isLoading: boolean
  error: DataError | null
  paginationInfo: PaginationInfo | null
  setPage: (page: number) => void
}

type DataType<T> = PromiseState<T>

/**
 * Custom hook for handling data fetching state
 */
function useDataFetchState<Record>() {
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<Array<Record>>([])
  const [error, setError] = useState<DataError | null>(null)

  return {
    isInitialLoading,
    setIsInitialLoading,
    isLoading,
    setIsLoading,
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
>(
  source: DataSource<
    Record,
    Filters,
    SortingsDefinition,
    ActionsDefinition<Record>
  >,
  { filters }: UseDataOptions<Filters> = {}
): UseDataReturn<Record> {
  const { dataAdapter, currentFilters } = source
  const cleanup = useRef<(() => void) | undefined>()

  const {
    isInitialLoading,
    setIsInitialLoading,
    isLoading,
    setIsLoading,
    data,
    setData,
    error,
    setError,
  } = useDataFetchState<Record>()

  const { paginationInfo, setPaginationInfo } = usePaginationState()

  const mergedFilters = useMemo(
    () => ({ ...currentFilters, ...filters }),
    [currentFilters, filters]
  )

  const handleFetchSuccess = useCallback(
    (result: PaginatedResponse<Record> | SimpleResult<Record>) => {
      if ("records" in result) {
        setData(result.records)
        setPaginationInfo({
          total: result.total,
          currentPage: result.currentPage,
          perPage: result.perPage,
          pagesCount: result.pagesCount,
        })
      } else {
        setData(result)
      }
      setError(null)
      setIsInitialLoading(false)
      setIsLoading(false)
    },
    [setData, setError, setPaginationInfo, setIsInitialLoading, setIsLoading]
  )

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

  type ResultType = PaginatedResponse<Record> | SimpleResult<Record>

  const fetchDataAndUpdate = useCallback(
    async (filters: FiltersState<Filters>, currentPage = 1) => {
      try {
        // Clean up any existing subscription before creating a new one
        if (cleanup.current) {
          cleanup.current()
          cleanup.current = undefined
        }

        const fetcher = (): PromiseOrObservable<ResultType> =>
          dataAdapter.paginationType === "pages"
            ? dataAdapter.fetchData({
                filters,
                sortings: {},
                pagination: { currentPage, perPage: dataAdapter.perPage || 20 },
              })
            : dataAdapter.fetchData({ filters, sortings: {} })

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
    [dataAdapter, handleFetchSuccess, handleFetchError, setIsLoading]
  )

  const setPage = useCallback(
    (page: number) => {
      // Return early if trying to set the same page
      if (paginationInfo?.currentPage === page) {
        return
      }

      setIsLoading(true)
      fetchDataAndUpdate(mergedFilters, page)
    },
    [fetchDataAndUpdate, mergedFilters, setIsLoading, paginationInfo]
  )

  useEffect(() => {
    setIsLoading(true)
    // Always fetch page 1 when filters change
    fetchDataAndUpdate(mergedFilters, 1)

    return () => {
      cleanup.current?.()
    }
  }, [fetchDataAndUpdate, mergedFilters, setIsLoading])

  return {
    data,
    isInitialLoading,
    isLoading,
    error,
    paginationInfo,
    setPage,
  }
}

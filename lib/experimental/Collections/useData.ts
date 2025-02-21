import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Observable } from "zen-observable-ts"
import type { FiltersDefinition, FiltersState } from "./Filters/types"
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
interface SimpleResult<T> {
  records: T[]
}

/**
 * Hook options for useData
 */
interface UseDataOptions<Filters extends FiltersDefinition> {
  filters?: Partial<Filters>
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
 * A React hook that manages data fetching and state for a collection data source.
 * Handles both Promise-based and Observable-based data streams, providing a consistent
 * interface for data loading states and results.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 *
 * @param source - The data source object containing fetchData and filter state
 * @param options - Optional configuration options
 *
 * @returns An object containing data state and pagination controls
 *
 * @example
 * ```tsx
 * const MyComponent = ({ source }) => {
 *   const { data, isInitialLoading, error } = useData({ source })
 *
 *   if (isInitialLoading) return <Loading />
 *   if (error) return <Error message={error.message} />
 *   return <DataList items={data} />
 * }
 * ```
 */
export function useData<
  Record extends RecordType,
  Filters extends FiltersDefinition,
>(
  source: DataSource<Record, Filters>,
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
      setData(result.records)
      setError(null)

      if ("total" in result) {
        setPaginationInfo({
          total: result.total,
          currentPage: result.currentPage,
          perPage: result.perPage,
          pagesCount: result.pagesCount,
        })
      }

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
    },
    [setError, setIsInitialLoading, setIsLoading]
  )

  const fetchDataAndUpdate = useCallback(
    async (filters: FiltersState<Filters>, currentPage = 1) => {
      try {
        const fetcher = (): PromiseOrObservable<
          PaginatedResponse<Record> | SimpleResult<Record>
        > =>
          dataAdapter.paginationType === "pages"
            ? dataAdapter.fetchData({
                filters,
                pagination: { currentPage, perPage: dataAdapter.perPage || 20 },
              })
            : dataAdapter.fetchData({ filters })

        const result = fetcher()

        if (result instanceof Observable) {
          const subscription = result.subscribe({
            next: handleFetchSuccess,
            error: handleFetchError,
          })
          cleanup.current = () => subscription.unsubscribe()
        } else {
          const resolvedData = await result
          handleFetchSuccess(resolvedData)
        }
      } catch (error) {
        handleFetchError(error)
      }
    },
    [dataAdapter, handleFetchSuccess, handleFetchError]
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

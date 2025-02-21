import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Observable } from "zen-observable-ts"
import type { FiltersDefinition, FiltersState } from "./Filters/types"
import { DataSource, RecordType } from "./types"

type PaginationInfo = {
  total: number
  currentPage: number
  perPage: number
  pagesCount: number
}

type PaginatedResult<Record> = {
  records: Record[]
  total: number
  currentPage: number
  perPage: number
  pagesCount: number
}

type SimpleResult<Record> = {
  records: Record[]
}

type DataResult<Record> = PaginatedResult<Record> | SimpleResult<Record>

type DataError = {
  message: string
  cause?: unknown
}

function isPaginatedResult<Record>(
  result: DataResult<Record>
): result is PaginatedResult<Record> {
  return "total" in result
}

function usePaginationState() {
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo | null>(
    null
  )
  const [isPageLoading, setIsPageLoading] = useState(false)

  const updatePaginationInfo = useCallback((result: DataResult<unknown>) => {
    if (isPaginatedResult(result)) {
      setPaginationInfo({
        total: result.total,
        currentPage: result.currentPage,
        perPage: result.perPage,
        pagesCount: result.pagesCount,
      })
    }
  }, [])

  return {
    paginationInfo,
    isPageLoading,
    setIsPageLoading,
    updatePaginationInfo,
  }
}

function handleObservableData<Record>(
  observable: Observable<DataResult<Record>>,
  {
    setData,
    setIsLoading,
    setIsPageLoading,
    updatePaginationInfo,
    setError,
  }: {
    setData: (data: Record[]) => void
    setIsLoading: (loading: boolean) => void
    setIsPageLoading: (loading: boolean) => void
    updatePaginationInfo: (result: DataResult<Record>) => void
    setError: (error: DataError | null) => void
  }
) {
  return observable.subscribe({
    next: (newData) => {
      setData(newData.records)
      updatePaginationInfo(newData)
      setIsLoading(false)
      setIsPageLoading(false)
      setError(null)
    },
    error: (error) => {
      setError({
        message: "Error fetching data",
        cause: error,
      })
      setIsLoading(false)
      setIsPageLoading(false)
    },
  })
}

async function handlePromiseData<Record>(
  promise: Promise<DataResult<Record>>,
  {
    setData,
    setIsLoading,
    setIsPageLoading,
    updatePaginationInfo,
    setError,
  }: {
    setData: (data: Record[]) => void
    setIsLoading: (loading: boolean) => void
    setIsPageLoading: (loading: boolean) => void
    updatePaginationInfo: (result: DataResult<Record>) => void
    setError: (error: DataError | null) => void
  }
) {
  try {
    const resolvedData = await promise
    setData(resolvedData.records)
    updatePaginationInfo(resolvedData)
    setError(null)
  } catch (error) {
    setError({
      message: "Error fetching data",
      cause: error,
    })
  } finally {
    setIsLoading(false)
    setIsPageLoading(false)
  }
}

/**
 * A React hook that manages data fetching and state for a collection data source.
 * Handles both Promise-based and Observable-based data streams, providing a consistent
 * interface for data loading states and results.
 *
 * @template Record - The record type for the data
 * @template Filters - The filters type extending FiltersDefinition
 *
 * @param source - The data source object containing fetchData and filter state
 * @param options - Optional configuration object
 * @param options.filters - Additional filters to merge with source filters
 *
 * @returns An object containing:
 * - data: The current array of data items
 * - isLoading: A boolean indicating whether data is currently being fetched
 * - paginationInfo: Information about the current pagination state
 * - setPage: Function to change the current page
 * - isPageLoading: Boolean indicating if a page change is in progress
 * - error: Error object if the last request failed, null otherwise
 */
export function useData<
  Record extends RecordType,
  Filters extends FiltersDefinition,
>(
  source: DataSource<Record, Filters>,
  {
    filters,
  }: {
    filters?: Partial<FiltersState<Filters>>
  } = {}
) {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<Array<Record>>([])
  const [error, setError] = useState<DataError | null>(null)
  const { dataAdapter, currentFilters } = source
  const cleanup = useRef<(() => void) | undefined>()

  const {
    paginationInfo,
    isPageLoading,
    setIsPageLoading,
    updatePaginationInfo,
  } = usePaginationState()

  const mergedFilters = useMemo(
    () => ({ ...currentFilters, ...filters }),
    [currentFilters, filters]
  )

  const fetchDataAndUpdate = useCallback(
    async (filters: FiltersState<Filters>, currentPage = 1) => {
      const result =
        dataAdapter.paginationType === "pages"
          ? dataAdapter.fetchData({
              filters,
              pagination: { currentPage, perPage: dataAdapter.perPage },
            })
          : dataAdapter.fetchData({ filters })

      if (result instanceof Observable) {
        const subscription = handleObservableData(result, {
          setData,
          setIsLoading,
          setIsPageLoading,
          updatePaginationInfo,
          setError,
        })
        cleanup.current = () => subscription.unsubscribe()
      } else {
        await handlePromiseData(result, {
          setData,
          setIsLoading,
          setIsPageLoading,
          updatePaginationInfo,
          setError,
        })
      }
    },
    [dataAdapter, setIsPageLoading, updatePaginationInfo]
  )

  const setPage = useCallback(
    (page: number) => {
      setIsPageLoading(true)
      fetchDataAndUpdate(mergedFilters, page)
    },
    [fetchDataAndUpdate, mergedFilters, setIsPageLoading]
  )

  useEffect(() => {
    setIsLoading(true)
    fetchDataAndUpdate(mergedFilters)

    return () => {
      cleanup.current?.()
    }
  }, [fetchDataAndUpdate, mergedFilters])

  return {
    data,
    isLoading,
    paginationInfo,
    setPage,
    isPageLoading,
    error,
  }
}

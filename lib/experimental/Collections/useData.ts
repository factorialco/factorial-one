import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Observable } from "zen-observable-ts"
import type { FiltersDefinition, FiltersState } from "./Filters/types"
import { DataSource, PromiseOrObservable, RecordType } from "./types"

export type DataError = {
  message: string
  cause?: unknown
}

/**
 * A React hook that manages data fetching and state for a collection data source.
 * Handles both Promise-based and Observable-based data streams, providing a consistent
 * interface for data loading states and results.
 *
 * @template Schema - The schema type extending CollectionSchema
 * @template Filters - The filters type extending FiltersDefinition
 *
 * @param source - The data source object containing fetchData and filter state
 *
 * @returns An object containing:
 * - data: The current array of data items
 * - isInitialLoading: A boolean indicating whether data is currently being fetched
 * - error: Error information if the fetch failed
 * - isLoading: A boolean indicating if a fetch is in progress
 * - paginationInfo: Pagination details if enabled
 * - setPage: Function to change the current page
 *
 * @example
 * ```tsx
 * const MyComponent = ({ source }) => {
 *   const { data, isInitialLoading, error, isLoading, paginationInfo, setPage } = useData({ source })
 *
 *   if (isInitialLoading) return <Loading />
 *   return <DataList items={data} />
 * }
 * ```
 */
export function useData<
  Record extends RecordType,
  Filters extends FiltersDefinition,
>(
  source: DataSource<Record, Filters>,
  {
    filters,
  }: {
    filters?: Partial<Filters>
  } = {}
) {
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [data, setData] = useState<Array<Record>>([])
  const [error, setError] = useState<DataError | null>(null)
  const { dataAdapter, currentFilters } = source
  const [isLoading, setIsLoading] = useState(false)

  const mergedFilters = useMemo(() => {
    return { ...currentFilters, ...filters }
  }, [currentFilters, filters])

  const [paginationInfo, setPaginationInfo] = useState<{
    total: number
    currentPage: number
    perPage: number
    pagesCount: number
  } | null>(null)

  const cleanup = useRef<(() => void) | undefined>()

  const fetchDataAndUpdate = useCallback(
    async (filters: FiltersState<Filters>, currentPage = 1) => {
      try {
        type PaginatedResult = {
          records: Record[]
          total: number
          currentPage: number
          perPage: number
          pagesCount: number
        }
        type SimpleResult = { records: Record[] }

        const fetcher: () =>
          | PromiseOrObservable<PaginatedResult>
          | PromiseOrObservable<SimpleResult> =
          dataAdapter.paginationType === "pages"
            ? () =>
                dataAdapter.fetchData({
                  filters,
                  pagination: { currentPage, perPage: dataAdapter.perPage },
                })
            : () => dataAdapter.fetchData({ filters })

        const result = fetcher()

        if (result instanceof Observable) {
          const subscription = result.subscribe({
            next: (newData: PaginatedResult | SimpleResult) => {
              setData(newData.records)
              setError(null)

              if ("total" in newData) {
                setPaginationInfo({
                  total: newData.total,
                  currentPage: newData.currentPage,
                  perPage: newData.perPage,
                  pagesCount: newData.pagesCount,
                })
              }
              setIsInitialLoading(false)
              setIsLoading(false)
            },
            error: (error) => {
              setError({
                message: "Error fetching data",
                cause: error,
              })
              setIsInitialLoading(false)
              setIsLoading(false)
            },
          })
          cleanup.current = () => subscription.unsubscribe()
        } else {
          const resolvedData = await result
          setData(resolvedData.records)
          setError(null)

          if ("total" in resolvedData) {
            setPaginationInfo({
              total: resolvedData.total,
              currentPage: resolvedData.currentPage,
              perPage: resolvedData.perPage,
              pagesCount: resolvedData.pagesCount,
            })
          }
          setIsInitialLoading(false)
          setIsLoading(false)
        }
      } catch (error) {
        setError({
          message: "Error fetching data",
          cause: error,
        })
        setIsInitialLoading(false)
        setIsLoading(false)
      }
    },
    [dataAdapter]
  )

  const setPage = useCallback(
    (page: number) => {
      setIsLoading(true)
      fetchDataAndUpdate(mergedFilters, page)
    },
    [fetchDataAndUpdate, mergedFilters, setIsLoading]
  )

  useEffect(() => {
    setIsLoading(true)
    fetchDataAndUpdate({})

    return () => {
      cleanup.current?.()
    }
  }, [fetchDataAndUpdate, mergedFilters, setIsLoading])

  return {
    data,
    isInitialLoading,
    paginationInfo,
    setPage,
    isLoading,
    error,
  }
}

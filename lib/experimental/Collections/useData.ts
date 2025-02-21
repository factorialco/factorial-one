import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Observable } from "zen-observable-ts"
import type { FiltersDefinition, FiltersState } from "./Filters/types"
import { DataSource, PromiseOrObservable, RecordType } from "./types"

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
 * - isLoading: A boolean indicating whether data is currently being fetched
 *
 * @example
 * ```tsx
 * const MyComponent = ({ source }) => {
 *   const { data, isLoading } = useData({ source })
 *
 *   if (isLoading) return <Loading />
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
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<Array<Record>>([])
  const { dataAdapter, currentFilters } = source
  const [isPageLoading, setIsPageLoading] = useState(false)

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

              if ("total" in newData) {
                setPaginationInfo({
                  total: newData.total,
                  currentPage: newData.currentPage,
                  perPage: newData.perPage,
                  pagesCount: newData.pagesCount,
                })
              }
              setIsLoading(false)
            },
            error: (error) => {
              console.error("Error in observable:", error)
              setIsLoading(false)
              setIsPageLoading(false)
            },
          })
          cleanup.current = () => subscription.unsubscribe()
        } else {
          const resolvedData = await result
          setData(resolvedData.records)

          if ("total" in resolvedData) {
            setPaginationInfo({
              total: resolvedData.total,
              currentPage: resolvedData.currentPage,
              perPage: resolvedData.perPage,
              pagesCount: resolvedData.pagesCount,
            })
          }
          setIsLoading(false)
          setIsPageLoading(false)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
        setIsLoading(false)
        setIsPageLoading(false)
      }
    },
    [dataAdapter]
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
    fetchDataAndUpdate({})

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
  }
}

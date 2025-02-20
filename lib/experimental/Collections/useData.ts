import { useEffect, useState } from "react"
import { Observable } from "zen-observable-ts"
import type { FiltersDefinition } from "./Filters/types"
import { DataSource, RecordType } from "./types"

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
  T extends RecordType,
  Filters extends FiltersDefinition,
>(
  source: DataSource<T, Filters>,
  {
    filters,
  }: {
    filters?: Partial<Filters>
  } = {}
) {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<Array<T>>([])

  const {
    dataAdapter: { fetchData },
    currentFilters,
  } = source

  useEffect(() => {
    let isMounted = true
    let cleanup: (() => void) | undefined
    setIsLoading(true)

    const fetchDataAndUpdate = async () => {
      try {
        const result = fetchData({ filters: { ...currentFilters, ...filters } })

        if (result instanceof Observable) {
          const subscription = result.subscribe({
            next: (newData) => {
              if (isMounted) {
                setData(newData.records)
                setIsLoading(false)
              }
            },
            error: (error) => {
              console.error("Error in observable:", error)
              if (isMounted) {
                setIsLoading(false)
              }
            },
          })
          cleanup = () => subscription.unsubscribe()
        } else {
          const resolvedData = await result
          if (isMounted) {
            setData(resolvedData.records)
            setIsLoading(false)
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error)
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchDataAndUpdate()

    return () => {
      isMounted = false
      cleanup?.()
    }
  }, [fetchData, currentFilters, filters])

  return {
    data,
    isLoading,
  }
}

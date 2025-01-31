import { useEffect, useState } from "react"
import { Observable } from "zen-observable-ts"
import type { FiltersDefinition } from "./Filters/types"
import { CollectionSchema, DataSource, SourceData } from "./types"

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
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
>({ source }: { source: DataSource<Schema, Filters> }) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<Array<SourceData<Schema, Filters>>>([])

  useEffect(() => {
    let cleanup: (() => void) | undefined
    ;(async () => {
      setIsLoading(true)
      const result = source.fetchData({ filters: source.currentFilters })

      if (result instanceof Observable) {
        const subscription = result.subscribe((data) => {
          setData(data)
          setIsLoading(false)
        })
        cleanup = () => subscription.unsubscribe()
      } else {
        setData(await result)
        setIsLoading(false)
      }
    })()

    return () => {
      cleanup?.()
    }
  }, [source.currentFilters, source.fetchData])

  return {
    data,
    isLoading,
  }
}

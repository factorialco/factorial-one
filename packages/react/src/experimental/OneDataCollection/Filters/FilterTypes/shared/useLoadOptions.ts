import { useCallback, useEffect, useState } from "react"
import { FilterTypeSchema } from "../types"

export type FilterOptionItem<T = unknown> = {
  /** The value used for filtering */
  value: T
  /** Human-readable label for the option */
  label: string
}

export type FilterOptions<T> = {
  cache?: boolean
  options:
    | Array<FilterOptionItem<T>>
    | (() => Array<FilterOptionItem<T>> | Promise<Array<FilterOptionItem<T>>>)
}

const optionsCache = new Map<string, FilterOptionItem<unknown>[]>()

export function getCacheKey<T>(
  schema: FilterTypeSchema<FilterOptions<T>>
): string {
  return JSON.stringify(schema)
}

export async function loadOptions<T>(
  cacheKey: string,
  optionsDef:
    | FilterOptionItem<T>[]
    | Promise<FilterOptionItem<T>[]>
    | (() => Promise<FilterOptionItem<T>[]> | FilterOptionItem<T>[]),
  cache: boolean = false
): Promise<FilterOptionItem<T>[]> {
  if (cache && optionsCache.has(cacheKey)) {
    return optionsCache.get(cacheKey) as FilterOptionItem<T>[]
  }

  const optionsProvider =
    typeof optionsDef === "function" ? optionsDef : () => optionsDef

  const options = await optionsProvider()

  optionsCache.set(cacheKey, options)

  return options
}

export function useLoadOptions<T>(schema: FilterTypeSchema<FilterOptions<T>>) {
  const cacheKey = getCacheKey(schema)

  // Only use state for async options
  const [options, setOptions] = useState<FilterOptionItem<T>[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const materializeOptions = useCallback(
    async (clearCache = false) => {
      if (clearCache) {
        optionsCache.delete(cacheKey)
      }
      try {
        setIsLoading(true)
        setError(null)
        const result = await loadOptions(
          cacheKey,
          schema.options.options,
          schema.options.cache
        )
        setOptions(result)
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to load options")
        )
      } finally {
        setIsLoading(false)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we are checking the schema values
    [JSON.stringify(schema), cacheKey]
  )

  useEffect(() => {
    materializeOptions()
  }, [materializeOptions])

  return {
    options,
    isLoading,
    error,
    setOptions,
    loadOptions: materializeOptions,
  }
}

import { useCallback, useEffect, useState } from "react"
import { InFilterDefinition } from "."
import { FilterTypeSchema } from "../types"
import { InFilterOptionItem, InFilterOptions } from "./types"

const optionsCache = new Map<string, InFilterOptionItem<unknown>[]>()

export function getCacheKey<T>(
  schema: FilterTypeSchema<InFilterOptions<T>>
): string {
  return JSON.stringify(schema)
}

export async function loadOptions<T>(
  cacheKey: string,
  optionsDef:
    | InFilterOptionItem<T>[]
    | Promise<InFilterOptionItem<T>[]>
    | (() => Promise<InFilterOptionItem<T>[]> | InFilterOptionItem<T>[]),
  cache: boolean = false
): Promise<InFilterOptionItem<T>[]> {
  if (cache && optionsCache.has(cacheKey)) {
    return optionsCache.get(cacheKey) as InFilterOptionItem<T>[]
  }

  const optionsProvider =
    typeof optionsDef === "function" ? optionsDef : () => optionsDef

  const options = await optionsProvider()

  optionsCache.set(cacheKey, options)

  return options
}

export function useLoadOptions<T>(schema: InFilterDefinition<T>) {
  const cacheKey = getCacheKey(schema)

  // Only use state for async options
  const [options, setOptions] = useState<InFilterOptionItem<T>[]>([])
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
    [schema, cacheKey]
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

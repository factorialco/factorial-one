import { useCallback, useEffect, useState } from "react"
import { EqFilterDefinition } from "."
import { FilterTypeSchema } from "../types"
import { EqFilterOptionItem, EqFilterOptions } from "./types"

const optionsCache = new Map<string, EqFilterOptionItem<unknown>[]>()

export function getCacheKey<T>(
  schema: FilterTypeSchema<EqFilterOptions<T>>
): string {
  return JSON.stringify(schema)
}

export async function loadOptions<T>(
  cacheKey: string,
  optionsDef:
    | EqFilterOptionItem<T>[]
    | Promise<EqFilterOptionItem<T>[]>
    | (() => Promise<EqFilterOptionItem<T>[]> | EqFilterOptionItem<T>[]),
  cache: boolean = false
): Promise<EqFilterOptionItem<T>[]> {
  if (cache && optionsCache.has(cacheKey)) {
    return optionsCache.get(cacheKey) as EqFilterOptionItem<T>[]
  }

  const optionsProvider =
    typeof optionsDef === "function" ? optionsDef : () => optionsDef

  const options = await optionsProvider()

  optionsCache.set(cacheKey, options)

  return options
}

export function useLoadOptions<T>(schema: EqFilterDefinition<T>) {
  const cacheKey = getCacheKey(schema)

  // Only use state for async options
  const [options, setOptions] = useState<EqFilterOptionItem<T>[]>([])
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

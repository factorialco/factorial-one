import { useCallback, useEffect, useState } from "react"
import { FilterOption } from "./types"

const optionsCache = new Map<string, FilterOption<unknown>[]>()

export async function loadOptions<T>(
  optionsDef:
    | FilterOption<T>[]
    | Promise<FilterOption<T>[]>
    | (() => Promise<FilterOption<T>[]> | FilterOption<T>[])
): Promise<FilterOption<T>[]> {
  const cacheKey = JSON.stringify(optionsDef)

  if (optionsCache.has(cacheKey)) {
    return optionsCache.get(cacheKey) as FilterOption<T>[]
  }

  const optionsProvider =
    typeof optionsDef === "function" ? optionsDef : () => optionsDef

  const options = await optionsProvider()

  optionsCache.set(cacheKey, options)

  return options
}

export function useLoadOptions<T>(
  optionsDef:
    | FilterOption<T>[]
    | Promise<FilterOption<T>[]>
    | (() => Promise<FilterOption<T>[]> | FilterOption<T>[])
) {
  const cacheKey = JSON.stringify(optionsDef)

  // Only use state for async options
  const [options, setOptions] = useState<FilterOption<T>[]>([])
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
        const result = await loadOptions(optionsDef)
        setOptions(result)
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to load options")
        )
      } finally {
        setIsLoading(false)
      }
    },
    [optionsDef, cacheKey]
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

import { useCallback, useEffect, useState } from "react"
import { FilterItem } from "./types"

const optionsCache = new Map<string, FilterItem<unknown>[]>()

export async function loadOptions<T>(
  optionsDef:
    | FilterItem<T>[]
    | Promise<FilterItem<T>[]>
    | (() => Promise<FilterItem<T>[]> | FilterItem<T>[])
): Promise<FilterItem<T>[]> {
  const cacheKey = JSON.stringify(optionsDef)

  if (optionsCache.has(cacheKey)) {
    return optionsCache.get(cacheKey) as FilterItem<T>[]
  }

  const optionsProvider =
    typeof optionsDef === "function" ? optionsDef : () => optionsDef

  const options = await optionsProvider()

  optionsCache.set(cacheKey, options)

  return options
}

export function useLoadOptions<T>(
  optionsDef:
    | FilterItem<T>[]
    | Promise<FilterItem<T>[]>
    | (() => Promise<FilterItem<T>[]> | FilterItem<T>[])
) {
  const cacheKey = JSON.stringify(optionsDef)

  // Only use state for async options
  const [options, setOptions] = useState<FilterItem<T>[]>([])
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

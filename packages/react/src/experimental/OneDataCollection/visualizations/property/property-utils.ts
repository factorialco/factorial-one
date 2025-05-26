function extractValue<T>(
  args: T | Record<string, any> | undefined
): T | undefined {
  if (args === null || args === undefined) {
    return undefined
  }

  if (typeof args !== "object") {
    return args as T
  }

  const obj = args as Record<string, any>

  for (const key of ["text", "number", "date", "amount"]) {
    if (key in obj) {
      return obj[key]
    }
  }

  return args as T
}

function hasPlaceholder(args: unknown): boolean {
  if (args === null || args === undefined || typeof args !== "object") {
    return false
  }

  return (
    "placeholder" in (args as Record<string, unknown>) &&
    !!(args as Record<string, unknown>).placeholder
  )
}

export { extractValue, hasPlaceholder }

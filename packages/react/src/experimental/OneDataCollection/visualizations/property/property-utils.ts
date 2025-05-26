/**
 * Checks if a value object has a placeholder property
 */
export function hasPlaceholder(args: unknown): args is { placeholder: string } {
  return (
    typeof args === "object" &&
    args !== null &&
    "placeholder" in args &&
    typeof args.placeholder === "string"
  )
}

/**
 * Determines if we should show placeholder styling
 * This happens when:
 * 1. The args object has a placeholder property
 * 2. The value for the specified key is undefined
 */
export function isShowingPlaceholder(args: unknown, valueKey: string): boolean {
  if (!hasPlaceholder(args)) {
    return false
  }

  // If args is an object with the valueKey
  if (typeof args === "object" && args !== null && valueKey in args) {
    const value = (args as any)[valueKey]
    // Show placeholder styling if the value is undefined
    return value === undefined
  }

  // If args is just an object with a placeholder (no valueKey)
  return true
}

/**
 * Resolves the display value from a cell value object
 * Returns the actual value if present, the placeholder if defined, or undefined
 */
export function resolveValue<T>(
  args: unknown,
  valueKey: string
): T | string | undefined {
  // If args is a primitive value (not an object), return it directly
  if (args !== undefined && typeof args !== "object") {
    return args as any
  }

  // If args is null or not an object, return undefined
  if (!args || typeof args !== "object") {
    return undefined
  }

  // Get the value if the key exists in the object
  const valueExists = valueKey in args
  const value = valueExists ? (args as any)[valueKey] : undefined

  // Check if there's a placeholder
  const hasAPlaceholder = hasPlaceholder(args)
  const placeholder = hasAPlaceholder ? args.placeholder : undefined

  // Return logic with priority:
  // 1. Return value if it's not undefined
  // 2. Return placeholder if available
  // 3. Return undefined otherwise

  // If value is not undefined, return it
  if (value !== undefined) {
    return value
  }

  // If placeholder exists, return it (this will handle cases where text: undefined)
  if (placeholder !== undefined) {
    return placeholder
  }

  // Default case - return undefined
  return undefined
}

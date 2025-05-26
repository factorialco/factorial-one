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
 * Type for objects with a dynamic key
 */
interface DynamicArgObject {
  [arg: string]: unknown
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

  if (typeof args === "object" && args !== null && valueKey in args) {
    const value = (args as DynamicArgObject)[valueKey]
    return value === undefined
  }

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
  if (args !== undefined && typeof args !== "object") {
    return args as T
  }

  if (!args || typeof args !== "object") {
    return undefined
  }

  const valueExists = valueKey in args
  const value = valueExists ? (args as DynamicArgObject)[valueKey] : undefined

  const hasAPlaceholder = hasPlaceholder(args)
  const placeholder = hasAPlaceholder ? args.placeholder : undefined

  if (value !== undefined) {
    return value as T
  }

  if (placeholder !== undefined) {
    return placeholder
  }

  return undefined
}

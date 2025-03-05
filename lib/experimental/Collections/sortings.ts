export type SortingsDefinition = readonly string[]

export type SortingsState<Definition extends SortingsDefinition> = Array<{
  field: Definition[number]
  direction: "asc" | "desc"
}>

/**
 * Helper function to create typesafe sortings definition without requiring 'as const'
 *
 * @example
 * ```typescript
 * // Instead of:
 * sortings: ["name", "email"] as const
 *
 * // You can now use:
 * sortings: sortable("name", "email")
 * ```
 */
export function sortable<T extends string>(...fields: T[]): readonly T[] {
  return fields
}

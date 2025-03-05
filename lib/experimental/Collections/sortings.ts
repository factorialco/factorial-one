export type SortingsDefinition = Record<string, true>

export type SortingsState<Definition extends SortingsDefinition> = {
  field: keyof Definition
  direction: "asc" | "desc"
} | null

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
 *
 * // Or with the object approach:
 * sortings: { name: true, email: true } as const
 * ```
 */
export function sortable<T extends string>(...fields: T[]): readonly T[] {
  return fields
}

/**
 * Type helper to extract keys from a SortingsDefinition
 */
export type SortingKey<Definition extends SortingsDefinition> =
  Definition extends readonly string[] ? Definition[number] : keyof Definition

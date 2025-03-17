export type SortingsDefinition = Record<
  string,
  {
    label: string
  }
>

export type SortingsState<Definition extends SortingsDefinition> = {
  field: keyof Definition
  order: "asc" | "desc"
} | null

/**
 * Type helper to extract keys from a SortingsDefinition
 */
export type SortingKey<Definition extends SortingsDefinition> =
  Definition extends readonly string[] ? Definition[number] : keyof Definition

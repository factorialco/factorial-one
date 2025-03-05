export type SortingsDefinition = readonly string[]

export type SortingsState<Definition extends SortingsDefinition> = Array<{
  field: Definition[number]
  direction: "asc" | "desc"
}>

export type SortingsDefinition = Array<string>
export type SortingsState<Definition extends SortingsDefinition> = Record<
  Definition[number],
  "asc" | "desc"
>

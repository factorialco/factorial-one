import { GroupingDefinition, RecordType } from "./types"
export type SortingsDefinition = Record<
  string,
  {
    label: string
  }
>

export type SortOrder = "asc" | "desc"

export type SortingsState<Definition extends SortingsDefinition> = {
  field: keyof Definition
  order: SortOrder
} | null

export type SortingsStateMultiple<
  Record extends RecordType,
  Definition extends SortingsDefinition,
  Grouping extends GroupingDefinition<Record>,
> = {
  [K in keyof Definition]: SortOrder
} & {
  [K in keyof Grouping]: SortOrder
}
/**
 * Type helper to extract keys from a SortingsDefinition
 */
export type SortingKey<Definition extends SortingsDefinition> =
  Definition extends readonly string[] ? Definition[number] : keyof Definition

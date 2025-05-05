import dateFilter, { DateFilterDefinition } from "./DateFilter"
import inFilter, { InFilterDefinition } from "./InFilter"
import searchFilter, { SearchFilterDefinition } from "./SearchFilter"
import { FilterTypeDefinition } from "./types"

export const filterTypes = {
  in: inFilter,
  search: searchFilter,
  date: dateFilter,
} as const

/**
 * All the available filter types
 */
export type FilterDefinitionsByType = {
  in: InFilterDefinition<string>
  search: SearchFilterDefinition
  date: DateFilterDefinition
}

/**
 * Extracts the appropriate value type for a given filter:
 * - InFilter -> Array of selected values of type T
 * - SearchFilter -> Search string
 *
 * This type is used to ensure type safety when working with filter values.
 * @template T - The filter definition type
 */
export type FilterValue<T extends FilterDefinition> =
  T extends InFilterDefinition<infer U>
    ? U[]
    : T extends SearchFilterDefinition
      ? string
      : T extends DateFilterDefinition
        ? Date
        : never

/**
 * Base definition for all filter types.
 * Provides common properties that all filters must implement.
 */
export type BaseFilterDefinition<T extends FilterTypeKeys> = {
  /** Human-readable label for the filter */
  label: string
  /** The type of filter */
  type: T
}

/**
 * Union of all available filter types.
 * Used to define possible filter configurations in a collection.
 * @template T - Type of values for the InFilterDefinition
 */
export type FilterDefinition =
  FilterDefinitionsByType[keyof FilterDefinitionsByType]

// This type ensures each filter follows FilterTypeDefinition while preserving its specific type
type ValidateFilterType<T> = T extends {
  [K: string]: FilterTypeDefinition<unknown>
}
  ? T
  : never
export type FilterTypes = ValidateFilterType<typeof filterTypes>
export type FilterTypeKeys = keyof FilterTypes

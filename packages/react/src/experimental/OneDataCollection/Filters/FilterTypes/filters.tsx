import { DateRange } from "@/experimental/OneCalendar/types"
import dateFilter, { DateFilterDefinition } from "./DateFilter"
import eqFilter, { EqFilterDefinition } from "./EqFilter"
import inFilter, { InFilterDefinition } from "./InFilter"
import searchFilter, { SearchFilterDefinition } from "./SearchFilter"
import { FilterTypeDefinition } from "./types"

/**
 * All the available filter types
 */
export type FilterDefinitionsByType<T = unknown> = {
  in: InFilterDefinition<T>
  eq: EqFilterDefinition<T>
  search: SearchFilterDefinition
  date: DateFilterDefinition
}

export const filterTypes = {
  in: inFilter,
  eq: eqFilter,
  search: searchFilter,
  date: dateFilter,
} as const

/**
 * Extracts the appropriate value type for a given filter:
 * - InFilter -> Array of selected values of type T
 * - EqFilter -> Single selected value of type T or null
 * - SearchFilter -> Search string
 *
 * This type is used to ensure type safety when working with filter values.
 * @template T - The filter definition type
 */
export type FilterValue<T extends FilterDefinition> =
  T extends InFilterDefinition<infer U>
    ? U[]
    : T extends EqFilterDefinition<infer U>
      ? U | null
      : T extends SearchFilterDefinition
        ? string
        : T extends DateFilterDefinition
          ? DateRange | Date | undefined
          : never

/**
 * Base definition for all filter types.
 * Provides common properties that all filters must implement.
 */
export type BaseFilterDefinition<T extends FilterTypeKey> = {
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
export type FilterTypesValidated = ValidateFilterType<typeof filterTypes>
export type FilterTypes = typeof filterTypes
export type FilterTypeKey = keyof typeof filterTypes

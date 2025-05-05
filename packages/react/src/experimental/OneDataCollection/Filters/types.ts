import { FilterDefinition, FilterValue } from "./FilterTypes"
export type { FilterDefinition, FilterValue }

/**
 * Current state of all filters in a collection.
 * Maps filter keys to their current values.
 * This represents the active filter selections at any given time.
 * @template Definition - Record of filter definitions
 */
export type FiltersState<Definition extends Record<string, FilterDefinition>> =
  {
    [K in keyof Definition]?: FilterValue<Definition[K]>
  }

/**
 * Record of filter definitions for a collection.
 * Maps filter keys to their respective definitions.
 * Used to configure the available filters for a collection.
 * @template Keys - String literal type for filter keys
 */
export type FiltersDefinition<Keys extends string = string> = Record<
  Keys,
  FilterDefinition
>

/**
 * Configuration options for filters in a collection.
 * Defines the structure and behavior of available filters.
 * @template FilterKeys - String literal type for filter keys
 */
export type FilterOptions<FilterKeys extends string> = Record<
  FilterKeys,
  FilterDefinition
>

/**
 * Extracts the current filters type from filter options.
 * Creates a type mapping filter keys to their respective value types.
 * Used for type-safe access to filter values.
 * @template F - The filter options type
 */
export type CurrentFilters<F extends FilterOptions<string>> = F extends {
  fields: Record<infer K extends string, FilterDefinition>
}
  ? {
      [Key in K]?: FilterValue<F["fields"][Key]>
    }
  : Record<string, never>

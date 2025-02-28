/**
 * Base definition for all filter types.
 * Provides common properties that all filters must implement.
 */
export type BaseFilterDefinition = {
  /** Human-readable label for the filter */
  label: string
}

/**
 * Option type for InFilter
 * @template T - Type of value
 */
export type FilterOption<T = unknown> = {
  /** The value used for filtering */
  value: T
  /** Human-readable label for the option */
  label: string
}

/**
 * Multi-select filter that allows selecting from predefined options.
 * Used for filtering based on a set of discrete values.
 * @template T - Type of values that can be selected
 */
export type InFilterDefinition<T = unknown> = BaseFilterDefinition & {
  /** Identifies this as an "in" type filter */
  type: "in"
  /**
   * Available options for selection.
   * Can be either:
   * - An array of options
   * - A function that returns an array of options (sync or async)
   */
  options:
    | Array<FilterOption<T>>
    | (() => Array<FilterOption<T>> | Promise<Array<FilterOption<T>>>)
}

/**
 * Free-text search filter.
 * Used for performing text-based searches across specified fields.
 */
export type SearchFilterDefinition = BaseFilterDefinition & {
  /** Identifies this as a "search" type filter */
  type: "search"
}

/**
 * Union of all available filter types.
 * @template T - Type of values for the InFilterDefinition
 */
export type FilterDefinition<T = unknown> =
  | InFilterDefinition<T>
  | SearchFilterDefinition

/**
 * Extracts the appropriate value type for a given filter:
 * - InFilter -> Array of selected values of type T
 * - SearchFilter -> Search string
 * @template T - The filter definition type
 */
export type FilterValue<T extends FilterDefinition> =
  T extends InFilterDefinition<infer U>
    ? U[]
    : T extends SearchFilterDefinition
      ? string
      : never

/**
 * Current state of all filters in a collection.
 * Maps filter keys to their current values.
 * @template Definition - Record of filter definitions
 */
export type FiltersState<Definition extends Record<string, FilterDefinition>> =
  {
    [K in keyof Definition]?: FilterValue<Definition[K]>
  }

/**
 * Record of filter definitions for a collection.
 * Maps filter keys to their respective definitions.
 * @template Keys - String literal type for filter keys
 */
export type FiltersDefinition<Keys extends string = string> = Record<
  Keys,
  FilterDefinition
>

/**
 * Configuration options for filters.
 * @template FilterKeys - String literal type for filter keys
 */
export type FilterOptions<FilterKeys extends string> = Record<
  FilterKeys,
  FilterDefinition
>

/**
 * Extracts the current filters type from filter options.
 * Creates a type mapping filter keys to their respective value types.
 * @template F - The filter options type
 */
export type CurrentFilters<F extends FilterOptions<string>> = F extends {
  fields: Record<infer K extends string, FilterDefinition>
}
  ? {
      [Key in K]?: FilterValue<F["fields"][Key]>
    }
  : Record<string, never>

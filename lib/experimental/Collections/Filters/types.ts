/**
 * Base definition for all filter types.
 */
export type BaseFilterDefinition = {
  /** Human-readable label for the filter */
  label: string
}

/**
 * Multi-select filter that allows selecting from predefined options.
 * @template T - Type of values that can be selected
 */
export type InFilterDefinition<T = unknown> = BaseFilterDefinition & {
  type: "in"
  options: Array<{
    value: T
    label: string
  }>
}

/**
 * Free-text search filter.
 */
export type SearchFilterDefinition = BaseFilterDefinition & {
  /** Identifies this as a "search" type filter */
  type: "search"
}

/**
 * Union of all available filter types.
 */
export type FilterDefinition<T = unknown> =
  | InFilterDefinition<T>
  | SearchFilterDefinition

/**
 * Extracts the appropriate value type for a given filter:
 * - InFilter -> T[]
 * - SearchFilter -> string
 */
export type FilterValue<T extends FilterDefinition> =
  T extends InFilterDefinition<infer U>
    ? U[]
    : T extends SearchFilterDefinition
      ? string
      : never

/**
 * Current state of all filters in a collection.
 */
export type FiltersState<Definition extends Record<string, FilterDefinition>> =
  {
    [K in keyof Definition]?: FilterValue<Definition[K]>
  }

/**
 * Record of filter definitions for a collection.
 */
export type FiltersDefinition<Keys extends string = string> = Record<
  Keys,
  FilterDefinition
>

/**
 * Configuration options for filters, including optional default field.
 */
export type FilterOptions<FilterKeys extends string> = Record<
  FilterKeys,
  FilterDefinition
>

/**
 * Extracts the current filters type from filter options.
 */
export type CurrentFilters<F extends FilterOptions<string>> = F extends {
  fields: Record<infer K extends string, FilterDefinition>
}
  ? {
      [Key in K]?: FilterValue<F["fields"][Key]>
    }
  : Record<string, never>

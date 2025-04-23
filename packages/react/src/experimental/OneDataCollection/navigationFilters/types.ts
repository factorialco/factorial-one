import { DateNavigatorFilterDefinition } from "./filterTypes/DateNavigation/DateNavigation"

export type NavigationFilter<T> = {
  render: (props: NavigationFilterComponentProps<T>) => React.ReactNode
}

export type NavigationFilterDefinitionBase<T> = {
  type: string
  initialValue: T
}

export type NavigationFilterDefinition = DateNavigatorFilterDefinition

export type NavigationFilterComponentProps<T> = {
  filter: NavigationFilterDefinition
  value: T
  onChange: (value: T) => void
}

/**
 * Record of navigation filter definitions for a collection.
 * Maps filter keys to their respective definitions.
 * Used to configure the available navigation filters for a collection.
 * @template Keys - String literal type for filter keys
 */
export type NavigationFiltersDefinition<Keys extends string = string> = Record<
  Keys,
  NavigationFilterDefinition
>

/**
 * Represents a navigation filter with its current value.
 * @template T - The type of the filter value
 */
export type NavigationFilterValue<T> = T extends DateNavigatorFilterDefinition
  ? Date
  : T extends undefined
    ? undefined
    : never

/**
 * Current state of all navigation filters in a collection.
 * Maps filter keys to their current values.
 * This represents the active filter selections at any given time.
 * @template Definition - Record of filter definitions
 */
export type NavigationFiltersState<
  Definition extends Record<string, NavigationFilterDefinition>,
> = {
  [K in keyof Definition]?: NavigationFilterValue<Definition[K]>
}

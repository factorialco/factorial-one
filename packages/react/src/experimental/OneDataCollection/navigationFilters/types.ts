import { DateNavigatorFilterDefinition } from "./filrerTypes/DateNavigation/DateNavigation"

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
 * Represents a navigation filter with its current value.
 * @template T - The type of the filter value
 */
export type NavigationFilterValue<
  T extends NavigationFilterDefinition | undefined,
> = T extends DateNavigatorFilterDefinition
  ? Date
  : T extends undefined
    ? undefined
    : never

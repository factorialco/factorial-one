import { FilterTypeComponentProps } from "../types"

/**
 * Represents a selectable option in filter components.
 * Used primarily with InFilterDefinition.
 * @template T - Type of the underlying value
 */
export type InFilterOptionItem<T = unknown> = {
  /** The value used for filtering */
  value: T
  /** Human-readable label for the option */
  label: string
}

/**
 * Represents the options for the InFilter component.
 * @template T - Type of the underlying value
 */
export type InFilterOptions<T> = {
  cache?: boolean
  options:
    | Array<InFilterOptionItem<T>>
    | (() =>
        | Array<InFilterOptionItem<T>>
        | Promise<Array<InFilterOptionItem<T>>>)
}

/**
 * Represents the component props for the InFilter component.
 * @template T - Type of the underlying value
 */
export type InFilterComponentProps = FilterTypeComponentProps<
  string[],
  InFilterOptions<string>
>

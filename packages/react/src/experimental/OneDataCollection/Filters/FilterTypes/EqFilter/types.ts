import { FilterTypeComponentProps } from "../types"

/**
 * Represents a selectable option in filter components.
 * Used primarily with EqFilterDefinition.
 * @template T - Type of the underlying value
 */
export type EqFilterOptionItem<T = unknown> = {
  /** The value used for filtering */
  value: T
  /** Human-readable label for the option */
  label: string
}

/**
 * Represents the options for the EqFilter component.
 * @template T - Type of the underlying value
 */
export type EqFilterOptions<T> = {
  cache?: boolean
  options:
    | Array<EqFilterOptionItem<T>>
    | (() =>
        | Array<EqFilterOptionItem<T>>
        | Promise<Array<EqFilterOptionItem<T>>>)
}

/**
 * Represents the component props for the EqFilter component.
 * @template T - Type of the underlying value
 */
export type EqFilterComponentProps = FilterTypeComponentProps<
  string | null,
  EqFilterOptions<string>
>

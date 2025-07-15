import { FilterOptionItem, FilterOptions } from "../shared/useLoadOptions"
import { FilterTypeComponentProps } from "../types"

/**
 * Represents the options for the InFilter component.
 * @template T - Type of the underlying value
 */
export type InFilterOptions<T> = FilterOptions<T>

/**
 * Represents a selectable option in filter components.
 * Used primarily with InFilterDefinition.
 * @template T - Type of the underlying value
 */
export type InFilterOptionItem<T = unknown> = FilterOptionItem<T>

/**
 * Represents the component props for the InFilter component.
 * @template T - Type of the underlying value
 */
export type InFilterComponentProps = FilterTypeComponentProps<
  string[],
  InFilterOptions<string>
>

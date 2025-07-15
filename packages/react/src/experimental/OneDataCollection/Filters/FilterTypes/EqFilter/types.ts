import { FilterOptionItem, FilterOptions } from "../shared/useLoadOptions"
import { FilterTypeComponentProps } from "../types"

/**
 * Represents the options for the EqFilter component.
 * @template T - Type of the underlying value
 */
export type EqFilterOptions<T> = FilterOptions<T>

/**
 * Represents a selectable option in filter components.
 * Used primarily with EqFilterDefinition.
 * @template T - Type of the underlying value
 */
export type EqFilterOptionItem<T = unknown> = FilterOptionItem<T>

/**
 * Represents the component props for the EqFilter component.
 * @template T - Type of the underlying value
 */
export type EqFilterComponentProps = FilterTypeComponentProps<
  string | null,
  EqFilterOptions<string>
>

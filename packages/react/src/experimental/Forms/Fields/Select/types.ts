import type { IconType } from "@/components/Utilities/Icon"
import type { AvatarVariant } from "@/experimental/Information/Avatars/Avatar"
import {
  DataSourceDefinition,
  FiltersDefinition,
  GroupingDefinition,
  OnSelectItemsCallbackStatus,
  RecordType,
  SelectedItemsState,
  SortingsDefinition,
} from "@/hooks/datasource"
import { InputFieldProps } from "@/ui/InputField"
import { Action } from "./SelectBottomActions"

/**
 * Select component for choosing from a list of options.
 *
 * @template T - The type of the emitted  value
 * @template R - The type of the record/item data (used with data source)
 *
 */
export type SelectProps<T extends string, R extends RecordType = RecordType> = (
  | {
      multiple: true
      onChange: {
        (
          value: T[],
          originalItem?: R[],
          option?: SelectItemObject<T, R>[]
        ): void
        (state: OnSelectItemsCallbackStatus<R, FiltersDefinition>): void
      }
      onChangeSelectedOption?: (options: SelectItemObject<T, R>[]) => void
      value?: T[] | SelectedItemsState<T>
      defaultItem?: SelectItemObject<T, R>[]
    }
  | {
      multiple?: false | never
      onChange: (
        value: T,
        originalItem?: R,
        option?: SelectItemObject<T, R>
      ) => void
      onChangeSelectedOption?: (option: SelectItemObject<T, R>) => void
      value?: T
      defaultItem?: SelectItemObject<T, R>
    }
) & {
  children?: React.ReactNode
  open?: boolean
  showSearchBox?: boolean
  searchBoxPlaceholder?: string
  onSearchChange?: (value: string) => void
  searchValue?: string
  onOpenChange?: (open: boolean) => void
  searchEmptyMessage?: string
  className?: string
  selectContentClassName?: string
  actions?: Action[]
} & (
    | {
        source: DataSourceDefinition<
          R,
          FiltersDefinition,
          SortingsDefinition,
          GroupingDefinition<R>
        >
        mapOptions: (item: R) => SelectItemProps<T, R>
        options?: never
      }
    | {
        source?: never
        mapOptions?: never
        options: SelectItemProps<T, R>[]
      }
  ) &
  Pick<
    InputFieldProps<T>,
    | "loading"
    | "hideLabel"
    | "clearable"
    | "labelIcon"
    | "size"
    | "label"
    | "icon"
    | "placeholder"
    | "disabled"
    | "name"
    | "minWidth"
    | "maxWidth"
    | "error"
    | "hint"
    | "status"
  >

export type SelectItemObject<T, R = unknown> = {
  type?: "item"
  value: T
  label: string
  description?: string
  avatar?: AvatarVariant
  tag?: string
  icon?: IconType
  item?: R
}

export type SelectItemProps<T, R = unknown> =
  | SelectItemObject<T, R>
  | { type: "separator" }

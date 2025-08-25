import {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"
import { RecordType } from "./records.typings"

export type ItemId = string | number
export type GroupId = string | number

/**
 * Represents the selected items by id
 */
export type SelectedItemsState<
  T extends string = string,
  R extends RecordType = RecordType,
> = {
  allSelected?: boolean | "indeterminate"
  items?: ReadonlyArray<{ id: T; item?: R; checked: boolean }>
  groups?: ReadonlyArray<{ groupId: GroupId; checked: boolean }>
}

export type OnSelectItemsCallbackStatus<
  R extends RecordType,
  Filters extends FiltersDefinition,
> = {
  allSelected: boolean | "indeterminate"
  itemsStatus: ReadonlyArray<{ item: R; checked: boolean }>
  groupsStatus: Record<GroupId, boolean>
  filters: FiltersState<Filters>
  selectedCount: number
}

export type OnSelectItemsCallback<
  R extends RecordType,
  Filters extends FiltersDefinition,
> = (
  selectedItems: OnSelectItemsCallbackStatus<R, Filters>,
  clearSelectedItems: () => void
) => void

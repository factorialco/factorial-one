import {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"
import { GroupRecord, WithGroupId } from "../useData"
import { RecordType } from "./records.typings"

export type ItemId = string | number
export type GroupId = string | number

/**
 * Represents the state of an item in the selection
 */
export type ItemState<R extends RecordType> = {
  id: ItemId
  item: WithGroupId<R>
  groupId?: GroupId
  checked: boolean
}

/**
 * Represents the state of a group in the selection
 */
export type GroupState<R extends RecordType> = {
  id: GroupId
  group: GroupRecord<R>
  checked: boolean
}

/**
 * Represents the state of the selection
 */
export type SelectionState<R extends RecordType> = {
  all: boolean
  items: Map<ItemId, ItemState<R>>
  groups: Record<GroupId, GroupState<R>>
}

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

/**
 * Represents the status of the all selected checkbox
 */
export type AllSelectionStatus = {
  checked: boolean
  indeterminate: boolean
  selectedCount: number
  unselectedCount: number
}

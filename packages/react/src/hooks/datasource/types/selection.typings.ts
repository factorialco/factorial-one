import {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"
import { RecordType } from "./records.typings"

/**
 * Represents the selected items by id
 */
export type SelectedItemsState<T extends string = string> = {
  allSelected?: boolean | "indeterminate"
  items?: ReadonlyArray<{ id: T; checked: boolean }>
  groups?: ReadonlyArray<{ groupId: string; checked: boolean }>
}

export type OnSelectItemsCallbackStatus<
  R extends RecordType,
  Filters extends FiltersDefinition,
> = {
  allSelected: boolean | "indeterminate"
  itemsStatus: ReadonlyArray<{ item: R; checked: boolean }>
  groupsStatus: Record<string, boolean>
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

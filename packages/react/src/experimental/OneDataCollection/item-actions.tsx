import { DropdownItem } from "../exports"
import { RecordType } from "./types"

export type ItemActionsDefinition<T extends RecordType> = (
  item: T
) => Array<DropdownItem & { enabled?: boolean }> | undefined

/**
 * Filters the actions based on the enabled property
 * @param actions - The actions to filter
 * @param item - The item to filter the actions for
 * @returns An array of filtered actions
 */
export const filterItemActions = <T extends RecordType>(
  actions: ItemActionsDefinition<T>,
  item: T
) =>
  (actions(item) || []).filter(
    (action) => action.enabled === undefined || action.enabled
  )

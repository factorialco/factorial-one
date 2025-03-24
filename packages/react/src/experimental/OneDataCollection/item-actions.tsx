import { DropdownItem } from "../exports"
import { RecordType } from "./types"

/**
 * Filters the actions based on the enabled property
 * @param actions - The actions to filter
 * @returns An array of filtered actions
 */
export type ItemActionsDefinition<T extends RecordType> = (
  item: T
) => Array<DropdownItem & { enabled?: boolean }> | undefined

export const filterItemActions = <T extends RecordType>(
  actions: ItemActionsDefinition<T>,
  item: T
) =>
  (actions(item) || []).filter(
    (action) => action.enabled === undefined || action.enabled
  )

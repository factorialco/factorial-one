import { DropdownItem } from "../exports"

import { RecordType } from "./types"

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

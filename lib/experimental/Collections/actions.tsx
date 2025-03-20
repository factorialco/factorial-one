import { DropdownItem } from "../exports"
import { RecordType } from "./types"

export type ActionsDefinition<T extends RecordType> = (
  item: T
) => Array<DropdownItem & { enabled?: boolean }> | undefined

export const filterActions = <T extends RecordType>(
  actions: ActionsDefinition<T>,
  item: T
) =>
  (actions(item) || []).filter(
    (action) => action.enabled === undefined || action.enabled
  )

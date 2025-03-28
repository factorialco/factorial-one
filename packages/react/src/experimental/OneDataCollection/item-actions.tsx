import { DropdownItem } from "../exports"
import { RecordType } from "./types"

import { DropdownItemObject } from "../exports"

/**
 * Defines the structure and configuration of the primary action that can be performed on a collection.
 * @returns An action
 */
export type PrimaryActionsDefinition = () =>
  | Pick<DropdownItemObject, "onClick" | "label" | "icon">
  | undefined

/**
 * Defines the structure and configuration of secondary actions that can be performed on a collection.
 * @returns An array of actions
 */
export type SecondaryActionsDefinition = () =>
  | Array<DropdownItem & { enabled?: boolean }>
  | undefined

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

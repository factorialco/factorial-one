import { DropdownItem, DropdownItemObject } from "../exports"

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
export const filterActions = (actions: SecondaryActionsDefinition) =>
  (actions() || []).filter(
    (action) => action.enabled === undefined || action.enabled
  )
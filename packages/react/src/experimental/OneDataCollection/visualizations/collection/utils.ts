import { ActionDefinition } from "../../item-actions"

export const statusToChecked = <
  T extends { checked: boolean; indeterminate: boolean },
>(
  status: T | undefined
): boolean | "indeterminate" => {
  if (!status) {
    return false
  }

  return status.checked
    ? status.indeterminate
      ? "indeterminate"
      : true
    : false
}

/**
 * Converts the item actions definition to dropdown items
 * @param actions - The item actions definition to convert
 * @param item - The item to convert the actions for
 * @returns An array of dropdown items
 */
export const actionsToDropdownItems = (
  actions: ActionDefinition[] | undefined
) => {
  return (actions || []).map((action) => {
    return action.type === "separator"
      ? action
      : {
          ...action,
          type: "item" as const,
        }
  })
}

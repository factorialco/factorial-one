import { Button } from "@/components/Actions/Button"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import {
  ActionBarButton,
  ActionBarPrimaryButton,
  ActionBarSecondaryButton,
} from "./types.ts"

type SelectionActionBarProps = {
  primary: ActionBarPrimaryButton | ActionBarButton[]
  secondary?: ActionBarSecondaryButton[]
  selectedItems: (string | number)[] | "all"
  onSelect: (
    actionId: string,
    selectedItems: (string | number)[] | "all"
  ) => void
  onClickUnselect: () => void
}

export const SelectionActionBar = ({
  primary,
  secondary,
  ...props
}: SelectionActionBarProps) => {
  const handleAction = (action: ActionBarButton) => () => {
    props.onSelect(action.actionId, props.selectedItems)
  }

  const primaryIsDropdown = (
    primary: SelectionActionBarProps["primary"]
  ): primary is ActionBarButton[] => {
    return Array.isArray(primary)
  }

  return (
    <>
      {props.selectedItems === "all" ? "All items" : props.selectedItems.length}

      {/* Primary action */}
      {primaryIsDropdown(primary) ? (
        <Dropdown
          items={primary.map((item) => ({
            onClick: handleAction(item),
            icon: item.icon,
            label: item.label,
          }))}
        >
          [[[[The first item]]]]
        </Dropdown>
      ) : (
        <Button
          icon={primary.icon}
          label={primary.label}
          variant="default"
          onClick={handleAction(primary)}
        />
      )}

      {/* Secondary actions */}
      {secondary?.map((action) => (
        <Button
          key={action.actionId}
          icon={action.icon}
          label={action.label}
          variant={action.variant || "outline"}
          onClick={handleAction(action)}
          hideLabel={action.hideLabel}
        />
      ))}
    </>
  )
}

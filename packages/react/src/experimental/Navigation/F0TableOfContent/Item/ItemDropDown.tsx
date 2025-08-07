import { Button } from "@/components/exports"
import { Dropdown, DropdownItem } from "@/experimental/exports"
import { Ellipsis } from "@/icons/app"

interface ItemDropDownProps {
  otherActions: DropdownItem[]
  open: boolean
  setOpen: (open: boolean) => void
  disabled?: boolean
}

export function ItemDropDown({
  otherActions,
  open,
  setOpen,
  disabled,
}: ItemDropDownProps) {
  return (
    <Dropdown
      items={otherActions.map((action): DropdownItem => {
        if ("type" in action && action.type === "separator") {
          return action as DropdownItem
        }
        return {
          ...action,
          type: "item" as const,
        } as DropdownItem
      })}
      open={open}
      onOpenChange={setOpen}
    >
      <Button
        icon={Ellipsis}
        label="Actions"
        hideLabel
        round
        variant="ghost"
        pressed={open}
        size="sm"
        disabled={disabled}
      />
    </Dropdown>
  )
}

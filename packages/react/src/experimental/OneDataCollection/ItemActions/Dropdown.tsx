import { cn, focusRing } from "@/lib/utils"
import { useState } from "react"
import { Icon } from "../../../components/Utilities/Icon"
import { Ellipsis } from "../../../icons/app"
import { Dropdown } from "../../Navigation/Dropdown"
import { ItemActionsDefinition, filterItemActions } from "../item-actions"
import { RecordType } from "../types"

export const ActionsDropdown = <
  Record extends RecordType,
  ItemActions extends ItemActionsDefinition<Record>,
>({
  item,
  actions,
}: {
  item: Record
  actions: ItemActions
}) => {
  if (!actions || actions.length === 0) return null

  const items = filterItemActions(actions, item)

  if (items.length === 0) {
    return null
  }

  const [open, setOpen] = useState(false)

  return (
    <Dropdown items={items} open={open} onOpenChange={setOpen}>
      <button
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded text-f1-icon-bold hover:bg-f1-background-secondary",
          open && "bg-f1-background-secondary",
          focusRing()
        )}
      >
        <Icon icon={Ellipsis} />
      </button>
    </Dropdown>
  )
}

import { cn, focusRing } from "@/lib/utils"
import { useState } from "react"
import { Icon } from "../../../components/Utilities/Icon"
import { Ellipsis } from "../../../icons/app"
import { Dropdown, DropdownItem } from "../../Navigation/Dropdown"

export type ItemActionsDropdownProps = {
  items: DropdownItem[]
  onOpenChange?: (open: boolean) => void
  align?: "start" | "end"
}

export const ItemActionsDropdown = ({
  items,
  onOpenChange,
  align = "start",
}: ItemActionsDropdownProps) => {
  const [open, setOpen] = useState(false)

  if (!items || items.length === 0) {
    return null
  }

  return (
    <Dropdown
      align={align}
      items={items.map((item) => {
        if (item.type === "separator") {
          return item
        }
        return {
          ...item,
          type: "item",
        }
      })}
      open={open}
      onOpenChange={(open) => {
        setOpen(open)
        onOpenChange?.(open)
      }}
    >
      <button
        title="Actions"
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded text-f1-icon-bold hover:bg-f1-background-secondary",
          open && "bg-f1-background-secondary",
          focusRing("focus-visible:ring-inset")
        )}
      >
        <Icon icon={Ellipsis} />
        <label className="sr-only">Actions</label>
      </button>
    </Dropdown>
  )
}

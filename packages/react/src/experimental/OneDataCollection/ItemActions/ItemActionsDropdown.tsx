import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button } from "../../../components/Actions/Button"
import { Ellipsis } from "../../../icons/app"
import { Dropdown, DropdownItem } from "../../Navigation/Dropdown"

export type ItemActionsDropdownProps = {
  items: DropdownItem[]
  onOpenChange?: (open: boolean) => void
  align?: "start" | "end"
  className?: string
}

export const ItemActionsDropdown = ({
  items,
  onOpenChange,
  align = "end",
  className,
}: ItemActionsDropdownProps) => {
  const [open, setOpen] = useState(false)

  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className={cn("pointer-events-auto", className)}>
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
        <Button
          icon={Ellipsis}
          label="Actions"
          hideLabel
          round
          variant="ghost"
          pressed={open}
        />
      </Dropdown>
    </div>
  )
}

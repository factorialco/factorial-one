import { Button } from "@/components/Actions/Button"
import { Icon } from "@/components/Utilities/Icon"
import { Counter } from "@/experimental"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Ellipsis } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { useState } from "react"
import { TOCItem } from "../types"

interface TOCItemProps {
  item: TOCItem
  counter?: number
  isActive?: boolean
}

export function Item({ item, counter, isActive }: TOCItemProps) {
  const { label, onClick, icon, disabled, otherActions } = item
  const [open, setOpen] = useState(false)

  return (
    <div
      className={cn(
        focusRing("focus:border-f1-border-focus"),
        "flex h-[36px] items-center gap-1 rounded-[10px] border border-solid border-transparent px-2 text-sm transition-colors",
        isActive && "bg-f1-background-selected",
        onClick && !disabled && "cursor-pointer hover:bg-f1-background-hover",
        disabled && "cursor-not-allowed opacity-30"
      )}
      onClick={disabled ? undefined : () => onClick?.(item.id)}
    >
      {icon && <Icon icon={icon} size="sm" />}
      <span className="flex-1 truncate text-[14px]" title={label}>
        {label}
      </span>
      {counter && <Counter value={counter} />}
      {otherActions && otherActions.length > 0 && (
        <div onClick={(e) => e.stopPropagation()}>
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
        </div>
      )}
    </div>
  )
}

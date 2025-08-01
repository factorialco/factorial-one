import { Icon } from "@/components/Utilities/Icon"
import { Counter } from "@/experimental"
import { cn, focusRing } from "@/lib/utils"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { TOCItem } from "../types"
import { ItemDropDown } from "./ItemDropDown"

interface TOCItemProps {
  item: TOCItem
  counter?: number
  isActive?: boolean
}

export function Item({ item, counter, isActive }: TOCItemProps) {
  const { label, onClick, icon, disabled, otherActions } = item
  const [open, setOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Logic: show dropdown on hover only if counter exists, always visible if no counter
  // Keep dropdown visible while it's open to prevent flickering
  const shouldShowDropdown =
    otherActions &&
    otherActions.length > 0 &&
    (counter ? isHovered || open : true)

  return (
    <div
      className={cn(
        focusRing("focus:border-f1-border-focus"),
        "flex h-[36px] min-w-0 items-center gap-1 rounded-[10px] border border-solid border-transparent px-2 text-sm transition-colors",
        isActive && "bg-f1-background-selected",
        onClick && !disabled && "cursor-pointer hover:bg-f1-background-hover",
        disabled && "cursor-not-allowed opacity-30"
      )}
      onClick={disabled ? undefined : () => onClick?.(item.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && <Icon icon={icon} size="sm" className="flex-shrink-0" />}
      <span className="min-w-0 flex-1 truncate text-[14px]" title={label}>
        {label}
      </span>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {counter && !shouldShowDropdown ? (
            <motion.div
              key="counter"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex items-center justify-center"
            >
              <Counter value={counter} />
            </motion.div>
          ) : (
            otherActions &&
            otherActions.length > 0 && (
              <motion.div
                key="dropdown"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex items-center justify-center"
              >
                <ItemDropDown
                  otherActions={otherActions}
                  open={open}
                  setOpen={setOpen}
                  disabled={disabled}
                />
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

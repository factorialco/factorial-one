import { IconType } from "@/factorial-one"
import * as Popover from "@radix-ui/react-popover"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { ToolbarButton } from "../ToolbarButton"

interface ToolbarDropdownItem {
  icon: IconType
  label: string
  onClick: () => void
  isActive?: boolean
  disabled?: boolean
}

interface ToolbarDropdownProps {
  items: ToolbarDropdownItem[]
  disabled?: boolean
  position?: "top" | "bottom"
  activator: {
    label: string
    icon: IconType
  }
}

const ToolbarDropdown = ({
  items,
  disabled = false,
  activator,
  position = "top",
}: ToolbarDropdownProps) => {
  const [open, setOpen] = useState(false)

  const handleItemClick = (onClick: () => void) => {
    onClick()
    setOpen(false)
  }

  const handleButtonClick = () => {
    if (disabled) return
    setOpen(!open)
  }

  return (
    <Popover.Root open={open} modal={false} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <ToolbarButton
          label={activator.label}
          icon={activator.icon}
          disabled={disabled}
          onClick={handleButtonClick}
        />
      </Popover.Trigger>
      <Popover.Portal container={document.body}>
        <Popover.Content
          side={position}
          align="end"
          sideOffset={10}
          collisionPadding={10}
          alignOffset={0}
          style={{ zIndex: 9999 }}
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 5 }}
                transition={{ duration: 0.15 }}
                className="flex w-40 flex-col gap-0.5 overflow-hidden rounded-md border border-solid border-f1-border bg-f1-background p-0.5 drop-shadow-md"
              >
                {items.map((item, index) => (
                  <ToolbarButton
                    key={`${item.label}-${index}`}
                    onClick={() => handleItemClick(item.onClick)}
                    active={item.isActive}
                    label={item.label}
                    disabled={disabled || !!item.disabled}
                    icon={item.icon}
                    showLabel
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export { ToolbarDropdown }
export type { ToolbarDropdownItem, ToolbarDropdownProps }

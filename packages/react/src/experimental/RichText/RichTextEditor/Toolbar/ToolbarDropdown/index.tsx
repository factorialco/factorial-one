import { IconType } from "@/factorial-one"
import * as Popover from "@radix-ui/react-popover"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import screenfull from "screenfull"
import { ToolbarButton } from "../ToolbarButton"

interface ToolbarDropdownItem {
  icon: IconType
  label: string
  onClick: () => void
  isActive?: boolean
  disabled?: boolean
  tooltip?: {
    label: string
    shortcut?: string[]
  }
}

interface ToolbarDropdownProps {
  items: ToolbarDropdownItem[]
  disabled?: boolean
  mode?: "light" | "dark"
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
  mode = "light",
  position = "top",
}: ToolbarDropdownProps) => {
  const [open, setOpen] = useState(false)

  const handleItemClick = (onClick: () => void) => {
    onClick()
    setOpen(false)
  }

  // Función para manejar el clic en el botón
  const handleButtonClick = () => {
    if (disabled) return
    setOpen(!open)
  }

  return (
    <Popover.Root open={open} modal={false} onOpenChange={setOpen}>
      <Popover.Trigger>
        <ToolbarButton
          label={activator.label}
          icon={activator.icon}
          disabled={disabled}
          mode={mode}
          onClick={handleButtonClick}
        />
      </Popover.Trigger>
      <Popover.Portal
        container={
          screenfull.isFullscreen && screenfull.element
            ? screenfull.element
            : undefined
        }
      >
        <Popover.Content
          side={position}
          align="end"
          sideOffset={10}
          collisionPadding={10}
          style={{ zIndex: 1000 }}
          alignOffset={-10}
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 5 }}
                transition={{ duration: 0.15 }}
                className="flex w-40 flex-col gap-0.5 overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background p-1 drop-shadow-sm"
              >
                {items.map((item, index) => (
                  <ToolbarButton
                    key={`${item.label}-${index}`}
                    onClick={() => handleItemClick(item.onClick)}
                    active={item.isActive}
                    label={item.label}
                    disabled={disabled || !!item.disabled}
                    icon={item.icon}
                    tooltip={item.tooltip}
                    mode={mode}
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

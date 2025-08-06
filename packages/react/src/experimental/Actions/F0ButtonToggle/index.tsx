import { Icon, IconType } from "@/components/Utilities/Icon"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { forwardRef } from "react"

interface F0ButtonToggleProps {
  selected?: boolean
  onSelectedChange?: (selected: boolean) => void
  label: string
  disabled?: boolean
  icon: IconType
  size?: "sm" | "md"
}

export const F0ButtonToggle = forwardRef<
  HTMLButtonElement,
  F0ButtonToggleProps
>(
  (
    {
      onSelectedChange = () => {},
      selected = false,
      label,
      disabled = false,
      icon,
      size = "md",
      ...props
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        variant="ghost"
        size={size}
        round
        onClick={(e) => {
          e.preventDefault()
          if (!disabled) {
            onSelectedChange(!selected)
          }
        }}
        className={cn(
          selected &&
            "bg-f1-background-selected text-f1-icon-selected hover:bg-f1-background-selected-hover hover:text-f1-icon-selected-hover"
        )}
        disabled={disabled}
        aria-label={label}
        aria-pressed={selected}
        {...props}
      >
        <Icon icon={icon} size={size} />
      </Button>
    )
  }
)

F0ButtonToggle.displayName = "F0ButtonToggle"

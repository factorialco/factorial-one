import { Icon, IconType } from "@/components/Utilities/Icon"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { forwardRef } from "react"

interface F0ButtonToggleProps {
  onClick?: () => void
  selected?: boolean
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
      onClick = () => {},
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
            onClick()
          }
        }}
        className={cn(
          selected &&
            "bg-f1-background-selected text-f1-icon-selected hover:bg-f1-background-selected-hover hover:text-f1-icon-selected-hover"
        )}
        disabled={disabled}
        aria-label={label}
        {...props}
      >
        <Icon icon={icon} size={size} />
      </Button>
    )
  }
)

F0ButtonToggle.displayName = "F0ButtonToggle"

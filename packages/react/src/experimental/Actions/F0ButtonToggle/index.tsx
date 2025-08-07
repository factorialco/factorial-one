import { Icon, IconType } from "@/components/Utilities/Icon"
import { cn, focusRing } from "@/lib/utils"
import { actionVariants, buttonSizeVariants } from "@/ui/Action/variants"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva } from "cva"
import { forwardRef } from "react"

interface F0ButtonToggleProps {
  selected?: boolean
  onSelectedChange?: (selected: boolean) => void
  label: string
  disabled?: boolean
  icon: IconType
  size?: "sm" | "md" | "lg"
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
    const toggleButtonClasses = cva({
      base: "aspect-square px-0 data-[state=on]:bg-f1-background-selected data-[state=on]:text-f1-icon-selected hover:data-[state=on]:bg-f1-background-selected-hover hover:data-[state=on]:text-f1-icon-selected-hover",
      variants: {
        size: {
          sm: "h-6",
          md: "h-8",
          lg: "h-10",
        },
      },
    })

    return (
      <TogglePrimitive.Root
        ref={ref}
        pressed={selected}
        onPressedChange={onSelectedChange}
        disabled={disabled}
        aria-label={label}
        className={cn(
          focusRing(),
          actionVariants({ variant: "ghost" }),
          toggleButtonClasses({ size }),
          buttonSizeVariants({ size })
        )}
        {...props}
      >
        <Icon icon={icon} size={size} />
      </TogglePrimitive.Root>
    )
  }
)

F0ButtonToggle.displayName = "F0ButtonToggle"

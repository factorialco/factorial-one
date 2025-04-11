import { Shortcut } from "@/experimental/exports"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { Icon, IconType } from "@/factorial-one"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { ComponentProps, forwardRef } from "react"

interface ToolbarButtonProps {
  onClick?: () => void
  active?: boolean
  label: string
  disabled: boolean
  icon: IconType
  tooltip?: {
    description?: string
    label?: string
    shortcut?: ComponentProps<typeof Shortcut>["keys"]
  }
  mode?: "light" | "dark"
  showLabel?: boolean
}

const ToolbarButton = forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  (
    {
      onClick = () => {},
      active = false,
      label,
      disabled,
      icon,
      tooltip,
      mode = "light",
      showLabel = false,
      ...props
    },
    ref
  ) => {
    const CustomButton = (
      <div
        className="relative inline-block"
        onClick={(e) => {
          if (!disabled && e.currentTarget === e.target) {
            onClick()
          }
        }}
      >
        <Button
          ref={ref}
          variant="outline"
          size="md"
          onClick={(e) => {
            e.preventDefault()
            if (!disabled) {
              onClick()
            }
          }}
          className={cn(
            "flex aspect-square items-center transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
            active
              ? "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
              : "border-none bg-transparent hover:bg-f1-background-secondary-hover",
            showLabel ? "w-full items-center justify-start px-2" : "p-0"
          )}
          disabled={disabled}
          aria-label={label}
          {...props}
        >
          <Icon
            icon={icon}
            className={
              active
                ? "text-f1-icon-selected"
                : mode === "dark"
                  ? "text-f1-foreground-inverse"
                  : "text-f1-foreground"
            }
          />
          {showLabel && (
            <span
              className={cn(
                "text-sm",
                active && "text-f1-background-selected-bold"
              )}
            >
              {label}
            </span>
          )}
        </Button>
      </div>
    )

    return tooltip && mode === "light" ? (
      <Tooltip
        description={tooltip?.description || ""}
        label={tooltip?.label}
        shortcut={tooltip?.shortcut}
      >
        {CustomButton}
      </Tooltip>
    ) : (
      CustomButton
    )
  }
)

ToolbarButton.displayName = "ToolbarButton"

export { ToolbarButton }

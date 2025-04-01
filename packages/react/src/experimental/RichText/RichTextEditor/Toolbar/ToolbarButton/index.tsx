import { Shortcut } from "@/experimental/exports"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { Icon, IconType } from "@/factorial-one"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { ComponentProps } from "react"

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
  mode: "light" | "dark"
  showLabel?: boolean
}

const ToolbarButton = ({
  onClick = () => {},
  active = false,
  label,
  disabled,
  icon,
  tooltip,
  mode = "light",
  showLabel = false,
  ...props
}: ToolbarButtonProps) => {
  const getIconColor = () => {
    if (mode === "dark") {
      return active ? "text-f1-icon-selected" : "text-f1-foreground-inverse"
    }
    return active ? "text-f1-icon-selected" : "text-f1-foreground"
  }

  const button = (
    <Button
      {...props}
      variant="outline"
      size="md"
      onClick={onClick}
      className={cn(
        "flex aspect-square items-center transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        active
          ? "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
          : "border-none hover:bg-f1-background-secondary-hover",
        mode === "dark" && "bg-transparent text-f1-foreground-inverse",
        showLabel ? "w-full items-center justify-start px-2" : "p-0"
      )}
      disabled={disabled}
      aria-label={label}
    >
      <Icon icon={icon} className={getIconColor()} />
      {showLabel && <span className="text-sm">{label}</span>}
    </Button>
  )

  return tooltip ? (
    <Tooltip
      description={tooltip?.description || ""}
      label={tooltip?.label}
      shortcut={tooltip?.shortcut}
    >
      {button}
    </Tooltip>
  ) : (
    button
  )
}

export { ToolbarButton }

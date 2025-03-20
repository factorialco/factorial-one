import { Button, IconType } from "@/factorial-one"

interface ToolbarButtonProps {
  onClick?: () => void
  title: string
  icon?: IconType
  isActive?: boolean
  label?: string
}

const ToolbarButton = ({
  icon,
  onClick,
  isActive = false,
  title,
  label,
}: ToolbarButtonProps) => (
  <Button
    variant={isActive ? "neutral" : "ghost"}
    icon={icon ?? undefined}
    hideLabel={label ? false : true}
    label={label ?? title}
    onClick={onClick ?? undefined}
    type="button"
  />
)

export { ToolbarButton }

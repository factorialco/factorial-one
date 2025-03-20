import Icon from "design-system/Icon"
import type { Medium as MediumType } from "design-system/Icon/types/medium"

interface ToolbarButtonProps {
  icon: MediumType
  onClick: () => void
  isActive?: boolean
  title?: string
}

const ToolbarButton = ({
  icon,
  onClick,
  isActive,
  title,
}: ToolbarButtonProps) => (
  <button
    className={`toolbar-button ${isActive && "active"}`}
    onClick={onClick}
    title={title}
    type="button"
  >
    <Icon.Medium icon={icon} color="grey800" />
  </button>
)

export { ToolbarButton }

import { Icon } from "@/components/Utilities/Icon"
import { IconType } from "@/factorial-one"
import { DropdownDefault } from "@/icons/app"
import { cn } from "@/lib/utils"

function Selector({
  text,
  placeholder,
  icon,
  onClick,
}: {
  text?: string
  placeholder: string
  icon?: IconType
  onClick?: () => void
}) {
  return (
    <div
      className="flex cursor-default flex-row items-center gap-1 rounded-xs px-1 py-0.5 hover:bg-f1-background-hover"
      onClick={onClick}
    >
      {icon && <Icon icon={icon} className="text-f1-icon" />}
      <span
        className={cn(
          "font-medium",
          text ? "text-f1-foreground" : "text-f1-foreground-secondary"
        )}
      >
        {text ?? placeholder}
      </span>
      <Icon icon={DropdownDefault} />
    </div>
  )
}

export default Selector

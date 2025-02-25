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
      className="flex cursor-default flex-row items-center gap-1 rounded-xs px-1 hover:bg-f1-background-hover"
      onClick={onClick}
    >
      {icon && (
        <div className="translate-y-0.5">
          <Icon icon={icon} className="text-f1-icon" />
        </div>
      )}
      <span
        className={cn(
          "font-medium",
          text ? "text-f1-foreground" : "text-f1-foreground-secondary"
        )}
      >
        {text ?? placeholder}
      </span>
      <div className="translate-y-[3px]">
        <Icon icon={DropdownDefault} />
      </div>
    </div>
  )
}

export default Selector

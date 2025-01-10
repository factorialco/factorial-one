import { Icon } from "@/components/Utilities/Icon"
import { DropdownItemObject, renderAvatar } from "@/experimental/exports"
import { cn } from "@/lib/utils"

export const DropdownItemContent = ({ item }: { item: DropdownItemObject }) => (
  <>
    {item.avatar && renderAvatar(item.avatar, "xsmall")}
    {item.icon && (
      <Icon
        icon={item.icon}
        size="md"
        className={cn("text-f1-icon", item.critical && "text-f1-icon-critical")}
      />
    )}
    <div className="flex flex-col items-start">
      {item.label}
      {item.description && (
        <div
          className={cn(
            "font-normal text-f1-foreground-secondary",
            item.critical && "text-f1-foreground-critical"
          )}
        >
          {item.description}
        </div>
      )}
    </div>
  </>
)

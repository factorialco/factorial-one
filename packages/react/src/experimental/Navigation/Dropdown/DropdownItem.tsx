import { F0Avatar } from "@/components/avatars/F0Avatar"
import { Icon } from "@/components/Utilities/Icon"
import { cn } from "@/lib/utils"
import { DropdownItemObject } from "./internal"

export const DropdownItemContent = ({ item }: { item: DropdownItemObject }) => (
  <>
    {item.avatar && <F0Avatar avatar={item.avatar} size="xsmall" />}
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

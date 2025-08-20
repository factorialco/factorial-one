import { Icon } from "@/components/Utilities/Icon"
import { Avatar } from "@/experimental/Information/Avatars/Avatar"
import { RawTag } from "@/experimental/Information/Tags/RawTag"
import { SelectItem as SelectItemPrimitive } from "@/ui/Select"
import { SelectItemObject } from "../types"

/**
 * Component for displaying an item in the select list
 */
export const SelectItem = <T extends string, R>({
  item,
}: {
  item: SelectItemObject<T, R>
}) => {
  return (
    <SelectItemPrimitive value={item.value}>
      <div className="flex w-full items-start gap-1.5">
        {item.avatar && <Avatar avatar={item.avatar} size="xsmall" />}
        {item.icon && (
          <div className="text-f1-icon">
            <Icon icon={item.icon} />
          </div>
        )}
        <div className="flex flex-1 flex-col">
          <span className="line-clamp-2 font-medium">{item.label}</span>
          {item.description && (
            <div className="line-clamp-2 text-f1-foreground-secondary">
              {item.description}
            </div>
          )}
        </div>
        {item.tag && (
          <div className="self-center">
            <RawTag text={item.tag} />
          </div>
        )}
      </div>
    </SelectItemPrimitive>
  )
}

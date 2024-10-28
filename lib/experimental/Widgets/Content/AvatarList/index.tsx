import { Badge } from "@/factorial-one"
import { AvatarListItem } from "./AvatarListItem"

export interface AvatarListProps {
  items: AvatarListItem[]
  maxItemsToShow?: number
  onClickItem?: (item: AvatarListItem) => void
  emptyMessage?: string
  hideIcons?: boolean
}

export function AvatarList({
  items,
  onClickItem,
  hideIcons = false,
  maxItemsToShow = 5,
  emptyMessage = "No items assigned",
}: AvatarListProps) {
  const isEmpty = !items.length

  return (
    <div className="flex flex-col gap-0">
      {isEmpty ? (
        <p className="font-medium">{emptyMessage}</p>
      ) : (
        items
          .slice(0, maxItemsToShow)
          .map((item) => (
            <AvatarListItem
              key={item.id}
              item={item}
              hideIcon={hideIcons}
              onClick={onClickItem}
            />
          ))
      )}
      {items.length - maxItemsToShow > 0 && (
        <Badge
          text={"+" + (items.length - maxItemsToShow) + "elements"}
          variant={"neutral"}
        />
      )}
    </div>
  )
}

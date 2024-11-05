import { Button } from "@/factorial-one"
import { AvatarListItem } from "./AvatarListItem"

export interface AvatarListProps {
  items: AvatarListItem[]
  maxItemsToShow?: number
  onClickItem?: (item: AvatarListItem) => void
  onShowMore?: () => void
  emptyMessage?: string
  hideIcons?: boolean
  moreElementsLabel: string
}

export function AvatarList({
  items,
  onClickItem,
  onShowMore,
  hideIcons = false,
  maxItemsToShow = 5,
  moreElementsLabel,
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
        <div className="mt-2 pl-2">
          <Button
            variant={"neutral"}
            size={"sm"}
            label={`+${items.length - maxItemsToShow} ${moreElementsLabel}`}
            onClick={() => onShowMore?.()}
          />
        </div>
      )}
    </div>
  )
}

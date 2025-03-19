import {
  WidgetInboxListItem,
  WidgetInboxListItemProps,
} from "../../ListItems/WidgetInboxListItem"

type Props<Id extends string | number = string | number> = {
  items: Omit<WidgetInboxListItemProps<Id>, "onClick">[]
  onClickItem?: (id: Id) => void
}

export type WidgetInboxListProps = Props

export function WidgetInboxList({ items, onClickItem }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <WidgetInboxListItem key={item.id} {...item} onClick={onClickItem} />
      ))}
    </div>
  )
}

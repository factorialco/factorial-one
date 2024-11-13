import {
  WidgetSimpleListItem,
  Props as WidgetSimpleListItemProps,
} from "../../ListItems/WidgetSimpleListItem"

type Props<Id extends string | number = string | number> = {
  items: Omit<WidgetSimpleListItemProps<Id>, "onClick">[]
  onClickItem?: (id: Id) => void
}

export type WidgetSimpleListProps = Props

export function WidgetSimpleList({ items, onClickItem }: Props) {
  return (
    <div className="flex flex-col gap-1">
      {items.map((item) => (
        <WidgetSimpleListItem {...item} onClick={onClickItem} />
      ))}
    </div>
  )
}

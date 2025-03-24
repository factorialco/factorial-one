import { VerticalOverflowList } from "@/ui/VerticalOverflowList"
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
    <VerticalOverflowList
      items={items}
      gap={4}
      renderListItem={(item: (typeof items)[number]) => (
        <WidgetSimpleListItem {...item} onClick={onClickItem} />
      )}
      minSize={240}
      maxSize={280}
    />
  )
}

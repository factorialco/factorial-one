import { VerticalOverflowList } from "@/ui/VerticalOverflowList"
import {
  WidgetSimpleListItem,
  Props as WidgetSimpleListItemProps,
} from "../../ListItems/WidgetSimpleListItem"

type Props<Id extends string | number = string | number> = {
  items: Omit<WidgetSimpleListItemProps<Id>, "onClick">[]
  minSize?: number
  gap?: number
  onClickItem?: (id: Id) => void
}

export type WidgetSimpleListProps = Props

export function WidgetSimpleList({
  items,
  gap,
  minSize = 184,
  onClickItem,
}: Props) {
  return (
    <VerticalOverflowList
      items={items}
      gap={gap}
      renderListItem={(item: (typeof items)[number]) => (
        <WidgetSimpleListItem {...item} onClick={onClickItem} />
      )}
      minSize={minSize}
    />
  )
}

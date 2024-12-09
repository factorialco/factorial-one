import { ImageWidget } from "./WidgetListItem/ImageWidget"
import { TaskWidgetListItem } from "./WidgetListItem/TaskWidgetListItem"
import { TextWidget } from "./WidgetListItem/TextWidget"

export type WidgetListItemComponent =
  | typeof TextWidget
  | typeof ImageWidget
  | typeof TaskWidgetListItem

import { TaskWidgetListItemProps } from "./WidgetListItem/TaskWidgetListItem"

export interface TextWidgetProps {
  id: number
  text: string
}

export interface ImageWidgetProps {
  id: number
  imageUrl: string
}

export type WidgetListItemProps =
  | TextWidgetProps
  | ImageWidgetProps
  | TaskWidgetListItemProps

import { ColumnWidth } from "@/experimental/OneTable/utils/sizes"
import { ReactNode } from "react"

export type PropertyDefinition<T> = {
  label: string

  /**
   * Optional tooltip text. When provided, displays an info icon next to the header content
   * that shows this text in a tooltip when hovered.
   */
  info?: string

  /**
   * The width of the column. If not provided, the width will be "auto"
   */
  width?: ColumnWidth

  render: (item: T) => ReactNode
}

/**
 * Renders a value for a given item and property definition.
 * Used by both table and card visualizations to ensure consistent rendering.
 */
export const renderValue = <RecordType>(
  item: RecordType,
  property: PropertyDefinition<RecordType>
): ReactNode => {
  return property.render(item)
}

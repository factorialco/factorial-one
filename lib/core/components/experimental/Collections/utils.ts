import { ReactNode } from "react"

export type PropertyDefinition<T> = {
  label: string
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

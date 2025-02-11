import type { FiltersDefinition } from "./Filters/types"
import { CollectionSchema, DataSourceDefinition, SourceData } from "./types"

export const getColumns = <
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
>(
  definition: DataSourceDefinition<Schema, Filters>
): Array<keyof Schema> => {
  return Object.keys(definition.properties) as Array<keyof Schema>
}

type PropertyDefinition<T> = {
  key: keyof T
  render?: (item: T) => string
}

/**
 * Renders a value for a given item and property definition.
 * Used by both table and card visualizations to ensure consistent rendering.
 */
export const renderValue = <
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
>(
  item: SourceData<Schema, Filters>,
  property: PropertyDefinition<SourceData<Schema, Filters>>
): string => {
  if (property.render) {
    return property.render(item)
  }
  return String(item[property.key])
}

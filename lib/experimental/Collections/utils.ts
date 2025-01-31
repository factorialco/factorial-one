import type { FiltersDefinition } from "./Filters/types"
import { CollectionSchema, DataSourceDefinition } from "./types"

export const getColumns = <
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
>(
  definition: DataSourceDefinition<Schema, Filters>
): Array<keyof Schema> => {
  return Object.keys(definition.properties) as Array<keyof Schema>
}

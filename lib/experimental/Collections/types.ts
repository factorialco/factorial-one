import { Observable } from "zen-observable-ts"
import type { FiltersDefinition, FiltersState } from "./Filters/types"
import type {
  ExtractPropertyOptions,
  ExtractPropertyType,
  PropertySchema,
} from "./properties"

/**
 * Defines the structure and configuration of a data source for a collection.
 * @template Schema - The schema defining the properties of the collection
 * @template Filters - The available filter configurations for the collection
 */
export type DataSourceDefinition<
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
> = {
  properties: Schema
  filters?: Filters
}

/**
 * Extracts the property keys from a collection schema and its filters.
 * @template Schema - The schema defining the properties of the collection
 * @template Filters - The available filter configurations for the collection
 */
export type ExtractPropertyKeys<
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
> = keyof DataSourceDefinition<Schema, Filters>["properties"]

/**
 * Transforms a schema of property options into a type-safe object structure.
 * @template Properties - Record of property options defining the data structure
 */
export type ExtractDataType<
  Properties extends Record<string, ExtractPropertyOptions<PropertySchema>>,
> = {
  [K in keyof Properties]: ExtractPropertyType<Properties[K]>
}

/**
 * Props for the Collection component.
 * @template Schema - The schema defining the properties of the collection
 * @template Filters - The available filter configurations for the collection
 * @template VisualizationOptions - Additional options for visualizing the collection
 */
export type CollectionProps<
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
  VisualizationOptions extends object,
> = {
  source: DataSource<Schema, Filters>
} & VisualizationOptions

/**
 * Represents a data source with filtering capabilities and data fetching functionality.
 * @template Schema - The schema defining the properties of the collection
 * @template Filters - The available filter configurations for the collection
 */
export type DataSource<
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
> = DataSourceDefinition<Schema, Filters> & {
  /** Current state of applied filters */
  currentFilters: FiltersState<Filters>
  /** Function to update the current filters state */
  setCurrentFilters: React.Dispatch<React.SetStateAction<FiltersState<Filters>>>
  /**
   * Fetches data based on the provided filter options
   * @param options - Object containing filter state to apply
   * @returns Promise or Observable containing the filtered data
   */
  fetchData: (options: {
    filters: FiltersState<Filters>
  }) => DataSourceResult<ExtractDataType<Schema>>
}

/**
 * Represents the result of a data source fetch operation.
 * Can be either a Promise or an Observable of an array of items.
 * @template T - The type of items in the result set
 */
export type DataSourceResult<T> = Promise<Array<T>> | Observable<Array<T>>

/**
 * Defines the schema structure for a collection.
 * Each property in the schema must conform to PropertySchema without a value field.
 */
export type CollectionSchema = Record<
  string,
  ExtractPropertyOptions<PropertySchema>
>

/**
 * Extracts the concrete data type from a collection's schema and filters.
 * @template Schema - The schema defining the properties of the collection
 * @template Filters - The available filter configurations for the collection
 */
export type SourceData<
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
> = ExtractDataType<DataSource<Schema, Filters>["properties"]>

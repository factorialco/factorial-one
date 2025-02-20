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
  RecordType,
  Filters extends FiltersDefinition,
> = {
  /** Available filter configurations */
  filters?: Filters
  /** Current state of applied filters */
  currentFilters?: FiltersState<Filters>
  dataAdapter: {
    /**
     * Fetches data based on the provided filter options
     * @param options - Object containing filter state to apply
     * @returns Promise or Observable containing the filtered data
     */
    fetchData: (options: {
      filters: FiltersState<Filters>
    }) => DataSourceResult<RecordType>
  }
}

/**
 * Extracts the property keys from a collection schema and its filters.
 * @template Schema - The schema defining the properties of the collection
 * @template Filters - The available filter configurations for the collection
 */
export type ExtractPropertyKeys<RecordType> = keyof RecordType

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
  RecordType,
  Filters extends FiltersDefinition,
  VisualizationOptions extends object,
> = {
  source: DataSource<RecordType, Filters>
} & VisualizationOptions

/**
 * Represents a data source with filtering capabilities and data fetching functionality.
 * Extends DataSourceDefinition with runtime properties for state management and data fetching.
 * @template Schema - The schema defining the properties of the collection
 * @template Filters - The available filter configurations for the collection
 */
export type DataSource<
  RecordType,
  Filters extends FiltersDefinition,
> = DataSourceDefinition<RecordType, Filters> & {
  /** Current state of applied filters */
  currentFilters: FiltersState<Filters>
  /** Function to update the current filters state */
  setCurrentFilters: React.Dispatch<React.SetStateAction<FiltersState<Filters>>>
}

/**
 * Represents the result of a data source fetch operation.
 * Can be either a Promise or an Observable of an array of items.
 * @template T - The type of items in the result set
 */
export type DataSourceResult<T> = Promise<Array<T>> | Observable<Array<T>>

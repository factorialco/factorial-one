import { Observable } from "zen-observable-ts"
import type { FiltersDefinition, FiltersState } from "./Filters/types"

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
 * Represents a record type with string keys and unknown values.
 * This type is used to represent the data structure of a collection.
 */
export type TRecordType = Record<string, unknown>

/**
 * Extracts the property keys from a collection schema and its filters.
 * @template Schema - The schema defining the properties of the collection
 * @template Filters - The available filter configurations for the collection
 */
export type ExtractPropertyKeys<RecordType> = keyof RecordType

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
export type DataSourceResult<T> = PromiseOrObservable<{ records: Array<T> }>

type PromiseOrObservable<T> = Promise<T> | Observable<T>

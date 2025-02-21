import { Observable } from "zen-observable-ts"
import type { FiltersDefinition, FiltersState } from "./Filters/types"

/**
 * Defines the structure and configuration of a data source for a collection.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 */
export type DataSourceDefinition<
  Record extends RecordType,
  Filters extends FiltersDefinition,
> = {
  /** Available filter configurations */
  filters?: Filters
  /** Current state of applied filters */
  currentFilters?: FiltersState<Filters>
  /** Data adapter responsible for fetching and managing data */
  dataAdapter: DataAdapter<Record, Filters>
}

/**
 * Defines the interface for data fetching and management.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 */
type DataAdapter<
  Record extends RecordType,
  Filters extends FiltersDefinition,
> = {
  /** Function to fetch data based on the current filter state */
  fetchData: (options: {
    filters: FiltersState<Filters>
  }) => DataSourceResult<Record>
}

/**
 * Represents a record type with string keys and unknown values.
 * This type is used to represent the data structure of a collection.
 */
export type RecordType = Record<string, unknown>

/**
 * Extracts the property keys from a record type.
 * @template RecordType - The type containing the properties to extract
 */
export type ExtractPropertyKeys<RecordType> = keyof RecordType

/**
 * Props for the Collection component.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template VisualizationOptions - Additional options for visualizing the collection
 */
export type CollectionProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  VisualizationOptions extends object,
> = {
  /** The data source configuration and state */
  source: DataSource<Record, Filters>
} & VisualizationOptions

/**
 * Represents a data source with filtering capabilities and data fetching functionality.
 * Extends DataSourceDefinition with runtime properties for state management.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 */
export type DataSource<
  Record extends RecordType,
  Filters extends FiltersDefinition,
> = DataSourceDefinition<Record, Filters> & {
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

/**
 * Utility type for handling both Promise and Observable return types.
 * @template T - The type of the value being promised or observed
 */
type PromiseOrObservable<T> = Promise<T> | Observable<T>

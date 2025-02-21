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
 * Base response type for collection data
 * @template Record - The type of records in the collection
 */
export type BaseResponse<Record> = {
  records: Record[]
}

export type PaginationInfo = {
  total: number
  currentPage: number
  perPage: number
  pagesCount: number
}

/**
 * Response type for paginated collection data
 * @template Record - The type of records in the collection
 */
export type PaginatedResponse<Record> = BaseResponse<Record> & PaginationInfo

/**
 * Base options for data fetching
 * @template Filters - The available filter configurations
 */
export type BaseFetchOptions<Filters extends FiltersDefinition> = {
  filters: FiltersState<Filters>
}

/**
 * Options for paginated data fetching
 * @template Filters - The available filter configurations
 */
export type PaginatedFetchOptions<Filters extends FiltersDefinition> =
  BaseFetchOptions<Filters> & {
    pagination: { currentPage: number; perPage: number }
  }

/**
 * Base data adapter configuration
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export type BaseDataAdapter<
  Record extends RecordType,
  Filters extends FiltersDefinition,
> = {
  paginationType?: never
  fetchData: (
    options: BaseFetchOptions<Filters>
  ) => Promise<BaseResponse<Record>> | Observable<BaseResponse<Record>>
}

/**
 * Paginated data adapter configuration
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export type PaginatedDataAdapter<
  Record extends RecordType,
  Filters extends FiltersDefinition,
> = {
  paginationType: "pages"
  perPage?: number
  fetchData: (
    options: PaginatedFetchOptions<Filters>
  ) =>
    | Promise<PaginatedResponse<Record>>
    | Observable<PaginatedResponse<Record>>
}

/**
 * Combined type for all possible data adapter configurations
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export type DataAdapter<
  Record extends RecordType,
  Filters extends FiltersDefinition,
> = BaseDataAdapter<Record, Filters> | PaginatedDataAdapter<Record, Filters>

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
 * Utility type for handling both Promise and Observable return types.
 * @template T - The type of the value being promised or observed
 */
export type PromiseOrObservable<T> = Promise<T> | Observable<T>

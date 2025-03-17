import { Observable } from "zen-observable-ts"
import { PromiseState } from "../../lib/promise-to-observable"
import type { FiltersDefinition, FiltersState } from "./Filters/types"
import { ActionsDefinition } from "./actions"
import { SortingsDefinition, SortingsState } from "./sortings"

/**
 * Defines the structure and configuration of a data source for a collection.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template Actions - The available actions that can be performed on records
 */
export type DataSourceDefinition<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Actions extends ActionsDefinition<Record>,
> = {
  /** Available filter configurations */
  filters?: Filters
  /** Predefined filter configurations that can be applied */
  presets?: Presets<Filters>
  /** URL for a single item in the collection */
  itemUrl?: (item: Record) => string
  /** Available actions that can be performed on records */
  actions?: Actions
  /** Search configuration */
  search?: CollectionSearchOptions
  /** Current state of applied filters */
  currentFilters?: FiltersState<Filters>
  /** Available sorting fields. If not provided, sorting is not allowed. */
  sortings?: Sortings
  /** Data adapter responsible for fetching and managing data */
  dataAdapter: DataAdapter<Record, Filters, Sortings>
}

export type CollectionSearchOptions = {
  /** Whether search is enabled */
  enabled: boolean
  /** Whether search is synchronous */
  sync?: boolean
  /** Debounce time for search */
  debounceTime?: number
}

/**
 * Defines preset filter configurations that can be applied to a collection.
 * @template Filters - The available filter configurations
 */
export type Presets<Filters extends FiltersDefinition> = Array<{
  /** Display name for the preset */
  label: string
  /** Filter configuration to apply when this preset is selected */
  filter: FiltersState<Filters>
}>

/**
 * Base response type for collection data
 * @template Record - The type of records in the collection
 */
export type BaseResponse<Record> = Record[]

/**
 * Information about the current pagination state
 */
export type PaginationInfo = {
  /** Total number of records available */
  total: number
  /** Current page number (1-indexed) */
  currentPage: number
  /** Number of records per page */
  perPage: number
  /** Total number of pages available */
  pagesCount: number
}

/**
 * Response type for paginated collection data
 * @template Record - The type of records in the collection
 */
export type PaginatedResponse<Record> = {
  /** The records for the current page */
  records: Record[]
} & PaginationInfo

/**
 * Base options for data fetching
 * @template Filters - The available filter configurations
 */
export type BaseFetchOptions<
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
> = {
  /** Currently applied filters */
  filters: FiltersState<Filters>
  sortings: SortingsState<Sortings>
  search?: string
}

/**
 * Options for paginated data fetching
 * @template Filters - The available filter configurations
 */
export type PaginatedFetchOptions<
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
> = BaseFetchOptions<Filters, Sortings> & {
  /** Pagination configuration */
  pagination: { currentPage: number; perPage: number }
}

/**
 * Base data adapter configuration for non-paginated collections
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export type BaseDataAdapter<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
> = {
  /** Indicates this adapter doesn't use pagination */
  paginationType?: never
  /**
   * Function to fetch data based on filter options
   * @param options - The filter options to apply when fetching data
   * @returns Array of records, promise of records, or observable of records
   */
  fetchData: (
    options: BaseFetchOptions<Filters, Sortings>
  ) =>
    | BaseResponse<Record>
    | Promise<BaseResponse<Record>>
    | Observable<PromiseState<BaseResponse<Record>>>
}

/**
 * Paginated data adapter configuration
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export type PaginatedDataAdapter<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
> = {
  /** Indicates this adapter uses page-based pagination */
  paginationType: "pages"
  /** Default number of records per page */
  perPage?: number
  /**
   * Function to fetch paginated data based on filter and pagination options
   * @param options - The filter and pagination options to apply when fetching data
   * @returns Paginated response with records and pagination info
   */
  fetchData: (
    options: PaginatedFetchOptions<Filters, Sortings>
  ) =>
    | PaginatedResponse<Record>
    | Promise<PaginatedResponse<Record>>
    | Observable<PromiseState<PaginatedResponse<Record>>>
}

/**
 * Combined type for all possible data adapter configurations
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export type DataAdapter<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
> =
  | BaseDataAdapter<Record, Filters, Sortings>
  | PaginatedDataAdapter<Record, Filters, Sortings>

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
 * @template Actions - The available actions that can be performed on records
 * @template VisualizationOptions - Additional options for visualizing the collection
 */
export type CollectionProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Actions extends ActionsDefinition<Record>,
  VisualizationOptions extends object,
> = {
  /** The data source configuration and state */
  source: DataSource<Record, Filters, Sortings, Actions>
} & VisualizationOptions

/**
 * Represents a data source with filtering capabilities and data fetching functionality.
 * Extends DataSourceDefinition with runtime properties for state management.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template Actions - The available actions that can be performed on records
 */
export type DataSource<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Actions extends ActionsDefinition<Record> = ActionsDefinition<Record>,
> = DataSourceDefinition<Record, Filters, Sortings, Actions> & {
  /** Current state of applied filters */
  currentFilters: FiltersState<Filters>
  /** Function to update the current filters state */
  setCurrentFilters: React.Dispatch<React.SetStateAction<FiltersState<Filters>>>
  /** Current state of applied sortings */
  currentSortings: SortingsState<Sortings>
  /** Function to update the current sortings state */
  setCurrentSortings: React.Dispatch<
    React.SetStateAction<SortingsState<Sortings>>
  >
  currentSearch: undefined | string
  debouncedCurrentSearch: undefined | string
  setCurrentSearch: (search: string | undefined) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

/**
 * Utility type for handling both Promise and Observable return types.
 * @template T - The type of the value being promised or observed
 */
export type PromiseOrObservable<T> =
  | T
  | Promise<T>
  | Observable<PromiseState<T>>

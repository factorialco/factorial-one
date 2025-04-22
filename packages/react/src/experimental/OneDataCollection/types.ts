import { IconType } from "@/factorial-one"
import { Observable } from "zen-observable-ts"
import { PromiseState } from "../../lib/promise-to-observable"
import { PrimaryActionsDefinition, SecondaryActionsDefinition } from "./actions"
import type { FiltersDefinition, FiltersState } from "./Filters/types"
import { GroupingDefinition, GroupingState } from "./grouping"
import { ItemActionsDefinition } from "./item-actions"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "./navigationFilters/types"
import {
  SortingsDefinition,
  SortingsState,
  SortingsStateMultiple,
} from "./sortings"
import { DataError } from "./useData"
export * from "./grouping"
export * from "./sortings"

/**
 * Defines the structure and configuration of a data source for a collection.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 * @template NavigationFilters - The available navigation filters for the collection
 * @template Sortings - The available sortings for the collection
 * @template ItemActions - The available actions that can be performed on records
 * @template PrimaryActions - The available primary actions that can be performed on the collection
 * @template SecondaryActions - The available actions that can be performed on the collection
 * @template OtherActions - The available actions that can be performed on the collection
 */
export type DataSourceDefinition<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = {
  /** Available filter configurations */
  filters?: Filters
  /** Navigation filters */
  navigationFilters?: NavigationFilters
  /** Predefined filter configurations that can be applied */
  presets?: PresetsDefinition<Filters>
  /** URL for a single item in the collection */
  itemUrl?: (item: Record) => string | undefined
  /** Click handler for a single item in the collection */
  itemOnClick?: (item: Record) => () => void
  /** Available actions that can be performed on records */
  itemActions?: ItemActions
  /** Available primary actions that can be performed on the collection */
  primaryActions?: PrimaryActionsDefinition
  /** Available secondary actions that can be performed on the collection */
  secondaryActions?: SecondaryActionsDefinition
  /** Search configuration */
  search?: CollectionSearchOptions
  /** Current state of applied filters */
  currentFilters?: FiltersState<Filters>
  /** Current state of applied navigation filter */
  // currentNavigationFilter?: NavigationFilterValue<NavigationFilter>
  /** Available sorting fields. If not provided, sorting is not allowed. */
  sortings?: Sortings
  defaultSorting?: SortingsState<Sortings>
  /** Data adapter responsible for fetching and managing data */
  dataAdapter: DataAdapter<
    Record,
    Filters,
    Sortings,
    NavigationFilters,
    Grouping
  >
  /** Selectable items value under the checkbox column (undefined if not selectable) */
  selectable?: (item: Record) => string | number | undefined
  /** Bulk actions that can be performed on the collection */
  bulkActions?: (
    selectedItems: Parameters<OnBulkActionCallback<Record, Filters>>[1]
  ) => {
    primary: BulkActionDefinition[]
    secondary?: BulkActionDefinition[]
  }
  totalItemSummary?: (totalItems: number) => string
  /** Grouping configuration */
  grouping?: Grouping
  currentGrouping?: GroupingState<Record, Grouping>
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
export type PresetDefinition<Filters extends FiltersDefinition> = {
  /** Display name for the preset */
  label: string
  /** Filter configuration to apply when this preset is selected */
  filter: FiltersState<Filters>
  /** Function to count the number of items that match the filter */
  itemsCount?: (
    filters: FiltersState<Filters>
  ) => Promise<number | undefined> | number | undefined
}

export type PresetsDefinition<Filters extends FiltersDefinition> =
  PresetDefinition<Filters>[]

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

export type SortingsStateMultiple = {
  field: string
  order: "asc" | "desc"
}[]

// export type SortingsStateMultiple<
//   Record extends RecordType,
//   Definition extends SortingsDefinition,
//   Grouping extends GroupingDefinition<Record>,
// > = NonNullable<SortingsState<Definition> | GroupingState<Record, Grouping>>[]

/**
 * Base options for data fetching
 * @template Filters - The available filter configurations
 */
export type BaseFetchOptions<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = {
  /** Currently applied filters */
  filters: FiltersState<Filters>
  sortings: SortingsStateMultiple
  search?: string
  navigationFilters?: NavigationFiltersState<NavigationFilters>
}

/**
 * Options for paginated data fetching
 * @template Filters - The available filter configurations
 */
export type PaginatedFetchOptions<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = BaseFetchOptions<Record, Filters, Sortings, NavigationFilters, Grouping> & {
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
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = {
  /** Indicates this adapter doesn't use pagination */
  paginationType?: never
  /**
   * Function to fetch data based on filter options
   * @param options - The filter options to apply when fetching data
   * @returns Array of records, promise of records, or observable of records
   */
  fetchData: (
    options: BaseFetchOptions<
      Record,
      Filters,
      Sortings,
      NavigationFilters,
      Grouping
    >
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
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
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
    options: PaginatedFetchOptions<
      Record,
      Filters,
      Sortings,
      NavigationFilters,
      Grouping
    >
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
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> =
  | BaseDataAdapter<Record, Filters, Sortings, NavigationFilters, Grouping>
  | PaginatedDataAdapter<Record, Filters, Sortings, NavigationFilters, Grouping>

/**
 * Represents a collection of selected items.
 * @template T - The type of items in the collection
 */
export type SelectedItems<T> = ReadonlyArray<T>

/**
 * Represents a record type with string keys and unknown values.
 * This type is used to represent the data structure of a collection.
 */
export type RecordType = Record<string, unknown>

/**
 * Represents a bulk action that can be performed on a collection.
 */
export type BulkAction = string

/**
 * Represents a bulk action definition.
 */
export type BulkActionDefinition = {
  label: string
  icon?: IconType
  id: string
  keepSelection?: boolean // If true, the selection will not be cleared after the action is performed (false by default)
}

/**
 * Extracts the property keys from a record type.
 * @template RecordType - The type containing the properties to extract
 */
export type ExtractPropertyKeys<RecordType> = keyof RecordType

export type OnSelectItemsCallback<
  Record extends RecordType,
  Filters extends FiltersDefinition,
> = (
  selectedItems: {
    allSelected: boolean | "indeterminate"
    itemsStatus: ReadonlyArray<{ item: Record; checked: boolean }>
    filters: FiltersState<Filters>
    selectedCount: number
  },
  clearSelectedItems: () => void
) => void

export type OnBulkActionCallback<
  Record extends RecordType,
  Filters extends FiltersDefinition,
> = (
  ...args: [
    action: BulkAction,
    ...Parameters<OnSelectItemsCallback<Record, Filters>>,
  ]
) => void

export type OnLoadDataCallback<
  Record extends RecordType,
  Filters extends FiltersDefinition,
> = (data: {
  totalItems: number | undefined
  filters: FiltersState<Filters>
  search: string | undefined
  isInitialLoading: boolean
  data: Record[]
}) => void

export type OnLoadErrorCallback = (error: DataError) => void
/**
 * Props for the Collection component.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 * @template VisualizationOptions - Additional options for visualizing the collection
 */
export type CollectionProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  VisualizationOptions extends object,
  Grouping extends GroupingDefinition<Record>,
> = {
  /** The data source configuration and state */
  source: DataSource<
    Record,
    Filters,
    Sortings,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  /** Function to handle item selection */
  onSelectItems: OnSelectItemsCallback<Record, Filters>
  /** Function to handle data load */
  onLoadData: OnLoadDataCallback<Record, Filters>
  onLoadError: OnLoadErrorCallback
} & VisualizationOptions

/**
 * Represents a data source with filtering capabilities and data fetching functionality.
 * Extends DataSourceDefinition with runtime properties for state management.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 */
export type DataSource<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = DataSourceDefinition<
  Record,
  Filters,
  Sortings,
  ItemActions,
  NavigationFilters,
  Grouping
> & {
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
  currentNavigationFilters: NavigationFiltersState<NavigationFilters>
  setCurrentNavigationFilters: React.Dispatch<
    React.SetStateAction<NavigationFiltersState<NavigationFilters>>
  >
  /** Current state of applied grouping */
  currentGrouping?: Grouping["mandatory"] extends true
    ? GroupingState<Grouping>
    : null
  /** Function to update the current grouping state */
  setCurrentGrouping: React.Dispatch<
    React.SetStateAction<GroupingState<Record, Grouping>>
  >
}

/**
 * Utility type for handling both Promise and Observable return types.
 * @template T - The type of the value being promised or observed
 */
export type PromiseOrObservable<T> =
  | T
  | Promise<T>
  | Observable<PromiseState<T>>

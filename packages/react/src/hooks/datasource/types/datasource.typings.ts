import {
  FiltersDefinition,
  FiltersState,
  PresetsDefinition,
} from "@/components/OneFilterPicker/types"
import {
  ItemActionsDefinition,
  NavigationFiltersDefinition,
  NavigationFiltersState,
  PrimaryActionsDefinition,
  SecondaryActionsDefinition,
} from "@/experimental/exports"
import {
  BulkActionDefinition,
  CollectionSearchOptions,
  OnBulkActionCallback,
  SortingsDefinition,
  SortingsState,
  SummariesDefinition,
} from "@/experimental/OneDataCollection/types"
import { DataAdapter } from "./fetch.typings"
import { GroupingDefinition, GroupingState } from "./grouping.typings"
import { RecordType } from "./records.typings"
import { SelectedItemsState } from "./selection.typings"

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
 * @template Summaries - The available summaries for the collection
 */
export type DataSourceDefinition<
  Record extends RecordType = RecordType,
  Filters extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Summaries extends SummariesDefinition = SummariesDefinition,
  ItemActions extends
    ItemActionsDefinition<Record> = ItemActionsDefinition<Record>,
  NavigationFilters extends
    NavigationFiltersDefinition = NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record> = GroupingDefinition<Record>,
> = {
  /** Available filter configurations */
  filters?: Filters
  /** Current state of applied filters */
  currentFilters?: FiltersState<Filters>
  /** Predefined filter configurations that can be applied */
  presets?: PresetsDefinition<Filters>

  /** Navigation filters */
  navigationFilters?: NavigationFilters

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

  /** Available sorting fields. If not provided, sorting is not allowed. */
  sortings?: Sortings
  defaultSorting?: SortingsState<Sortings>
  /** Available summaries fields. If not provided, summaries is not allowed. */
  summaries?: Summaries & {
    label?: string // Optional label for the summaries row
  }
  /** Data adapter responsible for fetching and managing data */
  dataAdapter: DataAdapter<Record, Filters, NavigationFilters>

  /** Selectable items value under the checkbox column (undefined if not selectable) */
  selectable?: (item: Record) => string | number | undefined
  /** Default selected items */
  defaultSelectedItems?: SelectedItemsState
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

/**
 * Represents a data source with filtering capabilities and data fetching functionality.
 * Extends DataSourceDefinition with runtime properties for state management.
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 */
export type DataSource<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = DataSourceDefinition<
  R,
  Filters,
  Sortings,
  Summaries,
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
    ? Exclude<GroupingState<R, Grouping>, undefined>
    : GroupingState<R, Grouping>
  /** Function to update the current grouping state */
  setCurrentGrouping: React.Dispatch<
    React.SetStateAction<GroupingState<R, Grouping>>
  >
  /** Current summaries data */
  currentSummaries?: R
  /** Function to update the current summaries data */
  setCurrentSummaries?: React.Dispatch<React.SetStateAction<R | undefined>>
  /** Function to provide an id for a record, necessary for append mode */
  idProvider?: (item: R, index?: number) => string | number | symbol
}

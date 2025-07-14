import {
  BaseDataAdapter,
  BaseFetchOptions,
  BaseResponse,
  DataSource,
  DataSourceDefinition,
  FiltersDefinition,
  GroupingDefinition,
  PageBasedPaginatedResponse,
  PaginatedDataAdapter,
  PaginatedFetchOptions,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource/types"
import {
  PrimaryActionsDefinition,
  SecondaryActionsDefinition,
} from "../../actions"
import { ItemActionsDefinition } from "../../item-actions"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "../../navigationFilters/types"
import { SummariesDefinition } from "../../summary"
import { BulkActionDefinition, OnBulkActionCallback } from "../../types"

export type DataCollectionSourceDataAdapter<
  R extends RecordType = RecordType,
  Filters extends FiltersDefinition = FiltersDefinition,
  NavigationFilters extends
    NavigationFiltersDefinition = NavigationFiltersDefinition,
> =
  | BaseDataAdapter<
      R,
      Filters,
      BaseFetchOptions<Filters> & {
        navigationFilters: NavigationFilters
      },
      BaseResponse<R>
    >
  | PaginatedDataAdapter<
      R,
      Filters,
      PaginatedFetchOptions<Filters> & {
        navigationFilters: NavigationFilters
      },
      PageBasedPaginatedResponse<R>
    >

export type DataCollectionSourceDefinition<
  R extends RecordType = RecordType,
  Filters extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Summaries extends SummariesDefinition = SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>,
  NavigationFilters extends
    NavigationFiltersDefinition = NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
> = DataSourceDefinition<R, Filters, Sortings, Grouping> & {
  /**
   * Data Collection specific datasource elements / features
   */

  /** Navigation filters */
  navigationFilters?: NavigationFilters
  /** URL for a single item in the collection */
  itemUrl?: (item: R) => string | undefined
  /** Click handler for a single item in the collection */
  itemOnClick?: (item: R) => () => void
  /** Available actions that can be performed on records */
  itemActions?: ItemActions
  /** Available primary actions that can be performed on the collection */
  primaryActions?: PrimaryActionsDefinition
  /** Available secondary actions that can be performed on the collection */
  secondaryActions?: SecondaryActionsDefinition
  /** Available summaries fields. If not provided, summaries is not allowed. */
  summaries?: Summaries & {
    label?: string // Optional label for the summaries row
  }
  // /** Datacolllction data adapter */
  // dataAdapter?: DataCollectionSourceDataAdapter<R, Filters, NavigationFilters>
  /** Bulk actions that can be performed on the collection */
  bulkActions?: (
    selectedItems: Parameters<OnBulkActionCallback<R, Filters>>[1]
  ) => {
    primary: BulkActionDefinition[]
    secondary?: BulkActionDefinition[]
  }
  totalItemSummary?: (totalItems: number) => string
}

export type DataCollectionSource<
  R extends RecordType = RecordType,
  Filters extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Summaries extends SummariesDefinition = SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>,
  NavigationFilters extends
    NavigationFiltersDefinition = NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
> = DataSource<R, Filters, Sortings, Grouping> &
  DataCollectionSourceDefinition<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  > & {
    currentNavigationFilters: NavigationFiltersState<NavigationFilters>
    setCurrentNavigationFilters: React.Dispatch<
      React.SetStateAction<NavigationFiltersState<NavigationFilters>>
    >
    /** Current summaries data */
    currentSummaries?: R
    /** Function to update the current summaries data */
    setCurrentSummaries?: React.Dispatch<React.SetStateAction<R | undefined>>
  }

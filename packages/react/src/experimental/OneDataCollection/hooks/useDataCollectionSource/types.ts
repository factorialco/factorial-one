import {
  DataSourceDefinition,
  FiltersDefinition,
  GroupingDefinition,
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

export type DataCollectionSourceDefinition<
  Record extends RecordType = RecordType,
  Filters extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Summaries extends SummariesDefinition = SummariesDefinition,
  ItemActions extends
    ItemActionsDefinition<Record> = ItemActionsDefinition<Record>,
  NavigationFilters extends
    NavigationFiltersDefinition = NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record> = GroupingDefinition<Record>,
> = DataSourceDefinition<Record, Filters, Sortings, Grouping> & {
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

  /** Available summaries fields. If not provided, summaries is not allowed. */
  summaries?: Summaries & {
    label?: string // Optional label for the summaries row
  }

  /** Bulk actions that can be performed on the collection */
  bulkActions?: (
    selectedItems: Parameters<OnBulkActionCallback<Record, Filters>>[1]
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
> = DataCollectionSourceDefinition<
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

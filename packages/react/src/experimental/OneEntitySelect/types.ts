import type { FiltersDefinition } from "../OneDataCollection/Filters/types"
import type { ItemActionsDefinition } from "../OneDataCollection/item-actions"
import type { NavigationFiltersDefinition } from "../OneDataCollection/navigationFilters/types"
import type {
  DataSource,
  GroupingDefinition,
  OnBulkActionCallback,
  OnSelectItemsCallback,
  RecordType,
  SortingsDefinition,
} from "../OneDataCollection/types"
import type { CustomEmptyStates } from "../OneDataCollection/useEmptyState"
import { SimpleListVisualizationOptions } from "../OneDataCollection/visualizations/collection/SimpleList/types"
import { Visualization } from "../OneDataCollection/visualizations/collection/types"

type PopoverProps = {
  children?: React.ReactNode
  onOpenChange?: (open: boolean) => void
  disabled?: boolean
}

export type ListOnlyVisualization<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = Extract<
  Visualization<
    Record,
    Filters,
    Sortings,
    ItemActions,
    NavigationFilters,
    Grouping
  >,
  {
    type: "simpleList"
    options: SimpleListVisualizationOptions<Record, Filters, Sortings>
  }
>

type DatasourceProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = {
  source: DataSource<
    Record,
    Filters,
    Sortings,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  visualizations: ReadonlyArray<
    ListOnlyVisualization<
      Record,
      Filters,
      Sortings,
      ItemActions,
      NavigationFilters,
      Grouping
    >
  >
  onSelectItems?: OnSelectItemsCallback<Record, Filters>
  onBulkAction?: OnBulkActionCallback<Record, Filters>
  emptyStates?: CustomEmptyStates
  onTotalItemsChange?: (totalItems: number) => void
}

export type OneEntitySelectProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = PopoverProps &
  DatasourceProps<
    Record,
    Filters,
    Sortings,
    ItemActions,
    NavigationFilters,
    Grouping
  >

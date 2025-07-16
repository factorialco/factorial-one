import {
  CollectionProps,
  OnLoadDataCallback,
  OnLoadErrorCallback,
  OnSelectItemsCallback,
} from "../../types"

import { FiltersDefinition } from "../../../../components/OneFilterPicker/types"
import { GroupingDefinition } from "../../grouping"
import { ItemActionsDefinition } from "../../item-actions"
import { NavigationFiltersDefinition } from "../../navigationFilters/types"
import {
  DataSource,
  RecordType,
  SortingsDefinition,
  SummariesDefinition,
} from "../../types"
import {
  collectionVisualizations,
  VisualizacionTypeDefinition,
} from "./collectionViewRegistry"
import { Visualization } from "./types"

/**
 * A component that renders the selected visualization for a collection.
 * Handles switching between different visualization types (table, card, or custom view)
 * and passes appropriate props to the specific visualization component.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template ItemActions - The item actions type extending Item ActionsDefinition
 *
 * @param visualization - The configuration for the current visualization
 * @param source - The data source to visualize
 *
 * @returns The rendered visualization component (TableCollection, CardCollection, or custom component)
 */

export const VisualizationRenderer = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  visualization,
  source,
  onSelectItems,
  onLoadData,
  onLoadError,
}: {
  visualization: Visualization<
    Record,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  source: DataSource<
    Record,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  onSelectItems: OnSelectItemsCallback<Record, Filters>
  onLoadData: OnLoadDataCallback<Record, Filters>
  onLoadError: OnLoadErrorCallback
  clearSelectedItems?: () => void
}): JSX.Element => {
  if (visualization.type === "custom") {
    return visualization.component({
      source,
      onLoadData,
      onLoadError,
      onSelectItems,
    })
  }

  const visualizationType = collectionVisualizations[
    visualization.type
  ] as VisualizacionTypeDefinition<
    CollectionProps<
      Record,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping,
      object
    >
  >

  if (!visualizationType) {
    throw new Error(`Visualization type ${visualization.type} not found`)
  }

  return visualizationType.render({
    source,
    ...visualization.options,
    onSelectItems,
    onLoadData,
    onLoadError,
  })
}

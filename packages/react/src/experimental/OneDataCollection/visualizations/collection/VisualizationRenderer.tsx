import { CollectionProps, OnSelectItemsCallback } from "../../types"

import { FiltersDefinition } from "../../Filters/types"
import { GroupingDefinition } from "../../grouping"
import { ItemActionsDefinition } from "../../item-actions"
import { NavigationFiltersDefinition } from "../../navigationFilters/types"
import { DataSource, RecordType, SortingsDefinition } from "../../types"
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
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  visualization,
  source,
  onSelectItems,
  onTotalItemsChange,
}: {
  visualization: Visualization<
    Record,
    Filters,
    Sortings,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  source: DataSource<
    Record,
    Filters,
    Sortings,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  onSelectItems?: OnSelectItemsCallback<Record, Filters>
  onTotalItemsChange?: (totalItems: number | undefined) => void
  clearSelectedItems?: () => void
}): JSX.Element => {
  if (visualization.type === "custom") {
    return visualization.component({
      source,
      onTotalItemsChange,
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
    onTotalItemsChange,
  })
}

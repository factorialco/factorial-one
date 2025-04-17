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

import { OnSelectItemsCallback } from "../../types"

import { FiltersDefinition } from "../../Filters/types"
import { GroupingDefinition } from "../../grouping"
import { ItemActionsDefinition } from "../../item-actions"
import { DataSource, RecordType, SortingsDefinition } from "../../types"
import { CardCollection } from "./Card"
import { TableCollection } from "./Table"
import { Visualization } from "./types"

export const VisualizationRenderer = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  Grouping extends GroupingDefinition<Record>,
>({
  visualization,
  source,
  onSelectItems,
}: {
  visualization: Visualization<Record, Filters, Sortings, ItemActions, Grouping>
  source: DataSource<Record, Filters, Sortings, ItemActions, Grouping>
  onSelectItems?: OnSelectItemsCallback<Record, Filters>
  clearSelectedItems?: () => void
}): JSX.Element => {
  switch (visualization.type) {
    case "table":
      return (
        <TableCollection<Record, Filters, Sortings, ItemActions, Grouping>
          source={source}
          {...visualization.options}
          onSelectItems={onSelectItems}
        />
      )
    case "card":
      return (
        <CardCollection<Record, Filters, Sortings, ItemActions, Grouping>
          source={source}
          {...visualization.options}
          onSelectItems={onSelectItems}
        />
      )
    case "custom":
      return visualization.component({ source })
  }
}

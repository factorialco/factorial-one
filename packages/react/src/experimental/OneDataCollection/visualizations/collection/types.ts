import { IconType } from "../../../../components/Utilities/Icon"
import type { FiltersDefinition } from "../../Filters/types"
import { ItemActionsDefinition } from "../../item-actions"
import { SortingsDefinition } from "../../sortings"
import type { DataSource, GroupingDefinition, RecordType } from "../../types"
import type { CardVisualizationOptions } from "../../visualizations/collection/Card"
import type { TableVisualizationOptions } from "../../visualizations/collection/Table"

/**
 * Represents a visualization configuration for displaying collection data.
 * Supports different visualization types (card, table, or custom) with their respective options.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template ItemActions - The actions type extending Item ActionsDefinition
 */
export type Visualization<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  Grouping extends GroupingDefinition<Record>,
> =
  | {
      /** Card-based visualization type */
      type: "card"
      /** Configuration options for card visualization */
      options: CardVisualizationOptions<Record, Filters, Sortings>
    }
  | {
      /** Table-based visualization type */
      type: "table"
      /** Configuration options for table visualization */
      options: TableVisualizationOptions<Record, Filters, Sortings>
    }
  | {
      /** Custom visualization type */
      type: "custom"
      /** Human-readable label for the visualization */
      label: string
      /** Icon to represent the visualization in UI */
      icon: IconType
      /** Custom component to render the visualization */
      component: (props: {
        source: DataSource<Record, Filters, Sortings, ItemActions, Grouping>
      }) => JSX.Element
    }

/**
 * Represents the type of visualization.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type VisualizationType = Visualization<any, any, any, any, any>["type"]

/**
 * Props interface for components that support multiple visualizations.
 * Used to configure how data can be displayed in different formats.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template Actions - The actions type extending ActionsDefinition
 */
export type VisualizationProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  Grouping extends GroupingDefinition<Record>,
> = {
  /** Array of available visualization configurations */
  visualizations?: ReadonlyArray<
    Visualization<Record, Filters, Sortings, ItemActions, Grouping>
  >
}

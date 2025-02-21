import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import { useI18n } from "@/lib/i18n-provider"
import { LayoutGrid, Table } from "lucide-react"
import type { CardVisualizationOptions } from "./Card"
import { CardCollection } from "./Card"
import type { FiltersDefinition } from "./Filters/types"
import type { TableVisualizationOptions } from "./Table"
import { TableCollection } from "./Table"
import type { DataSource, RecordType } from "./types"

/**
 * Represents a visualization configuration for displaying collection data.
 * Supports different visualization types (card, table, or custom) with their respective options.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 */
export type Visualization<
  Record extends RecordType,
  Filters extends FiltersDefinition,
> =
  | {
      /** Card-based visualization type */
      type: "card"
      /** Configuration options for card visualization */
      options: CardVisualizationOptions<Record>
    }
  | {
      /** Table-based visualization type */
      type: "table"
      /** Configuration options for table visualization */
      options: TableVisualizationOptions<Record>
    }
  | {
      /** Custom visualization type */
      type: "custom"
      /** Human-readable label for the visualization */
      label: string
      /** Icon to represent the visualization in UI */
      icon: IconType
      /** Custom component to render the visualization */
      component: (props: { source: DataSource<Record, Filters> }) => JSX.Element
    }

/**
 * Props interface for components that support multiple visualizations.
 * Used to configure how data can be displayed in different formats.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 */
export type VisualizationProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
> = {
  /** Array of available visualization configurations */
  visualizations?: ReadonlyArray<Visualization<Record, Filters>>
}

/**
 * A component that renders a selector for switching between different visualization types.
 * Provides buttons for each available visualization with appropriate icons.
 *
 * @template Schema - The schema type extending CollectionSchema
 * @template Filters - The filters type extending FiltersDefinition
 *
 * @param visualizations - Array of available visualizations
 * @param currentVisualization - Index of the currently selected visualization
 * @param onVisualizationChange - Callback function when visualization selection changes
 *
 * @returns A row of buttons for switching between visualizations
 */
export const VisualizationSelector = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
>({
  visualizations,
  currentVisualization,
  onVisualizationChange,
}: {
  visualizations: ReadonlyArray<Visualization<Record, Filters>>
  currentVisualization: number
  onVisualizationChange: (index: number) => void
}): JSX.Element => {
  const i18n = useI18n()

  return (
    <div className="flex gap-2">
      {visualizations.map((visualization, index) => {
        const isSelected = currentVisualization === index
        const Icon =
          visualization.type === "custom"
            ? visualization.icon
            : visualization.type === "table"
              ? Table
              : LayoutGrid

        return (
          <Button
            key={visualization.type}
            variant={isSelected ? "default" : "outline"}
            onClick={() => onVisualizationChange(index)}
            label={
              visualization.type === "custom"
                ? visualization.label
                : i18n.collections.visualizations[visualization.type]
            }
            icon={Icon}
          />
        )
      })}
    </div>
  )
}

/**
 * A component that renders the selected visualization for a collection.
 * Handles switching between different visualization types (table or card view)
 * and passes appropriate props to the specific visualization component.
 *
 * @template Schema - The schema type extending CollectionSchema
 * @template Filters - The filters type extending FiltersDefinition
 *
 * @param visualization - The configuration for the current visualization
 * @param source - The data source to visualize
 *
 * @returns The rendered visualization component (TableCollection or CardCollection)
 */
export const VisualizationRenderer = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
>({
  visualization,
  source,
}: {
  visualization: Visualization<Record, Filters>
  source: DataSource<Record, Filters>
}): JSX.Element => {
  switch (visualization.type) {
    case "table":
      return (
        <TableCollection<Record, Filters>
          source={source}
          {...visualization.options}
        />
      )
    case "card":
      return (
        <CardCollection<Record, Filters>
          source={source}
          {...visualization.options}
        />
      )
    case "custom":
      return visualization.component({ source })
  }
}

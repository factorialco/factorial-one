import { Button } from "@/components/Actions/Button"
import { useI18n } from "@/lib/i18n-provider"
import { LayoutGrid, LucideIcon, Table } from "lucide-react"
import type { CardVisualizationOptions } from "./Card"
import { CardCollection } from "./Card"
import type { FiltersDefinition } from "./Filters/types"
import type { TableVisualizationOptions } from "./Table"
import { TableCollection } from "./Table"
import type { CollectionSchema, DataSource, SourceData } from "./types"

/**
 * Represents a visualization configuration for displaying collection data.
 * Supports different visualization types (card, table, or custom) with their respective options.
 *
 * @template Schema - The schema type extending CollectionSchema
 * @template Filters - The filters type extending FiltersDefinition
 */
export type Visualization<
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
> =
  | {
      type: "card"
      options: CardVisualizationOptions<SourceData<Schema, Filters>>
    }
  | {
      type: "table"
      options: TableVisualizationOptions<SourceData<Schema, Filters>>
    }
  | {
      type: "custom"
      label: string
      icon: LucideIcon
      component: (props: { source: DataSource<Schema, Filters> }) => JSX.Element
    }

/**
 * Props interface for components that support multiple visualizations.
 *
 * @template Schema - The schema type extending CollectionSchema
 * @template Filters - The filters type extending FiltersDefinition
 */
export type VisualizationProps<
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
> = {
  visualizations?: ReadonlyArray<Visualization<Schema, Filters>>
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
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
>({
  visualizations,
  currentVisualization,
  onVisualizationChange,
}: {
  visualizations: ReadonlyArray<Visualization<Schema, Filters>>
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
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
>({
  visualization,
  source,
}: {
  visualization: Visualization<Schema, Filters>
  source: DataSource<Schema, Filters>
}): JSX.Element => {
  switch (visualization.type) {
    case "table":
      return (
        <TableCollection<Schema, Filters>
          source={source}
          columns={visualization.options.columns}
        />
      )
    case "card":
      return (
        <CardCollection<Schema, Filters>
          source={source}
          cardProperties={visualization.options.cardProperties}
        />
      )
    case "custom":
      return visualization.component({ source })
  }
}

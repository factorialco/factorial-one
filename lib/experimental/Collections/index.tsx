import { useMemo, useState } from "react"
import { ActionsDefinition } from "./actions"
import { Filters } from "./Filters"
import type { FiltersDefinition, FiltersState } from "./Filters/types"
import type { DataSource, DataSourceDefinition, RecordType } from "./types"
import type { Visualization } from "./visualizations"
import { VisualizationRenderer, VisualizationSelector } from "./visualizations"

/**
 * A hook that manages data source state and filtering capabilities for a collection.
 * It handles the initialization and management of filter states, and provides
 * a consistent interface for data fetching with the current filters.
 *
 * @template Schema - The schema defining the structure and types of the collection data
 * @template Filters - The definition of available filters for the collection
 *
 * @param properties - The schema properties defining the data structure
 * @param filters - Optional filter configurations for the collection
 * @param currentFilters - Initial state of the filters
 * @param fetchData - Function to fetch data with the current filters
 *
 * @returns A DataSource object containing:
 * - properties: The schema properties
 * - filters: The available filter configurations
 * - currentFilters: The current state of the filters
 * - setCurrentFilters: Function to update the filter state
 * - fetchData: Function to fetch data with the current filters
 */
export const useDataSource = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Actions extends ActionsDefinition<Record>,
>(
  {
    filters,
    currentFilters: initialCurrentFilters = {},
    dataAdapter,
    actions,
    presets,
  }: DataSourceDefinition<Record, Filters, Actions>,
  deps: ReadonlyArray<unknown> = []
): DataSource<Record, Filters, Actions> => {
  const [currentFilters, setCurrentFilters] = useState<FiltersState<Filters>>(
    initialCurrentFilters
  )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedFilters = useMemo(() => filters, deps)

  return {
    filters: memoizedFilters,
    currentFilters,
    setCurrentFilters,
    dataAdapter,
    actions,
    presets,
  }
}

/**
 * A component that renders a collection of data with filtering and visualization capabilities.
 * It combines filters, data fetching, and multiple visualization options into a cohesive interface.
 *
 * @template Schema - The schema defining the structure and types of the collection data
 * @template Filters - The definition of available filters for the collection
 *
 * @param source - The data source containing properties, filters, and data fetching capabilities
 * @param visualizations - Array of available visualization options (e.g., table, card view)
 *
 * @returns A JSX element containing:
 * - Filter controls (if filters are defined)
 * - Visualization selector (if multiple visualizations are available)
 * - The selected visualization of the data
 */
export const DataCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Actions extends ActionsDefinition<Record>,
>({
  source,
  visualizations,
}: {
  source: DataSource<Record, Filters, Actions>
  visualizations: ReadonlyArray<Visualization<Record, Filters, Actions>>
}): JSX.Element => {
  const { filters, currentFilters, setCurrentFilters } = source
  const [currentVisualization, setCurrentVisualization] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between">
        {filters && (
          <Filters
            schema={filters}
            filters={currentFilters}
            presets={source.presets}
            onChange={setCurrentFilters}
          />
        )}
        {visualizations && visualizations.length > 1 && (
          <VisualizationSelector
            visualizations={visualizations}
            currentVisualization={currentVisualization}
            onVisualizationChange={setCurrentVisualization}
          />
        )}
      </div>
      <VisualizationRenderer
        visualization={visualizations[currentVisualization]}
        source={source}
      />
    </div>
  )
}

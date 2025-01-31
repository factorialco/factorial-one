import { useMemo, useState } from "react"
import { Filters } from "./Filters"
import type { FiltersDefinition, FiltersState } from "./Filters/types"
import type {
  CollectionSchema,
  DataSource,
  DataSourceResult,
  SourceData,
} from "./types"
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
 * @param initialCurrentFilters - Initial state of the filters
 * @param fetchDataFn - Function to fetch data with the current filters
 *
 * @returns A DataSource object containing:
 * - properties: The schema properties
 * - filters: The available filter configurations
 * - currentFilters: The current state of the filters
 * - setCurrentFilters: Function to update the filter state
 * - fetchData: Function to fetch data with the current filters
 */
export const useDataSource = <
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
>({
  properties,
  filters,
  currentFilters: initialCurrentFilters,
  fetchData: fetchDataFn,
}: {
  properties: Schema
  filters?: { fields?: Filters }
  currentFilters?: FiltersState<Filters>
  fetchData: (options: {
    filters: FiltersState<Filters>
  }) => DataSourceResult<SourceData<Schema, Filters>>
}): DataSource<Schema, Filters> => {
  const [currentFilters, setCurrentFilters] = useState<FiltersState<Filters>>(
    (initialCurrentFilters ?? {}) as FiltersState<Filters>
  )

  const fetchData = useMemo(() => fetchDataFn, [fetchDataFn])

  return {
    properties,
    filters: filters ?? {},
    currentFilters,
    setCurrentFilters,
    fetchData,
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
 * @param defaultVisualization - The index of the default visualization to show
 *
 * @returns A JSX element containing:
 * - Filter controls (if filters are defined)
 * - Visualization selector (if multiple visualizations are available)
 * - The selected visualization of the data
 */
export const DataCollection = <
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
>({
  source,
  visualizations,
  defaultVisualization = 0,
}: {
  source: DataSource<Schema, Filters>
  visualizations: ReadonlyArray<Visualization<Schema, Filters>>
  defaultVisualization?: number
}): JSX.Element => {
  const { filters, currentFilters, setCurrentFilters } = source
  const fields = filters?.fields
  const [currentVisualization, setCurrentVisualization] =
    useState(defaultVisualization)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        {fields && (
          <Filters<Filters>
            definition={fields}
            filters={currentFilters}
            onChange={setCurrentFilters}
          />
        )}
        {visualizations && visualizations.length > 1 && (
          <VisualizationSelector<Schema, Filters>
            visualizations={visualizations}
            currentVisualization={currentVisualization}
            onVisualizationChange={setCurrentVisualization}
          />
        )}
      </div>
      <VisualizationRenderer<Schema, Filters>
        visualization={visualizations[currentVisualization]}
        source={source}
      />
    </div>
  )
}

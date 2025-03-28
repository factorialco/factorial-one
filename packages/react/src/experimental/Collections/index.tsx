import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import { Icon } from "../../components/Utilities/Icon"
import { Spinner } from "../../icons/app"
import { CollectionActions } from "./CollectionActions/ColletionActions"
import { Filters } from "./Filters"
import type { FiltersDefinition, FiltersState } from "./Filters/types"
import { ItemActionsDefinition } from "./item-actions"
import { Search } from "./search"
import { SortingsDefinition, SortingsState } from "./sortings"
import type {
  CollectionSearchOptions,
  DataSource,
  DataSourceDefinition,
  RecordType,
} from "./types"
import type { Visualization } from "./visualizations"
import { VisualizationRenderer, VisualizationSelector } from "./visualizations"

/**
 * A hook that manages data source state and filtering capabilities for a collection.
 * It creates and returns a reusable data source that can be shared across different
 * visualizations and components.
 *
 * This hook is intentionally separated from the rendering components to:
 * 1. Enable sharing the same data source across multiple components
 * 2. Allow for state management outside the rendering layer
 * 3. Support more complex data filtering, querying, and pagination logic
 * 4. Provide a clean separation between data management and visualization
 *
 * @template Record - The type of records in the collection
 * @template Filters - The definition of available filters for the collection
 * @template ItemActions - The definition of available item actions
 * @template Actions - The definition of available actions for the collection
 *
 * @param options - Configuration object containing:
 *   - filters: Optional filter configurations for the collection
 *   - currentFilters: Initial state of the filters
 *   - dataAdapter: Adapter for data fetching and manipulation
 *   - itemActions: Optional item actions available
 *   - actions: Optional DataCollection actions
 *   - presets: Optional filter presets
 * @param deps - Dependency array for memoization, similar to useEffect dependencies
 *
 * @returns A DataSource object containing:
 * - filters: The available filter configurations
 * - currentFilters: The current state of the filters
 * - setCurrentFilters: Function to update the filter state
 * - dataAdapter: The data adapter for fetching/manipulating data
 * - itemActions: Available actions for records (items)
 * - actions: Available actions for the collection
 * - presets: Available filter presets
 */
export const useDataSource = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
>(
  {
    currentFilters: initialCurrentFilters = {},
    filters,
    search,
    defaultSorting,
    dataAdapter,
    ...rest
  }: DataSourceDefinition<Record, Filters, Sortings, ItemActions>,
  deps: ReadonlyArray<unknown> = []
): DataSource<Record, Filters, Sortings, ItemActions> => {
  const [currentFilters, setCurrentFilters] = useState<FiltersState<Filters>>(
    initialCurrentFilters
  )

  const [currentSortings, setCurrentSortings] =
    useState<SortingsState<Sortings> | null>(defaultSorting || null)

  const searchOptions = {
    enabled: false,
    sync: false,
    ...search,
  } satisfies CollectionSearchOptions

  const [currentSearch, setCurrentSearch] = useState<string | undefined>()

  const [debouncedCurrentSearch, setDebouncedCurrentSearch] = useDebounceValue<
    string | undefined
  >(currentSearch, 200)

  useEffect(() => {
    if (searchOptions.sync) return
    setDebouncedCurrentSearch(currentSearch)
  }, [currentSearch, searchOptions.sync, setDebouncedCurrentSearch])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedFilters = useMemo(() => filters, deps)

  const [isLoading, setIsLoading] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedDataAdapter = useMemo(() => dataAdapter, deps)

  return {
    filters: memoizedFilters,
    currentFilters,
    setCurrentFilters,
    currentSortings,
    setCurrentSortings,
    search,
    currentSearch,
    setCurrentSearch,
    debouncedCurrentSearch,
    isLoading,
    setIsLoading,
    dataAdapter: memoizedDataAdapter,
    ...rest,
  }
}

const MotionIcon = motion(Icon)

/**
 * A component that renders a collection of data with filtering and visualization capabilities.
 * It consumes a data source (created by useDataSource) and displays it through one or more visualizations.
 *
 * DataCollection is separated from useDataSource to:
 * 1. Support the composition pattern - data sources can be created and managed independently
 * 2. Allow a single data source to be visualized in multiple ways simultaneously
 * 3. Enable reuse of the same data source in different parts of the application
 * 4. Provide a clean separation of concerns between data management and UI rendering
 *
 * @template Record - The type of records in the collection
 * @template Filters - The definition of available filters for the collection
 * @template ItemActions - The definition of available item actions
 *
 * @param source - The data source containing filters, data, and state management
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
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
>({
  source,
  visualizations,
}: {
  source: DataSource<Record, Filters, Sortings, ItemActions>
  visualizations: ReadonlyArray<Visualization<Record, Filters, Sortings>>
}): JSX.Element => {
  const {
    filters,
    currentFilters,
    setCurrentFilters,
    search,
    currentSearch,
    setCurrentSearch,
    isLoading,
    primaryActions,
    secondaryActions,
  } = source
  const [currentVisualization, setCurrentVisualization] = useState(0)

  const primaryActionItem = useMemo(
    () => primaryActions && primaryActions(),
    [primaryActions]
  )

  const secondaryActionsItems = useMemo(
    () => (secondaryActions && secondaryActions()) || [],
    [secondaryActions]
  )

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
        <div className="shrink-1 grow-1 flex"></div>
        <div className="flex shrink-0 items-center gap-2">
          <AnimatePresence initial={false}>
            {isLoading && (
              <MotionIcon
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                }}
                size="lg"
                icon={Spinner}
                className="animate-spin"
              />
            )}
          </AnimatePresence>
          {search && (
            <Search onChange={setCurrentSearch} value={currentSearch} />
          )}
          {visualizations && visualizations.length > 1 && (
            <VisualizationSelector
              visualizations={visualizations}
              currentVisualization={currentVisualization}
              onVisualizationChange={setCurrentVisualization}
            />
          )}
          {(primaryActionItem || secondaryActionsItems) && (
            <CollectionActions
              primaryActions={primaryActionItem}
              secondaryActions={secondaryActionsItems}
            />
          )}
        </div>
      </div>
      <VisualizationRenderer
        visualization={visualizations[currentVisualization]}
        source={source}
      />
    </div>
  )
}

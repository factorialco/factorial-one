import {
  ItemActionsDefinition,
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "@/experimental/OneDataCollection/exports"
import { navigationFilterTypes } from "@/experimental/OneDataCollection/navigationFilters"
import {
  CollectionSearchOptions,
  SummariesDefinition,
} from "@/experimental/OneDataCollection/types"
import { useEffect, useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import {
  DataSource,
  DataSourceDefinition,
  FiltersDefinition,
  FiltersState,
  GroupingDefinition,
  GroupingState,
  PaginationType,
  RecordType,
  SortingsDefinition,
  SortingsState,
} from "./types"

/**
 * Get the pagination type of a data adapter
 * @param dataAdapter - The data adapter to get the pagination type of
 * @returns The pagination type of the data adapter
 */

export const getDataSourcePaginationType = <
  D extends { paginationType?: PaginationType | undefined | never },
>(
  dataAdapter: D
): PaginationType => {
  return dataAdapter.paginationType ?? "no-pagination"
}

/**
 * Create a data source definition from a data source definition
 * This function is a helper to allow to infer the type of the data source definition
 * from the data source definition.
 *
 * @param definition - The data source definition to create from
 * @returns The created data source definition
 */
export const createDataSourceDefinition = <
  R extends RecordType = RecordType,
  FiltersSchema extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Summaries extends SummariesDefinition = SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>,
  NavigationFilters extends
    NavigationFiltersDefinition = NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
>(
  definition: DataSourceDefinition<
    R,
    FiltersSchema,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
): DataSourceDefinition<
  R,
  FiltersSchema,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
> => {
  return definition
}

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
 * @template R - The type of records in the collection
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
  R extends RecordType = RecordType,
  FiltersSchema extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Summaries extends SummariesDefinition = SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>,
  NavigationFilters extends
    NavigationFiltersDefinition = NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
>(
  {
    currentFilters: initialCurrentFilters = {},
    currentGrouping: initialCurrentGrouping,
    filters,
    navigationFilters,
    search,
    defaultSorting,
    summaries,
    dataAdapter,
    grouping,
    ...rest
  }: DataSourceDefinition<
    R,
    FiltersSchema,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >,
  deps: ReadonlyArray<unknown> = []
): DataSource<
  R,
  FiltersSchema,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
> => {
  const [currentFilters, setCurrentFilters] = useState<
    FiltersState<FiltersSchema>
  >(initialCurrentFilters)

  const [currentNavigationFilters, setCurrentNavigationFilters] = useState<
    NavigationFiltersState<NavigationFilters>
  >(() => {
    if (!navigationFilters) {
      return {} as NavigationFiltersState<NavigationFilters>
    }

    return Object.fromEntries(
      Object.entries(navigationFilters).map(([key, filter]) => {
        const filterType = navigationFilterTypes[filter.type]
        return [
          key,
          filterType.valueConverter
            ? filterType.valueConverter(filter.defaultValue, filter)
            : filter.defaultValue,
        ]
      })
    ) as NavigationFiltersState<NavigationFilters>
  })

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedSummaries = useMemo(() => summaries, deps)

  const [isLoading, setIsLoading] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedDataAdapter = useMemo(() => dataAdapter, deps)

  const defaultGrouping = grouping?.mandatory
    ? {
        field: Object.keys(
          grouping.groupBy
        )[0] as keyof typeof grouping.groupBy,
        order: "asc" as const,
      }
    : undefined

  const [currentGrouping, setCurrentGrouping] = useState<
    GroupingState<R, Grouping>
  >(initialCurrentGrouping ?? defaultGrouping)

  // For mandatory grouping, ensure we have a valid grouping state
  if (grouping?.mandatory && !currentGrouping?.field) {
    throw new Error("Grouping is mandatory but no grouping state is set")
  }

  return {
    ...rest,
    filters: memoizedFilters,
    currentFilters,
    setCurrentFilters,
    currentSortings,
    setCurrentSortings,
    summaries: memoizedSummaries,
    search,
    currentSearch,
    setCurrentSearch,
    debouncedCurrentSearch,
    isLoading,
    setIsLoading,
    dataAdapter: memoizedDataAdapter,
    navigationFilters,
    currentNavigationFilters,
    setCurrentNavigationFilters,
    setCurrentGrouping,
    currentGrouping,
    grouping,
  }
}

import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import { Icon } from "../../components/Utilities/Icon"
import { Spinner } from "../../icons/app"
import { OneActionBar } from "../OneActionBar"
import { CollectionActions } from "./CollectionActions/ColletionActions"
import { FiltersChipsList } from "./Filters/Components/FiltersChipsList"
import { FiltersControls } from "./Filters/Components/FiltersControls"
import type { FiltersDefinition, FiltersState } from "./Filters/types"
import { ItemActionsDefinition } from "./item-actions"
import { Search } from "./search"
import { SortingsDefinition, SortingsState } from "./sortings"
import type {
  BulkActionDefinition,
  CollectionSearchOptions,
  DataSource,
  DataSourceDefinition,
  OnBulkActionCallback,
  OnSelectItemsCallback,
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
export const OneDataCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
>({
  source,
  visualizations,
  onSelectItems,
  onBulkAction,
}: {
  source: DataSource<Record, Filters, Sortings, ItemActions>
  visualizations: ReadonlyArray<Visualization<Record, Filters, Sortings>>
  onSelectItems?: OnSelectItemsCallback<Record, Filters>
  onBulkAction?: OnBulkActionCallback<Record, Filters>
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
    presets,
  } = source
  const [currentVisualization, setCurrentVisualization] = useState(0)
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const primaryActionItem = useMemo(
    () => primaryActions && primaryActions(),
    [primaryActions]
  )

  const secondaryActionsItems = useMemo(
    () => (secondaryActions && secondaryActions()) || [],
    [secondaryActions]
  )

  const handleFilterChange = (key: keyof Filters, value: unknown) => {
    setCurrentFilters((prev) => ({ ...prev, [key]: value }))
  }

  const handleFilterRemove = (key: keyof Filters) => {
    setCurrentFilters((prev) => ({ ...prev, [key]: undefined }))
  }

  const handleFilterSelect = () => {
    setIsFiltersOpen(true)
  }

  const handleClearAll = () => {
    setCurrentFilters({})
  }
  const [clearSelectedItemsFunc, setClearSelectedItemsFunc] = useState<
    (() => void) | undefined
  >(undefined)

  /**
   * Bulk actions
   */
  const [bulkActions, setBulkActions] = useState<
    | {
        primary: BulkActionDefinition[]
        secondary?: BulkActionDefinition[]
      }
    | undefined
  >(undefined)

  const [showActionBar, setShowActionBar] = useState(false)

  const [selectedItemsCount, setSelectedItemsCount] = useState(0)

  const onSelectItemsLocal: OnSelectItemsCallback<Record, Filters> = (
    selectedItems,
    clearSelectedItems
  ): void => {
    onSelectItems?.(selectedItems, clearSelectedItems)

    /**
     * Show action bar
     */
    setShowActionBar(
      !!selectedItems.allSelected ||
        selectedItems.itemsStatus.some((item) => item.checked)
    )

    /**
     * Selected items count
     */
    setSelectedItemsCount(selectedItems.selectedCount)

    /**
     * Clear selected items function
     */
    setClearSelectedItemsFunc(() => clearSelectedItems)

    /**
     * Bulk actions for the action bar
     */
    const bulkActions = source.bulkActions
      ? source.bulkActions(selectedItems)
      : undefined

    const mapBulkActions = (action: BulkActionDefinition) => ({
      ...action,
      onClick: () => {
        onBulkAction?.(action.id, selectedItems, clearSelectedItems)
        if (!action.keepSelection) {
          clearSelectedItems()
        }
      },
    })

    setBulkActions({
      primary: (bulkActions?.primary || []).map(mapBulkActions),
      secondary: (bulkActions?.secondary || []).map(mapBulkActions),
    })
    /** */
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        {filters && (
          <div className="flex-1">
            <FiltersControls
              filters={filters}
              currentFilters={currentFilters}
              onFilterChange={handleFilterChange}
              presets={presets}
              onPresetsChange={setCurrentFilters}
              isOpen={isFiltersOpen}
              onOpenChange={setIsFiltersOpen}
            />
          </div>
        )}
        <div className="shrink-1 grow-1 flex"></div>
        <div className="flex shrink-0 items-center gap-2">
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
      {filters && (
        <FiltersChipsList
          filters={filters}
          currentFilters={currentFilters}
          onFilterSelect={handleFilterSelect}
          onFilterRemove={handleFilterRemove}
          onClearAll={handleClearAll}
        />
      )}
      <VisualizationRenderer
        visualization={visualizations[currentVisualization]}
        source={source}
        onSelectItems={onSelectItemsLocal}
      />
      {bulkActions?.primary && (bulkActions?.primary || []).length > 0 && (
        <OneActionBar
          isOpen={showActionBar}
          selectedNumber={selectedItemsCount}
          primaryActions={bulkActions.primary}
          secondaryActions={bulkActions?.secondary}
          onUnselect={() => clearSelectedItemsFunc?.()}
        />
      )}
    </div>
  )
}

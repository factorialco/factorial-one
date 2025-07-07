import { useLayout } from "@/components/layouts/LayoutProvider"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useEffect, useMemo, useState } from "react"
import { Icon } from "../../components/Utilities/Icon"
import { Spinner } from "../../icons/app"

import { OneEmptyState } from "@/experimental/OneEmptyState"
import { Skeleton } from "@/ui/skeleton"
import { OneActionBar } from "../OneActionBar"
import { getSecondaryActions, MAX_EXPANDED_ACTIONS } from "./actions"
import { CollectionActions } from "./CollectionActions/CollectionActions"
import * as Filters from "./Filters"
import type { FiltersDefinition, FiltersState } from "./Filters/types"
import { ItemActionsDefinition } from "./item-actions"
import { navigationFilterTypes } from "./navigationFilters"
import { NavigationFiltersDefinition } from "./navigationFilters/types"
import { Search } from "./search"
import { Settings } from "./Settings"
import { SortingsDefinition } from "./sortings"
import { SummariesDefinition } from "./summary"
import type {
  BulkActionDefinition,
  DataSource,
  GroupingDefinition,
  OnBulkActionCallback,
  OnLoadDataCallback,
  OnSelectItemsCallback,
  RecordType,
} from "./types"
import { DataError } from "./useData"
import { CustomEmptyStates, useEmptyState } from "./useEmptyState"

import type { Visualization } from "./visualizations/collection"
import { VisualizationRenderer } from "./visualizations/collection"

const MotionIcon = motion.create(Icon)

export { useDataSource } from "./useDataSource"

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
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  source,
  visualizations,
  onSelectItems,
  onBulkAction,
  emptyStates,
  fullHeight,
}: {
  source: DataSource<
    Record,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  visualizations: ReadonlyArray<
    Visualization<
      Record,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >
  >
  onSelectItems?: OnSelectItemsCallback<Record, Filters>
  onBulkAction?: OnBulkActionCallback<Record, Filters>
  emptyStates?: CustomEmptyStates
  onTotalItemsChange?: (totalItems: number) => void
  fullHeight?: boolean
}): JSX.Element => {
  const {
    // Filters
    filters,
    currentFilters,
    setCurrentFilters,
    presets,
    // Navigation filter
    currentNavigationFilters,
    navigationFilters,
    setCurrentNavigationFilters,
    // Search
    search,
    currentSearch,
    setCurrentSearch,
    //
    isLoading,
    // Actions
    primaryActions,
    secondaryActions,
    // Summary
    totalItemSummary = (totalItems: number | undefined) =>
      totalItems === undefined
        ? `${totalItems} ${i18n.collections.itemsCount}`
        : null,
    currentGrouping,
    setCurrentGrouping,
    grouping,
    currentSortings,
    setCurrentSortings,
    sortings,
  } = source
  const [currentVisualization, setCurrentVisualization] = useState(0)

  const primaryActionItem = useMemo(
    () => primaryActions && primaryActions(),
    [primaryActions]
  )

  const allSecondaryActions = useMemo(
    () => getSecondaryActions(secondaryActions),
    [secondaryActions]
  )

  const expandedSecondaryActions = useMemo(
    () =>
      Math.min(
        (secondaryActions &&
          "expanded" in secondaryActions &&
          secondaryActions.expanded) ||
          0,
        MAX_EXPANDED_ACTIONS
      ),
    [secondaryActions]
  )

  const secondaryActionsItems = useMemo(
    () => allSecondaryActions.slice(0, expandedSecondaryActions) || [],
    [allSecondaryActions, expandedSecondaryActions]
  )

  const otherActionsItems = useMemo(
    () => allSecondaryActions.slice(expandedSecondaryActions),
    [allSecondaryActions, expandedSecondaryActions]
  )

  const hasCollectionsActions =
    !!primaryActionItem || allSecondaryActions?.length > 0

  const [clearSelectedItemsFunc, setClearSelectedItemsFunc] = useState<
    (() => void) | undefined
  >(undefined)

  const layout = useLayout()

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

  const i18n = useI18n()

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
  }

  const elementsRightActions = useMemo(() => {
    return [
      isLoading,
      search?.enabled,
      visualizations && visualizations.length > 1,
    ].some(Boolean)
  }, [search, isLoading, visualizations])

  const [totalItems, setTotalItems] = useState<undefined | number>(undefined)

  const { emptyState, setEmptyStateType } = useEmptyState(emptyStates, {
    retry: () => {
      setEmptyStateType(false)
      setCurrentFilters({ ...currentFilters })
    },
    clearFilters: () => {
      setEmptyStateType(false)
      setCurrentFilters({})
    },
  })

  const getEmptyStateType = (
    totalItems: number | undefined,
    filters: FiltersState<Filters>,
    search: string | undefined
  ) => {
    return totalItems === 0
      ? Object.keys(filters).length > 0 || search
        ? "no-results"
        : "no-data"
      : false
  }

  const onLoadData = ({
    totalItems,
    filters,
    isInitialLoading,
    search,
  }: Parameters<OnLoadDataCallback<Record, Filters>>[0]) => {
    if (isInitialLoading) return

    setTotalItems(totalItems)
    setEmptyStateType(getEmptyStateType(totalItems, filters, search))
  }

  const onLoadError = (error: DataError) => {
    setEmptyStateType(
      "error",
      error.cause instanceof Error ? error.cause.message : error.message
    )
  }

  useEffect(() => {
    setEmptyStateType(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- This is intentional we should remove the empty state when the filters, search, navigation filters change
  }, [
    currentFilters,
    currentSearch,
    currentNavigationFilters,
    source.dataAdapter,
  ])

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        layout === "standard" && "-mx-6",
        fullHeight && "h-full"
      )}
    >
      {((totalItems !== undefined && totalItemSummary(totalItems)) ||
        navigationFilters) && (
        <div className="border-f1-border-primary flex gap-4 px-6">
          <div className="flex flex-1 flex-shrink gap-4 text-lg font-semibold">
            {isLoading &&
              totalItems !== undefined &&
              totalItemSummary(totalItems) && <Skeleton className="h-5 w-24" />}
            {!isLoading && totalItems !== undefined && (
              <div className="flex h-5 items-center">
                {totalItemSummary(totalItems)}
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-shrink justify-end">
            {navigationFilters &&
              Object.entries(navigationFilters).map(([key, filter]) => {
                const filterDef = navigationFilterTypes[filter.type]
                return filterDef.render({
                  filter: filter,
                  value: currentNavigationFilters[key]!,
                  onChange: (value) => {
                    setCurrentNavigationFilters({
                      ...currentNavigationFilters,
                      [key]: value,
                    })
                  },
                })
              })}
          </div>
        </div>
      )}
      <div
        className={cn("flex flex-col gap-4 px-6", fullHeight && "max-h-full")}
      >
        <Filters.Root
          schema={filters}
          filters={currentFilters}
          presets={presets}
          onChange={(value) =>
            setCurrentFilters(value as FiltersState<Filters>)
          }
        >
          <div
            className={cn(
              "flex items-center justify-between gap-4",
              !filters && "justify-end"
            )}
          >
            {filters && (
              <div className="flex min-w-0 flex-1 gap-1">
                <Filters.Controls />
                <Filters.Presets />
              </div>
            )}
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
              <Settings
                visualizations={visualizations}
                currentVisualization={currentVisualization}
                onVisualizationChange={setCurrentVisualization}
                grouping={grouping}
                currentGrouping={currentGrouping}
                onGroupingChange={setCurrentGrouping}
                sortings={sortings}
                currentSortings={currentSortings}
                onSortingsChange={setCurrentSortings}
              ></Settings>
              {hasCollectionsActions && (
                <>
                  {elementsRightActions && (
                    <div className="mx-1 h-4 w-px bg-f1-background-secondary-hover" />
                  )}
                  <CollectionActions
                    primaryActions={primaryActionItem}
                    secondaryActions={secondaryActionsItems}
                    otherActions={otherActionsItems}
                  />
                </>
              )}
            </div>
          </div>
          <Filters.ChipsList />
        </Filters.Root>
      </div>

      {/* Visualization renderer must be always mounted to react (load data) even if empty state is shown */}
      <div className={cn(emptyState && "hidden", fullHeight && "h-full")}>
        <VisualizationRenderer
          visualization={visualizations[currentVisualization]}
          source={source}
          onSelectItems={onSelectItemsLocal}
          onLoadData={onLoadData}
          onLoadError={onLoadError}
        />
      </div>

      {emptyState ? (
        <div className="flex flex-1 flex-col items-center justify-center">
          <OneEmptyState
            emoji={emptyState.emoji}
            title={emptyState.title}
            description={emptyState.description}
            actions={emptyState.actions}
          />
        </div>
      ) : (
        <>
          {bulkActions?.primary && (bulkActions?.primary || []).length > 0 && (
            <OneActionBar
              isOpen={showActionBar}
              selectedNumber={selectedItemsCount}
              primaryActions={bulkActions.primary}
              secondaryActions={bulkActions?.secondary}
              onUnselect={() => clearSelectedItemsFunc?.()}
            />
          )}
        </>
      )}
    </div>
  )
}

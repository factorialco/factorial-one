import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useState } from "react"
import { Trigger } from "../Forms/EntitySelect/Trigger"
import type {
  FiltersDefinition,
  FiltersState,
} from "../OneDataCollection/Filters/types"
import type { ItemActionsDefinition } from "../OneDataCollection/item-actions"
import type { NavigationFiltersDefinition } from "../OneDataCollection/navigationFilters/types"
import type {
  GroupingDefinition,
  OnLoadDataCallback,
  OnSelectItemsCallback,
  RecordType,
  SortingsDefinition,
} from "../OneDataCollection/types"
import { DataError } from "../OneDataCollection/useData"
import { useEmptyState } from "../OneDataCollection/useEmptyState"
import { VisualizationRenderer } from "../OneDataCollection/visualizations/collection/VisualizationRenderer"
import { OneEmptyState } from "../OneEmptyState"
import type { OneEntitySelectProps } from "./types"

export function OneEntitySelect<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  children,
  onOpenChange,
  disabled,
  source,
  visualizations,
  onSelectItems,
  onBulkAction,
  emptyStates,
  onTotalItemsChange,
}: OneEntitySelectProps<
  Record,
  Filters,
  Sortings,
  ItemActions,
  NavigationFilters,
  Grouping
>) {
  const i18n = useI18n()
  const [open, setOpen] = useState(false)
  const {
    // Filters
    filters,
    currentFilters: initialCurrentFilters = {},
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
    currentGrouping: initialCurrentGrouping,
    setCurrentGrouping,
    grouping,
    currentSortings,
    setCurrentSortings,
    sortings,
  } = source

  const { emptyState, setEmptyStateType } = useEmptyState(emptyStates, {
    retry: () => {
      setEmptyStateType(false)
      setCurrentFilters({ ...initialCurrentFilters })
    },
    clearFilters: () => {
      setEmptyStateType(false)
      setCurrentFilters({})
    },
  })

  const [currentVisualization, setCurrentVisualization] = useState(0)
  const [totalItems, setTotalItems] = useState<number>()

  const handleOpenChange = (open: boolean) => {
    setOpen(open)
    onOpenChange?.(open)
  }

  const handleVisualizationChange = (index: number) => {
    setCurrentVisualization(index)
  }

  const onSelectItemsLocal: OnSelectItemsCallback<Record, Filters> = (
    selectedItems,
    clearSelectedItems
  ): void => {
    onSelectItems?.(selectedItems, clearSelectedItems)
  }

  const getEmptyStateType = (
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
    setEmptyStateType(getEmptyStateType(filters, search))
  }

  const onLoadError = (error: DataError) => {
    setEmptyStateType(
      "error",
      error.cause instanceof Error ? error.cause.message : error.message
    )
  }

  return (
    <Popover onOpenChange={handleOpenChange} open={open}>
      <PopoverTrigger className="w-full" disabled={disabled}>
        {children ? (
          children
        ) : (
          <Trigger
            placeholder={"..."}
            selected={"..."}
            selectedEntities={[]}
            disabled={disabled}
            hiddenAvatar={true}
          />
        )}
      </PopoverTrigger>
      <PopoverContent
        className={cn("scrollbar-macos relative overflow-auto p-0")}
      >
        {/*<Settings
          visualizations={visualizations}
          currentVisualization={currentVisualization}
          onVisualizationChange={handleVisualizationChange}
          grouping={grouping}
          currentGrouping={initialCurrentGrouping}
          onGroupingChange={setCurrentGrouping}
          sortings={sortings}
          currentSortings={currentSortings}
          onSortingsChange={setCurrentSortings}
        ></Settings>*/}
        {emptyState ? (
          <OneEmptyState
            title={emptyState.title}
            variant={"default"}
            description={emptyState.description}
            actions={emptyState.actions}
            emoji={emptyState.emoji}
          />
        ) : (
          <div className="max-h-96 w-full">
            <VisualizationRenderer
              visualization={visualizations[currentVisualization]}
              source={source}
              onSelectItems={onSelectItemsLocal}
              onLoadData={onLoadData}
              onLoadError={onLoadError}
            />
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

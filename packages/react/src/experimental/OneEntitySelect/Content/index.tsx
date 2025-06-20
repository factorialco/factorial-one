import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"

import { GroupHeader } from "@/experimental/OneDataCollection/components/GroupHeader/GroupHeader"
import { useGroups } from "@/experimental/OneDataCollection/useGroups"

import { Spinner } from "@/experimental/Information/Spinner"
import { PagesPagination } from "@/experimental/OneDataCollection/components/PagesPagination"
import { FiltersDefinition } from "@/experimental/OneDataCollection/Filters/types"
import { ItemActionsDefinition } from "@/experimental/OneDataCollection/item-actions"
import { SortingsDefinition } from "@/experimental/OneDataCollection/sortings"
import {
  CollectionProps,
  GroupingDefinition,
  RecordType,
} from "@/experimental/OneDataCollection/types"
import {
  isInfiniteScrollPagination,
  useData,
} from "@/experimental/OneDataCollection/useData"
import { useInfiniteScrollPagination } from "@/experimental/OneDataCollection/useInfiniteScrollPagination"
import { useSelectable } from "@/experimental/OneDataCollection/useSelectable"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/ui/checkbox"
import { Skeleton } from "@/ui/skeleton"
import { AnimatePresence, motion } from "motion/react"
import { useEffect } from "react"
import { ListGroup } from "./components/ListGroup"
import { ListVisualizationOptions } from "./types"

/**
 * Group List: Renders the list for a group
 */
export type ContentProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = CollectionProps<
  Record,
  Filters,
  Sortings,
  ItemActions,
  NavigationFilters,
  Grouping,
  ListVisualizationOptions<Record, Filters, Sortings>
>

export const Content = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  fields,
  itemDefinition,
  source,
  onSelectItems,
  onLoadData,
  onLoadError,
}: ContentProps<
  Record,
  Filters,
  Sortings,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const {
    data,
    paginationInfo,
    setPage,
    isInitialLoading,
    isLoadingMore,
    loadMore,
  } = useData<Record, Filters, Sortings, NavigationFilters, Grouping>(source, {
    onError: (error) => {
      onLoadError(error)
    },
  })

  useEffect(() => {
    onLoadData({
      totalItems: paginationInfo?.total || data.records.length,
      filters: source.currentFilters,
      search: source.currentSearch,
      isInitialLoading,
      data: data.records,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps --  we don't want to re-run this effect when the filters change, just when the data changes
  }, [paginationInfo?.total, data.records])

  const { isLoading } = source

  const { loadingIndicatorRef } = useInfiniteScrollPagination(
    paginationInfo,
    isLoading,
    isLoadingMore,
    loadMore
  )

  /**
   * Item selection
   */
  const {
    selectedItems,
    allSelectedStatus,
    groupAllSelectedStatus,
    handleSelectItemChange,
    handleSelectAll,
    handleSelectGroupChange,
  } = useSelectable(data, paginationInfo, source, onSelectItems)

  /*
   * Groups
   */
  const collapsible = source.grouping?.collapsible
  const defaultOpenGroups = source.grouping?.defaultOpenGroups
  const { openGroups, setGroupOpen } = useGroups(
    data?.type === "grouped" ? data.groups : [],
    defaultOpenGroups
  )

  if (isInitialLoading) {
    return (
      <div className="flex flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-3 p-3 md:h-18 md:flex-row md:items-center md:justify-between md:gap-2"
          >
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-28" />
              <div className="flex flex-col gap-2 md:flex-row">
                <Skeleton className="h-3 w-10" />
                <Skeleton className="h-3 w-10" />
              </div>
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Enforce that sorting is only used when sortings are defined
  if (!source.sortings) {
    fields.forEach((field) => {
      if (field.sorting) {
        console.warn(
          "Sorting is defined on a property but no sortings are provided in the data source"
        )
      }
    })
  }

  return (
    <>
      {source.selectable && (
        <div className="flex flex-row items-center gap-2 px-4 py-2">
          <Checkbox
            checked={allSelectedStatus.checked}
            indeterminate={allSelectedStatus.indeterminate}
            onCheckedChange={handleSelectAll}
            disabled={isLoading}
            title="[TODO] Select all"
          />
        </div>
      )}
      <div
        className={cn(
          "relative",
          isLoading && "select-none opacity-50 transition-opacity"
        )}
        aria-live={isLoading ? "polite" : undefined}
        aria-busy={isLoading ? "true" : undefined}
      >
        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="absolute inset-0 flex cursor-progress items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Spinner />
            </motion.div>
          )}
        </AnimatePresence>
        {data.type === "grouped" &&
          data.groups.map((group) => {
            const itemCount = group.itemCount
            return (
              <div
                className="flex flex-col gap-0 pt-2 first:pt-0"
                key={`group-header-${group.key}`}
              >
                <GroupHeader
                  key={`group-header-${group.key}`}
                  className="cursor-pointer select-none rounded-md px-6 py-3 transition-colors hover:bg-f1-background-hover"
                  selectable={!!source.selectable}
                  select={
                    groupAllSelectedStatus[group.key]?.checked
                      ? true
                      : groupAllSelectedStatus[group.key]?.indeterminate
                        ? "indeterminate"
                        : false
                  }
                  onSelectChange={(checked) =>
                    handleSelectGroupChange(group, checked)
                  }
                  showOpenChange={collapsible}
                  label={group.label}
                  itemCount={itemCount}
                  open={openGroups[group.key]}
                  onOpenChange={(open) => setGroupOpen(group.key, open)}
                />
                <AnimatePresence>
                  {openGroups[group.key] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.1, ease: "easeInOut" }}
                      className="mt-0.5"
                    >
                      <ListGroup
                        key={`list-group-${group.key}`}
                        source={source}
                        items={group.records}
                        selectedItems={selectedItems}
                        handleSelectItemChange={handleSelectItemChange}
                        fields={fields}
                        itemDefinition={itemDefinition}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        {data?.type === "flat" && (
          <ListGroup
            source={source}
            items={data.records}
            selectedItems={selectedItems}
            handleSelectItemChange={handleSelectItemChange}
            fields={fields}
            itemDefinition={itemDefinition}
          />
        )}
        {isInfiniteScrollPagination(paginationInfo) &&
          paginationInfo.hasMore && (
            <div
              ref={loadingIndicatorRef}
              className="h-10 w-full"
              aria-hidden="true"
            />
          )}
        <PagesPagination paginationInfo={paginationInfo} setPage={setPage} />
      </div>
    </>
  )
}

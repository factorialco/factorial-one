import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"

import { GroupHeader } from "@/experimental/OneDataCollection/components/GroupHeader/GroupHeader"
import { useGroups } from "@/hooks/datasource/useGroups"

import { useInfiniteScrollPagination } from "@/experimental/OneDataCollection/hooks/useInfiniteScrollPagination"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { AnimatePresence, motion } from "motion/react"
import { useEffect } from "react"
import type { FiltersDefinition } from "../../../../../components/OneFilterPicker/types"
import { SortingsDefinition } from "../../../../../hooks/datasource/types/sortings.typings"
import {
  isInfiniteScrollPagination,
  useData,
} from "../../../../../hooks/datasource/useData"
import { useSelectable } from "../../../../../hooks/datasource/useSelectable"
import { Spinner } from "../../../../Information/Spinner"
import { PagesPagination } from "../../../components/PagesPagination"
import { ItemActionsDefinition } from "../../../item-actions"
import { SummariesDefinition } from "../../../summary"
import { CollectionProps, GroupingDefinition, RecordType } from "../../../types"
import { ListGroup } from "./components/ListGroup"
import { ListVisualizationOptions } from "./types"

/**
 * Group List: Renders the list for a group
 */
export type ListCollectionProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = CollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping,
  ListVisualizationOptions<Record, Filters, Sortings>
>

export const ListCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
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
}: ListCollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
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
  } = useData<
    Record,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >(source, {
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

  // Infinite scroll pagination
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
    groupAllSelectedStatus,
    handleSelectItemChange,
    handleSelectGroupChange,
  } = useSelectable(
    data,
    paginationInfo,
    source,
    onSelectItems,
    source.defaultSelectedItems
  )

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
      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden rounded-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary">
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
    <div className="flex max-h-full min-h-0 flex-1 flex-col gap-4 px-4 py-2">
      <div
        className={cn(
          "flex min-h-0 flex-1 flex-col gap-2",
          isLoading && "select-none opacity-50 transition-opacity"
        )}
        aria-live={isLoading ? "polite" : undefined}
        aria-busy={isLoading ? "true" : undefined}
      >
        <div className="min-h-0 flex-1 overflow-auto">
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
                    {(!collapsible || openGroups[group.key]) && (
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
        </div>
      </div>
      <PagesPagination paginationInfo={paginationInfo} setPage={setPage} />
    </div>
  )
}

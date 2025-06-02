import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { OnePagination } from "@/experimental/OnePagination"

import { GroupHeader } from "@/experimental/OneDataCollection/components/GroupHeader/GroupHeader"
import { useGroups } from "@/experimental/OneDataCollection/useGroups"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/ui/checkbox"
import { Skeleton } from "@/ui/skeleton"
import { useEffect } from "react"
import type { FiltersDefinition } from "../../../Filters/types"
import { ItemActionsDefinition } from "../../../item-actions"
import { SortingsDefinition } from "../../../sortings"
import { CollectionProps, GroupingDefinition, RecordType } from "../../../types"
import { useData } from "../../../useData"
import { useSelectable } from "../../../useSelectable"
import { ListGroup } from "./components/ListGroup"
import { SortingSelector } from "./components/SortingSelector"
import { ListVisualizationOptions } from "./types"

/**
 * Group List: Renders the list for a group
 */
export type ListCollectionProps<
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

export const ListCollection = <
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
}: ListCollectionProps<
  Record,
  Filters,
  Sortings,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const t = useI18n()

  const { data, paginationInfo, setPage, isInitialLoading } = useData<
    Record,
    Filters,
    Sortings,
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

  const { currentSortings, setCurrentSortings, isLoading } = source

  /**
   * Item selection
   */
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
      <div className="flex flex-col gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="h-10 w-full" />
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
      <div className="flex flex-row items-center gap-2 px-4 py-2">
        {source.selectable && (
          <Checkbox
            checked={allSelectedStatus.checked}
            indeterminate={allSelectedStatus.indeterminate}
            onCheckedChange={handleSelectAll}
            disabled={isLoading}
            title="[TODO] Select all"
          />
        )}

        <div className="flex flex-row gap-2 px-4 py-2">
          <SortingSelector
            source={source}
            onChange={setCurrentSortings}
            currentSortings={currentSortings}
          />
        </div>
      </div>
      <div
        className={cn(isLoading && "select-none opacity-50 transition-opacity")}
        aria-live={isLoading ? "polite" : undefined}
        aria-busy={isLoading ? "true" : undefined}
      >
        {data.type === "grouped" &&
          data.groups.map((group) => {
            const itemCount = group.itemCount
            return (
              <>
                <GroupHeader
                  key={`group-header-${group.key}`}
                  className="px-4"
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
                {openGroups[group.key] && (
                  <ListGroup
                    key={`list-group-${group.key}`}
                    source={source}
                    items={group.records}
                    selectedItems={selectedItems}
                    handleSelectItemChange={handleSelectItemChange}
                    fields={fields}
                    itemDefinition={itemDefinition}
                  />
                )}
              </>
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

        {paginationInfo && (
          <div className="flex w-full items-center justify-between px-6">
            <span className="shrink-0 text-f1-foreground-secondary">
              {paginationInfo.total > 0 &&
                `${(paginationInfo.currentPage - 1) * paginationInfo.perPage + 1}-${Math.min(
                  paginationInfo.currentPage * paginationInfo.perPage,
                  paginationInfo.total
                )} ${t.collections.visualizations.pagination.of} ${paginationInfo.total}`}
            </span>
            <div className="flex items-center">
              <OnePagination
                totalPages={paginationInfo.pagesCount}
                currentPage={paginationInfo.currentPage}
                onPageChange={setPage}
                disabled={paginationInfo.pagesCount <= 1}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

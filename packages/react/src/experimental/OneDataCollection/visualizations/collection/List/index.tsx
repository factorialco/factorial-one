import { Checkbox } from "@/experimental/Forms/Fields/Checkbox"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { OnePagination } from "@/experimental/OnePagination"

import { AvatarVariant } from "@/experimental/exports"
import { GroupHeader } from "@/experimental/OneDataCollection/components/GroupHeader/GroupHeader"
import { useGroups } from "@/experimental/OneDataCollection/useGroups"
import { Link } from "@/factorial-one"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { useEffect } from "react"
import type { FiltersDefinition } from "../../../Filters/types"
import { ItemActionsDefinition } from "../../../item-actions"
import { ActionsDropdown } from "../../../ItemActions/Dropdown"
import { renderProperty } from "../../../property-render"
import {
  SortingKey,
  SortingsDefinition,
  SortingsState,
} from "../../../sortings"
import {
  CollectionProps,
  DataSource,
  GroupingDefinition,
  RecordType,
} from "../../../types"
import { useData } from "../../../useData"
import { useSelectable } from "../../../useSelectable"
import { ListPropertyDefinition, ListVisualizationOptions } from "./types"

/**
 * Group List: Renders the list for a group
 */

type GroupItemsProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = {
  source: DataSource<
    Record,
    Filters,
    Sortings,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  items: Record[]
  selectedItems: Map<number | string, Record>
  handleSelectItemChange: (item: Record, checked: boolean) => void
  fields: ListPropertyDefinition<Record, Sortings>[]
  title: (record: Record) => string
  description?: (record: Record) => string
  avatar?: (record: Record) => AvatarVariant
}

const GroupListItems = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  source,
  items,
  selectedItems,
  handleSelectItemChange,
  fields,
  title,
  description,
  avatar,
}: GroupItemsProps<
  Record,
  Filters,
  Sortings,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const renderCell = (
    item: Record,
    property: ListPropertyDefinition<Record, Sortings>
  ) => {
    return renderProperty(item, property, "table")
  }

  return items.map((item, index) => {
    const itemHref = source.itemUrl ? source.itemUrl(item) : undefined
    const itemOnClick = source.itemOnClick
      ? source.itemOnClick(item)
      : undefined
    const id = source.selectable ? source.selectable(item) : undefined
    return (
      <div key={`row-${index}`} selected={!!id && selectedItems.has(id)}>
        {source.selectable && id !== undefined && (
          <div className="flex items-center justify-end">
            <Checkbox
              checked={selectedItems.has(id)}
              onCheckedChange={(checked) =>
                handleSelectItemChange(item, checked)
              }
              title={`Select ${source.selectable(item)}`}
              hideLabel
            />
          </div>
        )}
        <Link href={itemHref} className={cn()}>
          TEST
        </Link>
        {(fields || []).map((field, fieldIndex) => (
          <div key={String(field.label)} onClick={itemOnClick}>
            <div className={cn()}>{renderCell(item, field)}</div>
          </div>
        ))}
        {source.itemActions && (
          <ActionsDropdown item={item} actions={source.itemActions} />
        )}
      </div>
    )
  })
}

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
  source,
  onSelectItems,
  onTotalItemsChange,
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
    ItemActions,
    NavigationFilters,
    Grouping
  >(source)

  useEffect(() => {
    onTotalItemsChange?.(paginationInfo?.total || data.length)
  }, [paginationInfo?.total, onTotalItemsChange, data])

  const { currentSortings, setCurrentSortings, isLoading } = source

  /**
   * Item selection
   */
  const {
    selectedItems,
    isAllSelected,
    isPartiallySelected,
    handleSelectItemChange,
    handleSelectAll,
  } = useSelectable(data.records, paginationInfo, source, onSelectItems)

  /**
   * Determine the sort state of a column
   */
  const getColumnSortState = (
    columnSorting: SortingKey<Sortings> | undefined,
    sourceSortings: SortingsDefinition | undefined,
    currentSortings: SortingsState<Sortings>
  ): "asc" | "desc" | "none" | undefined => {
    if (!columnSorting || !sourceSortings) {
      return undefined
    }

    if (currentSortings === null) {
      return "none"
    }

    return currentSortings.field === columnSorting
      ? currentSortings.order
      : "none"
  }

  /**
   * Handle column sort click
   */
  const handleSortClick = (columnSorting: SortingKey<Sortings>) => {
    setCurrentSortings(() => {
      if (!currentSortings || currentSortings.field !== columnSorting) {
        return {
          field: columnSorting,
          order: "asc",
        }
      } else if (currentSortings.order === "asc") {
        return {
          field: columnSorting,
          order: "desc",
        }
      } else {
        return null
      }
    })
  }

  /**
   * Groups
   */
  const { openGroups, setGroupOpen } = useGroups(
    data?.type === "grouped" ? data.groups : []
  )

  if (isInitialLoading) {
    return "TODO LOADING skeleton"
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

  const renderCell = (
    item: Record,
    property: ListPropertyDefinition<Record, Sortings>
  ) => {
    return renderProperty(item, property, "table")
  }

  return (
    <>
      <Checkbox
        checked={isAllSelected || isPartiallySelected}
        indeterminate={isPartiallySelected}
        onCheckedChange={handleSelectAll}
        title="Select all"
        hideLabel
      />

      <p>IsLoading: {isLoading.toString()}</p>
      {data.type === "grouped" &&
        data.groups.map((group, index) => {
          return (
            <>
              <GroupHeader
                label={group.label}
                itemCount={group.itemCount}
                open={openGroups[group.key]}
                onOpenChange={(open) => setGroupOpen(group.key, open)}
              />
              <GroupListItems
                source={source}
                items={group.records}
                selectedItems={selectedItems}
                handleSelectItemChange={handleSelectItemChange}
                fields={fields}
              />
            </>
          )
        })}

      {data?.type === "flat" && (
        <GroupListItems
          source={source}
          items={data.records}
          selectedItems={selectedItems}
          handleSelectItemChange={handleSelectItemChange}
          fields={fields}
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
    </>
  )
}

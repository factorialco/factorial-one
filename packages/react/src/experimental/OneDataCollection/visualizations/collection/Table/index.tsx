import { Checkbox } from "@/experimental/Forms/Fields/Checkbox"
import { GroupHeader } from "@/experimental/OneDataCollection/components/GroupHeader"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import {
  getAnimationVariants,
  useGroups,
} from "@/experimental/OneDataCollection/useGroups"
import { OnePagination } from "@/experimental/OnePagination"
import {
  OneTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/experimental/OneTable"
import { useI18n } from "@/lib/providers/i18n"
import { AnimatePresence, motion } from "motion/react"
import { ComponentProps, Fragment, useEffect, useMemo, useState } from "react"
import type { FiltersDefinition } from "../../../Filters/types"
import { ItemActionsDefinition } from "../../../item-actions"
import { PropertyDefinition } from "../../../property-render"
import {
  SortingKey,
  SortingsDefinition,
  SortingsState,
} from "../../../sortings"
import { CollectionProps, GroupingDefinition, RecordType } from "../../../types"
import { useData } from "../../../useData"
import { useSelectable } from "../../../useSelectable"
import { Row } from "./components/Row"

export type WithOptionalSorting<
  R extends RecordType,
  Sortings extends SortingsDefinition,
> = PropertyDefinition<R> & {
  sorting?: SortingKey<Sortings>

  /**
   * The alignment of the column. If not provided, the alignment will be "left"
   */
  align?: "left" | "right"

  /**
   * The width of the column. If not provided, the width will be "auto"
   */
  width?: number
}

export type TableColumnDefinition<
  R extends RecordType,
  Sortings extends SortingsDefinition,
> = WithOptionalSorting<R, Sortings> &
  Pick<
    ComponentProps<typeof TableHead>,
    "hidden" | "info" | "infoIcon" | "sticky" | "width"
  >

export type TableVisualizationOptions<
  R extends RecordType,
  _Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
> = {
  columns: ReadonlyArray<TableColumnDefinition<R, Sortings>>
  frozenColumns?: 0 | 1 | 2
}

export const TableCollection = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  columns,
  source,
  frozenColumns = 0,
  onSelectItems,
  onLoadData,
  onLoadError,
}: CollectionProps<
  R,
  Filters,
  Sortings,
  ItemActions,
  NavigationFilters,
  Grouping,
  TableVisualizationOptions<R, Filters, Sortings>
>) => {
  const t = useI18n()
  // Created a motion component for the row
  const [MotionRow] = useState(() =>
    motion.create(
      Row<R, Filters, Sortings, ItemActions, NavigationFilters, Grouping>
    )
  )

  const { data, paginationInfo, setPage, isInitialLoading } = useData<
    R,
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

  const frozenColumnsLeft = useMemo(() => frozenColumns, [frozenColumns])

  /**
   * Item selection
   */
  const {
    selectedItems,
    isAllSelected,
    isPartiallySelected,
    handleSelectItemChange,
    handleSelectAll,
  } = useSelectable(data?.records ?? [], paginationInfo, source, onSelectItems)

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

  /*
   * Groups
   */
  const { openGroups, setGroupOpen } = useGroups(
    data?.type === "grouped" ? data.groups : []
  )

  /*
   * Initial loading
   */
  if (isInitialLoading) {
    return (
      <OneTable.Skeleton
        columns={columns.length + (source.itemActions ? 1 : 0)}
      />
    )
  }

  // Enforce that sorting is only used when sortings are defined
  if (!source.sortings) {
    columns.forEach((column) => {
      if (column.sorting) {
        console.warn(
          "Sorting is defined on a column but no sortings are provided in the data source"
        )
      }
    })
  }

  const checkColumnWidth = source.selectable ? 52 : 0

  return (
    <>
      <OneTable loading={isLoading}>
        <TableHeader>
          <TableRow>
            {source.selectable && (
              <TableHead
                width={checkColumnWidth}
                sticky={{ left: 0 }}
                align="right"
              >
                <div className="flex w-full items-center justify-end">
                  <Checkbox
                    checked={isAllSelected || isPartiallySelected}
                    indeterminate={isPartiallySelected}
                    onCheckedChange={handleSelectAll}
                    title="Select all"
                    hideLabel
                    disabled={data?.records.length === 0}
                  />
                </div>
              </TableHead>
            )}
            {columns.map(({ sorting, label, ...column }, index) => (
              <TableHead
                key={`table-head-${index}`}
                sortState={getColumnSortState(
                  sorting,
                  source.sortings,
                  currentSortings
                )}
                width={column.width}
                align={column.align}
                sticky={
                  index < frozenColumnsLeft
                    ? {
                        left: columns
                          .slice(0, Math.max(0, index))
                          .reduce(
                            (acc, column) => acc + (column.width ?? 0),
                            checkColumnWidth
                          ),
                      }
                    : undefined
                }
                {...column}
                onSortClick={
                  sorting
                    ? () => {
                        if (!sorting) return
                        handleSortClick(sorting)
                      }
                    : undefined
                }
              >
                {label}
              </TableHead>
            ))}
            {source.itemActions && (
              <TableHead
                key="actions"
                width={68}
                hidden
                sticky={{
                  right: 0,
                }}
              >
                {t.collections.actions.actions}
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.type === "grouped" &&
            data.groups.map((group, groupIndex) => {
              const itemCount = group.itemCount
              return (
                <Fragment key={`group-${groupIndex}`}>
                  <TableRow key={`group-header-${groupIndex}`}>
                    {source.selectable && (
                      <TableCell width={checkColumnWidth} sticky={{ left: 0 }}>
                        &nbsp;
                      </TableCell>
                    )}
                    <TableCell colSpan={columns.length}>
                      <GroupHeader
                        label={group.label}
                        itemCount={itemCount}
                        open={openGroups[group.key]}
                        onOpenChange={(open) => setGroupOpen(group.key, open)}
                      />
                    </TableCell>
                  </TableRow>

                  <AnimatePresence key={`group-animate-${groupIndex}`}>
                    {openGroups[group.key] &&
                      MotionRow &&
                      group.records.map((item, index) => {
                        return (
                          <MotionRow
                            variants={getAnimationVariants()}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            custom={index}
                            key={`row-${groupIndex}-${index}`}
                            layout
                            source={source}
                            item={item}
                            index={index}
                            groupIndex={groupIndex}
                            onCheckedChange={(checked) =>
                              handleSelectItemChange(item, checked)
                            }
                            selectedItems={selectedItems}
                            columns={columns}
                            frozenColumnsLeft={frozenColumnsLeft}
                            checkColumnWidth={checkColumnWidth}
                          />
                        )
                      })}
                  </AnimatePresence>
                </Fragment>
              )
            })}
          {data?.type === "flat" &&
            data.records.map((item, index) => {
              return (
                <Row
                  key={`row-${index}`}
                  groupIndex={0}
                  source={source}
                  item={item}
                  index={index}
                  onCheckedChange={(checked) =>
                    handleSelectItemChange(item, checked)
                  }
                  selectedItems={selectedItems}
                  columns={columns}
                  frozenColumnsLeft={frozenColumnsLeft}
                  checkColumnWidth={checkColumnWidth}
                />
              )
            })}
        </TableBody>
      </OneTable>
      {paginationInfo && (
        <div className="flex w-full items-center justify-between px-6 pt-4">
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

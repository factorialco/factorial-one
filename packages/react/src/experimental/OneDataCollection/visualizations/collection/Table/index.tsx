import { Checkbox } from "@/experimental/Forms/Fields/Checkbox"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
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
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton.tsx"
import { ComponentProps, useEffect, useMemo, useRef } from "react"
import type { FiltersDefinition } from "../../../Filters/types"
import { ItemActionsDefinition } from "../../../item-actions"
import { ActionsDropdown } from "../../../ItemActions/Dropdown"
import { PropertyDefinition, renderProperty } from "../../../property-render"
import {
  SortingKey,
  SortingsDefinition,
  SortingsState,
} from "../../../sortings"
import { SummariesDefinition, SummaryKey } from "../../../summary.ts"
import { CollectionProps, RecordType } from "../../../types"
import { useData } from "../../../useData"
import { useSelectable } from "../../../useSelectable"

export type WithOptionalSorting<
  Record,
  Sortings extends SortingsDefinition,
> = PropertyDefinition<Record> & {
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
  Record,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
> = WithOptionalSorting<Record, Sortings> &
  Pick<
    ComponentProps<typeof TableHead>,
    "hidden" | "info" | "infoIcon" | "sticky" | "width"
  > & {
    /**
     * Optional summary configuration for this column
     * References a key in the Summaries definition, similar to how sorting works
     */
    summary?: SummaryKey<Summaries>
  }

export type TableVisualizationOptions<
  Record extends RecordType,
  _Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
> = {
  columns: ReadonlyArray<TableColumnDefinition<Record, Sortings, Summaries>>
  frozenColumns?: 0 | 1 | 2
}

export const TableCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
>({
  columns,
  source,
  frozenColumns = 0,
  onSelectItems,
  onLoadData,
  onLoadError,
}: CollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  TableVisualizationOptions<Record, Filters, Sortings, Summaries>
>) => {
  const t = useI18n()
  const loadingIndicatorRef = useRef<HTMLDivElement>(null)

  const {
    data,
    paginationInfo,
    setPage,
    loadMore,
    isInitialLoading,
    isLoadingMore,
    summaries: summariesData,
  } = useData<Record, Filters, Sortings, NavigationFilters>(source, {
    onError: (error) => {
      onLoadError(error)
    },
  })

  console.log("[debug] paginationInfo", paginationInfo)

  const { currentSortings, setCurrentSortings, isLoading, summaries } = source

  console.log("[debug] source.summaries", summaries)
  console.log("[debug] summariesData", summariesData)

  useEffect(() => {
    if (paginationInfo?.type !== "infinite-scroll" || !paginationInfo.hasMore) {
      return
    }

    const loadingIndicator = loadingIndicatorRef.current
    if (!loadingIndicator) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && !isLoadingMore) {
          loadMore()
        }
      },
      {
        root: null, // viewport
        rootMargin: "200px",
        threshold: 0.1,
      }
    )

    observer.observe(loadingIndicator)

    return () => {
      observer.disconnect()
    }
  }, [paginationInfo, isLoadingMore, loadMore, isLoading])

  useEffect(() => {
    onLoadData({
      totalItems: paginationInfo?.total || data.length,
      filters: source.currentFilters,
      search: source.currentSearch,
      isInitialLoading,
      data,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps --  we don't want to re-run this effect when the filters change, just when the data changes
  }, [paginationInfo?.total, data])

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
  } = useSelectable(data, paginationInfo, source, onSelectItems)

  // Create a summary data object if summaries exist
  const summaryData = useMemo(() => {
    // Early return if no summaries configuration or summaries data is available
    if (!summariesData || !source.summaries) return null

    return {
      data: summariesData as Record,
      sticky: true,
      label: source.summaries?.label,
    }
  }, [summariesData, source.summaries])

  console.log("[debug] summaryData", summaryData)

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

  const renderCell = (
    item: Record,
    column: TableColumnDefinition<Record, Sortings, Summaries>
  ) => {
    return renderProperty(item, column, "table")
  }

  const checkColumnWidth = source.selectable ? 52 : 0

  const skeletonColumns =
    columns.length + (source.itemActions ? 1 : 0) + (source.selectable ? 1 : 0)

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
                <Checkbox
                  checked={isAllSelected || isPartiallySelected}
                  indeterminate={isPartiallySelected}
                  onCheckedChange={handleSelectAll}
                  title="Select all"
                  hideLabel
                  disabled={data.length === 0}
                />
              </TableHead>
            )}
            {columns.map(({ sorting, label, ...column }, index) => (
              <TableHead
                key={String(label)}
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
          {data.map((item, index) => {
            const itemHref = source.itemUrl ? source.itemUrl(item) : undefined
            const itemOnClick = source.itemOnClick
              ? source.itemOnClick(item)
              : undefined
            const id = source.selectable ? source.selectable(item) : undefined
            return (
              <TableRow
                key={`row-${index}`}
                selected={!!id && selectedItems.has(id)}
              >
                {source.selectable && (
                  <TableCell width={checkColumnWidth} sticky={{ left: 0 }}>
                    {id !== undefined && (
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
                  </TableCell>
                )}
                {columns.map((column, cellIndex) => (
                  <TableCell
                    key={String(column.label)}
                    firstCell={cellIndex === 0}
                    href={itemHref}
                    onClick={itemOnClick}
                    width={column.width}
                    sticky={
                      cellIndex < frozenColumnsLeft
                        ? {
                            left: columns
                              .slice(0, Math.max(0, cellIndex))
                              .reduce(
                                (acc, column) => acc + (column.width ?? 0),
                                checkColumnWidth
                              ),
                          }
                        : undefined
                    }
                  >
                    <div
                      className={cn(
                        column.align === "right" ? "justify-end" : "",
                        "flex"
                      )}
                    >
                      {renderCell(item, column)}
                    </div>
                  </TableCell>
                ))}
                {source.itemActions && (
                  <TableCell
                    key="actions"
                    width={68}
                    sticky={{
                      right: 0,
                    }}
                    href={itemHref}
                    onClick={itemOnClick}
                  >
                    <ActionsDropdown item={item} actions={source.itemActions} />
                  </TableCell>
                )}
              </TableRow>
            )
          })}

          {/* Add the summary row at the bottom */}
          {summaryData && (
            <TableRow
              className={cn(
                summaryData.sticky &&
                  "bg-f1-background-default sticky bottom-0 z-10 shadow-[0_-1px_0_0_var(--f1-border-secondary)]",
                "font-medium"
              )}
            >
              {source.selectable && (
                <TableCell width={checkColumnWidth} sticky={{ left: 0 }}>
                  {summaryData.label && (
                    <div className="font-medium text-f1-foreground-secondary">
                      {summaryData.label}
                    </div>
                  )}
                </TableCell>
              )}
              {columns.map((column, cellIndex) => (
                <TableCell
                  key={`summary-${String(column.label)}`}
                  firstCell={cellIndex === 0}
                  width={column.width}
                  sticky={
                    cellIndex < frozenColumnsLeft
                      ? {
                          left: columns
                            .slice(0, Math.max(0, cellIndex))
                            .reduce(
                              (acc, column) => acc + (column.width ?? 0),
                              checkColumnWidth
                            ),
                        }
                      : undefined
                  }
                >
                  {cellIndex === 0 &&
                  !source.selectable &&
                  summaryData.label ? (
                    <div className="font-medium text-f1-foreground-secondary">
                      {summaryData.label}
                    </div>
                  ) : (
                    <div
                      className={cn(
                        column.align === "right" ? "justify-end" : "",
                        "flex"
                      )}
                    >
                      {renderCell(summaryData.data, column)}
                    </div>
                  )}
                </TableCell>
              ))}
              {source.itemActions && (
                <TableCell
                  key="summary-actions"
                  width={68}
                  sticky={{
                    right: 0,
                  }}
                >
                  {""}
                </TableCell>
              )}
            </TableRow>
          )}

          {paginationInfo?.type === "infinite-scroll" &&
            isLoadingMore &&
            Array.from({ length: 5 }).map((_, rowIndex) => (
              <TableRow key={`skeleton-row-${rowIndex}`}>
                {Array.from({ length: skeletonColumns }).map((_, colIndex) => (
                  <TableCell key={`skeleton-cell-${rowIndex}-${colIndex}`}>
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </OneTable>

      {paginationInfo?.type === "infinite-scroll" && paginationInfo.hasMore && (
        <div
          ref={loadingIndicatorRef}
          className="h-10 w-full"
          aria-hidden="true"
        />
      )}

      {/*TODO: Move this logic to a shared component since it's on Card visualization as well*/}
      {paginationInfo && paginationInfo.type === "pages" && (
        <div className="flex w-full items-center justify-between px-6 pt-4">
          <span className="shrink-0 text-f1-foreground-secondary">
            {paginationInfo.total > 0 &&
              `${
                (paginationInfo.currentPage - 1) * paginationInfo.perPage + 1
              }-${Math.min(
                paginationInfo.currentPage * paginationInfo.perPage,
                paginationInfo.total
              )} ${t.collections.visualizations.pagination.of} ${
                paginationInfo.total
              }`}
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

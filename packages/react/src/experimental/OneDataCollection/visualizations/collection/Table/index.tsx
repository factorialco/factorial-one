import { OnePagination } from "@/experimental/OnePagination"
import {
  OneTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/experimental/OneTable"
import { useI18n } from "@/lib/i18n-provider"
import { cn } from "@/lib/utils"
import { ComponentProps, useMemo } from "react"
import type { FiltersDefinition } from "../../../Filters/types"
import { ItemActionsDefinition } from "../../../item-actions"
import { ActionsDropdown } from "../../../ItemActions/Dropdown"
import { PropertyDefinition, renderProperty } from "../../../property-render"
import {
  SortingKey,
  SortingsDefinition,
  SortingsState,
} from "../../../sortings"
import { CollectionProps, RecordType } from "../../../types"
import { useData } from "../../../useData"

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
> = WithOptionalSorting<Record, Sortings> &
  Pick<ComponentProps<typeof TableHead>, "hidden" | "info" | "sticky" | "width">

export type TableVisualizationOptions<
  Record extends RecordType,
  _Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
> = {
  columns: ReadonlyArray<TableColumnDefinition<Record, Sortings>>
  fixedColumns?: 0 | 1 | 2
}

export const TableCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
>({
  columns,
  source,
  fixedColumns = 0,
}: CollectionProps<
  Record,
  Filters,
  Sortings,
  ItemActions,
  TableVisualizationOptions<Record, Filters, Sortings>
>) => {
  const t = useI18n()

  const { data, paginationInfo, setPage, isInitialLoading } = useData<
    Record,
    Filters,
    Sortings
  >(source)

  const { currentSortings, setCurrentSortings, isLoading } = source

  const fixedColumnsLeft = useMemo(() => fixedColumns, [fixedColumns])

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
    column: TableColumnDefinition<Record, Sortings>
  ) => {
    return renderProperty(item, column, "table")
  }

  return (
    <>
      <OneTable loading={isLoading}>
        <TableHeader>
          <TableRow>
            {columns.map(({ sorting, label, ...column }, index) => (
              <TableHead
                key={String(label)}
                sortState={getColumnSortState(
                  sorting,
                  source.sortings,
                  currentSortings
                )}
                width={column.width}
                sticky={
                  index < fixedColumnsLeft
                    ? {
                        left: columns
                          .slice(0, Math.max(0, index))
                          .reduce(
                            (acc, column) => acc + (column.width ?? 0),
                            0
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
                width={50}
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

            return (
              <TableRow key={`row-${index}`}>
                {columns.map((column, cellIndex) => (
                  <TableCell
                    key={String(column.label)}
                    firstCell={cellIndex === 0}
                    href={itemHref}
                    width={column.width}
                    sticky={
                      cellIndex < fixedColumnsLeft
                        ? {
                            left: columns
                              .slice(0, Math.max(0, cellIndex))
                              .reduce(
                                (acc, column) => acc + (column.width ?? 0),
                                0
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
                    width={50}
                    sticky={{
                      right: 0,
                    }}
                    href={itemHref}
                  >
                    <ActionsDropdown item={item} actions={source.itemActions} />
                  </TableCell>
                )}
              </TableRow>
            )
          })}
        </TableBody>
      </OneTable>
      {paginationInfo && (
        <div className="flex w-full items-center justify-between py-3">
          <span className="shrink-0 text-f1-foreground-secondary">
            {`${(paginationInfo.currentPage - 1) * paginationInfo.perPage + 1}-${Math.min(
              paginationInfo.currentPage * paginationInfo.perPage,
              paginationInfo.total
            )} ${t.collections.visualizations.pagination.of} ${paginationInfo.total}`}
          </span>
          <div className="flex items-center">
            <OnePagination
              totalPages={paginationInfo.pagesCount}
              currentPage={paginationInfo.currentPage}
              onPageChange={setPage}
            />
          </div>
        </div>
      )}
    </>
  )
}

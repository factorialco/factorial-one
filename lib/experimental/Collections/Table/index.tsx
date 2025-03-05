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
import { ActionsDropdown } from "../Actions/Dropdown"
import type { FiltersDefinition } from "../Filters/types"
import { ActionsDefinition } from "../actions"
import { SortingKey, SortingsDefinition } from "../sortings"
import { CollectionProps, RecordType } from "../types"
import { useData } from "../useData"
import { PropertyDefinition, renderValue } from "../utils"

export type WithOptionalSorting<
  Record,
  Sortings extends SortingsDefinition,
> = PropertyDefinition<Record> & {
  sorting?: SortingKey<Sortings>
}

export type TableColumnDefinition<
  Record,
  Sortings extends SortingsDefinition,
> = WithOptionalSorting<Record, Sortings>

export type TableVisualizationOptions<
  Record extends RecordType,
  _Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
> = {
  columns: ReadonlyArray<TableColumnDefinition<Record, Sortings>>
}

export const TableCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Actions extends ActionsDefinition<Record>,
>({
  columns,
  source,
}: CollectionProps<
  Record,
  Filters,
  Sortings,
  Actions,
  TableVisualizationOptions<Record, Filters, Sortings>
>) => {
  const t = useI18n()

  const { data, paginationInfo, setPage, isInitialLoading } = useData<
    Record,
    Filters,
    Sortings
  >(source)

  const { currentSortings, setCurrentSortings } = source

  if (isInitialLoading) {
    return (
      <OneTable.Skeleton columns={columns.length + (source.actions ? 1 : 0)} />
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

  return (
    <>
      <OneTable>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={String(column.label)}
                info={column.info}
                width={column.width}
                sortState={
                  column.sorting &&
                  source.sortings &&
                  currentSortings?.field === column.sorting
                    ? currentSortings.direction
                    : undefined
                }
                onSortClick={
                  column.sorting
                    ? () => {
                        if (!column.sorting) return

                        const sorting = column.sorting

                        setCurrentSortings(() => {
                          return {
                            field: sorting,
                            direction:
                              currentSortings?.direction === "asc"
                                ? ("desc" as const)
                                : ("asc" as const),
                          }
                        })
                      }
                    : undefined
                }
              >
                {column.label}
              </TableHead>
            ))}
            {source.actions && (
              <TableHead key="actions" width="fit" hidden>
                {t.collections.actions.actions}
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => {
            const itemHref =
              "href" in item && typeof item.href === "string"
                ? item.href
                : undefined

            return (
              <TableRow key={`row-${index}`}>
                {columns.map((column, cellIndex) => (
                  <TableCell
                    key={String(column.label)}
                    firstCell={cellIndex === 0}
                    href={itemHref}
                  >
                    {renderValue(item, column)}
                  </TableCell>
                ))}
                {source.actions && (
                  <TableCell key="actions" href={itemHref}>
                    <ActionsDropdown item={item} actions={source.actions} />
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

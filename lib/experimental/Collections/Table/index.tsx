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
import { CollectionProps, RecordType } from "../types"
import { useData } from "../useData"
import { PropertyDefinition, renderValue } from "../utils"

export type TableColumnDefinition<T> = PropertyDefinition<T>

export type TableVisualizationOptions<T> = {
  columns: ReadonlyArray<TableColumnDefinition<T>>
}

export const TableCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Actions extends ActionsDefinition<Record>,
>({
  columns,
  source,
}: CollectionProps<
  Record,
  Filters,
  Actions,
  TableVisualizationOptions<Record>
>) => {
  const t = useI18n()

  const { data, paginationInfo, setPage, isInitialLoading } = useData<
    Record,
    Filters
  >(source)

  if (isInitialLoading) {
    return (
      <OneTable.Skeleton columns={columns.length + (source.actions ? 1 : 0)} />
    )
  }

  return (
    <>
      <OneTable>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={String(column.label)} info={column.info}>
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
          {data.map((item, index) => (
            <TableRow key={`row-${index}`}>
              {columns.map((column, cellIndex) => (
                <TableCell
                  key={String(column.label)}
                  firstCell={cellIndex === 0}
                  href={
                    "href" in item && typeof item.href === "string"
                      ? item.href
                      : undefined
                  }
                >
                  {renderValue(item, column)}
                </TableCell>
              ))}
              {source.actions && (
                <TableCell key="actions">
                  <ActionsDropdown item={item} actions={source.actions} />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </OneTable>
      {paginationInfo && (
        <div className="flex w-full items-center justify-between py-3">
          <span className="shrink-0 text-f1-foreground-secondary">
            {`${(paginationInfo.currentPage - 1) * paginationInfo.perPage + 1}-${Math.min(paginationInfo.currentPage * paginationInfo.perPage, paginationInfo.total)} ${t.collections.visualizations.pagination.of} ${paginationInfo.total}`}
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

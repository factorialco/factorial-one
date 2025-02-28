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
              {columns.map((column) => (
                <TableCell key={String(column.label)}>
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
        <OnePagination
          totalPages={paginationInfo.pagesCount}
          currentPage={paginationInfo.currentPage}
          onPageChange={setPage}
        />
      )}
    </>
  )
}

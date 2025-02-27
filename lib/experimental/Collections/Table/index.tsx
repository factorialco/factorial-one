import { Link } from "@/components/Actions/Link"
import { OnePagination } from "@/experimental/OnePagination"
import {
  OneTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/experimental/OneTable"
import type { FiltersDefinition } from "../Filters/types"
import { CollectionProps, RecordType } from "../types"
import { useData } from "../useData"
import { PropertyDefinition, renderValue } from "../utils"

export type TableColumnDefinition<T> = PropertyDefinition<T>

export type TableVisualizationOptions<T> = {
  columns: ReadonlyArray<TableColumnDefinition<T>>
  link?: (item: T) => {
    label: string
    url: string
  }
}

export const TableCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
>({
  columns,
  source,
  link,
}: CollectionProps<Record, Filters, TableVisualizationOptions<Record>>) => {
  const { data, paginationInfo, setPage, isInitialLoading } = useData<
    Record,
    Filters
  >(source)

  const TableActionCell = ({ item }: { item: Record }) => {
    const linkInfo = link!(item)
    return (
      <TableCell key="actions">
        <Link href={linkInfo.url}>{linkInfo.label}</Link>
      </TableCell>
    )
  }

  // If loading, render the skeleton component
  if (isInitialLoading) {
    return <OneTable.Skeleton columns={columns.length + (link ? 1 : 0)} />
  }

  return (
    <>
      <OneTable>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={String(column.label)}>{column.label}</TableHead>
            ))}
            {link && <TableHead key="actions">Actions</TableHead>}
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
              {link && <TableActionCell item={item} />}
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

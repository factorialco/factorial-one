import { Link } from "@/components/Actions/Link"
import { Skeleton } from "@/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/table"
import { OnePagination } from "../../OnePagination"
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

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={String(column.label)}>{column.label}</TableHead>
            ))}
            {link && <TableHead key="actions">Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {isInitialLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <TableRow key={`loading-${i}`}>
                  {columns.map((column) => (
                    <TableCell key={String(column.label)}>
                      <Skeleton className="h-4 w-full" />
                    </TableCell>
                  ))}
                  {link && <TableCell key="actions">Actions</TableCell>}
                </TableRow>
              ))
            : data.map((item, index) => (
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
      </Table>
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

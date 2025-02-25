import { Link } from "@/core/components/actions/Link"
import { Skeleton } from "@/core/internal/skeleton.tsx"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/core/internal/table.tsx"
import type { FiltersDefinition } from "../Filters/types.ts"
import { CollectionProps, RecordType } from "../types.ts"
import { useData } from "../useData.ts"
import { PropertyDefinition, renderValue } from "../utils.ts"

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
  const { data, isLoading } = useData<Record, Filters>(source)

  const TableActionCell = ({ item }: { item: Record }) => {
    const linkInfo = link!(item)
    return (
      <TableCell key="actions">
        <Link href={linkInfo.url}>{linkInfo.label}</Link>
      </TableCell>
    )
  }

  return (
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
        {isLoading
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
  )
}

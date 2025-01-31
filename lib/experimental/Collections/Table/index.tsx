import { Skeleton } from "@/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/table"
import type { FiltersDefinition } from "../Filters/types"
import { CollectionProps, CollectionSchema, SourceData } from "../types"
import { useData } from "../useData"

export type TableColumnDefinition<T> = {
  label: string
  key: keyof T
  render?: (item: T) => string
}

export type TableVisualizationOptions<T> = {
  columns: ReadonlyArray<TableColumnDefinition<T>>
}

export const TableCollection = <
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
>({
  columns,
  source,
}: CollectionProps<
  Schema,
  Filters,
  TableVisualizationOptions<SourceData<Schema, Filters>>
>) => {
  const { data, isLoading } = useData<Schema, Filters>({ source })

  const renderValue = (
    item: SourceData<Schema, Filters>,
    column: TableColumnDefinition<SourceData<Schema, Filters>>
  ) => {
    if (column.render) {
      return column.render(item)
    }
    return String(item[column.key])
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={String(column.key)}>{column.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <TableRow key={i}>
                {columns.map((column) => (
                  <TableCell key={String(column.key)}>
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))
          : data.map((item, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={String(column.key)}>
                    {renderValue(item, column)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
      </TableBody>
    </Table>
  )
}

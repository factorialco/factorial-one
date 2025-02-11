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
import type { FiltersDefinition } from "../Filters/types"
import { CollectionProps, CollectionSchema, SourceData } from "../types"
import { useData } from "../useData"

export type TableColumnDefinition<T extends Record<string, unknown>> = {
  label: string
  key: Extract<keyof T, string>
  render?: (item: T) => string
}

export type TableVisualizationOptions<T extends Record<string, unknown>> = {
  columns: ReadonlyArray<TableColumnDefinition<T>>
  link?: (item: T) => {
    label: string
    url: string
  }
}

export const TableCollection = <
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
>({
  columns,
  source,
  link,
}: CollectionProps<
  Schema,
  Filters,
  TableVisualizationOptions<SourceData<Schema, Filters>>
>) => {
  const { data, isLoading } = useData<Schema, Filters>(source)

  const TableActionCell = ({ item }: { item: SourceData<Schema, Filters> }) => {
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
            <TableHead key={String(column.key)}>{column.label}</TableHead>
          ))}
          {link && <TableHead key="actions">Actions</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <TableRow key={`loading-${i}`}>
                {columns.map((column) => (
                  <TableCell key={String(column.key)}>
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                ))}
                {link && <TableCell key="actions">Actions</TableCell>}
              </TableRow>
            ))
          : data.map((item, index) => (
              <TableRow key={`row-${index}`}>
                {columns.map((column) => (
                  <TableCell key={String(column.key)}>
                    {column.render?.(item) ?? String(item[column.key])}
                  </TableCell>
                ))}
                {link && <TableActionCell item={item} />}
              </TableRow>
            ))}
      </TableBody>
    </Table>
  )
}

import { Button } from "@/components/Actions/Button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Blocks/Card"
import { AutoGrid } from "@/components/Layout/AutoGrid"
import { ArrowLeft, ArrowRight, ChevronDown } from "@/icons"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/table"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import React from "react"
import { TableFiltering } from "../TableFiltering"

type ExtendedColumnDef<T> = ColumnDef<T> & {
  sortable?: boolean
}

interface DataTableProps<TData> {
  columns: ExtendedColumnDef<TData>[]
  data: TData[]
  filterColumn?: keyof TData
  listType?: "default" | "cards"
}

const DataTable = <TData,>({
  columns,
  data,
  filterColumn,
  listType = "default",
}: DataTableProps<TData>) => {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    state: {
      columnFilters,
      sorting,
    },
  })

  return (
    <div className="w-full">
      {filterColumn && (
        <TableFiltering table={table} filterColumn={filterColumn} />
      )}

      <div className="rounded-md border">
        {listType === "default" && (
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const column = header.column
                      .columnDef as ExtendedColumnDef<TData>
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder ? null : (
                          <div
                            className={`flex items-center ${column.sortable ? "cursor-pointer select-none" : ""}`}
                            onClick={
                              column.sortable
                                ? () => header.column.toggleSorting()
                                : undefined
                            }
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {column.sortable && (
                              <ChevronDown className="ml-2 h-4 w-4" />
                            )}
                          </div>
                        )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
        {listType === "cards" && (
          <AutoGrid tileSize="md" gap="4">
            {table.getRowModel().rows.map((row) => (
              <Card key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <React.Fragment key={cell.id}>
                    <CardHeader>
                      <CardTitle>
                        {cell.column.columnDef.header as React.ReactNode}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </CardContent>
                  </React.Fragment>
                ))}
              </Card>
            ))}
          </AutoGrid>
        )}
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          label="Previous"
          hideLabel={true}
          icon={ArrowLeft}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        />
        <Button
          label="Next"
          hideLabel={true}
          icon={ArrowRight}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        />
      </div>
    </div>
  )
}

export { DataTable, type ExtendedColumnDef }

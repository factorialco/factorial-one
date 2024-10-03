import { Input, Select } from "@/experimental/exports"
import {
  Cell,
  ColumnDef,
  ColumnMeta as ReactTableColumnMeta,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { FocusEvent, useState } from "react"

export type ColumnMeta<TData, TValue> = ReactTableColumnMeta<TData, TValue> & {
  options?: Array<{ value: string | number; label: string }>
}

export type Column<TData> = ColumnDef<TData, unknown> & {
  meta?: ColumnMeta<TData, unknown>
}

interface TableProps<TData> {
  data: TData[]
  columns: Column<TData>[]
  onDataChange?: (updatedData: TData[]) => void
  isEditable?: boolean
}

export const Table = <TData extends object>({
  data,
  onDataChange,
  columns,
  isEditable = false,
}: TableProps<TData>) => {
  const [tableData, setTableData] = useState<TData[]>(data)
  const [globalFilter, setGlobalFilter] = useState("")

  const updateData = (rowIndex: number, columnId: string, value: unknown) => {
    const updatedData = tableData.map((row, index) => {
      if (index === rowIndex) {
        return {
          ...row,
          [columnId]: value,
        }
      }
      return row
    })
    setTableData(updatedData)
    onDataChange?.(updatedData)
  }

  const renderCell = (cell: Cell<TData, string>) => {
    if (!isEditable) {
      return flexRender(cell.column.columnDef.cell, cell.getContext())
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      const newValue = e.target.value

      updateData(cell.row.index, cell.column.id, newValue)
    }

    const meta: ColumnMeta<TData, unknown> = cell.column.columnDef.meta || {}

    if (meta.options?.length) {
      const options = meta.options.map(({ label, value }) => ({
        label: label,
        value: value.toString(),
      }))

      return (
        <Select
          placeholder="Select"
          onChange={(selectedValue) =>
            updateData(cell.row.index, cell.column.id, selectedValue)
          }
          options={options}
          value={cell.getValue().toString()}
        />
      )
    }

    return <input defaultValue={cell.getValue()} onBlur={handleBlur} />
  }

  const table = useReactTable({
    columns,
    data: tableData,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: (row, columnId, filterValue) => {
      const cellValue = row.getValue(columnId)

      return String(cellValue)
        .trim()
        .toLowerCase()
        .includes(String(filterValue).trim().toLowerCase())
    },
  })

  return (
    <div>
      <div className="mb-2 w-56">
        <Input
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search"
          type="text"
        />
      </div>
      <table className="min-w-full table-fixed border-spacing-0 overflow-hidden rounded-xl border border-solid border-f1-border">
        <thead className="bg-f1-background-secondary">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="h-12 rounded-xl">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="pl-4 pr-2 text-left font-medium">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="h-12">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="pl-4 pr-2 text-left">
                  {renderCell(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

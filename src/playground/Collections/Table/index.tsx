import {
  Cell,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { FocusEvent, useState } from "react"

export type { ColumnDef } from "@tanstack/react-table"

interface TableProps<TData> {
  data: TData[]
  columns: ColumnDef<TData>[]
  onDataChange?: (updatedData: TData[]) => void
  isEditable?: boolean
}

export const Table = <TData extends object>({
  data,
  onDataChange,
  columns: propColumns,
  isEditable = false,
}: TableProps<TData>) => {
  const [tableData, setTableData] = useState<TData[]>(data)

  const columns = propColumns

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

    return <input defaultValue={cell.getValue()} onBlur={handleBlur} />
  }

  const table = useReactTable({
    columns,
    data: tableData,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table className="border-collapse">
      <thead className="bg-f1-background-secondary">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
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
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{renderCell(cell)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

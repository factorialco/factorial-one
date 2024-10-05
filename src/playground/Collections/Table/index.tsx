import { Input, Select } from "@/experimental/exports"
import {
  Cell,
  ColumnDef,
  ColumnMeta as ReactTableColumnMeta,
  Row,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useVirtualizer } from "@tanstack/react-virtual"
import React, { useCallback, useMemo, useRef, useState } from "react"

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
  const tableContainerRef = useRef<HTMLDivElement>(null)

  const updateData = useCallback(
    (rowIndex: number, columnId: string, value: unknown) => {
      setTableData((prevData) =>
        prevData.map((row, index) =>
          index === rowIndex ? { ...row, [columnId]: value } : row
        )
      )
      onDataChange?.(tableData)
    },
    [onDataChange, tableData]
  )

  const renderCell = useCallback(
    (cell: Cell<TData, string>) => {
      if (!isEditable) {
        return flexRender(cell.column.columnDef.cell, cell.getContext())
      }

      const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        updateData(cell.row.index, cell.column.id, e.target.value)
      }

      const meta: ColumnMeta<TData, unknown> = cell.column.columnDef.meta || {}

      if (meta.options?.length) {
        const options = meta.options.map(({ label, value }) => ({
          label,
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
    },
    [isEditable, updateData]
  )

  const memoizedColumns = useMemo(() => columns, [columns])

  const table = useReactTable({
    columns: memoizedColumns,
    data: tableData,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: useCallback(
      (row: Row<TData>, columnId: string, filterValue: string) => {
        const cellValue = row.getValue(columnId)
        return String(cellValue)
          .trim()
          .toLowerCase()
          .includes(String(filterValue).trim().toLowerCase())
      },
      []
    ),
  })

  const { rows } = table.getRowModel()

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: useCallback(() => 75, []),
    getScrollElement: useCallback(() => tableContainerRef.current, []),
    overscan: 5,
  })

  const virtualRows = rowVirtualizer.getVirtualItems()
  const totalSize = rowVirtualizer.getTotalSize()

  const handleGlobalFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setGlobalFilter(e.target.value)
    },
    []
  )

  return (
    <div>
      <div className="mb-2 w-56">
        <Input
          onChange={handleGlobalFilterChange}
          placeholder="Search"
          type="text"
        />
      </div>
      <div ref={tableContainerRef} className="relative h-96 overflow-auto">
        <table className="w-full border-spacing-0 overflow-hidden rounded-xl border border-solid border-f1-border">
          <thead className="sticky top-0 z-10 bg-f1-background-secondary">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="h-12 rounded-xl">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="pl-4 pr-2 text-left font-medium"
                    style={{ width: `${100 / columns.length}%` }}
                  >
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
          <tbody className="relative" style={{ height: `${totalSize}px` }}>
            {virtualRows.map((virtualRow) => {
              const row = rows[virtualRow.index]
              return (
                <tr
                  key={row.index}
                  className="absolute flex h-20 w-full"
                  style={{ transform: `translateY(${virtualRow.start}px)` }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="flex items-center pl-4 pr-2 text-left"
                      style={{ width: `${100 / columns.length}%` }}
                    >
                      {renderCell(cell)}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

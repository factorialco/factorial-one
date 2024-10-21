import { Input, Select } from "@/experimental/exports"
import { Button } from "@/factorial-one"
import { Pencil } from "@/icons/app"
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
import { SelectionFeature, SelectionState } from "./features/selection"
import useAvailableHeight from "./lib/useAvailableHeight"

export type ColumnMeta<TData, TValue> = ReactTableColumnMeta<TData, TValue> & {
  options?: Array<{ value: string | number; label: string }>
  hideCheckbox?: boolean
}

export type Column<TData> = ColumnDef<TData, unknown> & {
  meta?: ColumnMeta<TData, unknown>
}

type OnDataChangeProps<TData> = {
  newData: TData[]
  initialData: TData[]
  updatedData: Partial<TData>[]
}

interface TableProps<TData> {
  data: TData[]
  columns: Column<TData>[]
  onDataChange?: ({
    newData,
    initialData,
    updatedData,
  }: OnDataChangeProps<TData>) => void
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
  const [selection, setSelection] = useState<SelectionState>({
    selectedCells: new Set<string>(),
  })
  const tableContainerRef = useRef<HTMLDivElement>(null)
  const availableHeight = useAvailableHeight(tableContainerRef)
  const initialDataRef = useRef<TData[]>(data)
  const updatedDataRef = useRef<Partial<TData>[]>([])

  const updateData = useCallback(
    (rowIndex: number, columnId: string, value: unknown) => {
      setTableData((prevData) => {
        const newData = prevData.map((row, index) =>
          index === rowIndex ? { ...row, [columnId]: value } : row
        )

        updatedDataRef.current[rowIndex] = {
          ...updatedDataRef.current[rowIndex],
          [columnId]: value,
        }

        onDataChange?.({
          newData,
          initialData: initialDataRef.current,
          updatedData: updatedDataRef.current,
        })

        return newData
      })
    },
    [onDataChange]
  )

  const renderCell = useCallback(
    (cell: Cell<TData, string>) => {
      const meta: ColumnMeta<TData, unknown> = cell.column.columnDef.meta || {}

      if (typeof cell.getValue() === "function") {
        const CustomComponent = cell.getValue()

        return <CustomComponent />
      }

      if (!isEditable) {
        return flexRender(cell.column.columnDef.cell, cell.getContext())
      }

      const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        updateData(cell.row.index, cell.column.id, e.target.value)
      }

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
      selection,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSelectionChange: setSelection,
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
    _features: [SelectionFeature],
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

  const handleEditSelection = useCallback(() => {
    const selection = table.getState().selection
    const selectedCellsArray = Array.from(selection.selectedCells)

    if (selectedCellsArray.length === 0) {
      console.log("No cells selected")
      alert("No cells selected")
      return
    }

    const selectedCellsInfo = selectedCellsArray.map((cellId) => {
      const [rowIndex, columnId] = cellId.split("-")
      const cellValue = table
        .getCoreRowModel()
        .rowsById[rowIndex]?.getValue(columnId)
      const column = table.getColumn(columnId)
      const columnHeader = column?.columnDef.header as string
      return {
        Row: parseInt(rowIndex) + 1,
        Column: columnHeader,
        Value: cellValue,
      }
    })

    console.table(selectedCellsInfo)

    const totalSelected = selectedCellsArray.length
    const alertMessage = `Total cells selected: ${totalSelected}\n\nTo see the detailed selection data, please check the browser console.`

    alert(alertMessage)
  }, [table])

  const isEditSelectionButtonDisabled = useCallback(() => {
    const selection = table.getState().selection

    return selection.selectedCells.size === 0
  }, [table])

  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <div className="w-56">
          <Input
            onChange={handleGlobalFilterChange}
            placeholder="Search"
            type="text"
          />
        </div>
        <Button
          label="Edit selection"
          disabled={isEditSelectionButtonDisabled()}
          variant="neutral"
          icon={Pencil}
          onClick={handleEditSelection}
        />
      </div>
      <div>
        {table.getHeaderGroups().map((headerGroup) => (
          <div
            key={headerGroup.id}
            className="flex h-12 items-center rounded-tl-xl rounded-tr-xl bg-f1-background-secondary"
          >
            {headerGroup.headers.map((header) => {
              const meta: ColumnMeta<TData, unknown> =
                header.column.columnDef.meta || {}

              return (
                <div
                  key={header.id}
                  className="flex gap-2 pl-4 pr-2 text-left font-medium"
                  style={{ width: `${100 / columns.length}%` }}
                >
                  {isEditable && !meta?.hideCheckbox && (
                    <input
                      type="checkbox"
                      checked={table.getIsColumnSelected(header.column.id)}
                      onChange={() =>
                        table.toggleColumnSelection(header.column.id)
                      }
                    />
                  )}
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>
      <div
        ref={tableContainerRef}
        className="relative h-96 overflow-auto"
        style={{ height: `${availableHeight}px` }}
      >
        <table className="w-full border-spacing-0 rounded-xl">
          <tbody className="relative" style={{ height: `${totalSize}px` }}>
            {virtualRows.map((virtualRow) => {
              const row = rows[virtualRow.index]

              return (
                <tr
                  key={row.index}
                  className="absolute flex h-20 w-full border-b border-solid border-x-transparent border-b-f1-border border-t-transparent"
                  style={{ transform: `translateY(${virtualRow.start}px)` }}
                >
                  {row.getVisibleCells().map((cell) => {
                    const meta: ColumnMeta<TData, unknown> =
                      cell.column.columnDef.meta || {}

                    return (
                      <td
                        key={cell.id}
                        className="flex items-center gap-2 pl-4 pr-2 text-left"
                        style={{ width: `${100 / columns.length}%` }}
                      >
                        {isEditable && !meta.hideCheckbox && (
                          <input
                            type="checkbox"
                            checked={table.getIsCellSelected(
                              row.index,
                              cell.column.id
                            )}
                            onChange={() =>
                              table.toggleCellSelection(
                                row.index,
                                cell.column.id
                              )
                            }
                          />
                        )}
                        {renderCell(cell)}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

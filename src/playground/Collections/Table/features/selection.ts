import {
  OnChangeFn,
  RowData,
  TableFeature,
  Table as TanstackTable,
  makeStateUpdater,
} from "@tanstack/react-table"

export type SelectionState = {
  selectedCells: Set<string>
}

export interface SelectionTableState {
  selection: SelectionState
}

export interface SelectionOptions {
  enableSelection?: boolean
  onSelectionChange?: OnChangeFn<SelectionState>
}

export interface SelectionInstance {
  toggleCellSelection: (rowIndex: number, columnId: string) => void
  toggleColumnSelection: (columnId: string) => void
  getIsCellSelected: (rowIndex: number, columnId: string) => boolean
  getIsColumnSelected: (columnId: string) => boolean
}

declare module "@tanstack/react-table" {
  interface TableState {
    selection: SelectionState
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableOptionsResolved<TData extends RowData> {
    enableSelection?: boolean
    onSelectionChange?: OnChangeFn<SelectionState>
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Table<TData extends RowData> {
    toggleCellSelection: (rowIndex: number, columnId: string) => void
    toggleColumnSelection: (columnId: string) => void
    getIsCellSelected: (rowIndex: number, columnId: string) => boolean
    getIsColumnSelected: (columnId: string) => boolean
  }
}

export const SelectionFeature: TableFeature = {
  getInitialState: (state): SelectionTableState => {
    return {
      selection: {
        selectedCells: new Set<string>(),
      },
      ...state,
    }
  },

  getDefaultOptions: <TData extends RowData>(
    table: TanstackTable<TData>
  ): SelectionOptions => {
    return {
      enableSelection: true,
      onSelectionChange: makeStateUpdater("selection", table),
    }
  },

  createTable: <TData extends RowData>(table: TanstackTable<TData>): void => {
    table.toggleCellSelection = (rowIndex: number, columnId: string) => {
      if (table.options.enableSelection === false) return

      table.options.onSelectionChange?.((old: SelectionState) => {
        const newSelection = { ...old }
        const cellId = `${rowIndex}-${columnId}`

        if (newSelection.selectedCells.has(cellId)) {
          newSelection.selectedCells.delete(cellId)
        } else {
          newSelection.selectedCells.add(cellId)
        }

        return newSelection
      })
    }

    table.toggleColumnSelection = (columnId: string) => {
      if (table.options.enableSelection === false) return

      table.options.onSelectionChange?.((old: SelectionState) => {
        const newSelection = { ...old }
        const isColumnFullySelected = table
          .getCoreRowModel()
          .rows.every((row) =>
            newSelection.selectedCells.has(`${row.index}-${columnId}`)
          )

        if (isColumnFullySelected) {
          table.getCoreRowModel().rows.forEach((row) => {
            newSelection.selectedCells.delete(`${row.index}-${columnId}`)
          })
        } else {
          table.getCoreRowModel().rows.forEach((row) => {
            newSelection.selectedCells.add(`${row.index}-${columnId}`)
          })
        }

        return newSelection
      })
    }

    table.getIsCellSelected = (rowIndex: number, columnId: string) => {
      const cellId = `${rowIndex}-${columnId}`
      return table.getState().selection.selectedCells.has(cellId)
    }

    table.getIsColumnSelected = (columnId: string) => {
      return table
        .getCoreRowModel()
        .rows.every((row) =>
          table
            .getState()
            .selection.selectedCells.has(`${row.index}-${columnId}`)
        )
    }
  },
}

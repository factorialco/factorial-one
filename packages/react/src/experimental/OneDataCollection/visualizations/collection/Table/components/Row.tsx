import { ActionsDropdown } from "@/experimental/OneDataCollection/ItemActions/Dropdown"

import { FiltersDefinition } from "@/experimental/OneDataCollection/Filters/types"
import { ItemActionsDefinition } from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { renderProperty } from "@/experimental/OneDataCollection/property-render"
import { SortingsDefinition } from "@/experimental/OneDataCollection/sortings"
import {
  DataSource,
  GroupingDefinition,
  RecordType,
} from "@/experimental/OneDataCollection/types"
import { TableCell, TableRow } from "@/experimental/OneTable"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/ui/checkbox"
import { TableColumnDefinition } from ".."

export type RowProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = {
  source: DataSource<
    Record,
    Filters,
    Sortings,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  item: Record
  index: number
  onCheckedChange: (checked: boolean) => void
  selectedItems: Map<string | number, Record>
  columns: ReadonlyArray<TableColumnDefinition<Record, Sortings>>
  frozenColumnsLeft: number
  checkColumnWidth: number
}

export const Row = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  source,
  item,
  index,
  onCheckedChange,
  selectedItems,
  columns,
  frozenColumnsLeft,
  checkColumnWidth,
}: RowProps<
  Record,
  Filters,
  Sortings,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const itemHref = source.itemUrl ? source.itemUrl(item) : undefined
  const itemOnClick = source.itemOnClick ? source.itemOnClick(item) : undefined
  const id = source.selectable ? source.selectable(item) : undefined

  const renderCell = (
    item: Record,
    column: TableColumnDefinition<Record, Sortings>
  ) => {
    return renderProperty(item, column, "table")
  }

  return (
    <TableRow key={`row-${index}`}>
      {source.selectable && (
        <TableCell width={checkColumnWidth} sticky={{ left: 0 }}>
          {id !== undefined && (
            <div className="flex items-center justify-end">
              <Checkbox
                checked={selectedItems.has(id)}
                onCheckedChange={onCheckedChange}
                title={`Select ${source.selectable(item)}`}
                hideLabel
              />
            </div>
          )}
        </TableCell>
      )}
      {columns.map((column, cellIndex) => (
        <TableCell
          key={String(column.label)}
          firstCell={cellIndex === 0}
          href={itemHref}
          onClick={itemOnClick}
          width={column.width}
          sticky={
            cellIndex < frozenColumnsLeft
              ? {
                  left: columns
                    .slice(0, Math.max(0, cellIndex))
                    .reduce(
                      (acc, column) => acc + (column.width ?? 0),
                      checkColumnWidth
                    ),
                }
              : undefined
          }
        >
          <div
            className={cn(
              column.align === "right" ? "justify-end" : "",
              "flex"
            )}
          >
            {renderCell(item, column)}
          </div>
        </TableCell>
      ))}
      {source.itemActions && (
        <TableCell
          key="actions"
          width={68}
          sticky={{
            right: 0,
          }}
          href={itemHref}
          onClick={itemOnClick}
        >
          <ActionsDropdown item={item} actions={source.itemActions} />
        </TableCell>
      )}
    </TableRow>
  )
}

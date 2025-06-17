import { ItemActionsDropdown } from "@/experimental/OneDataCollection/ItemActions/ItemActionsDropdown"
import { forwardRef } from "react"

import { FiltersDefinition } from "@/experimental/OneDataCollection/Filters/types"
import {
  filterItemActions,
  ItemActionsDefinition,
} from "@/experimental/OneDataCollection/item-actions"
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
import { actionsToDropdownItems } from "../../utils"

export type RowProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = {
  source: DataSource<
    R,
    Filters,
    Sortings,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  item: R
  index: number
  groupIndex: number
  onCheckedChange: (checked: boolean) => void
  selectedItems: Map<string | number, R>
  columns: ReadonlyArray<TableColumnDefinition<R, Sortings>>
  frozenColumnsLeft: number
  checkColumnWidth: number
}

const RowComponentInner = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  {
    source,
    item,
    onCheckedChange,
    selectedItems,
    columns,
    frozenColumnsLeft,
    checkColumnWidth,
    index,
    groupIndex,
  }: RowProps<R, Filters, Sortings, ItemActions, NavigationFilters, Grouping>,
  ref: React.ForwardedRef<HTMLTableRowElement>
) => {
  const itemHref = source.itemUrl ? source.itemUrl(item) : undefined
  const itemOnClick = source.itemOnClick ? source.itemOnClick(item) : undefined
  const id = source.selectable ? source.selectable(item) : undefined

  const renderCell = (item: R, column: TableColumnDefinition<R, Sortings>) => {
    return renderProperty(item, column, "table")
  }

  const key = `table-row-${groupIndex}-${index}`

  const itemActions = filterItemActions(source.itemActions, item)

  return (
    <TableRow ref={ref} key={key}>
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
          key={`table-cell-${groupIndex}-${index}-${cellIndex}`}
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
          key={`table-cell-${groupIndex}-${index}-actions`}
          width={68}
          sticky={{
            right: 0,
          }}
          href={itemHref}
          onClick={itemOnClick}
        >
          <ItemActionsDropdown items={actionsToDropdownItems(itemActions)} />
        </TableCell>
      )}
    </TableRow>
  )
}

const Row = forwardRef(RowComponentInner) as <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  props: RowProps<
    R,
    Filters,
    Sortings,
    ItemActions,
    NavigationFilters,
    Grouping
  > & { ref?: React.ForwardedRef<HTMLTableRowElement> }
) => ReturnType<typeof RowComponentInner>

export { Row }

import { ItemActionsDropdown } from "@/experimental/OneDataCollection/ItemActions/ItemActionsDropdown"
import { forwardRef, useState } from "react"

import { Button } from "@/components/Actions/Button"
import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { DropdownItemSeparator } from "@/experimental/Navigation/Dropdown/internal"
import {
  ActionDefinition,
  filterItemActions,
  ItemActionsDefinition,
} from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { renderProperty } from "@/experimental/OneDataCollection/property-render"
import { SortingsDefinition } from "@/experimental/OneDataCollection/sortings"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary"
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
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = {
  source: DataSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  item: R
  index: number
  groupIndex: number
  onCheckedChange: (checked: boolean) => void
  selectedItems: Map<string | number, R>
  columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>
  frozenColumnsLeft: number
  checkColumnWidth: number
}

const RowComponentInner = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
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
  }: RowProps<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >,
  ref: React.ForwardedRef<HTMLTableRowElement>
) => {
  const itemHref = source.itemUrl ? source.itemUrl(item) : undefined
  const itemOnClick = source.itemOnClick ? source.itemOnClick(item) : undefined
  const id = source.selectable ? source.selectable(item) : undefined

  const renderCell = (
    item: R,
    column: TableColumnDefinition<R, Sortings, Summaries>
  ) => {
    return renderProperty(item, column, "table")
  }

  const key = `table-row-${groupIndex}-${index}`

  const itemActions = filterItemActions(source.itemActions, item)

  // gets the primary item actions (max 2)
  const primaryItemActions = itemActions
    .filter(
      (action): action is Exclude<ActionDefinition, DropdownItemSeparator> =>
        action.type === "primary"
    )
    .slice(0, 2)

  // the rest of the actions go to the dropdown
  const dropdownItemActions = actionsToDropdownItems(
    itemActions.filter(
      (action) =>
        action.type === "separator" || !primaryItemActions.includes(action)
    )
  )

  const [dropDownOpen, setDropDownOpen] = useState(false)

  const [dropDownOpenTimeout, setDropDownOpenTimeout] =
    useState<NodeJS.Timeout | null>(null)

  const handleDropDownOpenChange = (open: boolean) => {
    // When the dropdown is closed, we wait 100ms before closing it to avoid losing the reference element to position the dropdown
    if (!open) {
      setDropDownOpenTimeout(
        setTimeout(() => {
          setDropDownOpen(false)
        }, 100)
      )
      return
    }

    if (dropDownOpenTimeout) {
      clearTimeout(dropDownOpenTimeout)
      setDropDownOpenTimeout(null)
    }
    setDropDownOpen(true)
  }

  return (
    <TableRow
      ref={ref}
      key={key}
      className={cn(
        "group transition-colors hover:bg-f1-background-hover",
        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']",
        dropDownOpen && "bg-f1-background-hover"
      )}
    >
      {source.selectable && (
        <TableCell width={checkColumnWidth} sticky={{ left: 0 }}>
          {id !== undefined && (
            <div className="pointer-events-auto flex items-center justify-end">
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
        >
          <div className="relative flex h-full min-h-[3rem] w-full items-center">
            <aside
              className={cn(
                "absolute inset-y-0 -right-px z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 opacity-0 transition-all group-hover:opacity-100 md:flex",
                "bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231]",
                "via-[#F5F6F8] via-60% dark:via-[#192231]",
                "to-transparent to-100%",
                "pointer-events-auto",
                dropDownOpen ? "opacity-100" : "opacity-0"
              )}
            >
              {primaryItemActions.map((action) => (
                <Button
                  key={action.label}
                  label={action.label}
                  variant="outline"
                  onClick={action.onClick}
                  icon={action.icon}
                />
              ))}

              <ItemActionsDropdown
                align="end"
                items={dropdownItemActions}
                onOpenChange={handleDropDownOpenChange}
              />
            </aside>
          </div>
        </TableCell>
      )}
    </TableRow>
  )
}

const Row = forwardRef(RowComponentInner) as <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  props: RowProps<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  > & { ref?: React.ForwardedRef<HTMLTableRowElement> }
) => ReturnType<typeof RowComponentInner>

export { Row }

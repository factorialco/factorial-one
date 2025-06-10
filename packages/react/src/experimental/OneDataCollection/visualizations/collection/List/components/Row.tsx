import { Button } from "@/components/Actions/Button"
import { Link } from "@/components/Actions/Link"
import { Checkbox } from "@/experimental/Forms/Fields/Checkbox"
import { DropdownItemSeparator } from "@/experimental/Navigation/Dropdown/internal"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { FiltersDefinition } from "../../../../Filters/types"
import {
  ActionDefinition,
  filterItemActions,
  ItemActionsDefinition,
} from "../../../../item-actions"
import { ItemActionsDropdown } from "../../../../ItemActions/ItemActionsDropdown"
import { NavigationFiltersDefinition } from "../../../../navigationFilters/types"
import { renderProperty } from "../../../../property-render"
import { SortingsDefinition } from "../../../../sortings"
import { DataSource, GroupingDefinition, RecordType } from "../../../../types"
import { actionsToDropdownItems } from "../../utils"
import { ItemDefinition, ListPropertyDefinition } from "../types"
import { ItemTeaser } from "./ItemTeaser"

type RowProps<
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
  selectedItems: Map<number | string, R>
  handleSelectItemChange: (item: R, checked: boolean) => void
  fields: ReadonlyArray<ListPropertyDefinition<R, Sortings>>
  itemDefinition: (record: R) => ItemDefinition
}

/**
 * Group List: Renders the list for a group
 */
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
  selectedItems,
  handleSelectItemChange,
  fields,
  itemDefinition,
}: RowProps<
  Record,
  Filters,
  Sortings,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const renderCell = (
    item: Record,
    property: ListPropertyDefinition<Record, Sortings>
  ) => {
    return renderProperty(item, property, "table")
  }

  const { actions } = useI18n()

  const itemHref = source.itemUrl ? source.itemUrl(item) : undefined
  const itemOnClick = source.itemOnClick ? source.itemOnClick(item) : undefined
  const id = source.selectable ? source.selectable(item) : undefined
  const itemDef = itemDefinition(item)

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
    <div
      className={cn(
        "relative flex w-full flex-col justify-between gap-4 p-3 transition-colors md:flex-row md:p-2 md:pl-3 md:pr-4",
        "group after:absolute after:inset-y-0 after:-right-px after:z-10 after:hidden after:h-full after:w-10 after:bg-gradient-to-r after:from-transparent after:via-f1-background after:via-75% after:to-f1-background after:content-[''] hover:bg-f1-background-hover md:after:block",
        dropDownOpen && "bg-f1-background-hover"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {source.selectable && id !== undefined && (
          <div className="flex items-center justify-end">
            <Checkbox
              checked={selectedItems.has(id)}
              onCheckedChange={(checked) =>
                handleSelectItemChange(item, checked)
              }
              title={`Select ${source.selectable(item)}`}
              hideLabel
            />
          </div>
        )}
        {itemHref && (
          <Link href={itemHref} className="absolute inset-0 block" tabIndex={0}>
            <span className="sr-only">{actions.view}</span>
          </Link>
        )}
        <ItemTeaser
          title={itemDef.title}
          avatar={itemDef.avatar}
          description={itemDef.description}
        />
      </div>
      <div className="flex flex-col items-start md:flex-row md:items-center [&>div]:justify-end">
        {(fields || []).map((field) => (
          <div key={String(field.label)} onClick={itemOnClick}>
            <div className="flex items-center justify-center px-0 py-1 md:p-3 [&>span]:whitespace-nowrap">
              {renderCell(item, field)}
            </div>
          </div>
        ))}
      </div>
      {source.itemActions && (
        <aside
          className={cn(
            "absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 opacity-0 transition-all group-hover:opacity-100 md:flex",
            "bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231]",
            "via-[#F5F6F8] via-60% dark:via-[#192231]",
            "to-transparent to-100%",
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
      )}
    </div>
  )
}

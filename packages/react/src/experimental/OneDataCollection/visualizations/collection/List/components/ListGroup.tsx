import { Button } from "@/components/Actions/Button"
import { Link } from "@/components/Actions/Link"
import { Checkbox } from "@/experimental/Forms/Fields/Checkbox"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { FiltersDefinition } from "../../../../Filters/types"
import { ItemActionsDefinition } from "../../../../item-actions"
import { ActionsDropdown } from "../../../../ItemActions/Dropdown"
import { NavigationFiltersDefinition } from "../../../../navigationFilters/types"
import { renderProperty } from "../../../../property-render"
import { SortingsDefinition } from "../../../../sortings"
import { DataSource, GroupingDefinition, RecordType } from "../../../../types"
import { ItemDefinition, ListPropertyDefinition } from "../types"
import { ItemTeaser } from "./ItemTeaser"

type ListGroupProps<
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
  items: R[]
  selectedItems: Map<number | string, R>
  handleSelectItemChange: (item: R, checked: boolean) => void
  fields: ListPropertyDefinition<R, Sortings>[]
  itemDefinition: (record: R) => ItemDefinition
}

/**
 * Group List: Renders the list for a group
 */
export const ListGroup = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  source,
  items,
  selectedItems,
  handleSelectItemChange,
  fields,
  itemDefinition,
}: ListGroupProps<
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

  return items.map((item, index) => {
    const itemHref = source.itemUrl ? source.itemUrl(item) : undefined
    const itemOnClick = source.itemOnClick
      ? source.itemOnClick(item)
      : undefined
    const id = source.selectable ? source.selectable(item) : undefined
    const itemDef = itemDefinition(item)

    const itemActions = source.itemActions ? source.itemActions(item) || [] : []

    const expandedItemActions = itemActions.slice(0, 1)
    const dropdownItemActions = itemActions.slice(1)

    return (
      <div
        key={`row-${index}`}
        className={cn(
          "relative flex w-full flex-row gap-2 p-2 pl-4",
          "group hover:bg-f1-background-hover"
        )}
      >
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
          className="min-w-40 flex-1"
          title={itemDef.title}
          avatar={itemDef.avatar}
          description={itemDef.description}
          metadata={itemDef.metadata}
        />
        <div className="flex flex-1 flex-row items-center justify-end gap-2">
          {(fields || []).map((field) => (
            <div key={String(field.label)} onClick={itemOnClick}>
              <div className={cn()}>{renderCell(item, field)}</div>
            </div>
          ))}
        </div>
        {source.itemActions && (
          <aside className="via-bg-[#f00] absolute bottom-0 right-0 top-0 hidden items-center justify-end gap-1 bg-gradient-to-l from-[#f00] from-0% via-90% to-transparent to-100% p-2 pl-10 group-hover:flex">
            {expandedItemActions.map((action) => (
              <Button
                key={action.label}
                label={action.label}
                variant="outline"
                onClick={action.onClick}
              />
            ))}

            <ActionsDropdown item={item} actions={source.itemActions} />
          </aside>
        )}
      </div>
    )
  })
}

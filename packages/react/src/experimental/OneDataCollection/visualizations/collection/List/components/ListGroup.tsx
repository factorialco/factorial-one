import { Link } from "@/components/Actions/Link"
import { Checkbox } from "@/experimental/Forms/Fields/Checkbox"
import { Avatar } from "@/experimental/Information/Avatars/Avatar"
import { cn } from "@/lib/utils"
import { FiltersDefinition } from "../../../../Filters/types"
import { ItemActionsDefinition } from "../../../../item-actions"
import { ActionsDropdown } from "../../../../ItemActions/Dropdown"
import { NavigationFiltersDefinition } from "../../../../navigationFilters/types"
import { renderProperty } from "../../../../property-render"
import { SortingsDefinition } from "../../../../sortings"
import { DataSource, GroupingDefinition, RecordType } from "../../../../types"
import { ItemDefinition, ListPropertyDefinition } from "../types"

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

  return items.map((item, index) => {
    const itemHref = source.itemUrl ? source.itemUrl(item) : undefined
    const itemOnClick = source.itemOnClick
      ? source.itemOnClick(item)
      : undefined
    const id = source.selectable ? source.selectable(item) : undefined
    const itemDef = itemDefinition(item)
    return (
      <div key={`row-${index}`} selected={!!id && selectedItems.has(id)}>
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
        <Link href={itemHref} className={cn()}>
          {itemDef.avatar && <Avatar avatar={itemDef.avatar} size="small" />}
          <h3>{itemDef.title}</h3>
          <aside className="flex flex-col gap-1">
            {itemDef.description && <p>{itemDef.description}</p>}
            {itemDef.metadata && (
              <>
                {" * "}
                <p>{itemDef.metadata}</p>
              </>
            )}
          </aside>
        </Link>
        {(fields || []).map((field, fieldIndex) => (
          <div key={String(field.label)} onClick={itemOnClick}>
            <div className={cn()}>{renderCell(item, field)}</div>
          </div>
        ))}
        {source.itemActions && (
          <ActionsDropdown item={item} actions={source.itemActions} />
        )}
      </div>
    )
  })
}

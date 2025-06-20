import { FiltersDefinition } from "../../../../Filters/types"
import { ItemActionsDefinition } from "../../../../item-actions"
import { NavigationFiltersDefinition } from "../../../../navigationFilters/types"
import { SortingsDefinition } from "../../../../sortings"
import { DataSource, GroupingDefinition, RecordType } from "../../../../types"
import { ItemDefinition, ListPropertyDefinition } from "../types"
import { Row } from "./Row"

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
  fields: ReadonlyArray<ListPropertyDefinition<R, Sortings>>
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
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary">
      {items.map((item, index) => (
        <Row
          key={`row-${index}`}
          source={source}
          item={item}
          selectedItems={selectedItems}
          handleSelectItemChange={handleSelectItemChange}
          fields={fields}
          itemDefinition={itemDefinition}
        />
      ))}
    </div>
  )
}

import { FiltersDefinition } from "../../../../Filters/types"
import { ItemActionsDefinition } from "../../../../item-actions"
import { NavigationFiltersDefinition } from "../../../../navigationFilters/types"
import { SortingsDefinition } from "../../../../sortings"
import { DataSource, GroupingDefinition, RecordType } from "../../../../types"
import { ItemDefinition, SimpleListPropertyDefinition } from "../types"
import { Row } from "./Row"

type SimpleListGroupProps<
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
  fields: ReadonlyArray<SimpleListPropertyDefinition<R, Sortings>>
  itemDefinition: (record: R) => ItemDefinition
}

/**
 * Group SimpleList: Renders the list for a group
 */
export const SimpleListGroup = <
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
}: SimpleListGroupProps<
  Record,
  Filters,
  Sortings,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  return (
    <div className="flex flex-col overflow-hidden [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary">
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

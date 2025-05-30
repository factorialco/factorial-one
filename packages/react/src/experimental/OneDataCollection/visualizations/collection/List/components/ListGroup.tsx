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
  return items.map((item, index) => (
    <Row
      key={`row-${index}`}
      source={source}
      item={item}
      selectedItems={selectedItems}
      handleSelectItemChange={handleSelectItemChange}
      fields={fields}
      itemDefinition={itemDefinition}
    />
  ))
}
// return (
//   <div
//     key={`row-${index}`}
//     className={cn(
//       "relative flex w-full flex-row gap-2 p-2 pl-4",
//       "group hover:bg-f1-background-hover"
//     )}
//   >
//     {source.selectable && id !== undefined && (
//       <div className="flex items-center justify-end">
//         <Checkbox
//           checked={selectedItems.has(id)}
//           onCheckedChange={(checked) =>
//             handleSelectItemChange(item, checked)
//           }
//           title={`Select ${source.selectable(item)}`}
//           hideLabel
//         />
//       </div>
//     )}
//     {itemHref && (
//       <Link href={itemHref} className="absolute inset-0 block" tabIndex={0}>
//         <span className="sr-only">{actions.view}</span>
//       </Link>
//     )}
//     <ItemTeaser
//       className="min-w-40 flex-1"
//       title={itemDef.title}
//       avatar={itemDef.avatar}
//       description={itemDef.description}
//       metadata={itemDef.metadata}
//     />
//     <div className="flex flex-1 flex-row items-center justify-end gap-2">
//       {(fields || []).map((field) => (
//         <div key={String(field.label)} onClick={itemOnClick}>
//           <div className={cn()}>{renderCell(item, field)}</div>
//         </div>
//       ))}
//     </div>
//     {source.itemActions && (
//       <aside
//         className={cn(
//           "absolute bottom-0 right-0 top-0 items-center justify-end gap-1 p-2 pl-20 group-hover:flex",
//           "bg-gradient-to-l from-[#f00] from-0%",
//           "via-[#f00] via-60%",
//           "to-transparent to-100%",
//           dropDownOpen ? "flex" : "hidden"
//         )}
//       >
//         {primaryItemActions.map((action) => (
//           <Button
//             key={action.label}
//             label={action.label}
//             variant="outline"
//             onClick={action.onClick}
//             icon={action.icon}
//           />
//         ))}

//         <ActionsDropdown
//           items={dropdownItemActions}
//           onOpenChange={setDropDownOpen}
//         />
//       </aside>
//     )}
//   </div>
// )

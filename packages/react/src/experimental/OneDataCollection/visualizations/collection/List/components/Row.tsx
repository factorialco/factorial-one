import { Link } from "@/components/Actions/Link"
import { F0Checkbox } from "@/components/F0Checkbox"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { FiltersDefinition } from "../../../../../../components/OneFilterPicker/types"
import { ItemActionsDefinition } from "../../../../item-actions"
import { NavigationFiltersDefinition } from "../../../../navigationFilters/types"
import { renderProperty } from "../../../../property-render"
import { SortingsDefinition } from "../../../../sortings"
import { SummariesDefinition } from "../../../../summary"
import { DataSource, GroupingDefinition, RecordType } from "../../../../types"
import { ItemActionsRenderer } from "../../components/ItemActionsRenderer"
import { ItemDefinition, ListPropertyDefinition } from "../types"
import { ItemTeaser } from "./ItemTeaser"

type RowProps<
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
  Summaries extends SummariesDefinition,
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
  Summaries,
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

  return (
    <div
      className={cn(
        "relative flex w-full flex-col justify-between gap-4 p-3 transition-colors md:flex-row md:p-2 md:pl-3 md:pr-4",
        "group after:absolute after:inset-y-0 after:-right-px after:z-10 after:hidden after:h-full after:w-10 after:bg-gradient-to-r after:from-transparent after:via-f1-background after:via-75% after:to-f1-background after:transition-all after:content-[''] hover:after:via-[#F5F6F8] hover:after:to-[#F5F6F8] dark:hover:after:via-[#192231] dark:hover:after:to-[#192231] md:after:block hover:md:bg-f1-background-hover"
      )}
    >
      <div className="flex flex-1 flex-row items-center gap-2">
        {source.selectable && id !== undefined && (
          // z-10 is needed here to prevent the checkbox from not being selectable when itemHref is provided
          <div className="z-10 hidden items-center justify-end md:flex">
            <F0Checkbox
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
        <ItemActionsRenderer source={source} item={item} />
      )}
      {source.selectable && id !== undefined && (
        <div
          className={cn(
            "absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden",
            source.itemActions && "right-12"
          )}
        >
          <F0Checkbox
            checked={selectedItems.has(id)}
            onCheckedChange={(checked) => handleSelectItemChange(item, checked)}
            title={`Select ${source.selectable(item)}`}
            hideLabel
          />
        </div>
      )}
    </div>
  )
}

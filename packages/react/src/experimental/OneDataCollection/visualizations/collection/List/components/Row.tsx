import { Link } from "@/components/Actions/Link"
import { F0Checkbox } from "@/components/F0Checkbox"
import { ItemActionsMobile } from "@/experimental/OneDataCollection/components/itemActions/ItemActionsMobile/ItemActionsMobile"
import { ItemActionsRowContainer } from "@/experimental/OneDataCollection/components/itemActions/ItemActionsRowContainer"
import { useItemActions } from "@/experimental/OneDataCollection/components/itemActions/useItemActions"
import { DataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource/types"
import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { ItemActionsRow } from "../../../../components/itemActions/ItemActionsRow/ItemActionsRow"
import { ItemActionsDefinition } from "../../../../item-actions"
import { NavigationFiltersDefinition } from "../../../../navigationFilters/types"
import { renderProperty } from "../../../../property-render"
import { SummariesDefinition } from "../../../../summary"
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
  source: DataCollectionSource<
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

  const {
    primaryItemActions,
    dropdownItemActions,
    mobileDropdownItemActions,
    handleDropDownOpenChange,
    dropDownOpen,
  } = useItemActions({ source, item })

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
        <>
          <ItemActionsRowContainer
            dropDownOpen={dropDownOpen}
            className="hidden md:flex"
          >
            <ItemActionsRow
              primaryItemActions={primaryItemActions}
              dropdownItemActions={dropdownItemActions}
              handleDropDownOpenChange={handleDropDownOpenChange}
            />
          </ItemActionsRowContainer>

          <ItemActionsMobile
            className="absolute -right-px bottom-0 top-0 z-20 items-center justify-end gap-2 py-2 pl-20 pr-3 md:hidden"
            items={mobileDropdownItemActions}
            onOpenChange={handleDropDownOpenChange}
          />
        </>
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

import { Button } from "@/components/Actions/Button"
import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { DropdownItemSeparator } from "@/experimental/Navigation/Dropdown/internal"
import {
  ActionDefinition,
  filterItemActions,
  ItemActionsDefinition,
} from "@/experimental/OneDataCollection/item-actions"
import { ItemActionsDropdown } from "@/experimental/OneDataCollection/ItemActions/ItemActionsDropdown"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { SortingsDefinition } from "@/experimental/OneDataCollection/sortings"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary"
import {
  DataSource,
  GroupingDefinition,
  RecordType,
} from "@/experimental/OneDataCollection/types"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { actionsToDropdownItems } from "../utils"

type ItemActionsRendererProps<
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
  className?: string
  desktopContainerClassName?: string
  mobileContainerClassName?: string
}

export const ItemActionsRenderer = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  source,
  item,
  className,
  desktopContainerClassName,
  mobileContainerClassName,
}: ItemActionsRendererProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const [dropDownOpenTimeout, setDropDownOpenTimeout] =
    useState<NodeJS.Timeout | null>(null)

  if (!source.itemActions) {
    return null
  }

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

  // mobile dropdown includes primary actions
  const mobileDropdownItemActions = actionsToDropdownItems([
    ...primaryItemActions,
    ...itemActions.filter(
      (action) =>
        action.type === "separator" || !primaryItemActions.includes(action)
    ),
  ])

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

  // if (variant === "table") {
  //   // For tables, always show primary action, dropdown on hover
  //   // This works better with sticky positioning
  //   return (
  //     <>
  //       {/* Desktop actions - primary always visible, rest on hover */}
  //       <div
  //         className={cn(
  //           "hidden items-center justify-center gap-2 md:flex",
  //           desktopContainerClassName,
  //           className
  //         )}
  //       >
  //         {/* Always show first primary action if available */}
  //         {primaryItemActions.length > 0 && (
  //           <Button
  //             label={primaryItemActions[0].label}
  //             variant="outline"
  //             onClick={primaryItemActions[0].onClick}
  //             icon={primaryItemActions[0].icon}
  //           />
  //         )}

  //         {/* Show dropdown if there are more actions */}
  //         {(primaryItemActions.length > 1 ||
  //           dropdownItemActions.length > 0) && (
  //           <div
  //             className={cn(
  //               "opacity-0 transition-all group-hover:opacity-100",
  //               dropDownOpen && "opacity-100"
  //             )}
  //           >
  //             <ItemActionsDropdown
  //               align="end"
  //               items={actionsToDropdownItems([
  //                 ...primaryItemActions.slice(1), // Remaining primary actions
  //                 ...itemActions.filter(
  //                   (action) =>
  //                     action.type === "separator" ||
  //                     !primaryItemActions.includes(action)
  //                 ),
  //               ])}
  //               onOpenChange={handleDropDownOpenChange}
  //             />
  //           </div>
  //         )}
  //       </div>

  //       {/* Mobile actions */}
  //       <div
  //         className={cn(
  //           "flex h-8 w-8 items-center justify-center md:hidden",
  //           mobileContainerClassName,
  //           className
  //         )}
  //       >
  //         <ItemActionsDropdown
  //           align="end"
  //           items={mobileDropdownItemActions}
  //           onOpenChange={handleDropDownOpenChange}
  //         />
  //       </div>
  //     </>
  //   )
  // }

  return (
    <>
      <aside
        className={cn(
          "absolute -right-px bottom-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 opacity-0 transition-all group-hover:opacity-100 md:flex",
          "bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231]",
          "via-[#F5F6F8] via-60% dark:via-[#192231]",
          "to-transparent to-100%",
          dropDownOpen ? "opacity-100" : "opacity-0",
          desktopContainerClassName,
          className
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
      <div
        className={cn(
          "absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden",
          mobileContainerClassName,
          className
        )}
      >
        <ItemActionsDropdown
          align="end"
          items={mobileDropdownItemActions}
          onOpenChange={handleDropDownOpenChange}
        />
      </div>
    </>
  )
}

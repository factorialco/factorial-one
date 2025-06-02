import { Button } from "@/components/Actions/Button"
import { Select } from "@/experimental/Forms/Fields/Select"
import { FiltersDefinition } from "@/experimental/OneDataCollection/Filters/types"
import { ItemActionsDefinition } from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { ArrowDown, ArrowUp } from "@/icons/app"
import { useEffect, useState } from "react"
import {
  SortingKey,
  SortingsDefinition,
  SortingsState,
} from "../../../../sortings"
import { DataSource, GroupingDefinition, RecordType } from "../../../../types"

export const EmptySortingValue = "__no-sorting__"

export const SortingSelector = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  source,
  currentSortings,
  onChange,
}: {
  source: DataSource<
    R,
    Filters,
    Sortings,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  currentSortings: SortingsState<Sortings> | null
  onChange: (sorting: SortingsState<Sortings>) => void
}) => {
  const sortingOptions = [
    {
      label: "{TODO} No sorting",
      value: EmptySortingValue,
    },
    ...Object.entries(source.sortings || {}).map(([key, value]) => ({
      label: value.label,
      value: key,
    })),
  ]

  const [localSortings, setLocalSortings] =
    useState<SortingsState<Sortings> | null>(currentSortings)

  useEffect(() => {
    if (!currentSortings) {
      setLocalSortings({
        field: EmptySortingValue,
        order: "asc",
      })
    } else {
      setLocalSortings(currentSortings)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we are deep comparing the currentSortings
  }, [JSON.stringify(currentSortings)])

  return (
    <div className="flex flex-row gap-2">
      <Select
        options={sortingOptions}
        value={localSortings?.field as string}
        onChange={(value) => {
          if (value) {
            onChange({
              field: value as SortingKey<Sortings>,
              order: localSortings?.order ?? "asc",
            })
          }
        }}
      />
      {localSortings?.field !== EmptySortingValue && (
        <Button
          hideLabel
          label="Toggle sort direction"
          variant="outline"
          icon={localSortings?.order === "asc" ? ArrowUp : ArrowDown}
          onClick={() =>
            onChange({
              field: localSortings?.field as SortingKey<Sortings>,
              order: localSortings?.order === "asc" ? "desc" : "asc",
            })
          }
        />
      )}
    </div>
  )
}

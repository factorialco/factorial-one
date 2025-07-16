import { Button } from "@/components/Actions/Button"
import { Select } from "@/experimental/Forms/Fields/Select"
import { ArrowDown, ArrowUp, Placeholder } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { useEffect, useState } from "react"
import { SortingKey, SortingsDefinition, SortingsState } from "../../sortings"

export const EmptySortingValue = "__no-sorting__"

export const SortingSelector = <Sortings extends SortingsDefinition>({
  currentSortings,
  sortings,
  onChange,
}: {
  sortings: SortingsDefinition
  currentSortings: SortingsState<Sortings> | null
  onChange: (sorting: SortingsState<Sortings>) => void
}) => {
  const i18n = useI18n()
  const sortingOptions = [
    {
      label: i18n.collections.sorting.noSorting,
      value: EmptySortingValue,
    },
    ...Object.entries(sortings || {}).map(([key, value]) => ({
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
    <div className="flex flex-col gap-0 py-3">
      <div className="flex items-center gap-2 px-3">
        <div className="shrink grow [&_button]:h-8 [&_button]:rounded">
          <Select
            label={i18n.collections.sorting.sortBy}
            labelIcon={Placeholder}
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
        </div>

        {localSortings?.field !== EmptySortingValue && (
          <div>
            <Button
              hideLabel
              label={i18n.collections.sorting.toggleDirection}
              variant="outline"
              icon={localSortings?.order === "asc" ? ArrowUp : ArrowDown}
              onClick={() =>
                onChange({
                  field: localSortings?.field as SortingKey<Sortings>,
                  order: localSortings?.order === "asc" ? "desc" : "asc",
                })
              }
            />
          </div>
        )}
      </div>
    </div>
  )
}

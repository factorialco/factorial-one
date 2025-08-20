import { Placeholder } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { EmptyValue, SelectWithDirection } from "@/ui/SelectWithDirection"
import { useEffect, useState } from "react"
import {
  SortingKey,
  SortingsDefinition,
  SortingsState,
  SortOrder,
} from "../../../../hooks/datasource/types/sortings.typings"

export const SortingSelector = <Sortings extends SortingsDefinition>({
  currentSortings,
  sortings,
  onChange,
  className,
}: {
  sortings: SortingsDefinition
  currentSortings: SortingsState<Sortings> | null
  onChange: (sorting: SortingsState<Sortings>) => void
  className?: string
}) => {
  const i18n = useI18n()
  const sortingOptions = [
    {
      label: i18n.collections.sorting.noSorting,
      value: EmptyValue,
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
        field: EmptyValue,
        order: "asc",
      })
    } else {
      setLocalSortings(currentSortings)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we are deep comparing the currentSortings
  }, [JSON.stringify(currentSortings)])

  return (
    <>
      <SelectWithDirection
        options={sortingOptions}
        value={
          localSortings
            ? {
                selected: localSortings.field.toString(),
                direction: localSortings.order,
              }
            : undefined
        }
        onChange={
          onChange
            ? (value) =>
                onChange({
                  field: value?.selected as SortingKey<Sortings>,
                  order: value?.direction as SortOrder,
                })
            : undefined
        }
        label={i18n.collections.sorting.sortBy}
        labelIcon={Placeholder}
        className={className}
      />
    </>
  )
}

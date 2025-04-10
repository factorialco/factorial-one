import { Button } from "@/components/Actions/Button"
import { AnimatePresence } from "framer-motion"
import { useI18n } from "../../../../lib/i18n-provider"
import type { FiltersDefinition, FiltersState } from "../types"
import { FilterButton } from "./FilterButton"

interface FiltersChipsListProps<Filters extends FiltersDefinition> {
  schema: Filters
  filters: FiltersState<Filters>
  onFilterSelect: (key: keyof Filters) => void
  onFilterRemove: (key: keyof Filters) => void
  onClearAll: () => void
}

export function FiltersChipsList<Filters extends FiltersDefinition>({
  schema,
  filters,
  onFilterSelect,
  onFilterRemove,
  onClearAll,
}: FiltersChipsListProps<Filters>) {
  const i18n = useI18n()

  const activeFilterKeys = Object.keys(filters).filter((key) => {
    const filterValue = filters[key as keyof Filters]
    const filterSchema = schema[key as keyof Filters]
    console.log("filterValue", filterValue)
    console.log("filterSchema", filterSchema)
    return (
      (filterSchema.type === "in" &&
        Array.isArray(filterValue) &&
        filterValue.length > 0) ||
      !!filterValue
    )
  }) as Array<keyof Filters>

  if (activeFilterKeys.length === 0) return null

  return (
    <div className="flex items-start justify-between gap-2 px-6">
      <div className="flex flex-wrap items-center gap-2">
        <AnimatePresence presenceAffectsLayout initial={false}>
          {activeFilterKeys.map((key) => {
            const filterSchema = schema[key]
            if (!filters[key]) {
              return null
            }
            return (
              <FilterButton
                key={`filter-${String(key)}`}
                filter={filterSchema}
                value={filters[key]}
                onSelect={() => onFilterSelect(key)}
                onRemove={() => onFilterRemove(key)}
              />
            )
          })}
        </AnimatePresence>
      </div>

      <Button
        variant="ghost"
        label={i18n.actions.clear}
        size="sm"
        onClick={onClearAll}
      />
    </div>
  )
}

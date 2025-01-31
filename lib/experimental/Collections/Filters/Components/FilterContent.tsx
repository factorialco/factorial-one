"use client"

import { InFilter } from "../FilterTypes/InFilter"
import { SearchFilter } from "../FilterTypes/SearchFilter"
import type { FiltersDefinition, FiltersState } from "../types"

interface FilterContentProps<Definition extends FiltersDefinition> {
  selectedFilterKey: keyof Definition | null
  definition: Definition
  tempFilters: FiltersState<Definition>
  onFilterChange: (key: keyof Definition, value: unknown) => void
}

export function FilterContent<Definition extends FiltersDefinition>({
  selectedFilterKey,
  definition,
  tempFilters,
  onFilterChange,
}: FilterContentProps<Definition>) {
  if (!selectedFilterKey) return null

  const filter = definition[selectedFilterKey]
  const currentValue = tempFilters[selectedFilterKey]

  return (
    <div className="flex-1">
      <div className="overflow-auto p-4">
        <div className="pr-4">
          {filter.type === "in" && (
            <InFilter
              filter={filter}
              value={(currentValue ?? []) as unknown[]}
              onChange={(value) => onFilterChange(selectedFilterKey, value)}
            />
          )}
          {filter.type === "search" && (
            <SearchFilter
              filter={filter}
              value={(currentValue ?? "") as string}
              onChange={(value) => onFilterChange(selectedFilterKey, value)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

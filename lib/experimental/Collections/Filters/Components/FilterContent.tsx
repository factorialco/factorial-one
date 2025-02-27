"use client"

import { Button } from "@/components/Actions/Button"
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
    <div className="relative flex w-full flex-col gap-1">
      <div className="h-full overflow-y-auto p-2">
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
      <div className="bottom inset-x-0 bottom-0 flex w-full justify-end border border-solid border-transparent border-t-f1-border-secondary bg-f1-background-secondary px-3 py-2 backdrop-blur">
        <Button variant="ghost" label="Clear" />
      </div>
    </div>
  )
}

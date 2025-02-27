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
  onFilterClear: (key: keyof Definition) => void
}

export function FilterContent<Definition extends FiltersDefinition>({
  selectedFilterKey,
  definition,
  tempFilters,
  onFilterChange,
  onFilterClear,
}: FilterContentProps<Definition>) {
  if (!selectedFilterKey) return null

  const filter = definition[selectedFilterKey]
  const currentValue = tempFilters[selectedFilterKey]
  const hasValue =
    currentValue &&
    (filter.type === "in"
      ? (currentValue as unknown[]).length > 0
      : currentValue)

  return (
    <div className="relative flex w-full flex-col gap-1">
      <div className="relative flex h-full flex-col justify-between overflow-y-auto">
        <div className="p-2">
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
        <div className="sticky -inset-x-2 bottom-0 flex w-full justify-end border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/70 px-3 py-2 backdrop-blur">
          <Button
            variant="ghost"
            label="Clear"
            onClick={() =>
              selectedFilterKey && onFilterClear(selectedFilterKey)
            }
            disabled={!hasValue}
          />
        </div>
      </div>
    </div>
  )
}

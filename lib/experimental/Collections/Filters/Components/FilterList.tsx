"use client"

import { Button } from "@/ui/button"
import { X } from "lucide-react"
import type { FiltersDefinition, FiltersState } from "../types"

interface FilterListProps<Definition extends FiltersDefinition> {
  definition: Definition
  tempFilters: FiltersState<Definition>
  selectedFilterKey: keyof Definition | null
  onFilterSelect: (key: keyof Definition) => void
  onFilterClear: (key: keyof Definition) => void
}

export function FilterList<Definition extends FiltersDefinition>({
  definition,
  tempFilters,
  selectedFilterKey,
  onFilterSelect,
  onFilterClear,
}: FilterListProps<Definition>) {
  return (
    <div className="w-[200px] border-r">
      <div className="overflow-auto p-2">
        <div className="space-y-1">
          {Object.entries(definition).map(([key, filter]) => {
            const hasValue =
              tempFilters[key] &&
              (filter.type === "in"
                ? (tempFilters[key] as unknown[]).length > 0
                : tempFilters[key])

            return (
              <Button
                key={key}
                variant={selectedFilterKey === key ? "promote" : "ghost"}
                className="flex w-full items-center justify-between"
                onClick={() => onFilterSelect(key as keyof Definition)}
              >
                <span>{filter.label}</span>
                {hasValue && (
                  <X
                    className="ml-2 h-3 w-3 shrink-0 opacity-60 hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation()
                      onFilterClear(key as keyof Definition)
                    }}
                  />
                )}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

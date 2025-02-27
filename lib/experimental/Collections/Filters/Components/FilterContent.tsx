"use client"

import { Button } from "@/components/Actions/Button"
import { Search } from "@/icons/app"
import { Input } from "@/ui/input"
import { ChangeEvent, useDeferredValue, useEffect, useState } from "react"
import { InFilter } from "../FilterTypes/InFilter"
import { SearchFilter } from "../FilterTypes/SearchFilter"
import type {
  FiltersDefinition,
  FiltersState,
  InFilterDefinition,
} from "../types"

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
  const [searchTerm, setSearchTerm] = useState("")
  const deferredSearchTerm = useDeferredValue(searchTerm)

  useEffect(() => {
    setSearchTerm("")
  }, [selectedFilterKey])

  if (!selectedFilterKey) return null

  const filter = definition[selectedFilterKey]
  const currentValue = tempFilters[selectedFilterKey]

  const matchesSearch = (item: unknown) => {
    if (!deferredSearchTerm) return true
    if (typeof item === "string") {
      return item.toLowerCase().includes(deferredSearchTerm.toLowerCase())
    }
    if (typeof item === "object" && item && "label" in item) {
      return (item.label as string)
        .toLowerCase()
        .includes(deferredSearchTerm.toLowerCase())
    }
    return false
  }

  const filteredContent =
    filter.type === "in"
      ? (filter as InFilterDefinition<unknown>).options.filter(matchesSearch)
      : []

  return (
    <div className="relative flex w-full flex-col gap-1">
      <div className="relative flex h-full flex-col justify-between overflow-y-auto">
        <div className="flex flex-col gap-2 p-2">
          <div className="flex gap-3">
            <Input
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
              className="h-8 rounded"
              icon={Search}
              clearable
            />
            <Button variant="outline" label="Select all" />
          </div>
          {filter.type === "in" && (
            <InFilter
              filter={{ ...filter, options: filteredContent }}
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

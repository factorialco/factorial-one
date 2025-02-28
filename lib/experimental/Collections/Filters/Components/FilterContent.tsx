"use client"

import { Button } from "@/components/Actions/Button"
import { Search } from "@/icons/app"
import { Input } from "@/ui/input"
import { ChangeEvent, useDeferredValue, useEffect, useState } from "react"
import { InFilter } from "../FilterTypes/InFilter"
import { SearchFilter } from "../FilterTypes/SearchFilter"
import type {
  FilterOption,
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
  const [filteredOptions, setFilteredOptions] = useState<
    FilterOption<unknown>[]
  >([])
  const [loadedOptions, setLoadedOptions] = useState<FilterOption<unknown>[]>(
    []
  )
  const [isLoading, setIsLoading] = useState(false)

  // Reset state when filter changes
  useEffect(() => {
    setSearchTerm("")
    setFilteredOptions([])
    setLoadedOptions([])
  }, [selectedFilterKey])

  // Handle filtering options based on search term
  useEffect(() => {
    if (!selectedFilterKey) return

    const filter = definition[selectedFilterKey]
    if (filter.type !== "in") return

    // Apply search filter to loaded options
    if (loadedOptions.length > 0) {
      if (deferredSearchTerm) {
        setFilteredOptions(
          loadedOptions.filter((option) =>
            option.label
              .toLowerCase()
              .includes(deferredSearchTerm.toLowerCase())
          )
        )
      } else {
        setFilteredOptions(loadedOptions)
      }
    }
  }, [selectedFilterKey, deferredSearchTerm, loadedOptions])

  // Load options from static array or function
  useEffect(() => {
    if (!selectedFilterKey) return

    const filter = definition[selectedFilterKey]
    if (filter.type !== "in") return

    const loadOptions = async () => {
      try {
        if (Array.isArray(filter.options)) {
          // Static options
          setLoadedOptions(filter.options)
          setFilteredOptions(filter.options)
        } else if (typeof filter.options === "function") {
          // Function options (sync or async)
          setIsLoading(true)
          const result = await filter.options()
          setLoadedOptions(result)
          setFilteredOptions(result)
        }
      } catch (error) {
        console.error("Error loading options:", error)
        setLoadedOptions([])
        setFilteredOptions([])
      } finally {
        setIsLoading(false)
      }
    }

    loadOptions()
  }, [selectedFilterKey, definition])

  if (!selectedFilterKey) return null

  const filter = definition[selectedFilterKey]
  const currentValue = tempFilters[selectedFilterKey]

  // Determine if we should show the search input
  // Show search when we have loaded options (regardless of whether they came from static or async source)
  const showSearch =
    filter.type === "in" && loadedOptions.length > 0 && !isLoading

  const handleSelectAll = () => {
    if (filter.type === "in") {
      const allValues = filteredOptions.map((option) => option.value)
      const currentValues = (currentValue ?? []) as unknown[]
      const newValues = [...currentValues]

      allValues.forEach((value) => {
        if (!newValues.includes(value)) {
          newValues.push(value)
        }
      })

      onFilterChange(selectedFilterKey, newValues)
    }
  }

  // Create a modified filter with filtered options for the InFilter component
  const getModifiedFilter = (originalFilter: InFilterDefinition<unknown>) => {
    if (deferredSearchTerm && loadedOptions.length > 0) {
      // If we're searching, pass the filtered options
      return { ...originalFilter, options: filteredOptions }
    }
    // Otherwise, pass the original filter to let InFilter handle loading
    return originalFilter
  }

  return (
    <div className="relative flex w-full flex-col gap-1">
      <div className="relative flex h-full flex-col justify-between overflow-y-auto">
        <div className="flex flex-col gap-2 p-2">
          {showSearch && (
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
              <Button
                variant="outline"
                label="Select all"
                onClick={handleSelectAll}
                disabled={filteredOptions.length === 0}
              />
            </div>
          )}
          {filter.type === "in" && (
            <InFilter
              filter={getModifiedFilter(filter as InFilterDefinition<unknown>)}
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

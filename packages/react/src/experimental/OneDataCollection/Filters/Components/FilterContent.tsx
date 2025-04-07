"use client"

import filterTypes from "../FilterTypes"
import type { FiltersDefinition, FiltersState } from "../types"

/**
 * Props for the FilterContent component.
 * @template Definition - The type defining the structure of available filters
 */
type FilterContentProps<Definition extends FiltersDefinition> = {
  /** The currently selected filter key, if any */
  selectedFilterKey: keyof Definition | null
  /** The schema defining available filters and their configurations */
  definition: Definition
  /** Current temporary state of filters being configured */
  tempFilters: FiltersState<Definition>
  /** Callback fired when a filter value changes */
  onFilterChange: (key: keyof Definition, value: unknown) => void
}

/**
 * Renders the configuration content for the currently selected filter.
 *
 * Features:
 * - Dynamically renders different filter interfaces based on filter type
 * - Supports "in" filters with multi-select capabilities
 * - Supports "search" filters with text input
 * - Provides search functionality for filtering options within "in" filters
 * - Handles both static and dynamically loaded options
 * - Supports "Select All" functionality for multi-select filters
 *
 * This component renders the right panel in the filters popover interface
 * and adapts its UI based on the selected filter type.
 *
 * @template Definition - The type defining the structure of available filters
 */
export function FilterContent<Definition extends FiltersDefinition>({
  selectedFilterKey,
  definition,
  tempFilters,
  onFilterChange,
}: FilterContentProps<Definition>) {
  if (!selectedFilterKey) return null

  const filter = definition[selectedFilterKey]
  const currentValue = tempFilters[selectedFilterKey]

  const filterType = filterTypes[filter.type]

  if (!filterType) {
    throw new Error(`Filter type ${filter.type} not found`)
  }

  return (
    <div className="relative flex w-full flex-col gap-1">
      <div className="relative flex h-full flex-col justify-between overflow-y-auto">
        {filterType.render({
          filter: filter,
          value: currentValue,
          onChange: (value) => onFilterChange(selectedFilterKey, value),
        })}
      </div>
    </div>
  )
}

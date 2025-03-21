import { OverflowList } from "@/ui/OverflowList"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "../../../components/Actions/Button"
import { Filter } from "../../../icons/app"
import { useI18n } from "../../../lib/i18n-provider"
import { cn, focusRing } from "../../../lib/utils"
import { Counter } from "../../Information/Counter"
import { Preset } from "../../OnePreset"
import { Presets } from "../types"
import { FilterButton } from "./Components/FilterButton"
import { FilterContent } from "./Components/FilterContent"
import { FilterList } from "./Components/FilterList"
import type { FiltersDefinition, FiltersState } from "./types"

/**
 * Props for the Filters component.
 * @template Definition - The type defining the structure of available filters
 */
export interface FiltersProps<Definition extends FiltersDefinition> {
  /** The definition of available filters and their configurations */
  schema: Definition
  /** Current state of applied filters */
  filters: FiltersState<Definition>
  /** Optional preset configurations that users can select */
  presets?: Presets<Definition>
  /** Callback fired when filters are changed */
  onChange: (value: FiltersState<Definition>) => void
}

/**
 * A comprehensive filtering interface that manages multiple filter types.
 * Provides a popover interface for filter configuration and displays active filters as chips.
 *
 * The component supports multiple filter types through a unified interface:
 * - "in" type filters: Multi-select filters with predefined options
 * - "search" type filters: Free-text search filters
 *
 * Features:
 * - Search and multi-select filters with type safety
 * - Temporary filter state that's only applied when explicitly confirmed
 * - Animated filter chips for active filters
 * - Support for filter presets for quick selection of common filter combinations
 * - Responsive design for different viewport sizes
 *
 * The component maintains a temporary state of filters that are only applied
 * when the user explicitly clicks the "Apply Filters" button, allowing for
 * a more controlled filtering experience.
 *
 * @template Definition - The type defining the structure of available filters
 *
 * @example
 * ```tsx
 * // Example with multiple filter types and presets
 * <Filters
 *   schema={{
 *     department: {
 *       type: "in",
 *       label: "Department",
 *       options: [
 *         { value: "engineering", label: "Engineering" },
 *         { value: "marketing", label: "Marketing" },
 *         { value: "sales", label: "Sales" }
 *       ]
 *     },
 *     search: {
 *       type: "search",
 *       label: "Search"
 *     }
 *   }}
 *   filters={{
 *     department: ["engineering"]
 *   }}
 *   presets={[
 *     {
 *       label: "Engineering Only",
 *       filter: { department: ["engineering"] }
 *     },
 *     {
 *       label: "Sales & Marketing",
 *       filter: { department: ["sales", "marketing"] }
 *     }
 *   ]}
 *   onChange={setFilters}
 * />
 * ```
 *
 * @see {@link FiltersDefinition} for detailed schema structure
 * @see {@link FiltersState} for the structure of filter state
 */
export function Filters<Definition extends FiltersDefinition>({
  schema,
  presets,
  filters: value,
  onChange,
}: FiltersProps<Definition>) {
  const i18n = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFilterKey, setSelectedFilterKey] = useState<
    keyof Definition | null
  >(() => {
    // Get the first key from the schema if available
    const firstKey = Object.keys(schema)[0] as keyof Definition
    return firstKey || null
  })
  const [tempFilters, setTempFilters] =
    useState<FiltersState<Definition>>(value)

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setTempFilters(value)
    }
    setIsOpen(open)
  }

  const handleRemoveFilter = (key: keyof Definition) => {
    const newValue = { ...value }
    delete newValue[key]
    onChange(newValue)
  }

  const handleClearFilter = (key: keyof Definition) => {
    setTempFilters((current) => {
      const newFilters = { ...current }
      delete newFilters[key]
      return newFilters
    })
  }

  const handleFilterChange = (key: keyof Definition, newValue: unknown) => {
    setTempFilters((current) => ({
      ...current,
      [key]: newValue,
    }))
  }

  const handleApplyFilters = () => {
    onChange(tempFilters)
    setIsOpen(false)
  }

  // Render preset item in the main list
  const renderListPresetItem = (
    preset: Presets<Definition>[number],
    index: number,
    isVisible = true
  ) => {
    const isSelected = JSON.stringify(preset.filter) === JSON.stringify(value)
    return (
      <Preset
        key={index}
        label={preset.label}
        selected={isSelected}
        onClick={() => onChange(preset.filter)}
        data-visible={isVisible}
      />
    )
  }

  // Render preset item in the dropdown
  const renderDropdownPresetItem = (
    preset: Presets<Definition>[number],
    index: number
  ) => {
    const isSelected = JSON.stringify(preset.filter) === JSON.stringify(value)
    return (
      <button
        key={index}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between rounded-sm p-2 text-left font-medium text-f1-foreground hover:bg-f1-background-secondary",
          isSelected &&
            "bg-f1-background-selected hover:bg-f1-background-selected",
          focusRing()
        )}
        onClick={() => onChange(preset.filter)}
        data-visible={true}
      >
        {preset.label}
        <Counter
          value={Object.keys(preset.filter).length}
          type={isSelected ? "selected" : "default"}
        />
      </button>
    )
  }

  return (
    <div className="flex w-full flex-1 flex-col gap-4">
      <div className="flex items-center gap-2">
        <Popover open={isOpen} onOpenChange={handleOpenChange}>
          <PopoverTrigger asChild>
            <Button
              icon={Filter}
              variant="outline"
              hideLabel
              label={i18n.filters.label}
            />
          </PopoverTrigger>
          <PopoverContent
            className="w-[544px] rounded-xl border border-solid border-f1-border-secondary p-0 shadow-md"
            align="start"
            side="bottom"
          >
            <div className="flex h-[min(448px,80vh)] flex-col">
              <div className="flex min-h-0 flex-1">
                <FilterList
                  definition={schema}
                  tempFilters={tempFilters}
                  selectedFilterKey={selectedFilterKey}
                  onFilterSelect={setSelectedFilterKey}
                  onFilterClear={handleClearFilter}
                />
                {selectedFilterKey && (
                  <FilterContent
                    selectedFilterKey={selectedFilterKey}
                    definition={schema}
                    tempFilters={tempFilters}
                    onFilterChange={handleFilterChange}
                  />
                )}
              </div>

              <div className="flex items-center justify-end gap-2 border-solid border-transparent border-t-f1-border-secondary px-3 py-2">
                <Button
                  onClick={handleApplyFilters}
                  label={i18n.filters.applyFilters}
                />
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {presets && presets.length > 0 && (
          <OverflowList
            items={presets}
            renderListItem={renderListPresetItem}
            renderDropdownItem={renderDropdownPresetItem}
            className="flex-1"
          />
        )}
      </div>
      {Object.keys(value).length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <AnimatePresence presenceAffectsLayout initial={false}>
            {(Object.keys(value) as Array<keyof Definition>).map((key) => {
              const filter = schema[key]
              if (!value[key]) return null

              return (
                <FilterButton
                  key={String(key)}
                  filter={filter}
                  value={value[key]}
                  onSelect={() => {
                    setSelectedFilterKey(key)
                    setIsOpen(true)
                  }}
                  onRemove={() => handleRemoveFilter(key)}
                />
              )
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

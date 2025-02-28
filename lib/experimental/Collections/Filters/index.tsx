import { Button } from "@/components/Actions/Button"
import { Preset } from "@/experimental/OnePreset"
import { Filter } from "@/icons/app"
import { useI18n } from "@/lib/i18n-provider"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
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
  presets?: Presets<Definition>
  /** Callback fired when filters are changed */
  onChange: (value: FiltersState<Definition>) => void
}

/**
 * A comprehensive filtering interface that manages multiple filter types.
 * Provides a popover interface for configuration and displays active filters as chips.
 *
 * Features:
 * - Search and multi-select filters
 * - Temporary state until explicitly applied
 * - Animated filter chips
 *
 * @example
 * ```tsx
 * <Filters
 *   definition={{
 *     department: {
 *       type: "in",
 *       label: "Department",
 *       options: [
 *         { value: "engineering", label: "Engineering" },
 *         { value: "marketing", label: "Marketing" }
 *       ]
 *     }
 *   }}
 *   filters={{}}
 *   onChange={setFilters}
 * />
 * ```
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

  return (
    <div className="flex flex-col gap-4">
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

        {presets &&
          presets.map((preset, index) => (
            <Preset
              key={index}
              label={preset.label}
              onClick={() => onChange(preset.filter)}
            />
          ))}
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

import { Button } from "@/core/components/actions/Button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/core/internal/popover.tsx"
import { useI18n } from "@/lib/i18n-provider.tsx"
import { AnimatePresence } from "framer-motion"
import { Filter } from "lucide-react"
import { useState } from "react"
import { FilterButton } from "./Components/FilterButton.tsx"
import { FilterContent } from "./Components/FilterContent.tsx"
import { FilterList } from "./Components/FilterList.tsx"
import type { FiltersDefinition, FiltersState } from "./types.ts"

/**
 * Props for the Filters component.
 * @template Definition - The type defining the structure of available filters
 */
export interface FiltersProps<Definition extends FiltersDefinition> {
  /** The definition of available filters and their configurations */
  schema: Definition
  /** Current state of applied filters */
  filters: FiltersState<Definition>
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
  filters: value,
  onChange,
}: FiltersProps<Definition>) {
  const i18n = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFilterKey, setSelectedFilterKey] = useState<
    keyof Definition | null
  >(null)
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
      <div className="flex flex-wrap items-center gap-2">
        <Popover open={isOpen} onOpenChange={handleOpenChange}>
          <PopoverTrigger asChild>
            <Button
              icon={Filter}
              variant="outline"
              hideLabel
              label={i18n.filters.label}
            />
          </PopoverTrigger>
          <PopoverContent className="w-[600px] p-0" align="start">
            <div className="flex max-h-[80vh] flex-col">
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

              <div className="flex items-center justify-end gap-2 border-t p-2">
                <Button
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  label={i18n.filters.cancel}
                />
                <Button
                  onClick={handleApplyFilters}
                  label={i18n.filters.applyFilters}
                />
              </div>
            </div>
          </PopoverContent>
        </Popover>

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
    </div>
  )
}

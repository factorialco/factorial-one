import { useState } from "react"
import { Button } from "../../../../components/Actions/Button"
import { Icon } from "../../../../components/Utilities/Icon"
import { Filter } from "../../../../icons/app"
import { useI18n } from "../../../../lib/i18n-provider"
import { cn, focusRing } from "../../../../lib/utils"
import { OverflowList } from "../../../../ui/OverflowList"
import { Popover, PopoverContent, PopoverTrigger } from "../../../../ui/popover"
import { Counter } from "../../../Information/Counter"
import { Preset } from "../../../OnePreset"
import type { FiltersDefinition, FiltersState } from "../types"
import { FilterContent } from "./FilterContent"
import { FilterList } from "./FilterList"

interface FiltersControlsProps<Filters extends FiltersDefinition> {
  filters: Filters
  currentFilters: FiltersState<Filters>
  onFilterChange: (key: keyof Filters, value: unknown) => void
  presets?: Array<{
    label: string
    filter: FiltersState<Filters>
  }>
  onPresetsChange?: (filter: FiltersState<Filters>) => void
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export function FiltersControls<Filters extends FiltersDefinition>({
  filters,
  currentFilters,
  onFilterChange,
  presets,
  onPresetsChange,
  isOpen: controlledIsOpen,
  onOpenChange: controlledOnOpenChange,
}: FiltersControlsProps<Filters>) {
  const [selectedFilterKey, setSelectedFilterKey] = useState<
    keyof Filters | null
  >(null)
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const i18n = useI18n()

  const isOpen = controlledIsOpen ?? internalIsOpen
  const onOpenChange = controlledOnOpenChange ?? setInternalIsOpen

  const handleApplyFilters = () => {
    onOpenChange(false)
  }

  const renderListPresetItem = (
    preset: NonNullable<typeof presets>[number],
    index: number,
    isVisible = true
  ) => {
    const isSelected =
      JSON.stringify(preset.filter) === JSON.stringify(currentFilters)
    return (
      <Preset
        key={index}
        label={preset.label}
        selected={isSelected}
        onClick={() => onPresetsChange?.(preset.filter)}
        data-visible={isVisible}
      />
    )
  }

  const renderDropdownPresetItem = (
    preset: NonNullable<typeof presets>[number],
    index: number
  ) => {
    const isSelected =
      JSON.stringify(preset.filter) === JSON.stringify(currentFilters)
    return (
      <button
        key={index}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between rounded-sm p-2 text-left font-medium text-f1-foreground hover:bg-f1-background-secondary",
          isSelected &&
            "bg-f1-background-selected hover:bg-f1-background-selected",
          focusRing()
        )}
        onClick={() => onPresetsChange?.(preset.filter)}
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
    <div className="flex items-center gap-2">
      <Popover open={isOpen} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <button
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded border border-solid border-f1-border bg-f1-background-inverse-secondary text-f1-foreground hover:border-f1-border-hover",
              isOpen && "border-f1-border-hover",
              focusRing()
            )}
            title={i18n.filters.label}
          >
            <Icon icon={Filter} />
            <span className="sr-only">{i18n.filters.label}</span>
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[544px] rounded-xl border border-solid border-f1-border-secondary p-0 shadow-md"
          align="start"
          side="bottom"
        >
          <div className="flex h-[min(448px,80vh)] flex-col">
            <div className="flex min-h-0 flex-1">
              <FilterList
                definition={filters}
                tempFilters={currentFilters}
                selectedFilterKey={selectedFilterKey}
                onFilterSelect={(key: keyof Filters) =>
                  setSelectedFilterKey(key)
                }
              />
              {selectedFilterKey && (
                <FilterContent
                  selectedFilterKey={selectedFilterKey}
                  definition={filters}
                  tempFilters={currentFilters}
                  onFilterChange={onFilterChange}
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
        <>
          <div className="mx-1 h-4 w-px bg-f1-border-secondary" />
          <OverflowList
            items={presets}
            renderListItem={renderListPresetItem}
            renderDropdownItem={renderDropdownPresetItem}
            className="flex-1"
          />
        </>
      )}
    </div>
  )
}

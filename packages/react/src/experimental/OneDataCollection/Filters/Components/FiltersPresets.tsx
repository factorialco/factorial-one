import { Counter } from "@/experimental/Information/Counter"
import { Preset } from "@/experimental/OnePreset"
import { cn, focusRing } from "@/lib/utils"
import { OverflowList } from "@/ui/OverflowList"
import { FiltersDefinition, FiltersState } from "../types"

interface FilterPresetsProps {
  filters: FiltersState<FiltersDefinition>
  onPresetsChange: (filter: FiltersState<FiltersDefinition>) => void
  presets: Array<{
    label: string
    filter: FiltersState<FiltersDefinition>
  }>
}

export const FiltersPresets = ({
  presets,
  filters,
  onPresetsChange,
}: FilterPresetsProps) => {
  const renderListPresetItem = (
    preset: NonNullable<typeof presets>[number],
    index: number,
    isVisible = true
  ) => {
    const isSelected = JSON.stringify(preset.filter) === JSON.stringify(filters)
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
    const isSelected = JSON.stringify(preset.filter) === JSON.stringify(filters)
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
    presets &&
    presets.length > 0 && (
      <>
        <div className="flex items-center">
          <div className="mx-2 h-4 w-px bg-f1-background-secondary-hover" />
        </div>
        <OverflowList
          items={presets}
          renderListItem={renderListPresetItem}
          renderDropdownItem={renderDropdownPresetItem}
          className="flex-1"
        />
      </>
    )
  )
}

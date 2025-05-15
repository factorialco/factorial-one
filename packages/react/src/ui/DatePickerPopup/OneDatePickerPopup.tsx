import { Button } from "@/components/Actions/Button"
import {
  GranularityDefinitionKey,
  OneCalendar,
  granularityDefinitions,
} from "@/experimental/OneCalendar"
import { DateRange } from "@/experimental/OneCalendar/types"
import { ChevronLeft } from "@/icons/app"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useMemo, useState } from "react"
import { GranularitySelector } from "./components/GranularitySelector"
import { PresetList } from "./components/PresetList"
import { DatePickerValue, DatePreset } from "./types"
export interface OneDatePickerPopupProps {
  onSelect?: (value: DatePickerValue | undefined) => void
  value?: DatePickerValue
  defaultValue?: DatePickerValue
  presets?: DatePreset[]
  granularities?: GranularityDefinitionKey[]
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
  hideGoToCurrent?: boolean
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const presetCustom = "__custom__"

export function OneDatePickerPopup({
  onSelect,
  defaultValue,
  presets = [],
  granularities = ["day"],
  children,
  value,
  ...props
}: OneDatePickerPopupProps) {
  const [localValue, setLocalValue] = useState<DatePickerValue | undefined>(
    value || defaultValue
  )
  const granularityDefinition = useMemo(() => {
    return granularityDefinitions[localValue?.granularity ?? "day"]
  }, [localValue?.granularity])

  const calendarMode = useMemo(() => {
    return (
      granularityDefinitions[localValue?.granularity ?? "day"].calendarMode ||
      "single"
    )
  }, [localValue?.granularity])

  const handleSelectDate = (date: Date | DateRange | null) => {
    const currentGranularity = localValue?.granularity ?? "day"
    handleSelect({
      value: granularityDefinition.toRange(date ?? undefined),
      granularity: currentGranularity,
    })
  }

  const handleSelect = (value: DatePickerValue) => {
    setLocalValue(value)
    onSelect?.(value)
  }

  const handlePresetSelect = (presetId: string) => {
    setCustomRangeMode(presetId === presetCustom)

    const selectedPreset = presetId ? presets[+presetId] : undefined
    if (!selectedPreset) return

    handleSelect({
      value: granularityDefinitions[selectedPreset.granularity].toRange(
        typeof selectedPreset.value === "function"
          ? selectedPreset.value()
          : selectedPreset.value
      ),
      granularity: selectedPreset.granularity,
    })
    if (presetId !== presetCustom) {
      props.onOpenChange?.(false)
    }
  }

  const [customRangeMode, setCustomRangeMode] = useState(false)

  const handleSelectGranularity = (granularity: GranularityDefinitionKey) => {
    handleSelect({
      value: localValue?.value,
      granularity,
    })
  }

  const showPresets = useMemo(
    () => presets.length > 0 && !customRangeMode,
    [presets, customRangeMode]
  )

  const handleBackToPresets = () => {
    setCustomRangeMode(false)
  }

  const calendarView = useMemo(
    () => granularityDefinition.calendarView || "day",
    [granularityDefinition]
  )

  return (
    <Popover open={props.open} onOpenChange={props.onOpenChange}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-full overflow-auto" align="start">
        {showPresets ? (
          <PresetList
            presets={presets}
            date={localValue}
            onSelect={handlePresetSelect}
          />
        ) : (
          <div className="flex gap-4">
            {(presets.length > 0 || granularities.length > 1) && (
              <div>
                {presets.length > 0 && (
                  <Button
                    icon={ChevronLeft}
                    variant="neutral"
                    size="sm"
                    round
                    hideLabel
                    label="Back"
                    onClick={handleBackToPresets}
                  />
                )}
                {granularities.length > 1 && (
                  <GranularitySelector
                    granularities={granularities}
                    value={localValue?.granularity}
                    onChange={handleSelectGranularity}
                  />
                )}
              </div>
            )}
            <div className="min-w-[300px] flex-1">
              <OneCalendar
                showInput
                mode={calendarMode}
                view={calendarView}
                onSelect={handleSelectDate}
                defaultSelected={localValue?.value}
                minDate={props.minDate}
                maxDate={props.maxDate}
              />
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

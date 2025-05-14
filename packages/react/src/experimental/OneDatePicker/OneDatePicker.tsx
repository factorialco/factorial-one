import { Button } from "@/components/Actions/Button"
import { ChevronLeft } from "@/icons/app"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useMemo, useState } from "react"
import {
  GranularityDefinitionKey,
  OneCalendar,
  granularityDefinitions,
} from "../OneCalendar"
import { CalendarMode, DateRange } from "../OneCalendar/types"
import { DatePickerTrigger } from "./components/DateInput"
import { GranularitySelector } from "./components/GranularitySelector"
import { PresetList } from "./components/PresetList"
import { DatePickerValue, DatePreset } from "./types"
export interface OneDatePickerProps {
  onSelect?: (value: DatePickerValue | undefined) => void
  defaultValue?: DatePickerValue
  presets?: DatePreset[]
  granularities?: GranularityDefinitionKey[]
  navigation?: boolean
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
  hideGoToCurrent?: boolean
}

const presetCustom = "__custom__"

export function OneDatePicker({
  onSelect,
  defaultValue,
  presets = [],
  granularities = ["day"],
  navigation = false,
  ...props
}: OneDatePickerProps) {
  const [value, setValue] = useState<DatePickerValue | undefined>(defaultValue)
  const [isOpen, setIsOpen] = useState(false)
  const [calendarMode, setCalendarMode] = useState<CalendarMode>("single")

  const granularityDefinition = useMemo(() => {
    return granularityDefinitions[value?.granularity ?? "day"]
  }, [value?.granularity])

  const handleSelectDate = (date: Date | DateRange | null) => {
    const currentGranularity = value?.granularity ?? "day"
    handleSelect({
      value: granularityDefinition.toRange(date ?? undefined),
      granularity: currentGranularity,
    })
  }

  const handleSelect = (value: DatePickerValue) => {
    setValue(value)
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
      setIsOpen(false)
    }
  }

  const [customRangeMode, setCustomRangeMode] = useState(false)

  const handleSelectGranularity = (
    granularity: GranularityDefinitionKey,
    mode: CalendarMode
  ) => {
    handleSelect({
      value: value?.value,
      granularity,
    })
    setCalendarMode(mode)
  }

  const showPresets = useMemo(
    () => presets.length > 0 && !customRangeMode,
    [presets, customRangeMode]
  )

  const handleBackToPresets = () => {
    setCustomRangeMode(false)
  }

  const handleNavigationChange = (date: DateRange) => {
    handleSelect({
      value: granularityDefinition.toRange(date),
      granularity: value?.granularity ?? "day",
    })
  }

  const calendarView = useMemo(
    () => granularityDefinition.calendarView || "day",
    [granularityDefinition]
  )

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <DatePickerTrigger
          value={value}
          highlighted={isOpen}
          navigation={navigation}
          onDateChange={handleNavigationChange}
          granularity={granularityDefinition}
          minDate={props.minDate}
          maxDate={props.maxDate}
          disabled={props.disabled}
          hideGoToCurrent={props.hideGoToCurrent}
          onClick={() => setIsOpen(true)}
        />
      </PopoverTrigger>
      <PopoverContent className="w-full overflow-auto" align="start">
        {showPresets ? (
          <PresetList
            presets={presets}
            date={value}
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
                    value={value?.granularity}
                    onChange={handleSelectGranularity}
                    mode={calendarMode}
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
                defaultSelected={value?.value}
              />
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

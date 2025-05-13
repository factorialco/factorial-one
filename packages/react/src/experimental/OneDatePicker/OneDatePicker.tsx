import { Button } from "@/components/Actions/Button"
import { ChevronLeft } from "@/icons/app"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { Select, SelectContent, SelectItem, SelectSeparator } from "@/ui/Select"
import { AnimatePresence } from "framer-motion"
import { useMemo, useState } from "react"
import { OneCalendar, granularityDefinitions } from "../OneCalendar"
import { CalendarMode, CalendarView, DateRange } from "../OneCalendar/types"
import { DatePickerTrigger } from "./components/DateInput"
import { GranularitySelector } from "./components/GranularitySelector"
import { DatePickerValue, DatePreset } from "./types"
export interface OneDatePickerProps {
  mode?: CalendarMode
  onSelect?: (value: DatePickerValue | undefined) => void
  defaultValue?: DatePickerValue
  presets?: DatePreset[]
  granularities?: CalendarView[]
  navigation?: boolean
  minDate?: Date
  maxDate?: Date
  className?: string
  disabled?: boolean
}

const presetCustom = "__custom__"

export function OneDatePicker({
  mode = "single",
  onSelect,
  defaultValue,
  presets = [],
  granularities = ["day", "week", "month", "quarter", "halfyear", "year"],
  navigation = false,
  className,
  ...props
}: OneDatePickerProps) {
  const [value, setValue] = useState<DatePickerValue | undefined>(defaultValue)
  const [preset, setPreset] = useState<string | undefined>()
  const [isOpen, setIsOpen] = useState(false)
  const [calendarMode, setCalendarMode] = useState<CalendarMode>(mode)

  const handleSelectDate = (date: DateRange | null) => {
    const currentGranularity = value?.granularity ?? "day"
    handleSelect({
      date: date ?? undefined,
      granularity: currentGranularity,
    })
  }

  const handleSelect = (value: DatePickerValue) => {
    setValue(value)
    onSelect?.(value)
  }

  const handlePresetSelect = (presetId: string) => {
    setCustomRangeMode(presetId === presetCustom)
    setPreset(presetId)

    const selectedPreset = presetId ? presets[+presetId] : undefined
    if (!selectedPreset) return

    handleSelect({
      date:
        typeof selectedPreset.value === "function"
          ? selectedPreset.value()
          : selectedPreset.value,
      granularity: selectedPreset.granularity,
    })
    if (presetId !== presetCustom) {
      setIsOpen(false)
    }
  }

  const [customRangeMode, setCustomRangeMode] = useState(false)

  const handleSelectGranularity = (
    granularity: CalendarView,
    mode: CalendarMode
  ) => {
    handleSelect({
      date: value?.date,
      granularity,
    })
    setCalendarMode(mode)
  }

  const showPresets = useMemo(
    () => presets.length > 0 && !customRangeMode,
    [presets, customRangeMode]
  )

  const handleBackToPresets = () => {
    console.log(
      "handleBackToPresets",
      customRangeMode,
      presets.length > 0 && !customRangeMode
    )
    setCustomRangeMode(false)
  }

  const calendarView = useMemo(() => value?.granularity ?? "day", [value])

  const handleNavigationChange = (date: DateRange) => {
    handleSelect({
      date,
      granularity: value?.granularity ?? "day",
    })
  }

  const granularityDefinition = useMemo(() => {
    return granularityDefinitions[value?.granularity ?? "day"]
  }, [value?.granularity])

  return (
    <Popover open={isOpen} onOpenChange={() => setIsOpen(true)}>
      <PopoverTrigger>
        <DatePickerTrigger
          value={value}
          highlighted={isOpen}
          navigation={navigation}
          onDateChange={handleNavigationChange}
          granularity={granularityDefinition}
          minDate={props.minDate}
          maxDate={props.maxDate}
          disabled={props.disabled}
          onClick={() => setIsOpen(true)}
        />
      </PopoverTrigger>
      <PopoverContent className="w-full overflow-auto">
        <AnimatePresence>
          {showPresets ? (
            <Select
              asList
              defaultValue={preset}
              onValueChange={handlePresetSelect}
            >
              <SelectContent>
                {Object.entries(presets).map(([key, preset]) => (
                  <SelectItem key={key} value={key}>
                    {preset.label}
                  </SelectItem>
                ))}
                <SelectSeparator />
                <SelectItem key={presetCustom} value={presetCustom}>
                  Custom
                </SelectItem>
              </SelectContent>
            </Select>
          ) : (
            <div className="flex gap-4">
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
                <GranularitySelector
                  granularities={granularities}
                  value={value?.granularity}
                  onChange={handleSelectGranularity}
                  mode={calendarMode}
                />
              </div>
              <div className="min-w-[300px] flex-1">
                <OneCalendar
                  showInput
                  mode={calendarMode}
                  view={calendarView}
                  onSelect={handleSelectDate}
                  defaultSelected={value?.date}
                />
              </div>
            </div>
          )}
        </AnimatePresence>
      </PopoverContent>
    </Popover>
  )
}

import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
} from "@/ui/Select"
import { useState } from "react"
import { OneCalendar } from "../OneCalendar"
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
  className?: string
}

const presetCustom = "__custom__"

export function OneDatePicker({
  mode = "single",
  onSelect,
  defaultValue,
  presets = [],
  granularities = ["day", "week", "month", "quarter", "halfyear", "year"],
  className,
  ...props
}: OneDatePickerProps) {
  const [value, setValue] = useState<DatePickerValue | undefined>(defaultValue)
  const [preset, setPreset] = useState<string | undefined>()
  const [isOpen, setIsOpen] = useState(false)

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
  }

  const [customRangeMode, setCustomRangeMode] = useState(false)

  const handleSelectGranularity = (granularity: CalendarView) => {
    handleSelect({
      date: value?.date,
      granularity,
    })
  }

  const setOpen = (open: boolean) => {
    console.log("setOpen", open)
    setIsOpen(open)
  }

  return (
    <>
      {customRangeMode.toString()}
      {!customRangeMode ? (
        <Select
          open={isOpen}
          onOpenChange={setOpen}
          defaultValue={preset}
          onValueChange={handlePresetSelect}
        >
          <SelectTrigger>
            <DatePickerTrigger value={value} />
          </SelectTrigger>

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
        <Popover open={isOpen} onOpenChange={setOpen}>
          <PopoverTrigger>
            <DatePickerTrigger value={value} />
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-2">
              <GranularitySelector
                granularities={granularities}
                value={value?.granularity}
                onChange={handleSelectGranularity}
              />
              <OneCalendar
                mode={mode}
                view={value?.granularity ?? "day"}
                onSelect={handleSelectDate}
                defaultSelected={value?.date}
              />
            </div>
          </PopoverContent>
        </Popover>
      )}
    </>
  )
}

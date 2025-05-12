import { ChevronDown } from "@/icons/app"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useState } from "react"
import { Button } from "../../components/Actions/Button"
import { useI18n } from "../../lib/providers/i18n"
import { OneCalendar } from "../OneCalendar"
import { CalendarMode, CalendarView, DateRange } from "../OneCalendar/types"



export interface OneDatePickerProps {
  mode?: CalendarMode
  onSelect?: (date: Date | DateRange | null) => void
  defaultSelected?: Date | DateRange | null
  presets?: DatePreset[]
  granularities?: CalendarView[]
  defaultGranularity?: CalendarView
  className?: string
}

export function OneDatePicker({
  mode = "single",
  view = "month",
  onSelect,
  defaultSelected = null,
  presets = [],
  className,
}: OneDatePickerProps) {
  const i18n = useI18n()
  const [selected, setSelected] = useState<Date | DateRange | null>(
    defaultSelected
  )
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (date: Date | DateRange | null) => {
    setSelected(date)
    onSelect?.(date)
    setIsOpen(false)
  }

  const handlePresetSelect = (preset: DatePreset) => {
    setSelected(preset.value)
    onSelect?.(preset.value)
    setIsOpen(false)
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          style={className ? { className } : undefined}
          label={selected ? selected.toString() : "Select date"}
          icon={ChevronDown}
          iconPosition="right"
        />
      </PopoverTrigger>
      <PopoverContent className="flex w-[800px] p-0" align="start">
        <div className="flex flex-1">
          <div className="flex-1 p-4">
            <OneCalendar
              mode={mode}
              view={view}
              onSelect={handleSelect}
              defaultSelected={selected}
              showInput
            />
          </div>
          {presets.length > 0 && (
            <div className="w-48 border-l border-f1-border p-4">
              <div className="mb-2 text-sm font-medium text-f1-foreground">
                Presets
              </div>
              <div className="flex flex-col gap-2">
                {presets.map((preset) => (
                  <Button
                    key={preset.label}
                    variant="ghost"
                    style={{ className: "justify-start" }}
                    label={preset.label}
                    onClick={() => handlePresetSelect(preset)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}

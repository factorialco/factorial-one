import { useI18n } from "@/lib/providers/i18n"
import { Select, SelectContent, SelectItem } from "@/ui/Select"
import { useMemo } from "react"
import { CalendarMode, CalendarView } from "../../OneCalendar/types"

interface GranularitySelectorProps {
  granularities: CalendarView[]
  value?: CalendarView
  onChange: (granularity: CalendarView, mode: CalendarMode) => void
  mode: CalendarMode
}

export const customGranularity = "__custom__"

export function GranularitySelector({
  granularities,
  value,
  mode,
  onChange,
}: GranularitySelectorProps) {
  const i18n = useI18n()

  const localValue = useMemo(() => {
    return mode === "range" ? customGranularity : value
  }, [value, mode])

  const handleChange = (
    granularity: CalendarView & typeof customGranularity
  ) => {
    if (granularity === customGranularity) {
      onChange("day", "range")
    } else {
      onChange(granularity, "single")
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <h6 className="text-sm font-medium">{i18n.date.selectedBy}</h6>
      <Select value={localValue} onValueChange={handleChange} asList>
        <SelectContent>
          {granularities.map((granularity) => (
            <SelectItem key={granularity} value={granularity}>
              {i18n.date.granularities[granularity]?.label || granularity}
            </SelectItem>
          ))}
          <SelectItem key={customGranularity} value={customGranularity}>
            {i18n.date.range}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

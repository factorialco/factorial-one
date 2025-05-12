import { CalendarView } from "../../OneCalendar/types"

interface GranularitySelectorProps {
  granularities: CalendarView[]
  value?: CalendarView
  onChange: (granularity: CalendarView) => void
}

export function GranularitySelector({
  granularities,
  value,
  onChange,
}: GranularitySelectorProps) {
  return (
    <div>
      {granularities.map((granularity) => (
        <div key={granularity}>{granularity}</div>
      ))}
    </div>
  )
}

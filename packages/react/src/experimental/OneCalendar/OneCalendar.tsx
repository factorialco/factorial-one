import { useState } from "react"
import { CalendarMode, CalendarView, DateRange } from "./types"
import { MonthView } from "./views/month"

export interface OneCalendarProps {
  mode: CalendarMode
  view: CalendarView
  onSelect?: (date: Date | DateRange | null) => void
  fromDate?: Date
  toDate?: Date
  defaultMonth?: Date
  defaultSelected?: Date | DateRange | null
}

export function OneCalendar({
  mode = "single",
  view = "month",
  onSelect,
  fromDate,
  toDate,
  defaultMonth = new Date(),
  defaultSelected = null,
}: OneCalendarProps) {
  const [selected, setSelected] = useState<Date | DateRange | null>(
    defaultSelected
  )

  const handleSelect = (date: Date | DateRange | null) => {
    if (!date) return

    setSelected(date)
    onSelect?.(date)
  }

  return (
    <div>
      {view === "day" && <div>Day calendar</div>}
      {view === "month" && (
        <MonthView
          mode={mode}
          year={defaultMonth.getFullYear()}
          selected={selected}
          onSelect={handleSelect}
          fromDate={fromDate}
          toDate={toDate}
        />
      )}
      {view === "year" && <div>Year calendar</div>}
    </div>
  )
}

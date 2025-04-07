import { CalendarMode, CalendarView } from "./types"
import { MonthView } from "./views/month"
export interface OneCalendarProps {
  mode: CalendarMode
  view: CalendarView
  defaultMonth?: Date
}

export function OneCalendar({
  mode = "single",
  view = "month",
  defaultMonth = new Date(),
}: OneCalendarProps) {
  return (
    <div>
      {view === "day" && <div>Day calendar</div>}
      {view === "month" && (
        <MonthView mode={mode} year={defaultMonth.getFullYear()} />
      )}
      {view === "year" && <div>Year calendar</div>}
    </div>
  )
}

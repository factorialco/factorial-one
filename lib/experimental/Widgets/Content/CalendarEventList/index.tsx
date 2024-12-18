import { forwardRef } from "react"
import { CalendarEvent, CalendarEventProps } from "../CalendarEvent"

export interface CalendarEventListProps {
  events: CalendarEventProps[]
  limit?: 1 | 2 | 3 | 4 | 5
}

export const CalendarEventList = forwardRef<
  HTMLDivElement,
  CalendarEventListProps
>(function CalendarEventList({ events, limit = 3 }, ref) {
  if (!events.length) {
    return null
  }

  return (
    <div className="flex flex-col gap-2" ref={ref}>
      {events.slice(0, limit).map((item) => (
        <CalendarEvent key={item.title} {...item} />
      ))}
    </div>
  )
})

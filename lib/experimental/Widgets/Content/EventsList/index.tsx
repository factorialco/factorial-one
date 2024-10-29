import { forwardRef } from "react"
import { Event, EventProps } from "./event"

export interface EventsListProps {
  events: EventProps[]
  limit?: 1 | 2 | 3 | 4 | 5
}

export const EventsList = forwardRef<HTMLDivElement, EventsListProps>(
  function EventsList({ events, limit = 3 }, ref) {
    if (!events.length) {
      return null
    }

    return (
      <div className="flex flex-col gap-2" ref={ref}>
        {events.slice(0, limit).map((item) => (
          <Event
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            color={item.color}
            isPending={item.isPending}
          />
        ))}
      </div>
    )
  }
)

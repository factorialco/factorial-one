import { forwardRef } from "react"
import { Event, EventProps } from "./event"

export interface EventsListProps {
  events: EventProps[]
  title?: string
  limit?: 1 | 2 | 3 | 4 | 5
}

export const EventsList = forwardRef<HTMLDivElement, EventsListProps>(
  ({ events, title, limit = 3 }, ref) => {
    if (!events.length) {
      return null
    }

    return (
      <div ref={ref}>
        {title && (
          <p className="mb-3 text-sm font-semibold uppercase text-f1-foreground-secondary">
            {title}
          </p>
        )}
        <div className="flex flex-col gap-2">
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
      </div>
    )
  }
)

EventsList.displayName = "EventsList"

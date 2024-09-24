import { Event, EventProps } from "./event"

export interface EventsListProps {
  events: EventProps[]
  title?: string
  limit?: 1 | 2 | 3 | 4 | 5
}

export const EventsList: React.FC<EventsListProps> = ({
  events,
  title,
  limit = 3,
}) => {
  if (!events.length) {
    return null
  }

  return (
    <div>
      {title && (
        <p className="mb-4 font-medium text-f1-foreground-secondary">{title}</p>
      )}
      <div className="flex flex-col gap-4">
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

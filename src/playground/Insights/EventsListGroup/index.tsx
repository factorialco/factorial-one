import { Separator } from "@/ui/separator"
import { EventsList, EventsListProps } from "../EventsList"

interface EventsListGroupProps {
  eventsGroup: EventsListProps[]
}

export const EventsListGroup: React.FC<EventsListGroupProps> = ({
  eventsGroup,
}) => {
  const validEvents = eventsGroup.filter((element) => element.events.length)

  if (!validEvents.length) {
    return null
  }

  return (
    <div className="flex flex-col">
      {validEvents.map((events, index) => (
        <div key={index}>
          {index !== 0 && <Separator />}
          <EventsList {...events} />
        </div>
      ))}
    </div>
  )
}

import { Button } from "@/components/Actions/Button"
import { WidgetContainer } from "@/components/Widgets/WidgetContainer"
import { forwardRef } from "react"
import { EventsListGroup } from "../EventsListGroup"
import { EventProps } from "../ui/event"

type TimeOffData = Omit<EventProps, "isPending">

interface TimeOffInsightData {
  title: string
  subtitle: string
  requested: TimeOffData[]
  currentAndUpcoming: TimeOffData[]
  cta: string
  link: string
  requestedTitle: string
  currentAndUpcomingTitle: string
  onNavigate: () => void
  noRequestedText: string
  noCurrentText: string
}

interface TimeOffInsightProps {
  data: TimeOffInsightData
}

export const TimeOffInsight = forwardRef<HTMLDivElement, TimeOffInsightProps>(
  ({ data }, ref) => {
    const {
      title,
      subtitle,
      requested,
      currentAndUpcoming,
      cta,
      link,
      onNavigate,
      requestedTitle,
      currentAndUpcomingTitle,
    } = data
    if (!requested?.length && !currentAndUpcoming?.length) {
      return null
    }

    return (
      <div className="max-w-96" ref={ref}>
        <WidgetContainer
          header={{
            title,
            subtitle: "| " + subtitle,
            link: { title, url: link },
          }}
        >
          <EventsListGroup
            eventsGroup={[
              {
                title: requestedTitle,
                events: requested.map((event) => ({
                  ...event,
                  isPending: true,
                })),
              },
              {
                title: currentAndUpcomingTitle,
                events: currentAndUpcoming.map((event) => ({
                  ...event,
                  isPending: false,
                })),
              },
            ]}
          />
          {cta && (
            <span className="mb-2 mt-4 max-w-20">
              <Button variant="outline" label={cta} onClick={onNavigate} />
            </span>
          )}
        </WidgetContainer>
      </div>
    )
  }
)

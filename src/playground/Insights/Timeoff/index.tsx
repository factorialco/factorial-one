import { Button } from "@/components/Actions/Button"
import { WidgetContainer } from "@/components/Widgets/WidgetContainer"
import { forwardRef } from "react"
import { Event } from "../ui/event"
import { Separator } from "../ui/separator"

interface TimeOffData {
  title: string
  length: number
  lengthUnit: string
  color: string
  from: string
  until: string
}
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
      noRequestedText,
      noCurrentText,
      requestedTitle,
      currentAndUpcomingTitle,
    } = data
    return (
      <div className="max-w-96" ref={ref}>
        <WidgetContainer
          header={{
            title,
            subtitle: "| " + subtitle,
            link: { title, url: link },
          }}
        >
          <p className="mb-4 font-medium text-muted-foreground">
            {requestedTitle}
          </p>
          <div className="flex flex-col gap-4">
            {!requested?.length ? (
              <p>{noRequestedText ?? "No time off requested"}</p>
            ) : (
              requested
                .slice(0, 3)
                .map((item) => (
                  <Event
                    title={item.title}
                    length={item.length}
                    lengthUnit={item.lengthUnit}
                    from={item.from}
                    until={item.until}
                    color={item.color}
                    isPending={true}
                  />
                ))
            )}
          </div>
          <Separator />
          <p className="mb-4 font-medium text-muted-foreground">
            {currentAndUpcomingTitle}
          </p>
          <div className="flex flex-col gap-4">
            {!currentAndUpcoming.length ? (
              <p>{noCurrentText ?? "No current and upcoming time off"}</p>
            ) : (
              currentAndUpcoming
                .slice(0, 3)
                .map((item) => (
                  <Event
                    title={item.title}
                    length={item.length}
                    lengthUnit={item.lengthUnit}
                    from={item.from}
                    until={item.until}
                    color={item.color}
                    isPending={false}
                  />
                ))
            )}
          </div>
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

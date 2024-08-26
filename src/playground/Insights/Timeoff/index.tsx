import { forwardRef } from "react"
import { Button } from "../../../../lib/components/Actions/Button"
import { WidgetContainer } from "../../../../lib/components/Widgets/WidgetContainer"
import { Event } from "../ui/event"

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
  onNavigate: () => void
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
          <p className="mb-4 text-muted-foreground">Requested</p>
          <div className="flex flex-col gap-4">
            {requested.map((item) => (
              <Event
                title={item.title}
                length={item.length}
                lengthUnit={item.lengthUnit}
                from={item.from}
                until={item.until}
                color={item.color}
                isPending={true}
              />
            ))}
          </div>
          <p className="mb-4 text-muted-foreground">Current and upcoming</p>
          <div className="flex flex-col gap-4">
            {currentAndUpcoming.map((item) => (
              <Event
                title={item.title}
                length={item.length}
                lengthUnit={item.lengthUnit}
                from={item.from}
                until={item.until}
                color={item.color}
                isPending={false}
              />
            ))}
          </div>
          {cta && (
            <span className="mt-4 max-w-20">
              <Button variant="outline" label={cta} onClick={onNavigate} />
            </span>
          )}
        </WidgetContainer>
      </div>
    )
  }
)

import { Badge } from "@/components/Information/Badge"
import { ComponentProps, forwardRef } from "react"
import { DetailsItem, DetailsItemType } from "../DetailsItem"
import { Weekdays } from "../Weekdays"

interface DetailsType {
  details: DetailsItemType[]
  activatedDays?: ComponentProps<typeof Weekdays>["activatedDays"]
  manager?: string
  teams?: string[]
}

export const Details = forwardRef<HTMLDivElement, DetailsType>(
  ({ details, activatedDays, manager, teams }, ref) => {
    return (
      <div ref={ref} className="flex flex-col gap-4">
        {details.map((item, index) => (
          <DetailsItem
            title={item.title}
            key={item.title + index}
            content={item.content}
          />
        ))}
        <DetailsItem
          title="Workable days"
          className="gap-2"
          content={<Weekdays activatedDays={activatedDays} />}
        />
        {!!manager && (
          <DetailsItem
            title="Manager"
            className="gap-2"
            content={
              <Badge
                hasAvatar
                text={manager}
                imageSrc="https://github.com/dani-moreno.png"
              />
            }
          />
        )}
        {!!teams?.length && (
          <DetailsItem
            title="Team"
            className="flex flex-col gap-2"
            content={
              <div className="flex flex-row flex-wrap gap-2">
                {teams.map((team) => (
                  <Badge hasAvatar text={team} />
                ))}
              </div>
            }
          />
        )}
      </div>
    )
  }
)

import { Badge } from "@/components/Information/Badge"
import { ComponentProps, forwardRef } from "react"
import { DetailsItem, DetailsItemType } from "../DetailsItem"
import { Weekdays } from "../Weekdays"

interface DetailsType {
  details: DetailsItemType[]
  title?: string
  activatedDays?: ComponentProps<typeof Weekdays>["activatedDays"]
  manager?: { name: string; avatar: string }
  teams?: string[]
  workableDaysTitle?: string
}

export const Details = forwardRef<HTMLDivElement, DetailsType>(
  (
    { details, activatedDays, manager, workableDaysTitle, teams, title },
    ref
  ) => {
    return (
      <div ref={ref} className="flex flex-col gap-4">
        {!!title && (
          <p className="mb-1 text-sm font-medium text-f1-foreground">{title}</p>
        )}
        {details.map((item, index) => {
          return !item?.title ? null : (
            <DetailsItem
              title={item.title}
              key={item.title + index}
              content={item.content}
            />
          )
        })}
        {workableDaysTitle && (
          <DetailsItem
            title={workableDaysTitle}
            className="gap-2"
            content={<Weekdays activatedDays={activatedDays} />}
          />
        )}
        {!!manager && (
          <DetailsItem
            title="Manager"
            className="gap-2"
            content={
              <Badge
                text={manager.name}
                avatar={{
                  src: manager.avatar,
                  alt: manager.name[0],
                }}
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
                {teams.map((team) => {
                  return !team ? null : (
                    <Badge text={team} avatar={{ alt: team[0] }} />
                  )
                })}
              </div>
            }
          />
        )}
      </div>
    )
  }
)

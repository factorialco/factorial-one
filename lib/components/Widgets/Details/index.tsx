import { Badge } from "@/components/Information/Badge"
import { ComponentProps, forwardRef } from "react"
import { DetailsItem, DetailsItemType } from "../DetailsItem"
import { Weekdays } from "../Weekdays"

interface DetailsType {
  title?: string
  details?: DetailsItemType[]
  manager?: { title: string; name: string; avatar: string }
  teams?: { title: string; list: string[] }
  workableDays?: {
    title: string
    activatedDays?: ComponentProps<typeof Weekdays>["activatedDays"]
  }
}

export const Details = forwardRef<HTMLDivElement, DetailsType>(
  ({ details, workableDays, manager, teams, title }, ref) => {
    return (
      <div ref={ref} className="flex flex-col gap-4">
        {!!title && (
          <p className="mb-1 text-sm font-medium text-f1-foreground">{title}</p>
        )}
        {details?.map((item, index) => {
          return !item?.title ? null : (
            <DetailsItem
              title={item.title}
              key={item.title + index}
              content={item.content}
            />
          )
        })}
        {workableDays?.title && (
          <DetailsItem
            title={workableDays.title}
            className="gap-2"
            content={<Weekdays activatedDays={workableDays.activatedDays} />}
          />
        )}
        {!!manager && (
          <DetailsItem
            title={manager.title}
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
        {!!teams?.list.length && (
          <DetailsItem
            title={teams.title}
            className="flex flex-col gap-2"
            content={
              <div className="flex flex-row flex-wrap gap-2">
                {teams.list.map((team) => {
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

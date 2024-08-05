import React, { ComponentProps } from "react"
import { Badge } from "../../../lib/factorial-one"
import { DetailsItem, DetailsItemType } from "../DetailsItem"
import { Weekdays } from "../Weekdays"

interface DetailsType {
  details: DetailsItemType[]
  activatedDays?: ComponentProps<typeof Weekdays>["activatedDays"]
  manager?: string
  teams?: string[]
}

export const Details: React.FC<DetailsType> = ({
  details,
  activatedDays,
  manager,
  teams,
}) => {
  return (
    <div className="flex flex-col gap-4">
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

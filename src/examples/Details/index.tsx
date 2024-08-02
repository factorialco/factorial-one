import React, { ComponentProps } from "react"
import { DetailsItem, DetailsItemType } from "../DetailsItem"
import { Weekdays } from "../Weekdays"

interface DetailsType {
  details: DetailsItemType[]
  activatedDays?: ComponentProps<typeof Weekdays>["activatedDays"]
}

export const Details: React.FC<DetailsType> = ({ details, activatedDays }) => {
  return (
    //data
    //days
    //manager
    //team
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
        hasSeparation
        content={<Weekdays activatedDays={activatedDays} />}
      />
    </div>
  )
}

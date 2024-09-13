import { ToggleGroup, ToggleGroupItem } from "@/ui/toggleGroup"
import { forwardRef } from "react"

interface WeekdaysProps {
  activatedDays?: string[]
  daysOfTheWeek?: string[]
}

const DAYS_OF_THE_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

export const Weekdays = forwardRef<HTMLDivElement, WeekdaysProps>(
  ({ daysOfTheWeek = DAYS_OF_THE_WEEK, activatedDays = [] }, ref) => {
    return (
      <ToggleGroup
        type="multiple"
        value={activatedDays}
        disabled
        className="flex justify-start"
        ref={ref}
      >
        {daysOfTheWeek.map((day) => (
          <ToggleGroupItem
            key={day}
            value={day}
            className="disabled:text-f1-foreground-secondary disabled:bg-f1-background-secondary disabled:data-[state=on]:bg-f1-background-secondary0 h-6 w-6 disabled:opacity-100 disabled:data-[state=on]:text-card"
          >
            <p className="h-auto text-sm">{day[0]}</p>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    )
  }
)

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
            className="h-6 w-6 disabled:bg-f1-background-secondary disabled:text-f1-foreground disabled:opacity-100 disabled:data-[state=on]:bg-f1-background-bold disabled:data-[state=on]:text-f1-foreground-inverse"
          >
            <p className="h-auto text-sm">{day[0]}</p>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    )
  }
)

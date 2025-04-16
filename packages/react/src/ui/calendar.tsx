import { ChevronLeft, ChevronRight } from "lucide-react"
import * as React from "react"
import { DayPicker } from "react-day-picker"
import { cn } from "../lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={className}
      classNames={{
        months: "flex flex-col",
        caption: "hidden",
        nav: "space-x-1 flex items-center",
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse",
        head_row: "flex items-center justify-between",
        head_cell:
          "text-f1-foreground-secondary rounded-xs w-full font-medium h-8 flex justify-center items-center",
        row: "flex w-full mt-2 items-center justify-between",
        cell: cn(
          "rounded-md h-10 w-full text-center font-medium p-0 relative text-f1-foreground",
          "before:absolute before:inset-0 before:z-0 before:rounded-md before:bg-f1-background-selected-bold before:opacity-0 before:transition-all before:duration-100 before:content-[''] hover:before:bg-f1-background-selected-bold-hover before:pointer-events-none",
          "[&:has([aria-selected].day-range-start)]:before:opacity-100 [&:has([aria-selected].day-range-end)]:before:opacity-100",
          "[&:has([aria-selected].day-outside)]:bg-f1-background-selected focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-middle)]:rounded-none first:[&:has([aria-selected].day-range-middle)]:rounded-l-md last:[&:has([aria-selected].day-range-middle)]:rounded-r-md [&:has([aria-selected].day-range-start)]:rounded-r-none [&:has([aria-selected].day-range-end)]:rounded-l-none first:[&:has([aria-selected].day-range-end)]:rounded-r-md first:[&:has([aria-selected].day-range-end)]:rounded-l-md last:[&:has([aria-selected].day-range-start)]:rounded-l-md last:[&:has([aria-selected].day-range-start)]:rounded-r-md [&:has([aria-selected].day-range-start.day-range-end)]:rounded-md [&:has([aria-selected].day-range-middle)]:bg-f1-background-selected",
          "[&:has([aria-selected].day-range-start)]:bg-f1-background-selected [&:has([aria-selected].day-range-end)]:bg-f1-background-selected",
          props.mode === "single" &&
            "[&:has([aria-selected].day-selected)]:before:opacity-100"
        ),
        day: "rounded-[inherit] h-10 w-10 p-0 aria-selected:opacity-100 z-20 relative",
        day_range_start:
          "day-range-start aria-selected:text-f1-foreground-inverse",
        day_range_end: "day-range-end aria-selected:text-f1-foreground-inverse",
        day_today:
          "relative after:absolute after:inset-x-0 after:bottom-1 after:z-20 after:mx-auto after:h-0.5 after:w-1.5 after:rounded-full after:bg-f1-background-selected-bold after:transition-colors after:duration-100 after:content-[''] [&:has([aria-selected].day-selected)]:after:bg-f1-background",
        day_selected: cn(
          "day-selected",
          props.mode === "single" && "aria-selected:text-f1-foreground-inverse"
        ),
        day_outside: "day-outside text-f1-foreground-secondary font-normal",
        day_disabled: "text-f1-foreground-disabled",
        day_range_middle:
          "day-range-middle aria-selected:text-f1-foreground-selected",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar"

export { Calendar }

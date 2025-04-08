import { cn, focusRing } from "@/lib/utils"
import {
  endOfYear,
  isBefore,
  isSameYear,
  isWithinInterval,
  startOfYear,
} from "date-fns"
import { CalendarMode, DateRange } from "../types"

interface YearViewProps {
  mode: CalendarMode
  selected?: Date | DateRange | null
  onSelect?: (date: Date | DateRange | null) => void
  decade: number
}

export function YearView({ mode, selected, onSelect, decade }: YearViewProps) {
  const today = new Date()

  // Check if a value is a DateRange
  const isDateRange = (value: any): value is DateRange => {
    return (
      value && typeof value === "object" && ("from" in value || "to" in value)
    )
  }

  // Generate years for a decade
  const decadeStart = Math.floor(decade / 10) * 10
  const years = [
    decadeStart - 1,
    ...Array.from({ length: 10 }, (_, i) => decadeStart + i),
    decadeStart + 10,
  ]

  // Handle year click
  const handleYearClick = (year: number) => {
    const selectedDate = new Date(year, 0, 1)

    if (mode === "single") {
      // single select
      onSelect?.(selectedDate)
    } else if (mode === "range") {
      if (!selected || !isDateRange(selected)) {
        // Start of range
        onSelect?.({
          from: selectedDate,
          to: undefined,
        })
      } else if (selected && selected.from && !selected.to) {
        // Complete the range
        if (isSameYear(selected.from, selectedDate)) {
          // If clicking the same year, select just that year
          onSelect?.({
            from: startOfYear(selected.from),
            to: endOfYear(selected.from),
          })
        } else {
          // Create a range between the two years
          const start = isBefore(selected.from, selectedDate)
            ? selected.from
            : selectedDate
          const end = isBefore(selected.from, selectedDate)
            ? selectedDate
            : selected.from

          onSelect?.({
            from: startOfYear(start),
            to: endOfYear(end),
          })
        }
      } else {
        // Start a new range
        onSelect?.({
          from: selectedDate,
          to: undefined,
        })
      }
    }
  }

  // Check if a year is selected
  const isYearSelected = (year: number) => {
    if (!selected) return false

    if (!isDateRange(selected)) {
      // Single date selection
      return selected.getFullYear() === year
    } else {
      // Range selection
      if (selected.from && selected.to) {
        const current = new Date(year, 6, 1)
        return isWithinInterval(current, {
          start: selected.from,
          end: selected.to,
        })
      } else if (selected.from) {
        return selected.from.getFullYear() === year
      }
    }

    return false
  }

  // Check if a year is the current year
  const isCurrentYear = (year: number): boolean => {
    return year === today.getFullYear()
  }

  // Check if a year is the start of the range
  const isRangeStart = (year: number): boolean => {
    if (!selected || !isDateRange(selected) || !selected.from) return false
    return selected.from.getFullYear() === year
  }

  // Check if a year is the end of the range
  const isRangeEnd = (year: number): boolean => {
    if (!selected || !isDateRange(selected) || !selected.to) return false
    return selected.to.getFullYear() === year
  }

  // Check if a year is outside the current decade
  const isOutsideDecade = (year: number): boolean => {
    return year < decadeStart || year >= decadeStart + 10
  }

  return (
    <div className="grid grid-cols-4 gap-y-3">
      {years.map((year) => {
        const isSelected = isYearSelected(year)
        const isStart = isRangeStart(year)
        const isEnd = isRangeEnd(year)
        const isOutside = isOutsideDecade(year)
        const isCurrent = isCurrentYear(year)
        return (
          <button
            key={year}
            onClick={() => handleYearClick(year)}
            className={cn(
              "relative isolate flex h-10 items-center justify-center rounded-md font-medium text-f1-foreground transition-colors duration-100 after:absolute after:inset-0 after:z-0 after:rounded-md after:bg-f1-background-selected-bold after:opacity-0 after:transition-all after:duration-100 after:content-[''] hover:bg-f1-background-hover hover:after:bg-f1-background-selected-bold-hover",
              focusRing(),
              isOutside && "[&>span]:opacity-30",
              isSelected &&
                mode === "single" &&
                "bg-f1-background-selected-bold text-f1-foreground-inverse hover:bg-f1-background-selected-bold-hover [&>span]:opacity-100",
              isSelected &&
                mode === "range" &&
                "rounded-none bg-f1-background-selected hover:bg-f1-background-selected [&:nth-child(4n+1)]:rounded-s-md [&:nth-child(4n+4)]:rounded-e-md [&>span]:opacity-100",
              (isStart || isEnd) &&
                mode === "range" &&
                "rounded-none bg-f1-background-selected after:opacity-100 [&>span]:z-10 [&>span]:text-f1-foreground-inverse [&>span]:opacity-100",
              isStart && mode === "range" && isEnd && "rounded-s-md",
              isEnd && mode === "range" && "rounded-e-md"
            )}
          >
            <span>{year}</span>
            {isCurrent && (
              <div
                className={cn(
                  "absolute inset-x-0 bottom-1 z-20 mx-auto h-0.5 w-1.5 rounded-full bg-f1-background-selected-bold transition-colors duration-100",
                  isSelected && mode === "single" && "bg-f1-background",
                  (isStart || isEnd) && "bg-f1-background",
                  !isStart &&
                    !isEnd &&
                    isSelected &&
                    mode === "range" &&
                    "bg-f1-background-selected-bold"
                )}
              />
            )}
          </button>
        )
      })}
    </div>
  )
}

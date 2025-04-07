import { useI18n } from "@/lib/i18n-provider"
import { cn } from "@/lib/utils"
import {
  endOfMonth,
  isBefore,
  isSameMonth,
  isWithinInterval,
  startOfMonth,
} from "date-fns"
import { CalendarMode, DateRange } from "../types"

interface MonthViewProps {
  mode: CalendarMode
  selected?: Date | DateRange | null
  onSelect?: (date: Date | DateRange | null) => void
  year: number
  fromDate?: Date
  toDate?: Date
}

export function MonthView({
  mode,
  selected,
  onSelect,
  year,
  fromDate,
  toDate,
}: MonthViewProps) {
  const i18n = useI18n()
  const months = [
    { name: i18n.date.month.january, index: 0 },
    { name: i18n.date.month.february, index: 1 },
    { name: i18n.date.month.march, index: 2 },
    { name: i18n.date.month.april, index: 3 },
    { name: i18n.date.month.may, index: 4 },
    { name: i18n.date.month.june, index: 5 },
    { name: i18n.date.month.july, index: 6 },
    { name: i18n.date.month.august, index: 7 },
    { name: i18n.date.month.september, index: 8 },
    { name: i18n.date.month.october, index: 9 },
    { name: i18n.date.month.november, index: 10 },
    { name: i18n.date.month.december, index: 11 },
  ]

  const today = new Date()

  // Check if a value is a DateRange
  const isDateRange = (value: any): value is DateRange => {
    return (
      value && typeof value === "object" && ("from" in value || "to" in value)
    )
  }

  // Handle click on a month
  const handleMonthClick = (monthIndex: number) => {
    const selectedDate = new Date(year, monthIndex, 1)

    if (mode === "single") {
      // Single select
      onSelect?.(selectedDate)
    } else if (mode === "range") {
      if (!selected || isDateRange(selected)) {
        // Start of new range
        onSelect?.({
          from: selectedDate,
          to: undefined,
        })
      } else if (isDateRange(selected) && selected.from && !selected.to) {
        const fromDate = selected.from

        if (isSameMonth(fromDate, selectedDate)) {
          // Clicking on the same month, just select that month
          onSelect?.({
            from: startOfMonth(selectedDate),
            to: endOfMonth(selectedDate),
          })
        } else {
          // Clicking on a different month, select the range
          const start = isBefore(fromDate, selectedDate)
            ? fromDate
            : selectedDate
          const end = isBefore(fromDate, selectedDate) ? selectedDate : fromDate

          onSelect?.({
            from: startOfMonth(start),
            to: endOfMonth(end),
          })
        }
      }
    }
  }

  // Get if the month is the current month
  const isCurrentMonth = (monthIndex: number): boolean => {
    return monthIndex === today.getMonth() && year === today.getFullYear()
  }

  // Check if a month is selected
  const isMonthSelected = (monthIndex: number): boolean => {
    if (!selected) return false

    if (!isDateRange(selected)) {
      return (
        selected.getMonth() === monthIndex && selected.getFullYear() === year
      )
    } else {
      if (selected.from && selected.to) {
        const current = new Date(year, monthIndex, 15)
        return isWithinInterval(current, {
          start: selected.from,
          end: selected.to,
        })
      } else if (selected.from) {
        return (
          fromDate?.getMonth() === monthIndex && fromDate.getFullYear() === year
        )
      }
    }

    return false
  }

  return (
    <div className="grid grid-cols-3 gap-y-3">
      {months.map((month) => {
        const isCurrent = isCurrentMonth(month.index)
        const isSelected = isMonthSelected(month.index)

        return (
          <button
            type="button"
            key={month.index}
            onClick={() => handleMonthClick(month.index)}
            className={cn(
              "relative flex items-center justify-center text-f1-foreground",
              isSelected && "bg-f1-background-selected"
            )}
          >
            {month.name}
            {isCurrent && (
              <div className="absolute inset-x-0 bottom-1 h-0.5 w-1.5 rounded-full bg-f1-background-selected-bold" />
            )}
          </button>
        )
      })}
    </div>
  )
}

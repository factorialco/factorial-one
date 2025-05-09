import { Calendar } from "@/ui/calendar"
import { type Locale, enUS, es, fr } from "date-fns/locale"
import React from "react"
import { type DateRange } from "react-day-picker"

interface CalendarGridProps {
  viewDate: Date
  selectedDate?: Date | [Date, Date] | null
  onDateSelect: (date: Date) => void
  minDate?: Date
  maxDate?: Date
  locale?: string
  selectionMode?: "day" | "week" | "range" // Refined based on common usage
  className?: string
}

// Basic locale mapping. Consider a more robust solution if many locales are needed.
const localeMap: Record<string, Locale> = {
  "en-US": enUS,
  en: enUS,
  "es-ES": es,
  es: es,
  "fr-FR": fr,
  fr: fr,
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  viewDate,
  selectedDate,
  onDateSelect,
  minDate,
  maxDate,
  locale = "en-US",
  selectionMode = "day",
  className,
}) => {
  const currentLocale = localeMap[locale] || enUS

  const calendarMode = React.useMemo<"single" | "range">(() => {
    if (selectionMode === "range") return "range"
    if (selectionMode === "week") {
      console.warn(
        "CalendarGrid: 'week' selectionMode is not directly supported. Defaulting to 'single' mode."
      )
      return "single"
    }
    return "single"
  }, [selectionMode])

  const handleSelect = (
    day: Date | undefined, // For single mode
    _selected: Date | DateRange | undefined // The full selected date or range, unused for now by onDateSelect
  ) => {
    if (calendarMode === "single") {
      if (day) {
        onDateSelect(day)
      }
    } else if (calendarMode === "range") {
      // When in range mode, `day` is the day that was clicked to change the range.
      // `_selected` is the new range { from: Date, to: Date | undefined } or undefined.
      // Our onDateSelect prop expects a single Date. We pass the clicked day.
      // The parent component is responsible for managing the actual range state based on these calls.
      if (day) {
        onDateSelect(day)
      }
    }
  }

  const typedSelectedDate = React.useMemo(() => {
    if (calendarMode === "range") {
      if (
        Array.isArray(selectedDate) &&
        selectedDate.length === 2 &&
        selectedDate[0] &&
        selectedDate[1]
      ) {
        return { from: selectedDate[0], to: selectedDate[1] } as DateRange
      }
      return undefined
    }
    // Single mode
    if (selectedDate instanceof Date) {
      return selectedDate
    }
    return undefined
  }, [selectedDate, calendarMode])

  // The shadcn Calendar component is a wrapper around React DayPicker.
  // We need to ensure the props match what DayPicker expects for the given mode.
  if (calendarMode === "single") {
    return (
      <Calendar
        mode="single"
        selected={typedSelectedDate as Date | undefined}
        onSelect={(date) => handleSelect(date, date)} // In single mode, day and selected are the same here
        month={viewDate}
        fromDate={minDate}
        toDate={maxDate}
        locale={currentLocale}
        className={className}
      />
    )
  }

  // calendarMode === "range"
  return (
    <Calendar
      mode="range"
      selected={typedSelectedDate as DateRange | undefined}
      // For range, onSelect provides the new range and the day clicked.
      // We adapt this to our simpler handleSelect, which then calls onDateSelect with the clicked day.
      onSelect={(range, day) => handleSelect(day, range)}
      month={viewDate}
      fromDate={minDate}
      toDate={maxDate}
      locale={currentLocale}
      className={className}
    />
  )
}

export default CalendarGrid

import { ReactNode } from "react"
import { CalendarMode, DateRange, DateRangeString } from "../types"

export interface GranularityDefinition {
  // Label for the granularity in the calendar view
  label: (viewDate: Date) => ReactNode
  // Format the date to a date range with dates as string
  toRangeString: (date: Date | DateRange | undefined | null) => DateRangeString
  // Convert the date to a date range (e.g for day granularity, this will be the start and end of the day)
  toRange: (date: Date | DateRange | undefined | null) => DateRange | null
  // Format the date to a string (e.g W12 2025 -> W13 2025)
  toString: (date: Date | DateRange | undefined | null) => string
  // Parse the date range string to a date range
  fromString: (dateStr: string | DateRangeString) => DateRange | null
  // Calculate the next date form the UI View (e.g for day granularity, this will be the next month)
  navigateUIView: (viewDate: Date, direction: -1 | 1) => Date
  // Calculate the next date form the selected date (e.g for day granularity, this will be the next day)
  navigate: (date: Date, direction: -1 | 1) => Date
  // Calculate the view date from a date
  getViewDateFromDate: (date: Date) => Date
  // Render the calendar view
  render: (renderProps: {
    mode: CalendarMode
    selected: Date | DateRange | null
    onSelect: (date: Date | DateRange | null) => void
    month: Date
    onMonthChange: (date: Date) => void
    motionDirection: number
    setViewDate: (date: Date) => void
    viewDate: Date
  }) => ReactNode
}

export type GranularityDefinitionSimple = Pick<
  GranularityDefinition,
  "toRangeString"
>

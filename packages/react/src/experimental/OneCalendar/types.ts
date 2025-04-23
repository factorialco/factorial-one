export type CalendarView = "day" | "month" | "year" | "week"

export type CalendarMode = "single" | "range"

export type CalendarDate = {
  day: number
  month: number
  year: number
}

export type DateRange = {
  from: Date
  to?: Date
}

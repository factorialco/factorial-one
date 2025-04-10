import {
  format,
  formatDistanceToNowStrict,
  startOfDay,
  startOfMonth,
  startOfYear,
} from "date-fns"

export function formatTime(date: Date) {
  return format(date, "p")
}

export function formatTime24Hours(date: Date) {
  return format(date, "HH:mm")
}

export function getAbbreviateMonth(date: Date) {
  return format(date, "LLL")
}

export function getDayOfMonth(date: Date) {
  return date.getDate()
}

export function getAgo(date: Date) {
  return formatDistanceToNowStrict(date, { addSuffix: true })
}

export type DateGranularity = "day" | "month" | "year"
const dateGranularityFunction: Record<DateGranularity, (date: Date) => Date> = {
  day: startOfDay,
  month: startOfMonth,
  year: startOfYear,
}

export function setDateGranularity(date: Date, granularity: DateGranularity) {
  return (
    dateGranularityFunction[granularity]?.(date) ||
    new Error(`Invalid date granularity ${granularity}`)
  )
}

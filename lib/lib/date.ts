import { format } from "date-fns"

export function formatTime(date: Date) {
  return format(date, "p")
}

export function getAbbreviateMonth(date: Date) {
  return format(date, "LLL")
}

export function getDayOfMonth(date: Date) {
  return date.getDate()
}

import { format } from "date-fns"

export function formatTime(date: Date) {
  return format(date, "HH:mm")
}

export function formatMonth(date: Date) {
  return format(date, "MMM")
}

export function getDayOfMonth(date: Date) {
  return date.getDate()
}

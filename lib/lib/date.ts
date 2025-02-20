import { format, formatDistanceToNowStrict } from "date-fns"

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

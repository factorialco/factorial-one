import { format, formatDistanceToNowStrict } from "date-fns"

export function formatTime(date: Date) {
  return format(date, "p")
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

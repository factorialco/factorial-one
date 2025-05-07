import {
  format,
  formatDistanceToNowStrict,
  isThisMonth,
  isThisWeek,
  isToday,
  isYesterday,
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

export function getAgo(date: Date, addSuffix = true) {
  return formatDistanceToNowStrict(date, { addSuffix })
}

type GetDisplayDateBasedOnDurationOptions = {
  yesterdayWithAgo?: boolean
}

export function getDisplayDateBasedOnDuration(
  date: Date,
  { yesterdayWithAgo = true }: GetDisplayDateBasedOnDurationOptions = {}
) {
  if (isToday(date)) {
    return getAgo(date)
  }

  if (isYesterday(date)) {
    return yesterdayWithAgo ? getAgo(date) : format(date, "p")
  }

  return format(date, "PPPp")
}

type DateGroup = "today" | "yesterday" | "lastWeek" | "lastMonth" | "other"

export const categorizeItemsByDate = <
  T extends Record<D, Date>,
  D extends keyof T,
>(
  items: T[],
  dateField: D
) => {
  const groups: Record<DateGroup, T[]> = {
    today: [],
    yesterday: [],
    lastWeek: [],
    lastMonth: [],
    other: [],
  }

  items.forEach((item) => {
    const date = item[dateField]

    if (isToday(date)) {
      groups.today.push(item)
    } else if (isYesterday(date)) {
      groups.yesterday.push(item)
    } else if (isThisWeek(date)) {
      groups.lastWeek.push(item)
    } else if (isThisMonth(date)) {
      groups.lastMonth.push(item)
    } else {
      groups.other.push(item)
    }
  })

  return groups
}

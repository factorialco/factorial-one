import { format } from "date-fns"
import * as locales from "date-fns/locale"
import { DateRange } from "./types"
// Get the locale object from date-fns/locale
export const getLocale = (localeKey: string) => {
  const key = localeKey.split("-")[0] // Handle both 'es' and 'es-ES' formats
  return locales[key as keyof typeof locales]
}

export const toDateRange = (
  value: Date | DateRange | undefined | null
): DateRange | undefined => {
  if (value instanceof Date) {
    return { from: value }
  }
  if (value === null || value === undefined) {
    return undefined
  }

  return value
}

export const formatDateRange = (
  date: Date | DateRange | undefined | null,
  formatStr: string
) => {
  const dateRange = toDateRange(date)
  if (!dateRange) {
    return "-"
  }

  const formatFrom = format(dateRange.from, formatStr)
  const formatTo = dateRange.to ? format(dateRange.to, formatStr) : ""

  return `${formatFrom}${formatTo && formatFrom !== formatTo ? ` - ${formatTo}` : ""}`
}

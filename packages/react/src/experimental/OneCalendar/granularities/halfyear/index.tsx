import {
  addMonths,
  addYears,
  endOfMonth,
  startOfMonth,
  startOfYear,
} from "date-fns"
import { DateRange, DateRangeComplete } from "../../types"
import {
  isAfterOrEqual,
  isBeforeOrEqual,
  toDateRange,
  toDateRangeString,
  toGranularityDateRange,
} from "../../utils"
import { rangeSeparator } from "../consts"
import { GranularityDefinition } from "../types"
import { HalfYearView } from "./HalfyearView"

const formatHalfYear = (date: Date) => {
  const month = date.getMonth()
  const halfYear = Math.floor(month / 6)
  return `H${halfYear + 1} ${date.getFullYear()}`
}

const toRangeString = (date: Date | DateRange | undefined | null) => {
  const dateRange = toDateRange(date)
  if (!dateRange) {
    return {
      from: "",
      to: undefined,
    }
  }

  const from = formatHalfYear(dateRange.from)
  const to = dateRange.to ? formatHalfYear(dateRange.to) : undefined

  return {
    from,
    to: to && from !== to ? to : undefined,
  }
}

export function toHalfYearGranularityDateRange<
  T extends Date | DateRange | undefined | null,
>(date: T): T extends Date | DateRange ? DateRangeComplete : T {
  return toGranularityDateRange(date, startOfMonth, endOfMonth)
}

export const halfyearGranularity: GranularityDefinition = {
  getPrevNext: (value, options) => {
    const dateRange = toHalfYearGranularityDateRange(value)
    if (!dateRange) {
      return { prev: false, next: false }
    }
    const { from, to } = dateRange

    const [prevFrom, prevTo] = [addMonths(from, -6), addMonths(to, -6)]
    const [nextFrom, nextTo] = [addMonths(from, 6), addMonths(to, 6)]

    const minWithGranularity = options.min && startOfMonth(options.min)
    const maxWithGranularity = options.max && endOfMonth(options.max)

    return {
      prev: isAfterOrEqual(prevFrom, minWithGranularity)
        ? { from: prevFrom, to: prevTo }
        : false,
      next: isBeforeOrEqual(nextTo, maxWithGranularity)
        ? { from: nextFrom, to: nextTo }
        : false,
    }
  },
  toRangeString: (date) => toRangeString(date),
  toRange: (date) => toHalfYearGranularityDateRange(date),
  toString: (date) => {
    const dateRange = toRangeString(date)
    if (!dateRange) {
      return "-"
    }
    const { from, to } = dateRange

    return `${from}${to && from !== to ? ` ${rangeSeparator} ${to}` : ""}`
  },
  fromString: (dateStr) => {
    const dateRangeString = toDateRangeString(dateStr)
    if (!dateRangeString) {
      return null
    }

    const { from: fromStr, to: toStr } = dateRangeString

    const parseDate = (dateStr: string) => {
      const trimmed = dateStr.trim()

      const [halfYearStr, yearStr] = trimmed.split(/\s+/)

      const year = isNaN(Number(yearStr)) ? new Date().getFullYear() : +yearStr

      const halfYear = Number(halfYearStr.replace(/[hH\s+]/g, "").trim())
      return new Date(year, (halfYear - 1) * 6, 1)
    }

    return toHalfYearGranularityDateRange({
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    })
  },
  navigate: (date, direction) => {
    return addMonths(date, direction * 6)
  },
  navigateUIView: (viewDate, direction) => {
    return addYears(viewDate, direction * 5)
  },
  label: (viewDate) => {
    const baseYear = Math.floor(viewDate.getFullYear() / 5) * 5
    const endYear = baseYear + 4
    return `${baseYear} ${rangeSeparator} ${endYear}`
  },
  getViewDateFromDate: (date) => {
    return startOfYear(date)
  },
  render: (renderProps) => {
    return (
      <HalfYearView
        mode={renderProps.mode}
        year={renderProps.viewDate.getFullYear()}
        selected={renderProps.selected}
        onSelect={renderProps.onSelect}
        motionDirection={renderProps.motionDirection}
      />
    )
  },
}

import {
  addMonths,
  addYears,
  endOfMonth,
  endOfYear,
  getMonth,
  setMonth,
  startOfMonth,
  startOfYear,
} from "date-fns"
import { DateRange, DateRangeComplete } from "../../types"
import {
  isAfterOrEqual,
  isBeforeOrEqual,
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
  const dateRange = toHalfYearGranularityDateRange(date)
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

const add = (date: DateRangeComplete, delta: number): DateRangeComplete => {
  return {
    from: startOfMonth(addMonths(date.from, delta * 6)),
    to: endOfMonth(addMonths(date.to, delta * 6)),
  }
}

export function toHalfYearGranularityDateRange<
  T extends Date | DateRange | undefined | null,
>(date: T): T extends Date | DateRange ? DateRangeComplete : T {
  return toGranularityDateRange(
    date,
    (date) => {
      if (getMonth(date) < 5) {
        return startOfYear(date)
      }
      return startOfMonth(setMonth(date, 6))
    },
    (date) =>
      getMonth(date) < 6 ? endOfMonth(setMonth(date, 5)) : endOfYear(date)
  )
}

export const halfyearGranularity: GranularityDefinition = {
  calendarView: "halfyear",
  add,
  getPrevNext: (value, options) => {
    const dateRange = toHalfYearGranularityDateRange(value)
    if (!dateRange) {
      return { prev: false, next: false }
    }
    const { from, to } = dateRange

    const { from: prevFrom, to: prevTo } = add({ from, to }, -1)
    const { from: nextFrom, to: nextTo } = add({ from, to }, 1)

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
      to: parseDate(toStr ? toStr : fromStr),
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
    const minDate = toHalfYearGranularityDateRange(renderProps.minDate)
    const maxDate = toHalfYearGranularityDateRange(renderProps.maxDate)
    return (
      <HalfYearView
        mode={renderProps.mode}
        year={renderProps.viewDate.getFullYear()}
        selected={renderProps.selected}
        onSelect={renderProps.onSelect}
        motionDirection={renderProps.motionDirection}
        minDate={minDate ? minDate.from : undefined}
        maxDate={maxDate ? maxDate.to : undefined}
      />
    )
  },
}

import { addYears, endOfYear, parse, startOfYear } from "date-fns"
import { DateRange, DateRangeComplete } from "../../types"
import {
  formatDateRange,
  formatDateToString,
  isAfterOrEqual,
  isBeforeOrEqual,
  toDateRangeString,
  toGranularityDateRange,
} from "../../utils"
import { rangeSeparator } from "../consts"
import { GranularityDefinition } from "../types"
import { YearView } from "./YearView"

export function toYearGranularityDateRange<
  T extends Date | DateRange | undefined | null,
>(date: T): T extends Date | DateRange ? DateRangeComplete : T {
  return toGranularityDateRange(date, startOfYear, endOfYear)
}

export const yearGranularity: GranularityDefinition = {
  calendarView: "year",
  getPrevNext: (value, options) => {
    const dateRange = toYearGranularityDateRange(value)
    if (!dateRange) {
      return { prev: false, next: false }
    }
    const { from, to } = dateRange

    const [prevFrom, prevTo] = [addYears(from, -1), addYears(to, -1)]
    const [nextFrom, nextTo] = [addYears(from, 1), addYears(to, 1)]

    const minWithGranularity = options.min && startOfYear(options.min)
    const maxWithGranularity = options.max && endOfYear(options.max)

    return {
      prev: isAfterOrEqual(prevFrom, minWithGranularity)
        ? { from: prevFrom, to: prevTo }
        : false,
      next: isBeforeOrEqual(nextTo, maxWithGranularity)
        ? { from: nextFrom, to: nextTo }
        : false,
    }
  },
  toRange: (date) => toYearGranularityDateRange(date),
  toRangeString: (date) => formatDateRange(date, "yyyy"),
  toString: (date) => formatDateToString(date, "yyyy"),
  fromString: (dateStr) => {
    const dateRangeString = toDateRangeString(dateStr)
    if (!dateRangeString) {
      return null
    }
    const { from: fromStr, to: toStr } = dateRangeString

    const parseDate = (dateStr: string) => {
      const trimmed = dateStr.trim()
      return parse(trimmed, "yyyy", new Date())
    }

    return toYearGranularityDateRange({
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    })
  },
  getViewDateFromDate: (date) => {
    return startOfYear(date)
  },
  navigate: (date, direction) => {
    return addYears(date, direction)
  },
  navigateUIView: (viewDate, direction) => {
    return addYears(viewDate, direction * 10)
  },
  label: (viewDate) => {
    const startYear = viewDate.getFullYear() - (viewDate.getFullYear() % 10)
    const endYear = startYear + 9

    return `${startYear} ${rangeSeparator} ${endYear}`
  },
  render: (renderProps) => {
    const minDate = toYearGranularityDateRange(renderProps.minDate)
    const maxDate = toYearGranularityDateRange(renderProps.maxDate)
    return (
      <YearView
        mode={renderProps.mode}
        decade={renderProps.viewDate.getFullYear()}
        selected={renderProps.selected}
        onSelect={renderProps.onSelect}
        motionDirection={renderProps.motionDirection}
        minDate={minDate ? minDate.from : undefined}
        maxDate={maxDate ? maxDate.to : undefined}
      />
    )
  },
}

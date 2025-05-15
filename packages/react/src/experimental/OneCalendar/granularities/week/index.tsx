import {
  addDays,
  addMonths,
  endOfISOWeek,
  parse,
  startOfISOWeek,
  startOfMonth,
} from "date-fns"
import { DateRange, DateRangeComplete } from "../../types"
import {
  formatDateRange,
  formatDateToString,
  isAfterOrEqual,
  isBeforeOrEqual,
  toDateRangeString,
  toGranularityDateRange,
} from "../../utils"
import { GranularityDefinition } from "../types"
import { WeekView } from "./WeekView"

export function toWeekGranularityDateRange<
  T extends Date | DateRange | undefined | null,
>(date: T): T extends Date | DateRange ? DateRangeComplete : T {
  return toGranularityDateRange(date, startOfISOWeek, endOfISOWeek)
}

export const weekGranularity: GranularityDefinition = {
  calendarView: "week",
  getPrevNext: (value: DateRange, options) => {
    const dateRange = toWeekGranularityDateRange(value)
    if (!dateRange) {
      return { prev: false, next: false }
    }

    const { from, to } = dateRange

    const [prevFrom, prevTo] = [addDays(from, -7), addDays(to, -7)]
    const [nextFrom, nextTo] = [addDays(from, 7), addDays(to, 7)]

    const minWithGranularity = options.min && startOfISOWeek(options.min)
    const maxWithGranularity = options.max && endOfISOWeek(options.max)

    return {
      prev: isAfterOrEqual(prevFrom, minWithGranularity)
        ? { from: prevFrom, to: prevTo }
        : false,
      next: isBeforeOrEqual(nextTo, maxWithGranularity)
        ? { from: nextFrom, to: nextTo }
        : false,
    }
  },
  toRangeString: (date) => formatDateRange(date, "'W'I yyyy"),
  toRange: (date) => toWeekGranularityDateRange(date),
  toString: (date) => formatDateToString(date, "'W'I yyyy"),
  fromString: (dateStr) => {
    const dateRangeString = toDateRangeString(dateStr)
    if (!dateRangeString) {
      return null
    }
    const { from: fromStr, to: toStr } = dateRangeString

    const parseDate = (dateStr: string) => {
      const trimmed = dateStr.trim()

      const [weekStr, yearStr] = trimmed.split(/\s+/)

      const year = isNaN(Number(yearStr)) ? new Date().getFullYear() : +yearStr

      const week = Number(weekStr.replace(/[wW\s]/g, ""))
      return parse(`${week}`, "I", new Date().setFullYear(year))
    }

    return toWeekGranularityDateRange({
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    })
  },
  getViewDateFromDate: (date) => {
    return startOfMonth(date)
  },
  navigate: (date, direction) => {
    return addDays(date, direction * 7)
  },
  navigateUIView: (viewDate, direction) => {
    return addMonths(viewDate, direction)
  },
  label: (viewDate) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(viewDate)
  },
  render: (renderProps) => {
    const minDate = toWeekGranularityDateRange(renderProps.minDate)
    const maxDate = toWeekGranularityDateRange(renderProps.maxDate)
    return (
      <WeekView
        selected={renderProps.selected}
        onSelect={renderProps.onSelect}
        month={renderProps.month}
        onMonthChange={renderProps.onMonthChange}
        motionDirection={renderProps.motionDirection}
        minDate={minDate ? minDate.from : undefined}
        maxDate={maxDate ? maxDate.to : undefined}
      />
    )
  },
}

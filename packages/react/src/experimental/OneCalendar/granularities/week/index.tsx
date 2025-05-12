import {
  addDays,
  addMonths,
  endOfISOWeek,
  parse,
  startOfISOWeek,
  startOfMonth,
} from "date-fns"
import { DateRange } from "../../types"
import {
  formatDateRange,
  formatDateToString,
  toDateRangeString,
  toGranularityDateRange,
} from "../../utils"
import { GranularityDefinition } from "../types"
import { WeekView } from "./WeekView"

const toWeekGranularityDateRange = (
  date: Date | DateRange | undefined | null
) => {
  return toGranularityDateRange(date, startOfISOWeek, endOfISOWeek)
}

export const weekGranularity: GranularityDefinition = {
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
    return (
      <WeekView
        selected={renderProps.selected}
        onSelect={renderProps.onSelect}
        month={renderProps.month}
        onMonthChange={renderProps.onMonthChange}
        motionDirection={renderProps.motionDirection}
      />
    )
  },
}

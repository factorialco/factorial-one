import NumberFlow from "@number-flow/react"
import { addMonths, addYears, endOfMonth, parse, startOfMonth } from "date-fns"
import { DateRange } from "../../types"
import {
  formatDateRange,
  formatDateToString,
  toDateRangeString,
  toGranularityDateRange,
} from "../../utils"
import { GranularityDefinition } from "../types"
import { MonthView } from "./MonthView"

const toMonthGranularityDateRange = (
  date: Date | DateRange | undefined | null
) => {
  return toGranularityDateRange(date, startOfMonth, endOfMonth)
}

export const monthGranularity: GranularityDefinition = {
  toRangeString: (date) => formatDateRange(date, "MM/yyyy"),
  toRange: (date) => toMonthGranularityDateRange(date),
  toString: (date) => formatDateToString(date, "MM/yyyy"),
  fromString: (dateStr) => {
    const dateRangeString = toDateRangeString(dateStr)
    if (!dateRangeString) {
      return null
    }
    const { from: fromStr, to: toStr } = dateRangeString

    const parseDate = (dateStr: string) => {
      const trimmed = dateStr.trim()

      const [monthStr, yearStr] = trimmed.split(/[/.-\s+]/)

      const year = isNaN(Number(yearStr)) ? new Date().getFullYear() : +yearStr
      const month =
        parse(monthStr, "MMMM", new Date().setFullYear(year)).getMonth() + 1 ||
        parse(monthStr, "MMM", new Date().setFullYear(year)).getMonth() + 1 ||
        Number(monthStr)

      return new Date(Number(year), Number(month) - 1, 1)
    }

    return toMonthGranularityDateRange({
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    })
  },
  navigate: (date, direction) => {
    return addMonths(date, direction)
  },
  navigateUIView: (viewDate, direction) => {
    return addYears(viewDate, direction)
  },
  label: (viewDate) => {
    return (
      <NumberFlow
        format={{
          useGrouping: false,
          maximumFractionDigits: 0,
        }}
        spinTiming={{
          duration: 150,
        }}
        value={viewDate.getFullYear()}
      />
    )
  },
  getViewDateFromDate: (date) => {
    return startOfMonth(date)
  },
  render: (renderProps) => {
    return (
      <MonthView
        mode={renderProps.mode}
        year={renderProps.viewDate.getFullYear()}
        selected={renderProps.selected}
        onSelect={renderProps.onSelect}
        motionDirection={renderProps.motionDirection}
      />
    )
  },
}

import NumberFlow from "@number-flow/react"
import { addMonths, addYears, endOfMonth, parse, startOfMonth } from "date-fns"
<<<<<<< HEAD
import { DateRange } from "../../types"
=======
>>>>>>> 53972ab5 (feat: fromString)
import {
  formatDateRange,
  formatDateToString,
  toDateRangeString,
<<<<<<< HEAD
  toGranularityDateRange,
=======
>>>>>>> 53972ab5 (feat: fromString)
} from "../../utils"
import { GranularityDefinition } from "../types"
import { MonthView } from "./MonthView"

<<<<<<< HEAD
const toMonthGranularityDateRange = (
  date: Date | DateRange | undefined | null
) => {
  return toGranularityDateRange(date, startOfMonth, endOfMonth)
}

export const monthGranularity: GranularityDefinition = {
  toRangeString: (date) => formatDateRange(date, "MM/yyyy"),
  toRange: (date) => toMonthGranularityDateRange(date),
=======
export const monthGranularity: GranularityDefinition = {
  toRangeString: (date) => formatDateRange(date, "MM/yyyy"),
>>>>>>> 53972ab5 (feat: fromString)
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

<<<<<<< HEAD
    return toMonthGranularityDateRange({
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    })
=======
    return {
      from: startOfMonth(parseDate(fromStr)),
      to: toStr ? endOfMonth(parseDate(toStr)) : undefined,
    }
>>>>>>> 53972ab5 (feat: fromString)
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

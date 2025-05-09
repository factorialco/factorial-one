<<<<<<< HEAD
import { addYears, endOfYear, parse, startOfYear } from "date-fns"
import { DateRange } from "../../types"
=======
import { addYears, parse, startOfYear } from "date-fns"
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
import { rangeSeparator } from "../consts"
import { GranularityDefinition } from "../types"
import { YearView } from "./YearView"

<<<<<<< HEAD
const toYearGranularityDateRange = (
  date: Date | DateRange | undefined | null
) => {
  return toGranularityDateRange(date, startOfYear, endOfYear)
}

export const yearGranularity: GranularityDefinition = {
  toRange: (date) => toYearGranularityDateRange(date),
=======
export const yearGranularity: GranularityDefinition = {
>>>>>>> 53972ab5 (feat: fromString)
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

<<<<<<< HEAD
    return toYearGranularityDateRange({
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    })
=======
    return {
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    }
>>>>>>> 53972ab5 (feat: fromString)
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
    return (
      <YearView
        mode={renderProps.mode}
        decade={renderProps.viewDate.getFullYear()}
        selected={renderProps.selected}
        onSelect={renderProps.onSelect}
        motionDirection={renderProps.motionDirection}
      />
    )
  },
}

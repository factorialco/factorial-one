import { addMonths, addYears, endOfQuarter, startOfQuarter } from "date-fns"
import {
  formatDateRange,
  formatDateToString,
  toDateRangeString,
  toGranularityDateRange,
} from "../../utils"
import { rangeSeparator } from "../consts"
import { GranularityDefinition } from "../types"
import { QuarterView } from "./QuarterView"

const toQuarterGranularityDateRange = (
  date: Date | DateRange | undefined | null
) => {
  return toGranularityDateRange(date, startOfQuarter, endOfQuarter)
}

export const quarterGranularity: GranularityDefinition = {
  toRangeString: (date) => formatDateRange(date, "'Q'Q yyyy"),
  toRange: (date) => toQuarterGranularityDateRange(date),
  toString: (date) => formatDateToString(date, "'Q'Q yyyy"),
  fromString: (dateStr) => {
    const dateRangeString = toDateRangeString(dateStr)
    if (!dateRangeString) {
      return null
    }
    const { from: fromStr, to: toStr } = dateRangeString

    const parseDate = (dateStr: string) => {
      const trimmed = dateStr.trim()

      const [quarterStr, yearStr] = trimmed.split(/\s+/)
      const year = isNaN(Number(yearStr)) ? new Date().getFullYear() : +yearStr
      const quarter = Number(quarterStr.replace(/[qQ\s]/g, ""))

      return new Date(year, (quarter - 1) * 3, 1)
    }

    return toQuarterGranularityDateRange({
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    })
  },
  navigate: (date, direction) => {
    return startOfQuarter(addMonths(date, direction * 3))
  },
  navigateUIView: (viewDate, direction) => {
    return startOfQuarter(addYears(viewDate, direction * 5))
  },
  label: (viewDate) => {
    const baseYear = Math.floor(viewDate.getFullYear() / 5) * 5
    const endYear = baseYear + 4
    return `${baseYear} ${rangeSeparator} ${endYear}`
  },
  getViewDateFromDate: (date) => {
    return startOfQuarter(date)
  },
  render: (renderProps) => {
    return (
      <QuarterView
        mode={renderProps.mode}
        year={renderProps.viewDate.getFullYear()}
        selected={renderProps.selected}
        onSelect={renderProps.onSelect}
        motionDirection={renderProps.motionDirection}
      />
    )
  },
}

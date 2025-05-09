import { addYears, parse, startOfYear } from "date-fns"
import {
  formatDateRange,
  formatDateToString,
  toDateRangeString,
} from "../../utils"
import { rangeSeparator } from "../consts"
import { GranularityDefinition } from "../types"
import { YearView } from "./YearView"

export const yearGranularity: GranularityDefinition = {
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

    return {
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    }
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

import { addDays, addMonths, startOfMonth } from "date-fns"
import { GranularityDefinition } from ".."
import {
  formatDateRange,
  formatDateToString,
  toDateRangeString,
} from "../../utils"
import { DayView } from "./DayView"

export const dayGranularity: GranularityDefinition = {
  toRangeString: (date) => formatDateRange(date, "dd/MM/yyyy"),
  toString: (date) => formatDateToString(date, "dd/MM/yyyy"),
  fromString: (dateStr) => {
    const dateRangeString = toDateRangeString(dateStr)
    if (!dateRangeString) {
      return null
    }
    const { from: fromStr, to: toStr } = dateRangeString

    const parseDate = (dateStr: string) => {
      const trimmed = dateStr.trim()

      const [day, month, year] = trimmed.split(/[/.-]/)
      return new Date(Number(year), Number(month) - 1, Number(day))
    }

    return {
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    }
  },
  navigate: (viewDate, direction) => {
    return addDays(viewDate, direction)
  },
  navigateUIView: (viewDate, direction) => {
    return addMonths(viewDate, direction)
  },
  getViewDateFromDate: (date) => {
    return startOfMonth(date)
  },
  label: (viewDate) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(viewDate)
  },
  render: (renderProps) => {
    return (
      <DayView
        mode={renderProps.mode}
        selected={renderProps.selected}
        onSelect={renderProps.onSelect}
        month={renderProps.month}
        onMonthChange={renderProps.onMonthChange}
        motionDirection={renderProps.motionDirection}
      />
    )
  },
}

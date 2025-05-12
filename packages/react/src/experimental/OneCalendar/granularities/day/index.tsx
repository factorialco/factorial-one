<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 00d04951 (fix: granularity date range)
import {
  addDays,
  addMonths,
  endOfDay,
  startOfDay,
  startOfMonth,
} from "date-fns"
<<<<<<< HEAD
import { GranularityDefinition } from ".."
import { DateRange } from "../../types"
=======
import { addDays, addMonths, startOfMonth } from "date-fns"
import { GranularityDefinition } from ".."
>>>>>>> 53972ab5 (feat: fromString)
=======
import { GranularityDefinition } from ".."
import { DateRange } from "../../types"
>>>>>>> 00d04951 (fix: granularity date range)
import {
  formatDateRange,
  formatDateToString,
  toDateRangeString,
<<<<<<< HEAD
<<<<<<< HEAD
  toGranularityDateRange,
} from "../../utils"
import { DayView } from "./DayView"

const toDayGranularityDateRange = (
  date: Date | DateRange | undefined | null
) => {
  return toGranularityDateRange(date, startOfDay, endOfDay)
}

export const dayGranularity: GranularityDefinition = {
  toRange: (date) => toDayGranularityDateRange(date),
=======
=======
  toGranularityDateRange,
>>>>>>> 00d04951 (fix: granularity date range)
} from "../../utils"
import { DayView } from "./DayView"

const toDayGranularityDateRange = (
  date: Date | DateRange | undefined | null
) => {
  return toGranularityDateRange(date, startOfDay, endOfDay)
}

export const dayGranularity: GranularityDefinition = {
<<<<<<< HEAD
>>>>>>> 53972ab5 (feat: fromString)
=======
  toRange: (date) => toDayGranularityDateRange(date),
>>>>>>> 00d04951 (fix: granularity date range)
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

<<<<<<< HEAD
<<<<<<< HEAD
    return toDayGranularityDateRange({
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    })
=======
    return {
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    }
>>>>>>> 53972ab5 (feat: fromString)
=======
    return toDayGranularityDateRange({
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    })
>>>>>>> 00d04951 (fix: granularity date range)
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

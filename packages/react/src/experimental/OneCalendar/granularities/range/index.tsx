import { addDays, differenceInDays, endOfDay, startOfDay } from "date-fns"
import { GranularityDefinition } from ".."
import { isAfterOrEqual, isBeforeOrEqual } from "../../utils"
import { dayGranularity, toDayGranularityDateRange } from "../day"
/**
 * This is a special case of the day granularity.
 * It is used to render a range of dates.
 * It is not a real granularity, but a way to render a range of dates.
 */
export const rangeGranularity: GranularityDefinition = {
  ...dayGranularity,
  getPrevNext: (value, options) => {
    const dateRange = toDayGranularityDateRange(value)
    if (!dateRange) {
      return {
        prev: false,
        next: false,
      }
    }

    const { from, to } = dateRange

    const delta = differenceInDays(to, from)
    const [nextFrom, nextTo] = [addDays(from, delta), addDays(to, delta)]
    const [prevFrom, prevTo] = [addDays(from, -delta), addDays(to, -delta)]

    const minWithGranularity = options.min && startOfDay(options.min)
    const maxWithGranularity = options.max && endOfDay(options.max)

    return {
      prev: isAfterOrEqual(prevFrom, minWithGranularity)
        ? { from: prevFrom, to: prevTo }
        : false,
      next: isBeforeOrEqual(nextTo, maxWithGranularity)
        ? { from: nextFrom, to: nextTo }
        : false,
    }
  },
  calendarView: "day",
  render: (renderProps) => {
    return dayGranularity.render({ ...renderProps, mode: "range" })
  },
}

import { addDays, differenceInDays, endOfDay, startOfDay } from "date-fns"
import { DateRange } from "../types"
import { isAfterOrEqual, isBeforeOrEqual } from "../utils"
import { toDayGranularityDateRange } from "./day"
import { DateNavigationOptions, GranularityDefinition } from "./types"

export const customRangeGetPrevNext: GranularityDefinition["getPrevNext"] = (
  value: DateRange | undefined | null,
  options: DateNavigationOptions
) => {
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
}

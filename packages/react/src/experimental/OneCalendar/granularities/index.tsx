import { CalendarView } from "../types"
import { dayGranularity } from "./day"
import { halfyearGranularity } from "./halfyear"
import { monthGranularity } from "./month"
import { quarterGranularity } from "./quarter"
import { GranularityDefinition } from "./types"
import { weekGranularity } from "./week"
import { yearGranularity } from "./year"
export * from "./consts"
export * from "./types"

export const granularityDefinitions: Record<
  CalendarView,
  GranularityDefinition
> = {
  day: dayGranularity,
  week: weekGranularity,
  month: monthGranularity,
  quarter: quarterGranularity,
  halfyear: halfyearGranularity,
  year: yearGranularity,
}

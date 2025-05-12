import { endOfWeek, startOfWeek, subDays } from "date-fns"
import { DatePreset } from "./types"
import { granularityDefinitions } from "../OneCalendar/granularities"

export const predefinedPresets: Record<string, DatePreset> = {
  today: {
    label: "Today",
    granularity: "day",
    value: () => granularityDefinitions.day.
  },
  yesterday: {
    label: "Yesterday",
    granularity: "day",
    value: () => subDays(new Date(), 1),
  },
  thisWeek: {
    label: "This week",
    granularity: "week",
    value: () => ,
  },
  lastWeek: {
    label: "Last week",
    granularity: "week",
    value: () => subDays(new Date(), 7),
  },
  lastMonth: {},
}

import { subDays, subMonths } from "date-fns"
import { granularityDefinitions } from "../OneCalendar/granularities"
import { DatePreset } from "./types"

export const predefinedPresets: Record<string, DatePreset> = {
  today: {
    label: "Today",
    granularity: "day",
    value: () => granularityDefinitions.day.toRange(new Date()),
  },
  yesterday: {
    label: "Yesterday",
    granularity: "day",
    value: () => granularityDefinitions.day.toRange(subDays(new Date(), 1)),
  },
  thisWeek: {
    label: "This week",
    granularity: "week",
    value: () => granularityDefinitions.week.toRange(new Date()),
  },
  lastWeek: {
    label: "Last week",
    granularity: "week",
    value: () => granularityDefinitions.week.toRange(subDays(new Date(), 7)),
  },
  lastMonth: {
    label: "Last month",
    granularity: "month",
    value: () => granularityDefinitions.month.toRange(subMonths(new Date(), 1)),
  },
}

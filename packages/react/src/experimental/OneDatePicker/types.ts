import { GranularityDefinitionKey } from "../OneCalendar/granularities"
import {
  CalendarView,
  DateRange,
  DateRangeComplete,
} from "../OneCalendar/types"

export interface DatePreset {
  label: string
  granularity: CalendarView
  value: () => Date | DateRange
}
export type DatePickerValue = {
  value: DateRangeComplete | undefined
  granularity: GranularityDefinitionKey
}

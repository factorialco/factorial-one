import { GranularityDefinitionKey } from "../OneCalendar/granularities"
import { DateRange, DateRangeComplete } from "../OneCalendar/types"

export interface DatePreset {
  label: string
  granularity: GranularityDefinitionKey
  value: DateRange | (() => DateRange)
}
export type DatePickerValue = {
  value: DateRangeComplete | undefined
  granularity: GranularityDefinitionKey
}

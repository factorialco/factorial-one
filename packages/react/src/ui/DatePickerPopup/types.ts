import { GranularityDefinitionKey } from "@/experimental/OneCalendar/granularities"
import { DateRange, DateRangeComplete } from "@/experimental/OneCalendar/types"

export interface DatePreset {
  label: string
  granularity: GranularityDefinitionKey
  value: DateRange | (() => DateRange)
}
export type DatePickerValue = {
  value: DateRangeComplete | undefined
  granularity: GranularityDefinitionKey
}

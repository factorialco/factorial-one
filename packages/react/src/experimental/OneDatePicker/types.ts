import { DateRange } from "../OneCalendar/types"

import { CalendarView } from "../OneCalendar/types"

export interface DatePreset {
  label: string
  granularity: CalendarView
  value: DateRange | (() => DateRange)
}

export type DatePickerValue = {
  date: DateRange | undefined
  granularity: CalendarView
}

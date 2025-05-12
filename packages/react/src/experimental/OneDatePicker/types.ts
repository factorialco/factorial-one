import { DateRange } from "../OneCalendar/types"

import { CalendarView } from "../OneCalendar/types"

export interface DatePreset {
  label: string
  granularity: CalendarView
  value: () => Date | DateRange
}

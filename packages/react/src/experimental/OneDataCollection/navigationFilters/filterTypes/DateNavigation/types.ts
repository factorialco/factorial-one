import { GranularityDefinitionKey } from "@/experimental/OneCalendar/granularities/index"
import {
  NavigationFilterComponentProps,
  NavigationFilterDefinitionBase,
} from "../../types"

export type DateNavigationOptions = {
  granularity?: GranularityDefinitionKey[] | GranularityDefinitionKey
  defaultGranularity?: GranularityDefinitionKey
  min?: Date
  max?: Date
}

export type DateNavigatorFilterDefinition = NavigationFilterDefinitionBase<
  Date | DateRange | DateValue
> & {
  type: "date-navigator"
} & DateNavigationOptions

export type DateRange = [Date, Date]

export type DateValue = {
  value: Date | DateRange
  // Represents the selected value in a date-time range, e.g  for a day "2021-01-01T00:00:00Z - 2021-01-07T23:59:59Z"
  valueString: string
  granularity: GranularityDefinitionKey
}

export type DateNavigationProps = NavigationFilterComponentProps<DateValue>

export type DateNavigationGranularityHandler<T extends Date | DateRange> = {
  toDateRange: (date: T) => DateRange
  getPrevNext: (
    value: DateRange,
    options: Omit<DateNavigationOptions, "granularity">
  ) => [DateRange | false, DateRange | false]
  toString: (date: DateRange) => string
}

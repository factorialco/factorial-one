import {
  NavigationFilterComponentProps,
  NavigationFilterDefinitionBase,
} from "../../types"

export type DateNavigationOptions = {
  granularity?: DateGranularity[] | DateGranularity
  defaultGranularity?: DateGranularity
  min?: Date
  max?: Date
}

export type DateNavigatorFilterDefinition = NavigationFilterDefinitionBase<
  Date | DateRange | DateValue
> & {
  type: "date-navigator"
} & DateNavigationOptions

export type DateGranularity =
  | "day"
  | "week"
  | "fortnight"
  | "month"
  | "year"
  | "custom"

export type DateRange = [Date, Date]

export type DateValue = {
  // TODO: Returns the valus in a string format related to the granularity, for example "W12 2025"
  value: Date | DateRange | string
  // Represents the selected value in a date-time range, ex. "2021-01-01T00:00:00Z - 2021-01-07T23:59:59Z"
  dateRange: DateRange
  granularity: DateGranularity
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

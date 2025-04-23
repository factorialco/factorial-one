import { NavigationFilter, NavigationFilterComponentProps } from "../../types"
import { DateNavigation } from "./DateNavigation"
import { granularityHandlers } from "./granularities"
import { DateNavigationGranularityHandler, DateRange, DateValue } from "./types"

const dateNavigatorFilter: NavigationFilter<
  DateValue,
  DateValue | Date | DateRange
> = {
  initialValueConverter: function <
    FilterDef extends NavigationFilterComponentProps<DateValue>["filter"],
  >(initialValue: Date | DateRange | DateValue, filterDef: FilterDef) {
    // If the initial value is already a DateValue, return it
    if ("value" in initialValue) {
      return initialValue
    }

    const availableGranularities = Array.isArray(filterDef.granularity)
      ? filterDef.granularity
      : [filterDef.granularity]

    const granularity =
      filterDef.defaultGranularity || availableGranularities[0] || "day"

    // For custom granularity, we expect a DateRange
    // For all other granularities, we expect a Date
    if (granularity === "custom") {
      if (!Array.isArray(initialValue)) {
        throw new Error(
          "Custom granularity requires a DateRange as initial value"
        )
      }
      const handler = granularityHandlers[
        granularity
      ] as DateNavigationGranularityHandler<DateRange>
      return {
        value: initialValue,
        dateRange: handler.toDateRange(initialValue),
        granularity,
      }
    } else {
      if (Array.isArray(initialValue)) {
        throw new Error(
          `${granularity} granularity requires a Date as initial value`
        )
      }
      const handler = granularityHandlers[
        granularity
      ] as DateNavigationGranularityHandler<Date>
      return {
        value: initialValue,
        dateRange: handler.toDateRange(initialValue),
        granularity,
      }
    }
  },
  render: (props: NavigationFilterComponentProps<DateValue>) => {
    return <DateNavigation {...props} />
  },
}

export default dateNavigatorFilter

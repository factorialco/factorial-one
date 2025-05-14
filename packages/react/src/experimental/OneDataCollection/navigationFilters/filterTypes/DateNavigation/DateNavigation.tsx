import { getGranularitySimpleDefinition } from "@/experimental/OneCalendar"
import { OneDatePicker } from "@/experimental/OneDatePicker"
import { DateNavigationProps, DateRange } from "./types"

export function DateNavigation({
  filter,
  value,
  onChange,
}: DateNavigationProps) {
  const options = {
    granularity: "day" as const,
    ...filter,
  }

  const availableGranularities = Array.isArray(options.granularity)
    ? options.granularity
    : [options.granularity]

  const granularityDefinition = getGranularitySimpleDefinition(
    options.granularity
  )

  const handleChange = (newDateRange: DateRange | undefined) => {
    if (!newDateRange) {
      return
    }

    onChange({
      value: newDateRange,
      granularity: granularity,
      valueString: granularityDefinition.toString(newDateRange),
    })
  }

  return (
    <div className="flex items-center gap-2">
      <OneDatePicker
        onSelect={handleChange}
        value={value.dateRange}
        granularities={availableGranularities}
        navigation={true}
        minDate={options.minDate}
        maxDate={options.maxDate}
      />
    </div>
  )
}

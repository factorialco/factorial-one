import { getGranularityDefinition } from "@/experimental/OneCalendar/OneCalendar"
import {
  type DatePickerValue,
  OneDatePicker,
} from "@/experimental/OneDatePicker"
import { DateNavigationProps } from "./types"

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

  const granularityDefinition = getGranularityDefinition(
    value.granularity || availableGranularities[0]
  )

  const handleChange = (newDateRange: DatePickerValue | undefined) => {
    if (!newDateRange || !newDateRange.value) {
      return
    }

    onChange({
      value: newDateRange.value,
      granularity: newDateRange.granularity,
      valueString: granularityDefinition.toString(newDateRange.value),
    })
  }

  return (
    <div className="flex items-center gap-2">
      <OneDatePicker
        onSelect={handleChange}
        defaultValue={value}
        granularities={availableGranularities}
        navigation={true}
        minDate={options.min}
        maxDate={options.max}
        presets={options.presets}
        hideGoToCurrent={options.hideGoToCurrent}
      />
    </div>
  )
}

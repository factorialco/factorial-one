import {
  OneDatePickerPopup,
  OneDatePickerPopupProps,
} from "@/ui/DatePickerPopup/OneDatePickerPopup"
import { useMemo, useState } from "react"
import { granularityDefinitions } from "../OneCalendar"
import { DateRange } from "../OneCalendar/types"
import { DatePickerTrigger } from "./components/DateNavigatorTrigger"
import { DatePickerValue } from "./types"
export interface OneDatePickerProps
  extends Omit<OneDatePickerPopupProps, "children"> {
  hideNavigation?: boolean
  hideGoToCurrent?: boolean
}

export function OneDateNavigator({
  onSelect,
  defaultValue,
  presets = [],
  granularities = ["day"],
  hideNavigation = false,
  hideGoToCurrent = false,
  ...props
}: OneDatePickerProps) {
  const [value, setValue] = useState<DatePickerValue | undefined>(defaultValue)
  const [isOpen, setIsOpen] = useState(false)

  const granularityDefinition = useMemo(() => {
    return granularityDefinitions[value?.granularity ?? "day"]
  }, [value?.granularity])

  const handleSelect = (value: DatePickerValue | undefined) => {
    setValue(value)
    onSelect?.(value)
  }

  const handleNavigationChange = (date: DateRange) => {
    handleSelect({
      value: granularityDefinition.toRange(date),
      granularity: value?.granularity ?? "day",
    })
  }

  return (
    <OneDatePickerPopup
      onSelect={handleSelect}
      value={value}
      defaultValue={defaultValue}
      presets={presets}
      granularities={granularities}
      minDate={props.minDate}
      maxDate={props.maxDate}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DatePickerTrigger
        value={value}
        highlighted={isOpen}
        navigation={!hideNavigation}
        onDateChange={handleNavigationChange}
        granularity={granularityDefinition}
        minDate={props.minDate}
        maxDate={props.maxDate}
        disabled={props.disabled}
        hideGoToCurrent={hideGoToCurrent}
        onClick={() => setIsOpen(true)}
      />
    </OneDatePickerPopup>
  )
}

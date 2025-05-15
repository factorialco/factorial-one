import {
  OneDatePickerPopup,
  OneDatePickerPopupProps,
} from "@/ui/DatePickerPopup/OneDatePickerPopup"
import { useMemo, useState } from "react"
import { granularityDefinitions } from "../OneCalendar"
import { DateInput } from "./components/DateInput"
import { DatePickerValue } from "./types"
export interface OneDatePickerProps
  extends Omit<OneDatePickerPopupProps, "children"> {
  hideNavigation?: boolean
  hideGoToCurrent?: boolean
}

export function OneDatePicker({
  onSelect,
  defaultValue,
  presets = [],
  granularities = ["day"],
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

  return (
    <>
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
        <DateInput
          value={value}
          granularity={granularityDefinition}
          onDateChange={(newValue) =>
            handleSelect({
              value: newValue,
              granularity: value?.granularity ?? "day",
            })
          }
          disabled={props.disabled}
          open={isOpen}
          onOpenChange={setIsOpen}
        />
      </OneDatePickerPopup>
    </>
  )
}

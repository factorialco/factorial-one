import {
  OneDatePickerPopup,
  OneDatePickerPopupProps,
} from "@/ui/DatePickerPopup/OneDatePickerPopup"
import { InputFieldProps } from "@/ui/InputField/InputField"
import { useMemo, useState } from "react"
import { granularityDefinitions } from "../OneCalendar"
import { DateInput } from "./components/DateInput"
import { DatePickerValue } from "./types"
export type OneDatePickerProps = Omit<OneDatePickerPopupProps, "children"> & {
  hideNavigation?: boolean
  hideGoToCurrent?: boolean
} & Pick<
    InputFieldProps<string>,
    "label" | "hideLabel" | "placeholder" | "error"
  >

export function OneDatePicker({
  onSelect,
  defaultValue,
  presets = [],
  granularities = ["day"],
  label,
  hideLabel,
  error,
  placeholder,
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
          label={label}
          hideLabel={hideLabel}
          placeholder={placeholder}
          value={value}
          granularity={granularityDefinition}
          onDateChange={(newValue) =>
            handleSelect({
              value: newValue,
              granularity: value?.granularity ?? "day",
            })
          }
          disabled={props.disabled}
          error={error}
          open={isOpen}
          onOpenChange={setIsOpen}
        />
      </OneDatePickerPopup>
    </>
  )
}

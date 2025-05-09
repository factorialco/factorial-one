import React, { useState } from "react"
import { DatePickerContent } from "./date-picker-content"
import { DatePickerTrigger } from "./date-picker-trigger"
import { DatePickerProps, DatePickerState } from "./types"

export const DatePicker: React.FC<DatePickerProps> = ({
  mode,
  value: controlledValue,
  defaultValue,
  onChange,
  presets,
  minDate,
  maxDate,
  locale,
  placeholder,
  disabled,
}) => {
  const [internalValue, setInternalValue] = useState<DatePickerState["value"]>(
    defaultValue ?? null
  )
  const [isOpen, setIsOpen] = useState<DatePickerState["isOpen"]>(false)
  const [currentViewDate, setCurrentViewDate] = useState<Date>(
    (Array.isArray(defaultValue) ? defaultValue[0] : defaultValue) ?? new Date()
  )
  const [tempValue, setTempValue] = useState<DatePickerState["tempValue"]>(null)
  // Add other state elements as needed from DatePickerState

  const currentValue =
    controlledValue !== undefined ? controlledValue : internalValue

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (open) {
      // When opening, sync tempValue with the current effective value
      // and reset viewDate to the current selection or today
      const initialDate = Array.isArray(currentValue)
        ? currentValue[0]
        : currentValue
      setTempValue(currentValue)
      setCurrentViewDate(initialDate ?? new Date())
    }
  }

  const handleApply = () => {
    if (onChange) {
      onChange(tempValue)
    }
    if (controlledValue === undefined) {
      // Only set internal if uncontrolled
      setInternalValue(tempValue)
    }
    setIsOpen(false)
  }

  const handleCancel = () => {
    setTempValue(null) // Or reset to currentValue if needed
    setIsOpen(false)
  }

  const handlePresetSelect = (presetRange: [Date, Date]) => {
    if (onChange) {
      onChange(presetRange)
    }
    if (controlledValue === undefined) {
      setInternalValue(presetRange)
    }
    // Also update tempValue when a preset is selected, so CalendarGrid reflects it
    setTempValue(presetRange)
    // Optionally, update viewDate based on preset
    setCurrentViewDate(presetRange[0])
    setIsOpen(false) // Or configurable closeOnSelect
  }

  const handleDateSelect = (date: Date) => {
    if (mode === "single") {
      setTempValue(date)
      setCurrentViewDate(new Date(date.getFullYear(), date.getMonth(), 1))
    } else if (mode === "range") {
      const currentRangeTuple = tempValue as [Date, Date] | null // Explicitly type tempValue for range
      let newRange: [Date, Date | null] | null = null

      if (currentRangeTuple && currentRangeTuple[0] && currentRangeTuple[1]) {
        // Both dates are set, start a new range with the selected date
        newRange = [date, null]
      } else if (currentRangeTuple && currentRangeTuple[0]) {
        // First date is set, complete the range
        if (date < currentRangeTuple[0]) {
          newRange = [date, currentRangeTuple[0]]
        } else {
          newRange = [currentRangeTuple[0], date]
        }
      } else {
        // No dates are set, or only the second (which shouldn't happen), start new range
        newRange = [date, null]
      }
      setTempValue(newRange as DatePickerState["value"]) // Use DatePickerState["value"] for broader compatibility
      setCurrentViewDate(new Date(date.getFullYear(), date.getMonth(), 1))
    }
  }

  // Note: The div wrapper around DatePickerTrigger might be removed or replaced
  // depending on final styling and accessibility requirements.
  // For now, it provides a clickable area.
  return (
    <div>
      <DatePickerTrigger
        value={currentValue}
        mode={mode}
        isOpen={isOpen}
        onClick={() => handleOpenChange(!isOpen)}
        placeholder={placeholder}
        locale={locale}
        disabled={disabled}
      />
      {isOpen && (
        <DatePickerContent
          presets={presets}
          onSelectPreset={handlePresetSelect}
          onApply={handleApply}
          onCancel={handleCancel}
          // Props for CalendarGrid
          viewDate={currentViewDate}
          selectedDate={tempValue} // Pass tempValue as it reflects ongoing selection
          onDateSelect={handleDateSelect}
          minDate={minDate}
          maxDate={maxDate}
          locale={locale}
          selectionMode={mode === "range" ? "range" : "day"} // Map DatePicker mode to CalendarGrid selectionMode
          // TODO: Add onNavigate for month changes if needed
        />
      )}
    </div>
  )
}

export default DatePicker

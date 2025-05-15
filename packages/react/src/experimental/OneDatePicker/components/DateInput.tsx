import type {
  DateRangeComplete,
  GranularityDefinition,
} from "@/experimental/OneCalendar"
import { isValidDate } from "@/experimental/OneCalendar/utils"
import { Input } from "@/ui/input"
import { forwardRef, useEffect, useState } from "react"
import { DatePickerValue } from "../types"

type DateInputProps = {
  value: DatePickerValue | undefined
  disabled?: boolean
  className?: string
  onDateChange?: (date: DateRangeComplete) => void
  onClick?: () => void
  granularity?: GranularityDefinition
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (
    { value, onDateChange, disabled, className, granularity, onOpenChange },
    ref
  ) => {
    const [localValue, setLocalValue] = useState("")
    const [error, setError] = useState(false)

    useEffect(() => {
      if (granularity) {
        setLocalValue(granularity.toString(value?.value))
      }
    }, [value, granularity])

    const handleBlur = () => {
      const range = granularity?.toRange(granularity?.fromString(localValue))
      if (range && isValidDate(range?.from) && isValidDate(range?.to)) {
        onDateChange?.(range)
        onOpenChange?.(false)
      } else {
        setError(true)
      }
    }

    return (
      <Input
        ref={ref}
        placeholder="TODO component not ready, just a boilerplate"
        value={localValue}
        disabled={disabled}
        error={error}
        className={className}
        onFocus={() => onOpenChange?.(true)}
        onChange={(e) => setLocalValue(e.target.value)}
        onBlur={handleBlur}
      />
    )
  }
)

DateInput.displayName = "DateInput"
export { DateInput }

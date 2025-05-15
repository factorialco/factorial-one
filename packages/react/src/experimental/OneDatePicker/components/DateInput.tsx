import type {
  DateRange,
  GranularityDefinition,
} from "@/experimental/OneCalendar"
import { granularityDefinitions } from "@/experimental/OneCalendar/granularities"
import {
  isAfterOrEqual,
  isBeforeOrEqual,
} from "@/experimental/OneCalendar/utils"
import { useI18n } from "@/lib/providers/i18n"
import { Input } from "@/ui/input"
import { forwardRef, useEffect, useMemo, useState } from "react"
import { DatePickerValue } from "../types"

type DateInputProps = {
  value: DatePickerValue | undefined
  disabled?: boolean
  error?: boolean
  className?: string
  onDateChange?: (date: DateRange) => void
  onClick?: () => void
  granularity?: GranularityDefinition
  minDate?: Date
  maxDate?: Date
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const DateInput = forwardRef<HTMLDivElement, DateInputProps>(
  (
    {
      value,
      onDateChange,
      disabled,
      error,
      className,
      open,
      onOpenChange,
      granularity,
      ...props
    }: DateInputProps,
    ref
  ) => {
    const i18n = useI18n()

    const current = useMemo(() => {
      if (!value || !value.value) {
        return i18n.date.selectDate
      }
      const granularity = granularityDefinitions[value.granularity]
      return granularity.toString(value.value) ?? i18n.date.selectDate
    }, [value, i18n.date.selectDate])

    const handleNavigation = (date: DateRange | false) => {
      if (!date) {
        return
      }
      onDateChange?.(date)
    }

    const minDate = useMemo(() => {
      if (!props.minDate) {
        return undefined
      }
      return granularity?.toRange(props.minDate)?.from
    }, [props.minDate, granularity])

    const maxDate = useMemo(() => {
      if (!props.maxDate) {
        return undefined
      }
      return granularity?.toRange(props.maxDate)?.to
    }, [props.maxDate, granularity])

    const [currentDate, setCurrentDate] = useState<DateRange | null>(null)
    useEffect(() => {
      setCurrentDate(granularity?.toRange(new Date()) ?? null)

      const checkGoToCurrentIsAvailable = () => {
        const currentDate = granularity?.toRange(new Date()) ?? null
        if (
          currentDate &&
          isAfterOrEqual(currentDate.from, minDate) &&
          isBeforeOrEqual(currentDate.to || currentDate.from, maxDate)
        ) {
          setCurrentDate(currentDate)
        } else {
          setCurrentDate(null)
        }
      }
      const interval = setInterval(() => {
        checkGoToCurrentIsAvailable()
      }, 60000)
      checkGoToCurrentIsAvailable()

      return () => clearInterval(interval)
    }, [granularity, minDate, maxDate])

    return (
      <Input
        ref={ref}
        value={current}
        disabled={disabled}
        error={error}
        className={className}
        onFocus={() => onOpenChange?.(true)}
      />
    )
  }
)

// Add display name for better debugging
DateInput.displayName = "DatePickerTrigger"

export { DateInput }

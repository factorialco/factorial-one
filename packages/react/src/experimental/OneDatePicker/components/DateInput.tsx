import { Button } from "@/components/Actions/Button"
import { ButtonInternal } from "@/components/Actions/Button/internal"
import type {
  DateRange,
  GranularityDefinition,
} from "@/experimental/OneCalendar"
import { granularityDefinitions } from "@/experimental/OneCalendar/granularities"
import {
  isAfterOrEqual,
  isBeforeOrEqual,
} from "@/experimental/OneCalendar/utils"
import { ChevronLeft, ChevronRight } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { useEffect, useMemo, useState } from "react"
import { DatePickerValue } from "../types"
type DatePickerTrigger = {
  value: DatePickerValue | undefined
  disabled?: boolean
  error?: boolean
  className?: string
  highlighted?: boolean
  onDateChange?: (date: DateRange) => void
  onClick?: () => void
  navigation?: boolean
  granularity?: GranularityDefinition
  minDate?: Date
  maxDate?: Date
}

export const DatePickerTrigger = (props: DatePickerTrigger) => {
  const i18n = useI18n()

  const current = useMemo(() => {
    if (!props.value || !props.value.date) {
      return i18n.date.selectDate
    }
    const granularity = granularityDefinitions[props.value.granularity]
    return granularity.toString(props.value.date) ?? i18n.date.selectDate
  }, [props.value, i18n.date.selectDate])

  const handleNavigation = (date: DateRange | false) => {
    if (!date) {
      return
    }
    props.onDateChange?.(date)
  }

  const [currentDate, setCurrentDate] = useState<DateRange | null>(null)
  useEffect(() => {
    setCurrentDate(props.granularity?.toRange(new Date()) ?? null)

    const interval = setInterval(() => {
      console.log("interval")
      const currentDate = props.granularity?.toRange(new Date()) ?? null
      if (
        currentDate &&
        isAfterOrEqual(currentDate.from, props.minDate) &&
        isBeforeOrEqual(currentDate.to || currentDate.from, props.maxDate)
      ) {
        setCurrentDate(currentDate)
      }
      setCurrentDate(null)
    }, 36000)

    return () => clearInterval(interval)
  }, [props.granularity, props.minDate, props.maxDate])

  const nextPrev = props.value?.date
    ? props.granularity?.getPrevNext(props.value?.date, {
        min: props.minDate,
        max: props.maxDate,
      })
    : undefined

  const handleClickCurrentDate = () => {
    // Recalculate the current date based on the granularity
    const currentDate = props.granularity?.toRange(new Date())
    if (!currentDate) {
      return
    }
    props.onDateChange?.(currentDate)
  }

  return (
    <div
      className={cn(
        "flex appearance-none rounded-md border-0 bg-f1-background px-1 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary hover:ring-f1-border-hover",
        "[%>*] py-1",
        focusRing("focus:ring-f1-border-hover"),
        props.disabled &&
          "cursor-not-allowed bg-f1-background-secondary opacity-50",
        props.error && "ring-f1-border-critical-bold",
        props.className
      )}
    >
      {props.navigation && (
        <Button
          size="sm"
          variant="ghost"
          icon={ChevronLeft}
          label="Previous"
          hideLabel
          disabled={!nextPrev?.prev}
          onClick={() => handleNavigation(nextPrev?.prev ?? false)}
        />
      )}
      <ButtonInternal
        size="sm"
        variant="ghost"
        label={current}
        onClick={props.onClick}
        disabled={props.disabled}
        className={cn(props.highlighted && "bg-f1-background-secondary-hover")}
      />
      {props.navigation && (
        <Button
          variant="ghost"
          icon={ChevronRight}
          label="Next"
          hideLabel
          size="sm"
          disabled={!nextPrev?.next}
          onClick={() => handleNavigation(nextPrev?.next ?? false)}
        />
      )}
      <div className="border-l-solid flex-1 border-[#f00]">
        {currentDate && (
          <Button
            size="sm"
            variant="ghost"
            label={
              i18n.date.granularities[props.value?.granularity ?? "day"]
                .currentDate
            }
            onClick={handleClickCurrentDate}
          />
        )}
      </div>
    </div>
  )
}

import { granularityDefinitions } from "@/experimental/OneCalendar/granularities"
import { cn, focusRing } from "@/lib/utils"
import { useMemo } from "react"
import { DatePickerValue } from "../types"

type DatePickerTrigger = {
  value: DatePickerValue | undefined
  disabled?: boolean
  error?: boolean
  className?: string
}

export const DatePickerTrigger = (props: DatePickerTrigger) => {
  const current = useMemo(() => {
    if (!props.value) {
      return "Select Date [TODO i18n]"
    }
    const granularity = granularityDefinitions[props.value.granularity]
    if (props.value.date) {
      return granularity.toString(props.value.date)
    }
    return "Select Date [TODO i18n]"
  }, [props.value])

  return (
    <div
      className={cn(
        "flex appearance-none rounded-md border-0 bg-f1-background p-1 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary hover:ring-f1-border-hover",
        focusRing("focus:ring-f1-border-hover"),
        props.disabled &&
          "cursor-not-allowed bg-f1-background-secondary opacity-50",
        props.error && "ring-f1-border-critical-bold",
        props.className
      )}
    >
      <div className="text-gray-500 text-md min-w-[88px] rounded-md px-2 py-1 text-f1-foreground hover:bg-f1-background-secondary-hover">
        {current}
      </div>
    </div>
  )
}

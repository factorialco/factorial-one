import { ChevronLeft, ChevronRight } from "@/icons/app"
import { Input } from "@/ui/input"

import { useCallback, useEffect, useMemo, useState } from "react"
import { Button } from "../../components/Actions/Button"
import { useI18n } from "../../lib/providers/i18n"
import {
  GranularityDefinition,
  GranularityDefinitionKey,
  granularityDefinitions,
  GranularityDefinitionSimple,
} from "./granularities/index"
import { CalendarMode, CalendarView, DateRange, DateRangeString } from "./types"
import { isValidDate, toDateRange } from "./utils"

export interface OneCalendarProps {
  mode: CalendarMode
  view: CalendarView
  onSelect?: (date: Date | DateRange | null) => void
  defaultMonth?: Date
  defaultSelected?: Date | DateRange | null
  showNavigation?: boolean
  showInput?: boolean
  minDate?: Date
  maxDate?: Date
}

export const getGranularitySimpleDefinition = (
  granularityKey: GranularityDefinitionKey
): GranularityDefinitionSimple => {
  const granularity = granularityDefinitions[granularityKey]
  if (!granularity) {
    throw new Error(
      `Granularity simple definition for view ${granularityKey} not found`
    )
  }
  return {
    toRangeString: granularity.toRangeString,
    toString: granularity.toString,
  }
}

export const getGranularityDefinition = (
  granularityKey: GranularityDefinitionKey
): GranularityDefinition => {
  const granularity = granularityDefinitions[granularityKey]
  if (!granularity) {
    throw new Error(`Granularity definition ${granularityKey} not found`)
  }
  return granularity
}

export function OneCalendar({
  mode = "single",
  view = "month",
  onSelect,
  defaultMonth = new Date(),
  defaultSelected = null,
  showNavigation = true,
  showInput = false,
  minDate,
  maxDate,
}: OneCalendarProps) {
  const i18n = useI18n()

  const [viewDate, setViewDate] = useState<Date>(defaultMonth)

  const [selected, setSelectedInternal] = useState<Date | DateRange | null>(
    defaultSelected
  )

  const [motionDirection, setMotionDirection] = useState(1)

  const granularity = useMemo(() => granularityDefinitions[view], [view])

  const setSelected = useCallback(
    (date: Date | DateRange | null) => {
      setSelectedInternal(date)

      // Set the input value
      setInputValue(granularity.toRangeString(date))

      const newViewDate = granularity.getViewDateFromDate(
        date instanceof Date ? date : date?.from || date?.to || new Date()
      )

      if (newViewDate !== granularity.getViewDateFromDate(viewDate)) {
        setViewDate(newViewDate)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only needs to be rebuilt when the granularity changes
    [granularity]
  )

  useEffect(() => {
    setSelected(defaultSelected)
  }, [defaultSelected, setSelected])

  useEffect(() => {
    // setSelected(defaultSelected)
  }, [defaultSelected, setSelected])

  // Handle ui view navigation
  const navigate = (direction: -1 | 1) => {
    const newDate = granularity.navigateUIView(viewDate, direction)
    setMotionDirection(direction)
    setViewDate(newDate)
  }

  // Get header label
  const getHeaderLabel = () => granularity.label(viewDate)

  // Handle selection of a date
  const handleSelect = (date: Date | DateRange | null) => {
    if (!date) return

    date = granularity.toRange(date)

    setSelected(date)
    onSelect?.(date)
  }

  const [inputValue, setInputValue] = useState<DateRangeString>({
    from: "",
    to: "",
  })

  const [inputError, setInputError] = useState<{
    from: boolean
    to: boolean
  }>({
    from: false,
    to: false,
  })

  const handleInputChange = (input: "from" | "to") => {
    setSelectFromInput(input, inputValue)
  }

  const setSelectFromInput = (
    input: "from" | "to",
    inputValue: DateRangeString
  ) => {
    const newDate = granularity.fromString(inputValue)
    const error = newDate && newDate[input] && !isValidDate(newDate[input])
    setInputError((prev) => ({
      ...prev,
      [input]: error,
    }))

    if (!error) {
      setSelected(newDate)
    }
  }
  useEffect(() => {
    const range = toDateRange(selected)

    const { from, to } = granularity.toRangeString(
      range ? range : { from: new Date(), to: undefined }
    )
    setInputValue({
      from: from || "",
      to: to || "",
    })
  }, [granularity, selected])

  const handleInputNavigate = (input: "from" | "to", direction: -1 | 1) => {
    const currentDate = inputValue[input]
      ? granularity.fromString(inputValue[input])
      : undefined
    const newDate = currentDate
      ? granularity.navigate(currentDate.from, direction)
      : undefined

    if (isValidDate(newDate)) {
      const newInputValue = {
        ...inputValue,
        [input]: granularity.toRangeString(newDate).from,
      }
      setInputValue(newInputValue)
      setSelectFromInput(input, newInputValue)
    }
  }

  return (
    <div className="flex flex-col">
      {showInput && (
        <div className="mb-2 flex gap-2">
          <Input
            label={i18n.date.from}
            hideLabel
            error={!!inputError.from}
            value={inputValue.from}
            placeholder={mode === "range" ? i18n.date.from : i18n.date.date}
            onBlur={() => handleInputChange("from")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleInputChange("from")
              }
              if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                e.preventDefault()
                handleInputNavigate("from", e.key === "ArrowDown" ? -1 : 1)
              }
            }}
            onChange={(value) => setInputValue({ ...inputValue, from: value })}
          />
          {mode === "range" && (
            <Input
              label={i18n.date.to}
              hideLabel
              error={!!inputError.to}
              value={inputValue.to}
              placeholder={i18n.date.to}
              onBlur={() => handleInputChange("to")}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleInputChange("to")
                }
                if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                  e.preventDefault()
                  handleInputNavigate("to", e.key === "ArrowDown" ? -1 : 1)
                }
              }}
              onChange={(value) => setInputValue({ ...inputValue, to: value })}
            />
          )}
        </div>
      )}
      {showNavigation && (
        <div className="flex items-center justify-between pb-3">
          <div className="text-lg font-medium text-f1-foreground">
            {getHeaderLabel()}
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              label={i18n.navigation.previous}
              hideLabel
              round
              icon={ChevronLeft}
              size="sm"
            />
            <Button
              onClick={() => navigate(1)}
              variant="outline"
              label={i18n.navigation.next}
              hideLabel
              round
              icon={ChevronRight}
              size="sm"
            />
          </div>
        </div>
      )}
      <div className="relative">
        {granularity.render({
          mode,
          selected,
          onSelect: handleSelect,
          month: viewDate,
          onMonthChange: setViewDate,
          motionDirection,
          setViewDate,
          viewDate,
          minDate,
          maxDate,
        })}
      </div>
    </div>
  )
}

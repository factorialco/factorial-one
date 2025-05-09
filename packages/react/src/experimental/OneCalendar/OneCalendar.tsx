import { ChevronLeft, ChevronRight } from "@/icons/app"
import { Input } from "@/ui/input"

<<<<<<< HEAD
<<<<<<< HEAD
import { useCallback, useEffect, useMemo, useState } from "react"
=======
import { useEffect, useMemo, useState } from "react"
>>>>>>> 53909660 (feat: one-calendar manual dates input)
=======
import { useCallback, useEffect, useMemo, useState } from "react"
>>>>>>> 53972ab5 (feat: fromString)
import { Button } from "../../components/Actions/Button"
import { useI18n } from "../../lib/providers/i18n"
import {
  granularityDefinitions,
  GranularityDefinitionSimple,
} from "./granularities"
<<<<<<< HEAD
<<<<<<< HEAD
import {
  CalendarMode,
  CalendarView,
  DateRange,
  DateRangeError,
  DateRangeString,
} from "./types"
import { isValidDate, toDateRange } from "./utils"
=======
import { CalendarMode, CalendarView, DateRange } from "./types"
>>>>>>> 53909660 (feat: one-calendar manual dates input)
=======
import { CalendarMode, CalendarView, DateRange, DateRangeString } from "./types"
import { isValidDate, toDateRange } from "./utils"
>>>>>>> 53972ab5 (feat: fromString)

export interface OneCalendarProps {
  mode: CalendarMode
  view: CalendarView
  onSelect?: (date: Date | DateRange | null) => void
  defaultMonth?: Date
  defaultSelected?: Date | DateRange | null
  showNavigation?: boolean
  showInput?: boolean
}

<<<<<<< HEAD
export const getGranularitySimpleDefinition = (
=======
export const getGranularityDefinition = (
>>>>>>> 53909660 (feat: one-calendar manual dates input)
  view: CalendarView
): GranularityDefinitionSimple => {
  const granularity = granularityDefinitions[view]
  if (!granularity) {
    throw new Error(`Granularity definition for view ${view} not found`)
  }
  return {
    toRangeString: granularity.toRangeString,
  }
}

export function OneCalendar({
  mode = "single",
  view = "month",
  onSelect,
  defaultMonth = new Date(),
  defaultSelected = null,
  showNavigation = true,
  showInput = false,
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
<<<<<<< HEAD
=======

      // Set the input value
>>>>>>> 53972ab5 (feat: fromString)
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

<<<<<<< HEAD
=======
  useEffect(() => {
    // setSelected(defaultSelected)
  }, [defaultSelected, setSelected])

>>>>>>> 53972ab5 (feat: fromString)
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 53972ab5 (feat: fromString)
  const [inputValue, setInputValue] = useState<DateRangeString>({
    from: "",
    to: "",
  })
<<<<<<< HEAD

  const [inputError, setInputError] = useState<DateRangeError>({
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

  const handleInputKeyDown = (
    input: "from" | "to",
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleInputChange(input)
    }
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault()
      handleInputNavigate(input, e.key === "ArrowDown" ? -1 : 1)
    }
  }
=======
  const dateString = useMemo(() => {
    if (!selected) return ["", ""]
    return granularity.toStringRange(selected)
  }, [selected, granularity])
>>>>>>> 53909660 (feat: one-calendar manual dates input)

  console.log("test")
=======
>>>>>>> 53972ab5 (feat: fromString)

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
            error={!!inputError.from}
<<<<<<< HEAD
<<<<<<< HEAD
            value={inputValue.from}
            placeholder={mode === "range" ? i18n.date.from : i18n.date.date}
            onBlur={() => handleInputChange("from")}
            onKeyDown={(e) => handleInputKeyDown("from", e)}
            onChange={(e) =>
              setInputValue({ ...inputValue, from: e.target.value })
            }
=======
            value={dateString[0]}
            onBlur={(e) => handleInputChange("from", e.target.value)}
            onChange={(e) => console.log("from", e.target.value)}
>>>>>>> 53909660 (feat: one-calendar manual dates input)
=======
            value={inputValue.from}
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
            onChange={(e) =>
              setInputValue({ ...inputValue, from: e.target.value })
            }
>>>>>>> 53972ab5 (feat: fromString)
          />
          {mode === "range" && (
            <Input
              error={!!inputError.to}
<<<<<<< HEAD
<<<<<<< HEAD
              value={inputValue.to}
              placeholder={i18n.date.to}
              onBlur={() => handleInputChange("to")}
              onKeyDown={(e) => handleInputKeyDown("to", e)}
              onChange={(e) =>
                setInputValue({ ...inputValue, to: e.target.value })
              }
=======
              value={dateString[1]}
              onBlur={(e) => handleInputChange("to", e.target.value)}
              onChange={(e) => console.log("to", e.target.value)}
>>>>>>> 53909660 (feat: one-calendar manual dates input)
=======
              value={inputValue.to}
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
              onChange={(e) =>
                setInputValue({ ...inputValue, to: e.target.value })
              }
>>>>>>> 53972ab5 (feat: fromString)
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
        })}
      </div>
    </div>
  )
}

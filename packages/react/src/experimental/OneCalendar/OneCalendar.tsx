import { ChevronLeft, ChevronRight } from "@/icons/app"
import { Input } from "@/ui/input"

import { useEffect, useMemo, useState } from "react"
import { Button } from "../../components/Actions/Button"
import { useI18n } from "../../lib/providers/i18n"
import {
  granularityDefinitions,
  GranularityDefinitionSimple,
} from "./granularities"
import { CalendarMode, CalendarView, DateRange } from "./types"

export interface OneCalendarProps {
  mode: CalendarMode
  view: CalendarView
  onSelect?: (date: Date | DateRange | null) => void
  defaultMonth?: Date
  defaultSelected?: Date | DateRange | null
  showNavigation?: boolean
  showInput?: boolean
}

export const getGranularityDefinition = (
  view: CalendarView
): GranularityDefinitionSimple => {
  const granularity = granularityDefinitions[view]
  if (!granularity) {
    throw new Error(`Granularity definition for view ${view} not found`)
  }
  return {
    toString: granularity.toString,
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

  const [selected, setSelected] = useState<Date | DateRange | null>(
    defaultSelected
  )

  useEffect(() => {
    setSelected(defaultSelected)
  }, [defaultSelected, setSelected])

  const [motionDirection, setMotionDirection] = useState(1)

  const granularity = granularityDefinitions[view]

  // Handle navigation
  const navigate = (direction: -1 | 1) => {
    const newDate = granularity.navigate(viewDate, direction)
    setMotionDirection(direction)
    setViewDate(newDate)
  }

  // Get header label
  const getHeaderLabel = () => granularity.label(viewDate)

  // Handle selection of a date
  const handleSelect = (date: Date | DateRange | null) => {
    if (!date) return

    setSelected(date)
    onSelect?.(date)
  }

  const dateString = useMemo(() => {
    if (!selected) return ["", ""]
    return granularity.toStringRange(selected)
  }, [selected, granularity])

  console.log("test")

  const [inputError, setInputError] = useState<{
    from: boolean
    to: boolean
  }>({
    from: false,
    to: false,
  })

  const handleInputChange = (input: "from" | "to", value: string) => {
    const newDate = granularity.fromString([value, value])
    console.log("newDate", newDate)
    if (newDate instanceof Error) {
      setInputError((prev) => ({
        ...prev,
        [input]: newDate.message,
      }))
      return
    }
    setSelected(newDate)
  }

  return (
    <div className="flex flex-col">
      {showInput && (
        <div className="mb-2 flex gap-2">
          <Input
            error={!!inputError.from}
            value={dateString[0]}
            onBlur={(e) => handleInputChange("from", e.target.value)}
            onChange={(e) => console.log("from", e.target.value)}
          />
          {mode === "range" && (
            <Input
              error={!!inputError.to}
              value={dateString[1]}
              onBlur={(e) => handleInputChange("to", e.target.value)}
              onChange={(e) => console.log("to", e.target.value)}
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

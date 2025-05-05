import { ChevronLeft, ChevronRight } from "@/icons/app"
import { Input } from "@/ui/input"

import { ReactNode, useEffect, useMemo, useState } from "react"
import { Button } from "../../components/Actions/Button"
import { useI18n } from "../../lib/providers/i18n"
import { granularityDefinitions } from "./granularities"
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

export interface GranularityDefinition {
  label: (viewDate: Date) => ReactNode
  toString: (date: Date | DateRange | undefined | null) => string
  navigate: (viewDate: Date, direction: -1 | 1) => Date
  render: (renderProps: {
    mode: CalendarMode
    selected: Date | DateRange | null
    onSelect: (date: Date | DateRange | null) => void
    month: Date
    onMonthChange: (date: Date) => void
    motionDirection: number
    setViewDate: (date: Date) => void
    viewDate: Date
  }) => ReactNode
}

export type GranularityDefinitionSimple = Pick<
  GranularityDefinition,
  "toString"
>

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
    if (!selected) return ""
    return granularity.toString(selected)
  }, [selected, granularity])

  return (
    <div className="flex flex-col">
      {showInput && (
        <div className="mb-2">
          <Input value={dateString} disabled />
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

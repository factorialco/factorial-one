import { ChevronLeft, ChevronRight } from "@/icons/app"
import NumberFlow from "@number-flow/react"
import { useState } from "react"
import { Button } from "../../components/Actions/Button"
import { useI18n } from "../../lib/providers/i18n"
import { CalendarMode, CalendarView, DateRange } from "./types"
import { DayView } from "./views/day"
import { HalfYearView } from "./views/halfyear"
import { MonthView } from "./views/month"
import { QuarterView } from "./views/quarter"
import { WeekView } from "./views/week"
import { YearView } from "./views/year"
export interface OneCalendarProps {
  mode: CalendarMode
  view: CalendarView
  onSelect?: (date: Date | DateRange | null) => void
  defaultMonth?: Date
  defaultSelected?: Date | DateRange | null
  showNavigation?: boolean
}

export function OneCalendar({
  mode = "single",
  view = "month",
  onSelect,
  defaultMonth = new Date(),
  defaultSelected = null,
  showNavigation = true,
}: OneCalendarProps) {
  const i18n = useI18n()

  const [viewDate, setViewDate] = useState<Date>(defaultMonth)
  const [selected, setSelected] = useState<Date | DateRange | null>(
    defaultSelected
  )

  const [motionDirection, setMotionDirection] = useState(1)

  // Handle navigation
  const navigate = (direction: -1 | 1) => {
    const newDate = new Date(viewDate)

    if (view === "day" || view === "week") {
      newDate.setMonth(newDate.getMonth() + direction)
    }

    if (view === "month") {
      newDate.setFullYear(newDate.getFullYear() + direction)
    }

    if (view === "quarter") {
      newDate.setFullYear(newDate.getFullYear() + direction * 5)
    }

    if (view === "halfyear") {
      newDate.setFullYear(newDate.getFullYear() + direction * 5)
    }

    if (view === "year") {
      newDate.setFullYear(newDate.getFullYear() + direction * 10)
    }

    setMotionDirection(direction)
    setViewDate(newDate)
  }

  // Get header label
  const getHeaderLabel = () => {
    if (view === "day" || view === "week") {
      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
      }).format(viewDate)
    }

    if (view === "month") {
      return (
        <NumberFlow
          format={{
            useGrouping: false,
            maximumFractionDigits: 0,
          }}
          spinTiming={{
            duration: 150,
          }}
          value={viewDate.getFullYear()}
        />
      )
    }

    if (view === "quarter") {
      const baseYear = Math.floor(viewDate.getFullYear() / 5) * 5
      const endYear = baseYear + 4
      return `${baseYear}  -  ${endYear}`
    }

    if (view === "halfyear") {
      const baseYear = Math.floor(viewDate.getFullYear() / 5) * 5
      const endYear = baseYear + 4
      return `${baseYear}  -  ${endYear}`
    }

    if (view === "year") {
      const startYear = viewDate.getFullYear() - (viewDate.getFullYear() % 10)
      const endYear = startYear + 9

      return `${startYear}  -  ${endYear}`
    }
  }

  // Handle selection of a date
  const handleSelect = (date: Date | DateRange | null) => {
    if (!date) return

    setSelected(date)
    onSelect?.(date)
  }

  return (
    <div className="flex flex-col">
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
        {view === "day" && (
          <DayView
            mode={mode}
            selected={selected}
            onSelect={handleSelect}
            month={viewDate}
            onMonthChange={setViewDate}
            motionDirection={motionDirection}
          />
        )}

        {view === "week" && (
          <WeekView
            selected={selected}
            onSelect={handleSelect}
            month={viewDate}
            onMonthChange={setViewDate}
            motionDirection={motionDirection}
          />
        )}

        {view === "month" && (
          <MonthView
            mode={mode}
            year={viewDate.getFullYear()}
            selected={selected}
            onSelect={handleSelect}
            motionDirection={motionDirection}
          />
        )}

        {view === "quarter" && (
          <QuarterView
            mode={mode}
            year={viewDate.getFullYear()}
            selected={selected}
            onSelect={handleSelect}
            motionDirection={motionDirection}
          />
        )}

        {view === "halfyear" && (
          <HalfYearView
            mode={mode}
            year={viewDate.getFullYear()}
            selected={selected}
            onSelect={handleSelect}
            motionDirection={motionDirection}
          />
        )}

        {view === "year" && (
          <YearView
            mode={mode}
            decade={viewDate.getFullYear()}
            selected={selected}
            onSelect={handleSelect}
            motionDirection={motionDirection}
          />
        )}
      </div>
    </div>
  )
}

import { ChevronLeft, ChevronRight } from "@/icons/app"
import { useI18n } from "@/lib/i18n-provider"
import { useState } from "react"
import { Button } from "../../components/Actions/Button"
import { CalendarMode, CalendarView, DateRange } from "./types"
import { MonthView } from "./views/month"
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

  // Handle navigation
  const handlePrevious = () => {
    const newDate = new Date(viewDate)

    if (view === "month") {
      newDate.setFullYear(newDate.getFullYear() - 1)
    }

    if (view === "year") {
      newDate.setFullYear(newDate.getFullYear() - 10)
    }

    setViewDate(newDate)
  }

  const handleNext = () => {
    const newDate = new Date(viewDate)

    if (view === "month") {
      newDate.setFullYear(newDate.getFullYear() + 1)
    }

    if (view === "year") {
      newDate.setFullYear(newDate.getFullYear() + 10)
    }

    setViewDate(newDate)
  }

  // Get header label
  const getHeaderLabel = () => {
    if (view === "month") {
      return viewDate.getFullYear().toString()
    }

    if (view === "year") {
      const startYear = viewDate.getFullYear() - (viewDate.getFullYear() % 10)
      const endYear = startYear + 9

      return `${startYear}-${endYear}`
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
              onClick={handlePrevious}
              variant="outline"
              label={i18n.navigation.previous}
              hideLabel
              round
              icon={ChevronLeft}
              size="sm"
            />
            <Button
              onClick={handleNext}
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
      <div>
        {view === "day" && <div>Day calendar</div>}
        {view === "month" && (
          <MonthView
            mode={mode}
            year={viewDate.getFullYear()}
            selected={selected}
            onSelect={handleSelect}
          />
        )}
        {view === "year" && (
          <YearView
            mode={mode}
            decade={viewDate.getFullYear()}
            selected={selected}
            onSelect={handleSelect}
          />
        )}
      </div>
    </div>
  )
}

import { ChevronLeft, ChevronRight } from "@/icons/app"
import { useI18n } from "@/lib/i18n-provider"
import { useState } from "react"
import { Button } from "../../components/Actions/Button"
import { CalendarMode, CalendarView, DateRange } from "./types"
import { MonthView } from "./views/month"

export interface OneCalendarProps {
  mode: CalendarMode
  view: CalendarView
  onSelect?: (date: Date | DateRange | null) => void
  fromDate?: Date
  toDate?: Date
  defaultMonth?: Date
  defaultSelected?: Date | DateRange | null
  showNavigation?: boolean
}

export function OneCalendar({
  mode = "single",
  view = "month",
  onSelect,
  fromDate,
  toDate,
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

    setViewDate(newDate)
  }

  const handleNext = () => {
    const newDate = new Date(viewDate)

    if (view === "month") {
      newDate.setFullYear(newDate.getFullYear() + 1)
    }

    setViewDate(newDate)
  }

  // Get header label
  const getHeaderLabel = () => {
    if (view === "month") {
      return viewDate.getFullYear().toString()
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
            fromDate={fromDate}
            toDate={toDate}
          />
        )}
        {view === "year" && <div>Year calendar</div>}
      </div>
    </div>
  )
}

import { cn, focusRing } from "@/lib/utils"
import { isAfter, isBefore, isWithinInterval } from "date-fns"
import { AnimatePresence, motion } from "framer-motion"
import { CalendarMode, DateRange } from "../types"

const getQuarterFromMonth = (month: number): number => {
  return Math.floor(month / 3) + 1
}

const getQuarterMonths = (quarter: number): number[] =>
  quarter >= 1 && quarter <= 4
    ? [0, 1, 2].map((n) => n + (quarter - 1) * 3)
    : []

const getQuarterRange = (quarter: number, year: number): DateRange => {
  const months = getQuarterMonths(quarter)
  const firstMonth = months[0]
  const lastMonth = months[months.length - 1]

  const from = new Date(year, firstMonth, 1)
  const to = new Date(year, lastMonth + 1, 0)

  return { from, to }
}

interface QuarterViewProps {
  mode: CalendarMode
  selected: Date | DateRange | null
  onSelect?: (date: Date | DateRange) => void
  year: number
  fromDate?: Date
  toDate?: Date
  motionDirection?: number
}

export const QuarterView = ({
  mode,
  selected,
  onSelect,
  year,
  fromDate,
  toDate,
  motionDirection = 1,
}: QuarterViewProps) => {
  const quarters = [1, 2, 3, 4]
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentQuarter = getQuarterFromMonth(today.getMonth())

  // Check if a value is a DateRange
  const isDateRange = (value: unknown): value is DateRange => {
    return Boolean(
      value && typeof value === "object" && ("from" in value || "to" in value)
    )
  }

  // Handle click on a quarter
  const handleQuarterClick = (quarter: number) => {
    const quarterRange = getQuarterRange(quarter, year)

    if (mode === "single") {
      onSelect?.(quarterRange.from)
    } else if (mode === "range") {
      if (!selected || !isDateRange(selected)) {
        onSelect?.({
          from: quarterRange.from,
          to: undefined,
        })
      } else if (selected && selected.from && !selected.to) {
        const fromDate = selected.from
        const fromQuarter = getQuarterFromMonth(fromDate.getMonth())
        const fromYear = fromDate.getFullYear()

        if (fromQuarter === quarter && fromYear === year) {
          onSelect?.({
            from: quarterRange.from,
            to: quarterRange.to,
          })
        } else {
          const fromQuarterRange = getQuarterRange(fromQuarter, fromYear)

          const start = isBefore(fromQuarterRange.from, quarterRange.from)
            ? quarterRange.from
            : fromQuarterRange.from

          const end = isAfter(fromQuarterRange.to!, quarterRange.to!)
            ? fromQuarterRange.to
            : quarterRange.to

          onSelect?.({
            from: start,
            to: end,
          })
        }
      } else {
        onSelect?.({
          from: quarterRange.from,
          to: undefined,
        })
      }
    }
  }

  // Check if a quarter is selected
  const isQuarterSelected = (quarter: number): boolean => {
    if (!selected) return false

    const quarterRange = getQuarterRange(quarter, year)

    if (!isDateRange(selected)) {
      // Single date selection
      const selectedMonth = selected.getMonth()
      const selectedQuarter = getQuarterFromMonth(selectedMonth)

      return selectedQuarter === quarter && selected.getFullYear() === year
    } else {
      // Range selection
      const from = selected.from
      const to = selected.to

      if (from && to) {
        // Check if any part of the quarter is within the selected range
        return (
          isWithinInterval(quarterRange.from, { start: from, end: to }) ||
          isWithinInterval(quarterRange.to!, { start: from, end: to }) ||
          (isBefore(quarterRange.from, from) && isAfter(quarterRange.to!, to))
        )
      } else if (from) {
        // Check if the from date is in this quarter
        const fromQuarter = getQuarterFromMonth(from.getMonth())
        return fromQuarter === quarter && from.getFullYear() === year
      }
    }

    return false
  }

  // Check if a quarter is the current quarter
  const isCurrentQuarter = (quarter: number): boolean => {
    return quarter === currentQuarter && year === currentYear
  }

  // Check if a quarter is the start of a range
  const isRangeStart = (quarter: number): boolean => {
    if (!selected || !isDateRange(selected) || !selected.from) return false

    const from = selected.from
    const fromQuarter = getQuarterFromMonth(from.getMonth())
    return fromQuarter === quarter && from.getFullYear() === year
  }

  // Check if a quarter is the end of a range
  const isRangeEnd = (quarter: number): boolean => {
    if (!selected || !isDateRange(selected) || !selected.to) return false

    const to = selected.to
    const toQuarter = getQuarterFromMonth(to.getMonth())
    return toQuarter === quarter && to.getFullYear() === year
  }

  const motionVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction === 1 ? 40 : -40,
    }),
    visible: { opacity: 1, x: 0 },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction === 1 ? -40 : 40,
    }),
  }

  return (
    <AnimatePresence mode="popLayout" initial={false} custom={motionDirection}>
      <motion.div
        key={year}
        className="grid grid-cols-2 gap-3"
        custom={motionDirection}
        variants={motionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.15, ease: [0.455, 0.03, 0.515, 0.955] }}
      >
        {quarters.map((quarter) => {
          const isSelected = isQuarterSelected(quarter)
          const isCurrent = isCurrentQuarter(quarter)
          const isStart = isRangeStart(quarter)
          const isEnd = isRangeEnd(quarter)

          return (
            <button
              key={quarter}
              onClick={() => handleQuarterClick(quarter)}
              className={cn(
                "relative isolate flex h-10 items-center justify-center rounded-md p-2",
                focusRing(),
                isSelected && "bg-f1-background-selected-bold",
                //isCurrent && "bg-f1-background-current",
                isStart && "bg-f1-background-selected-bold",
                isEnd && "bg-f1-background-selected-bold"
              )}
            >
              Q{quarter}
            </button>
          )
        })}
      </motion.div>
    </AnimatePresence>
  )
}

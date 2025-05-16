import { Calendar } from "@/ui/calendar"
import { endOfWeek, startOfWeek } from "date-fns"
import { AnimatePresence, motion } from "framer-motion"
import {
  DayClickEventHandler,
  DateRange as DayPickerDateRange,
} from "react-day-picker"
import { useL10n } from "../../../../lib/providers/l10n"
import { DateRange } from "../../types"
import { getLocale } from "../../utils"

interface WeekViewProps {
  selected?: Date | DateRange | null
  onSelect?: (date: Date | DateRange | null) => void
  month: Date
  onMonthChange?: (month: Date) => void
  motionDirection?: number
}

export function WeekView({
  selected,
  onSelect,
  month,
  onMonthChange,
  motionDirection = 1,
}: WeekViewProps) {
  const { locale } = useL10n()

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

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    if (modifiers.selected) {
      onSelect?.(null)
      return
    }

    const weekStart = startOfWeek(day, { weekStartsOn: 1 })
    const weekEnd = endOfWeek(day, { weekStartsOn: 1 })

    onSelect?.({
      from: weekStart,
      to: weekEnd,
    })
  }

  const selectedValue: DayPickerDateRange | undefined =
    selected instanceof Date
      ? {
          from: startOfWeek(selected, { weekStartsOn: 1 }),
          to: endOfWeek(selected, { weekStartsOn: 1 }),
        }
      : selected || undefined

  return (
    <AnimatePresence mode="popLayout" initial={false} custom={motionDirection}>
      <motion.div
        key={month.toISOString()}
        variants={motionVariants}
        custom={motionDirection}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.15, ease: [0.455, 0.03, 0.515, 0.955] }}
      >
        <Calendar
          key={month.toISOString()}
          mode="range"
          selected={selectedValue}
          onDayClick={handleDayClick}
          month={month}
          onMonthChange={onMonthChange}
          locale={getLocale(locale)}
          weekStartsOn={1}
          showOutsideDays
          showWeekNumber
        />
      </motion.div>
    </AnimatePresence>
  )
}

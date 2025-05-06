import NumberFlow from "@number-flow/react"
import { endOfISOWeek, parse, startOfISOWeek } from "date-fns"
import { ReactNode } from "react"
import { CalendarMode, CalendarView, DateRange } from "./types"
import { formatDateRange, toDateRange } from "./utils"
import { DayView } from "./views/day"
import { HalfYearView } from "./views/halfyear"
import { MonthView } from "./views/month"
import { QuarterView } from "./views/quarter"
import { WeekView } from "./views/week"
import { YearView } from "./views/year"

export interface GranularityDefinition {
  label: (viewDate: Date) => ReactNode
  toString: (date: Date | DateRange | undefined | null) => string
  toStringRange: (date: Date | DateRange | undefined | null) => [string, string]
  fromString: (dateStr: string | [string, string]) => DateRange | null | Error
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

export const granularityDefinitions: Record<
  CalendarView,
  GranularityDefinition
> = {
  day: {
    toString: (date) => formatDateRange(date, "dd/MM/yyyy"),
    toStringRange: (date) => formatDateRange(date, "dd/MM/yyyy"),
    fromString: (dateStr) => {
      const [fromStr, toStr] =
        typeof dateStr === "string" ? dateStr.split("-") : dateStr

      const parseDate = (dateStr: string) => {
        const trimmed = dateStr.trim()

        const [day, month, year] = trimmed.split(/[/.-]/)
        const date = new Date(Number(year), Number(month) - 1, Number(day))
        if (isNaN(date.getTime())) {
          throw new Error("Invalid date format")
        }
        return date
      }

      try {
        const fromDate = parseDate(fromStr)
        const toDate = toStr ? parseDate(toStr) : undefined
        return { from: fromDate, to: toDate }
      } catch (error) {
        return error as Error
      }
    },
    navigate: (viewDate, direction) => {
      const newDate = new Date(viewDate)
      newDate.setMonth(newDate.getMonth() + direction)
      return newDate
    },
    label: (viewDate) => {
      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
      }).format(viewDate)
    },
    render: (renderProps) => {
      return (
        <DayView
          mode={renderProps.mode}
          selected={renderProps.selected}
          onSelect={renderProps.onSelect}
          month={renderProps.month}
          onMonthChange={renderProps.onMonthChange}
          motionDirection={renderProps.motionDirection}
        />
      )
    },
  },
  week: {
    toString: (date) => formatDateRange(date, "'W'I yyyy"),
    toStringRange: (date) => {
      const dateRange = toDateRange(date)
      if (!dateRange) {
        return ["", ""]
      }
      return [
        formatDateRange(dateRange.from, "'W'I yyyy"),
        formatDateRange(dateRange.to, "'W'I yyyy"),
      ]
    },
    fromString: (dateStr) => {
      const [fromStr, toStr] =
        typeof dateStr === "string" ? dateStr.split("-") : dateStr

      const parseDate = (dateStr: string) => {
        const trimmed = dateStr.trim()

        const [weekStr, yearStr] = trimmed.split(/\s+/)

        const year = isNaN(Number(yearStr))
          ? new Date().getFullYear()
          : +yearStr

        const week = Number(weekStr.replace(/[wW\s]/g, ""))
        return parse(`${week}`, "I", new Date().setFullYear(year))
      }

      try {
        const fromDate = startOfISOWeek(parseDate(fromStr))
        const toDate = endOfISOWeek(parseDate(toStr ? toStr : fromStr))
        console.log(fromDate, toDate)
        return { from: fromDate, to: toDate }
      } catch (error) {
        console.error(error)
        return error as Error
      }
    },
    navigate: (viewDate, direction) => {
      const newDate = new Date(viewDate)
      newDate.setMonth(newDate.getMonth() + direction)
      return newDate
    },
    label: (viewDate) => {
      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
      }).format(viewDate)
    },
    render: (renderProps) => {
      return (
        <WeekView
          selected={renderProps.selected}
          onSelect={renderProps.onSelect}
          month={renderProps.month}
          onMonthChange={renderProps.onMonthChange}
          motionDirection={renderProps.motionDirection}
        />
      )
    },
  },
  month: {
    toString: (date) => formatDateRange(date, "MM/yyyy"),
    navigate: (viewDate, direction) => {
      const newDate = new Date(viewDate)
      newDate.setFullYear(newDate.getFullYear() + direction)
      return newDate
    },
    label: (viewDate) => {
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
    },
    render: (renderProps) => {
      return (
        <MonthView
          mode={renderProps.mode}
          year={renderProps.viewDate.getFullYear()}
          selected={renderProps.selected}
          onSelect={renderProps.onSelect}
          motionDirection={renderProps.motionDirection}
        />
      )
    },
  },
  quarter: {
    toString: (date) => formatDateRange(date, "'Q'Q yyyy"),
    navigate: (viewDate, direction) => {
      const newDate = new Date(viewDate)
      newDate.setFullYear(newDate.getFullYear() + direction * 5)
      return newDate
    },
    label: (viewDate) => {
      const baseYear = Math.floor(viewDate.getFullYear() / 5) * 5
      const endYear = baseYear + 4
      return `${baseYear}  -  ${endYear}`
    },
    render: (renderProps) => {
      return (
        <QuarterView
          mode={renderProps.mode}
          year={renderProps.viewDate.getFullYear()}
          selected={renderProps.selected}
          onSelect={renderProps.onSelect}
          motionDirection={renderProps.motionDirection}
        />
      )
    },
  },
  halfyear: {
    toString: (date) => {
      const dateRange = toDateRange(date)
      if (!dateRange) {
        return "-"
      }

      const toHalfYear = (date: Date) => {
        const month = date.getMonth()
        const halfYear = Math.floor(month / 6)
        return `H${halfYear + 1} ${date.getFullYear()}`
      }

      return `${toHalfYear(dateRange.from)} ${
        dateRange.to ? `- ${toHalfYear(dateRange.to)}` : ""
      }`
    },
    navigate: (viewDate, direction) => {
      const newDate = new Date(viewDate)
      newDate.setFullYear(newDate.getFullYear() + direction * 5)
      return newDate
    },
    label: (viewDate) => {
      const baseYear = Math.floor(viewDate.getFullYear() / 5) * 5
      const endYear = baseYear + 4
      return `${baseYear}  -  ${endYear}`
    },
    render: (renderProps) => {
      return (
        <HalfYearView
          mode={renderProps.mode}
          year={renderProps.viewDate.getFullYear()}
          selected={renderProps.selected}
          onSelect={renderProps.onSelect}
          motionDirection={renderProps.motionDirection}
        />
      )
    },
  },
  year: {
    toString: (date) => formatDateRange(date, "yyyy"),
    navigate: (viewDate, direction) => {
      const newDate = new Date(viewDate)
      newDate.setFullYear(newDate.getFullYear() + direction * 10)
      return newDate
    },
    label: (viewDate) => {
      const startYear = viewDate.getFullYear() - (viewDate.getFullYear() % 10)
      const endYear = startYear + 9

      return `${startYear}  -  ${endYear}`
    },
    render: (renderProps) => {
      return (
        <YearView
          mode={renderProps.mode}
          decade={renderProps.viewDate.getFullYear()}
          selected={renderProps.selected}
          onSelect={renderProps.onSelect}
          motionDirection={renderProps.motionDirection}
        />
      )
    },
  },
}

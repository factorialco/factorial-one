import NumberFlow from "@number-flow/react"
import { GranularityDefinitionKey } from "./granularities"
import { GranularityDefinition } from "./OneCalendar"
import { formatDateRange, toDateRange } from "./utils"
import { DayView } from "./views/day"
import { HalfYearView } from "./views/halfyear"
import { MonthView } from "./views/month"
import { QuarterView } from "./views/quarter"
import { WeekView } from "./views/week"
import { YearView } from "./views/year"

export const granularityDefinitions: Record<
  GranularityDefinitionKey,
  GranularityDefinition
> = {
  day: {
    toString: (date) => formatDateRange(date, "dd/MM/yyyy"),
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
          mode={renderProps.mode}
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

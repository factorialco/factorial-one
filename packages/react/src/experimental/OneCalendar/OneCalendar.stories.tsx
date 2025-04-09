import type { Meta, StoryObj } from "@storybook/react"
import { endOfMonth, endOfYear, startOfYear } from "date-fns"
import { useState } from "react"
import { OneCalendar } from "./OneCalendar"
import { DateRange } from "./types"

const meta = {
  title: "Calendar",
  component: OneCalendar,
  tags: ["autodocs"],
} satisfies Meta<typeof OneCalendar>

export default meta
type Story = StoryObj<typeof meta>

function SelectedDateDisplay({ range }: { range: DateRange }) {
  const formatDate = (date: Date) =>
    date.toLocaleDateString(undefined, {
      month: "long",
      year: "numeric",
    })

  return (
    <div className="mt-6 flex flex-col gap-1.5 rounded-md bg-f1-background-tertiary p-4">
      <h4>Selected</h4>
      <p className="text-sm text-f1-foreground">
        {formatDate(range.from)}
        {range.to && <> - {formatDate(range.to)}</>}
        <br />
        <span className="tabular-nums">
          ({range.from.toLocaleDateString()} - {range.to?.toLocaleDateString()})
        </span>
      </p>
    </div>
  )
}

export const MonthSingle: Story = {
  args: {
    mode: "single",
    view: "month",
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const now = new Date()
      const start = new Date(now.getFullYear(), now.getMonth(), 1)
      return {
        from: start,
        to: endOfMonth(start),
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) return
      if (date instanceof Date) return
      setSelectedRange(date)
    }

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const MonthRange: Story = {
  args: {
    mode: "range",
    view: "month",
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const now = new Date()
      const start = new Date(now.getFullYear(), now.getMonth(), 1)
      const end = new Date(now.getFullYear(), now.getMonth() + 4, 1)
      return {
        from: start,
        to: endOfMonth(end),
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) return
      if (date instanceof Date) return
      setSelectedRange(date)
    }

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const YearSingle: Story = {
  args: {
    mode: "single",
    view: "year",
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const now = new Date()
      return {
        from: startOfYear(now),
        to: endOfYear(now),
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) return
      if (date instanceof Date) return
      setSelectedRange(date)
    }

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const YearRange: Story = {
  args: {
    mode: "range",
    view: "year",
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const now = new Date()
      const start = startOfYear(now)
      const end = endOfYear(new Date(now.getFullYear() + 4, 0, 1))
      return {
        from: start,
        to: end,
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) return
      if (date instanceof Date) return
      setSelectedRange(date)
    }

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const DaySingle: Story = {
  args: {
    mode: "single",
    view: "day",
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const defaultDate = new Date()
      return {
        from: defaultDate,
        to: defaultDate,
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) return
      if (date instanceof Date) {
        setSelectedRange({
          from: date,
          to: date,
        })
        return
      }
      setSelectedRange(date)
    }

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange?.from}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

export const DayRange: Story = {
  args: {
    mode: "range",
    view: "day",
  },
  render: (args) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(() => {
      const start = new Date()
      const end = new Date(
        start.getFullYear(),
        start.getMonth(),
        start.getDate() + 5
      )
      return {
        from: start,
        to: end,
      }
    })

    const handleSelect = (date: Date | DateRange | null) => {
      if (!date) return
      if (date instanceof Date) return
      setSelectedRange(date)
    }

    return (
      <div className="mx-auto max-w-80">
        <OneCalendar
          {...args}
          defaultSelected={selectedRange}
          onSelect={handleSelect}
        />
        {selectedRange && <SelectedDateDisplay range={selectedRange} />}
      </div>
    )
  },
}

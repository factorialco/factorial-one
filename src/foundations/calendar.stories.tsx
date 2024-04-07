import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"

import { Calendar } from "./calendar"

const meta = {
  component: Calendar,
  parameters: {
    layout: "centered",
    a11y: {
      skipCi: true,
    },
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  render: () => {
    const [selectedDay, setSelectedDay] = useState<Date>()

    return (
      <Calendar
        mode="single"
        selected={selectedDay}
        onSelect={setSelectedDay}
      />
    )
  },
}

export const Multiple: Story = {
  render: () => {
    const initialDays: Date[] = []
    const [days, setDays] = useState<Date[] | undefined>(initialDays)

    const footer =
      days && days.length > 0 ? (
        <p className="mt-3 w-[252px] text-wrap text-sm text-secondary-foreground">
          You selected {days.length} day(s).
        </p>
      ) : (
        <p className="mt-3 w-[252px] text-wrap text-sm text-secondary-foreground">
          Please pick one or more days.
        </p>
      )

    return (
      <Calendar
        mode="multiple"
        min={1}
        selected={days}
        onSelect={setDays}
        footer={footer}
      />
    )
  },
}

export const Range: Story = {
  render: () => {
    const pastMonth = new Date(2024, 10, 15)
    const defaultSelected: DateRange = {
      from: pastMonth,
      to: addDays(pastMonth, 4),
    }
    const [range, setRange] = useState<DateRange | undefined>(defaultSelected)

    let footer = (
      <p className="mt-3 w-[252px] text-wrap text-sm text-secondary-foreground">
        Please pick the first day.
      </p>
    )
    if (range?.from) {
      if (!range.to) {
        footer = (
          <p className="mt-3 w-[252px] text-wrap text-sm text-secondary-foreground">
            {format(range.from, "PPP")}
          </p>
        )
      } else if (range.to) {
        footer = (
          <p className="mt-3 w-[252px] text-wrap text-sm text-secondary-foreground">
            {format(range.from, "PPP")} - {format(range.to, "PPP")}
          </p>
        )
      }
    }

    return (
      <Calendar
        id="test"
        mode="range"
        defaultMonth={pastMonth}
        selected={range}
        footer={footer}
        onSelect={setRange}
      />
    )
  },
}

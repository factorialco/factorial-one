import type { Meta, StoryObj } from "@storybook/react"
import { subDays } from "date-fns"
import { CalendarView, DateRange } from "../../OneCalendar/types"
import { OneDatePicker } from "../OneDatePicker"
import { predefinedPresets } from "../presets"
import { DatePickerValue } from "../types"

const meta = {
  title: "DatePicker",
  component: OneDatePicker,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof OneDatePicker>

export default meta
type Story = StoryObj<typeof meta>

const today = new Date()
const presets = [
  predefinedPresets.today,
  predefinedPresets.lastWeek,
  predefinedPresets.lastMonth,
  predefinedPresets.thisMonth,
  predefinedPresets.lastQuarter,
  predefinedPresets.lastYear,
  {
    label: "Last 7 days",
    granularity: "day" as CalendarView,
    value: {
      from: subDays(today, 7),
      to: today,
    } as DateRange,
  },
]

export const Single: Story = {
  args: {
    mode: "single",
    defaultValue: {
      granularity: "day",
    } as DatePickerValue,
    granularities: ["day", "week", "month"],
  },
}

export const Range: Story = {
  args: {
    mode: "range",
    defaultValue: {
      granularity: "month",
    } as DatePickerValue,
    granularities: ["day", "week", "month"],
  },
}

export const WithPresets: Story = {
  args: {
    mode: "range",
    defaultValue: {
      granularity: "month",
    } as DatePickerValue,
    granularities: ["day", "week", "month", "quarter"],
    presets,
  },
}

export const WeekView: Story = {
  args: {
    mode: "range",
    defaultValue: {
      granularity: "week",
    } as DatePickerValue,
    granularities: ["week"],
  },
}

export const QuarterView: Story = {
  args: {
    mode: "range",
    defaultValue: {
      granularity: "quarter",
    } as DatePickerValue,
    granularities: ["quarter"],
  },
}

export const HalfYearView: Story = {
  args: {
    mode: "range",
    defaultValue: {
      granularity: "halfyear",
    } as DatePickerValue,
    granularities: ["halfyear"],
  },
}

export const YearView: Story = {
  args: {
    mode: "range",
    defaultValue: {
      granularity: "year",
    } as DatePickerValue,
    granularities: ["year"],
  },
}

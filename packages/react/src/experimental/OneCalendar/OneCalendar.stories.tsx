import type { Meta, StoryObj } from "@storybook/react"
import { OneCalendar } from "./OneCalendar"

const meta = {
  title: "Calendar",
  component: OneCalendar,
  tags: ["autodocs"],
} satisfies Meta<typeof OneCalendar>

export default meta
type Story = StoryObj<typeof meta>

export const MonthSingle: Story = {
  args: {
    mode: "single",
    view: "month",
    defaultSelected: new Date(),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-96">
        <Story />
      </div>
    ),
  ],
}

export const MonthRange: Story = {
  args: {
    mode: "range",
    view: "month",
    defaultSelected: {
      from: new Date(),
      to: new Date(new Date().setMonth(new Date().getMonth() + 4)),
    },
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-96">
        <Story />
      </div>
    ),
  ],
}

export const YearSingle: Story = {
  args: {
    mode: "single",
    view: "year",
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-96">
        <Story />
      </div>
    ),
  ],
}

export const YearRange: Story = {
  args: {
    mode: "range",
    view: "year",
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-96">
        <Story />
      </div>
    ),
  ],
}

export const DayView: Story = {
  args: {
    mode: "single",
    view: "day",
    defaultMonth: new Date("2024-03-15"),
  },
}

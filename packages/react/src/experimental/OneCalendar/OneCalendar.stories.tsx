import type { Meta, StoryObj } from "@storybook/react"
import { OneCalendar } from "./OneCalendar"

const meta = {
  title: "Experimental/OneCalendar",
  component: OneCalendar,
  tags: ["autodocs"],
} satisfies Meta<typeof OneCalendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    mode: "single",
    view: "month",
    defaultMonth: new Date("2024-03-15"),
  },
}

export const YearView: Story = {
  args: {
    mode: "single",
    view: "year",
    defaultMonth: new Date("2024-03-15"),
  },
}

export const DayView: Story = {
  args: {
    mode: "single",
    view: "day",
    defaultMonth: new Date("2024-03-15"),
  },
}

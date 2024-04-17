import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { ComponentProps } from "react"

import { DayPicker } from "./day-picker"

const meta = {
  component: DayPicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    date: new Date(),
    onSelect: fn(),
  } satisfies ComponentProps<typeof DayPicker>,
} satisfies Meta<typeof DayPicker>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

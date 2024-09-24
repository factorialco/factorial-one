import type { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react"
import { Counter } from "."

const meta = {
  component: Counter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    value: 42,
    size: "base",
    type: "default",
  } satisfies ComponentProps<typeof Counter>,
} satisfies Meta<typeof Counter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

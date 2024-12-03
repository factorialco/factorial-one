import type { Meta, StoryObj } from "@storybook/react"

import { BalanceTag } from "."

const meta: Meta = {
  component: BalanceTag,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    text: "2% · 1.522,48 €",
    status: "positive",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const PositiveBalanceTag: Story = {}

export const NeutralBalanceTag: Story = {
  args: {
    status: "neutral",
  },
}

export const NegativeBalanceTag: Story = {
  args: {
    status: "negative",
  },
}

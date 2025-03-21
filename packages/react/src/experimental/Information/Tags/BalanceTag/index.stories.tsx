import type { Meta, StoryObj } from "@storybook/react"

import { BalanceTag } from "./index"

const meta: Meta = {
  component: BalanceTag,
  title: "Tag/BalanceTag",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
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
    text: "0% · 0,00 €",
  },
}

export const NegativeBalanceTag: Story = {
  args: {
    status: "negative",
    text: "-17% · -1.522,48 €",
  },
}

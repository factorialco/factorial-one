import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0TagBalance } from "../"
import { statuses } from "../types"

const meta: Meta = {
  component: F0TagBalance,
  title: "Tags/TagBalance",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    percentage: 2,
    amount: 1522.48,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const PositiveBalanceTag: Story = {}

export const NeutralBalanceTag: Story = {
  args: {
    percentage: 0,
    amount: 0,
  },
}

export const NegativeBalanceTag: Story = {
  args: {
    percentage: -17,
    amount: {
      number: -1522.48,
      decimalPlaces: 2,
      units: "€",
      unitsPosition: "right",
      locale: "de-DE",
    },
  },
}

export const InvertedBalanceTag: Story = {
  args: {
    percentage: -17,
    amount: -1522.48,
    inverted: true,
  },
}

export const BalanceTagWithInfo: Story = {
  args: {
    percentage: -17,
    amount: -1522.48,
    info: "This is a balance tag with info",
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-2">
      {statuses.map((status) => (
        <F0TagBalance
          key={status}
          percentage={
            status === "positive" ? 10 : status === "negative" ? -10 : 0
          }
          amount={
            status === "positive" ? 1000 : status === "negative" ? -1000 : 0
          }
        />
      ))}
    </div>
  ),
}

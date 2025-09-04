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
    docs: {
      description: {
        component: [
          "A tag component that displays semantically a balance with a percentage and an amount. With a trend indicator.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  argTypes: {
    percentage: {
      control: "number",
      description:
        "The percentage of the balance, it can be a number or an object with the numeric value that allows to define the decimal places and locale.",
      table: {
        type: {
          summary: "number | Omit<NumericValue, 'units' | 'unitsPosition'>",
        },
      },
    },
    amount: {
      control: "number",
      description:
        "The amount of the balance, it can be a number or an object with the numeric value that allows to define the decimal places, units, units position and locale.",
      table: {
        type: {
          summary: "number | NumericValue",
        },
      },
    },
  },
  args: {
    info: "This is a balance tag with info",
    hint: "vs last month",
    percentage: 2,
    amount: {
      number: 1522.48,
      decimalPlaces: 2,
      units: "€",
      unitsPosition: "right",
      locale: "en-US",
    },
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
      locale: "es-ES",
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
          hint={
            status === "positive"
              ? "vs last month"
              : status === "negative"
                ? "vs last month"
                : undefined
          }
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

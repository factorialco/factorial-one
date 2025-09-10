import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0TagBalance } from "../"

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

export const InvertedBalanceStatusTag: Story = {
  args: {
    percentage: -17,
    amount: -1522.48,
    invertStatus: true,
  },
}

export const BalanceTagWithInfo: Story = {
  args: {
    percentage: -17,
    amount: -1522.48,
    info: "This is a balance tag with info",
  },
}

export const BalanceTagWithNull: Story = {
  args: {
    percentage: null,
    amount: null,
    info: "This is a balance tag with null",
    nullText: "N/A",
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => {
    const demo = [
      { title: "positive", percentage: 10, amount: 1000 },
      { title: "neutral", percentage: 0, amount: 0 },
      { title: "negative", percentage: -10, amount: -1000 },
      { title: "null", percentage: null, amount: null },
      { title: "undefined", percentage: undefined, amount: undefined },
      {
        title: "custom null text",
        percentage: null,
        amount: null,
        nullText: "Desi says no salary",
      },
      {
        title: "custom null text and info",
        percentage: null,
        amount: null,
        nullText: "Desi says no salary",
        info: "This is a balance tag with info",
      },
      {
        title: "with info",
        percentage: 10,
        amount: 1000,
        info: "This is a balance tag with info",
      },
      {
        title: "with hint",
        percentage: 10,
        amount: 1000,
        hint: "vs last month",
      },
      {
        title: "with hint and info",
        percentage: 10,
        amount: 1000,
        hint: "vs last month",
        info: "This is a balance tag with info",
      },
      {
        title: "with invert status",
        percentage: 10,
        amount: 1000,
        invertStatus: true,
      },
      {
        title: "with decimal places",
        percentage: { number: 10, decimalPlaces: 2 },
        amount: 1000,
      },
      {
        title: "with units",
        percentage: 10,
        amount: { number: 1000, units: "€" },
      },
      {
        title: "with units position",
        percentage: 10,
        amount: {
          number: 1000,
          unitsPosition: "left" as const,
          decimalPlaces: 2,
          units: "$",
        },
      },
      {
        title: "with locale",
        percentage: 10,
        amount: { number: 1000, locale: "es-ES" },
      },
    ]
    return (
      <div className="flex flex-col gap-2">
        {demo.map(
          ({
            title,
            percentage,
            amount,
            info,
            hint,
            invertStatus,
            nullText,
          }) => (
            <div key={title} className="flex flex-row gap-2">
              <span className="w-40 font-medium">{title}</span>
              <F0TagBalance
                hint={hint}
                key={title}
                info={info}
                invertStatus={invertStatus}
                nullText={nullText}
                percentage={percentage}
                amount={amount}
              />
            </div>
          )
        )}
      </div>
    )
  },
}

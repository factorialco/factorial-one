import type { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react"
import { Money } from "."

const meta = {
  component: Money,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/pZzg1KTe9lpKTSGPUZa8OJ/Web-Components?node-id=252-8537&t=SrGKlGDdzYxFSTb8-4",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    locale: {
      control: "select",
      options: [
        "es-ES", // Spain
        "en-US", // United States
        "ja-JP", // Japan
        "de-DE", // Germany
        "fr-FR", // France
        "it-IT", // Italy
        "en-GB", // United Kingdom
        "zh-CN", // China
        "ko-KR", // South Korea
        "ru-RU", // Russia
        "ar-AE", // UAE (Arabic)
      ],
    },
    currency: {
      control: "select",
      options: [
        "EUR", // Euro
        "USD", // US Dollar
        "JPY", // Japanese Yen
        "GBP", // British Pound
        "CNY", // Chinese Yuan
        "KRW", // South Korean Won
        "RUB", // Russian Ruble
        "AED", // UAE Dirham
      ],
    },
  },
  args: {
    amount: 42,
    currency: "EUR",
    locale: "es-ES",
    totalDigits: 4,
    size: "md",
    type: null,
  } satisfies ComponentProps<typeof Money>,
} satisfies Meta<typeof Money>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

// Additional examples:

// Large amounts in USD
export const LargeUSDMoney: Story = {
  args: {
    amount: 123456789,
    currency: "USD",
    locale: "en-US",
    totalDigits: 6,
  },
}

// Large amounts in Japanese Yen (Yen has no decimals)
export const LargeJPYMoney: Story = {
  args: {
    amount: 987654321,
    currency: "JPY",
    locale: "ja-JP",
    totalDigits: 3,
  },
}

// Small amounts in British Pounds
export const SmallGBPMoney: Story = {
  args: {
    amount: 4.99,
    currency: "GBP",
    locale: "en-GB",
    totalDigits: 5,
  },
}

// Large amounts in Euro with German locale
export const LargeEURMoneyInGermany: Story = {
  args: {
    amount: 1500000,
    currency: "EUR",
    locale: "de-DE",
    totalDigits: 6,
  },
}

// Large amounts in Chinese Yuan
export const LargeCNYMoney: Story = {
  args: {
    amount: 120000000,
    currency: "CNY",
    locale: "zh-CN",
    totalDigits: 6,
  },
}

// Large amounts in Russian Rubles
export const LargeRUBMoney: Story = {
  args: {
    amount: 500000000,
    currency: "RUB",
    locale: "ru-RU",
    totalDigits: 5,
  },
}

// UAE Dirham (Arabic locale, currency symbol after number)
export const LargeAEDMoney: Story = {
  args: {
    amount: 1000000,
    currency: "AED",
    locale: "ar-AE",
    totalDigits: 4,
  },
}

// Mixed precision in South Korean Won
export const MixedKRWMoney: Story = {
  args: {
    amount: 123456,
    currency: "KRW",
    locale: "ko-KR",
    totalDigits: 5,
  },
}

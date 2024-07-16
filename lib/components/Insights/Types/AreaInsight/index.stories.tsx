import type { Meta, StoryObj } from "@storybook/react"

import { AreaInsight, AreaProps } from "."

const Component = AreaInsight

const dataConfig = {
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
}

const meta = {
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    yAxis: {
      hide: true,
    },
    data: [
      { label: "January", values: { mobile: 4000, desktop: 2400 } },
      { label: "February", values: { mobile: 3000, desktop: 1398 } },
      { label: "March", values: { mobile: 2000, desktop: 4000 } },
      { label: "April", values: { mobile: 1500, desktop: 8000 } },
      { label: "May", values: { mobile: 2000, desktop: 6000 } },
      { label: "June", values: { mobile: 3500, desktop: 4000 } },
      { label: "July", values: { mobile: 4500, desktop: 2000 } },
      { label: "August", values: { mobile: 5500, desktop: 1000 } },
      { label: "September", values: { mobile: 6500, desktop: 500 } },
      { label: "October", values: { mobile: 7500, desktop: 300 } },
      { label: "November", values: { mobile: 8500, desktop: 200 } },
      { label: "December", values: { mobile: 9500, desktop: 500 } },
    ],
    dataConfig,
    header: {
      title: "Area Insight",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    footer: {
      trend: "Increased by 12%",
      time: "Since last month",
    },
  } satisfies AreaProps<typeof dataConfig>,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

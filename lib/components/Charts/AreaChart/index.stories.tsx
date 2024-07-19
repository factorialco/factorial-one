import type { Meta, StoryObj } from "@storybook/react"

import { AreaChart, AreaChartProps } from "."

const dataConfig = {
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
}

const Component = AreaChart<typeof dataConfig>

const meta = {
  component: Component,
  tags: ["autodocs"],
  args: {
    config: dataConfig,
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    yAxis: {
      hide: true,
    },
    data: [
      { label: "January", mobile: 4000, desktop: 2400 },
      { label: "February", mobile: 3000, desktop: 1398 },
      { label: "March", mobile: 2000, desktop: 4000 },
      { label: "April", mobile: 1500, desktop: 8000 },
      { label: "May", mobile: 2000, desktop: 6000 },
      { label: "June", mobile: 3500, desktop: 4000 },
      { label: "July", mobile: 4500, desktop: 2000 },
      { label: "August", mobile: 5500, desktop: 1000 },
      { label: "September", mobile: 6500, desktop: 500 },
      { label: "October", mobile: 7500, desktop: 300 },
      { label: "November", mobile: 8500, desktop: 200 },
      { label: "December", mobile: 9500, desktop: 500 },
    ],
  } satisfies AreaChartProps<typeof dataConfig>,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

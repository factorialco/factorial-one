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
    dataConfig,
    xAxis: {
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    yAxis: {
      hide: true,
    },
    data: [
      { label: "January", values: { mobile: 1200, desktop: 500 } },
      { label: "February", values: { mobile: 1500, desktop: 1500 } },
      { label: "March", values: { mobile: 1300, desktop: 3000 } },
      { label: "April", values: { mobile: 1000, desktop: 4500 } },
      { label: "May", values: { mobile: 800, desktop: 5000 } },
      { label: "June", values: { mobile: 600, desktop: 4000 } },
    ],
  } satisfies AreaChartProps<typeof dataConfig>,
  decorators: [
    (Story) => (
      <div className="max-w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

import { Meta, StoryObj } from "@storybook/react"
import { BarChart, BarChartProps } from "."

const dataConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
}

const Component = BarChart<typeof dataConfig>

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
    label: false,
    data: [
      { label: "January", values: { mobile: 4000, desktop: 2400 } },
      { label: "February", values: { mobile: 3000, desktop: 1398 } },
      { label: "March", values: { mobile: 2000, desktop: 4000 } },
      { label: "April", values: { mobile: 1500, desktop: 8000 } },
      { label: "May", values: { mobile: 2000, desktop: 6000 } },
    ],
  } satisfies BarChartProps<typeof dataConfig>,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

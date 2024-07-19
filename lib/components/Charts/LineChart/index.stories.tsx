import type { Meta, StoryObj } from "@storybook/react"

import { LineChart, LineChartProps } from "."

const dataConfig = {
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
}

const Component = LineChart<typeof dataConfig>

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Charts/LineChart",
  argTypes: {
    lineType: {
      control: { type: "select", options: ["natural", "linear", "step"] },
      description: "Determines the type of line curve",
      defaultValue: "natural",
    },
  },
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    dataConfig: {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
      },
    },
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    data: [
      { label: "January", values: { desktop: 186 } },
      { label: "February", values: { desktop: 305 } },
      { label: "March", values: { desktop: 237 } },
      { label: "April", values: { desktop: 73 } },
      { label: "May", values: { desktop: 209 } },
      { label: "June", values: { desktop: 214 } },
    ],
  } as LineChartProps<typeof dataConfig>,
}

export const MultipleLines: Story = {
  args: {
    dataConfig,
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    data: [
      { label: "January", values: { desktop: 186, mobile: 120 } },
      { label: "February", values: { desktop: 305, mobile: 180 } },
      { label: "March", values: { desktop: 237, mobile: 150 } },
      { label: "April", values: { desktop: 73, mobile: 90 } },
      { label: "May", values: { desktop: 209, mobile: 160 } },
      { label: "June", values: { desktop: 214, mobile: 200 } },
    ],
  } as LineChartProps<typeof dataConfig>,
}

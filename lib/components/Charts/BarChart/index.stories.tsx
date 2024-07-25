import { Meta, StoryObj } from "@storybook/react"
import { BarChart } from "."

const dataConfig = {
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
}

const Component = BarChart<typeof dataConfig>

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Charts/BarChart",
  args: {},
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
      mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
      },
    },
    label: true,
    yAxis: {
      hide: false,
    },
    xAxis: {
      hide: false,
    },
    lines: true,
    data: [
      { label: "January", values: { desktop: 186, mobile: 80 } },
      { label: "February", values: { desktop: 305, mobile: 200 } },
      { label: "March", values: { desktop: 237, mobile: 120 } },
      { label: "April", values: { desktop: 73, mobile: 190 } },
      { label: "May", values: { desktop: 209, mobile: 130 } },
      { label: "June", values: { desktop: 214, mobile: 140 } },
    ],
  },
}

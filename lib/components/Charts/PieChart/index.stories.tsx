import type { Meta, StoryObj } from "@storybook/react"

import { PieChart, PieChartProps } from "."

const dataConfig = {
  january: {
    label: "January",
  },
  february: {
    label: "February",
  },
}

const Component = PieChart<typeof dataConfig>

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Charts/PieChart",
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "svg-img-alt", enabled: false }],
      },
    },
  },
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    dataConfig: {
      january: {
        label: "January",
        color: "hsl(var(--chart-1))",
      },
      february: {
        label: "February",
        color: "hsl(var(--chart-2))",
      },
      march: {
        label: "March",
        color: "hsl(var(--chart-3))",
      },
      april: {
        label: "April",
        color: "hsl(var(--chart-4))",
      },
      may: {
        label: "May",
        color: "hsl(var(--chart-5))",
      },
      june: {
        label: "June",
        color: "hsl(var(--chart-6))",
      },
    },
    data: [
      { label: "january", value: 186 },
      { label: "february", value: 305 },
      { label: "march", value: 237 },
      { label: "april", value: 73 },
      { label: "may", value: 209 },
      { label: "june", value: 214 },
    ],
  } as PieChartProps<typeof dataConfig>,
}

import type { Meta } from "@storybook/react"

import { AreaChart } from "."

const dataConfig = {
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
}

const meta: Meta<typeof AreaChart<typeof dataConfig>> = {
  component: AreaChart,
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
  },
  decorators: [
    (Story) => (
      <div className="h-52 w-full">
        <Story />
      </div>
    ),
  ],
}

export default meta

export const Default = {}

export const Dashed = {
  args: {
    dataConfig: {
      desktop: {
        label: "Desktop",
        dashed: true,
      },
      mobile: {
        label: "Mobile",
      },
    },
  },
}

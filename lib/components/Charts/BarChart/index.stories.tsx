import { Meta } from "@storybook/react"
import { BarChart } from "."

const dataConfig = {
  desktop: {
    label: "Desktop",
  },
}

const meta: Meta<typeof BarChart<typeof dataConfig>> = {
  component: BarChart,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    dataConfig,
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    data: [
      { label: "January", values: { desktop: 4000 } },
      { label: "February", values: { desktop: 3000 } },
      { label: "March", values: { desktop: 2000 } },
      { label: "April", values: { desktop: 1500 } },
      { label: "May", values: { desktop: 2000 } },
    ],
  },
}

export default meta

export const Default: Meta<typeof BarChart> = {}

const dataMultiConfig = {
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
  tablet: {
    label: "Tablet",
  },
}

export const MultipleValues: Meta<typeof BarChart<typeof dataMultiConfig>> = {
  args: {
    dataConfig: dataMultiConfig,
    data: [
      {
        label: "January",
        values: { desktop: 2400, mobile: 4000, tablet: 3000 },
      },
      {
        label: "February",
        values: { desktop: 1398, mobile: 3000, tablet: 2500 },
      },
      { label: "March", values: { desktop: 4000, mobile: 2000, tablet: 3500 } },
      { label: "April", values: { desktop: 8000, mobile: 1500, tablet: 4500 } },
      { label: "May", values: { desktop: 6000, mobile: 2000, tablet: 5000 } },
    ],
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
  },
}

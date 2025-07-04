import type { Meta } from "@storybook/react-vite"

import { PieChart } from "./index"

const dataConfig = {
  january: {
    label: "January",
  },
  february: {
    label: "February",
  },
  march: {
    label: "March",
  },
  april: {
    label: "April",
  },
  may: {
    label: "May",
  },
  june: {
    label: "June",
  },
}

const meta: Meta<typeof PieChart> = {
  component: PieChart,
  title: "Charts/PieChart",
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "svg-img-alt", enabled: false }],
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="h-96 w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PieChart>

export default meta

export const Default: Meta<typeof PieChart> = {
  args: {
    dataConfig,
    data: [
      { label: "january", value: 186 },
      { label: "february", value: 305 },
      { label: "march", value: 237 },
      { label: "april", value: 73 },
      { label: "may", value: 209 },
      { label: "june", value: 214 },
    ],
    tickFormatter: (value: string) =>
      `${Number.isNaN(parseFloat(value)) ? value : (parseFloat(value) / 100).toFixed(2) + "€"}`,
  },
}

export const WithOverview: Meta<typeof PieChart> = {
  args: {
    ...Default.args,
    overview: {
      label: "Total",
      number: 224,
    },
  },
}

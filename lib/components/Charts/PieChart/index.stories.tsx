import type { Meta, StoryObj } from "@storybook/react"

import { PieChart, PieChartProps } from "."

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

export const Default: Story = {
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
  } as PieChartProps<typeof dataConfig>,
}

export const WithOverview: Story = {
  args: {
    ...Default.args,
    overview: {
      label: "Total",
      number: 224,
    },
  },
}

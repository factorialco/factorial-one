import { Meta, StoryObj } from "@storybook/react"
import { VerticalBarChart, VerticalBarChartProps } from "."

const dataConfig = {
  value: {
    label: "Value",
  },
}

const Component = VerticalBarChart<typeof dataConfig>

const meta = {
  component: Component,
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
    data: [
      { label: "Employee Satisfaction", values: { value: 85 } },
      { label: "Retention Rate", values: { value: 92 } },
      { label: "Training Completion", values: { value: 78 } },
      { label: "Performance Score", values: { value: 88 } },
      { label: "Recruitment Efficiency", values: { value: 100 } },
    ],
  } satisfies VerticalBarChartProps<typeof dataConfig>,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const MultipleValues: Story = {
  args: {
    dataConfig: {
      desktop: {
        label: "Desktop",
      },
      mobile: {
        label: "Mobile",
      },
    },
    data: [
      { label: "January", values: { mobile: 4000, desktop: 2400 } },
      { label: "February", values: { mobile: 3000, desktop: 1398 } },
      { label: "March", values: { mobile: 2000, desktop: 4000 } },
      { label: "April", values: { mobile: 1500, desktop: 8000 } },
      { label: "May", values: { mobile: 2000, desktop: 6000 } },
    ],
  },
}

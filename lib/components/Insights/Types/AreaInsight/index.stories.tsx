import type { Meta, StoryObj } from "@storybook/react"

import { AreaInsight, AreaProps } from "."
import { InsightsContainer } from "../../Container"

const Component = AreaInsight

const dataConfig = {
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
}

const meta = {
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    yAxis: {
      hide: true,
    },
    data: [
      { label: "Jan", values: { mobile: 4000, desktop: 2400 } },
      { label: "Feb", values: { mobile: 3000, desktop: 1398 } },
      { label: "Mar", values: { mobile: 2000, desktop: 4000 } },
      { label: "Apr", values: { mobile: 1500, desktop: 8000 } },
      { label: "May", values: { mobile: 2000, desktop: 6000 } },
      { label: "Jun", values: { mobile: 3500, desktop: 4000 } },
      { label: "Jul", values: { mobile: 4500, desktop: 2000 } },
      { label: "Aug", values: { mobile: 5500, desktop: 1000 } },
      { label: "Sep", values: { mobile: 6500, desktop: 500 } },
      { label: "Oct", values: { mobile: 7500, desktop: 300 } },
      { label: "Nov", values: { mobile: 8500, desktop: 200 } },
      { label: "Dec", values: { mobile: 9500, desktop: 500 } },
    ],
    dataConfig,
  } satisfies AreaProps<typeof dataConfig>,
  render: (props) => (
    <InsightsContainer
      header={{
        title: "Area Insight",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      }}
      footer={{
        trend: "Increased by 12%",
        time: "Since last month",
      }}
    >
      <AreaInsight {...props} />
    </InsightsContainer>
  ),
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

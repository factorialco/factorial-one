import type { Meta, StoryObj } from "@storybook/react"
import { Gallery } from "."
import { AreaChartWidget } from "../Charts/AreaChartWidget"
import { LineChartWidget } from "../Charts/LineChartWidget"
import { PieChartWidget } from "../Charts/PieChartWidget"
import { VerticalBarChartWidget } from "../Charts/VerticalBarChartWidget"

import AreaChartWidgetStoriesMeta from "../Charts/AreaChartWidget/index.stories"
import LineChartWidgetStoriesMeta from "../Charts/LineChartWidget/index.stories"
import PieChartWidgetStoriesMeta from "../Charts/PieChartWidget/index.stories"
import VerticalBarChartWidgetStoriesMeta from "../Charts/VerticalBarChartWidget/index.stories"

const meta = {
  component: Gallery,
  tags: ["autodocs"],
  args: {
    items: [
      { component: <AreaChartWidget {...AreaChartWidgetStoriesMeta.args} /> },
      { component: <LineChartWidget {...LineChartWidgetStoriesMeta.args} /> },
      { component: <PieChartWidget {...PieChartWidgetStoriesMeta.args} /> },
      {
        component: (
          <VerticalBarChartWidget {...VerticalBarChartWidgetStoriesMeta.args} />
        ),
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="max-w-[960px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Gallery>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const FullWidth: Story = {
  args: {
    items: [
      {
        component: <AreaChartWidget {...AreaChartWidgetStoriesMeta.args} />,
        fullWidth: true,
      },
      { component: <LineChartWidget {...LineChartWidgetStoriesMeta.args} /> },
      { component: <PieChartWidget {...PieChartWidgetStoriesMeta.args} /> },
      {
        component: (
          <VerticalBarChartWidget {...VerticalBarChartWidgetStoriesMeta.args} />
        ),
      },
      { component: <AreaChartWidget {...AreaChartWidgetStoriesMeta.args} /> },
    ],
  },
}

export const Skeleton: Story = {
  render() {
    return <Gallery.Skeleton />
  },
}

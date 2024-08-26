import type { Meta, StoryObj } from "@storybook/react"
import { Gallery } from "."
import { AreaChartWidget } from "../Charts/AreaChartWidget"
import { LineChartWidget } from "../Charts/LineChartWidget"
import { RadialProgressWidget } from "../Charts/RadialProgressWidget"
import { VerticalBarChartWidget } from "../Charts/VerticalBarChartWidget"

import AreaChartWidgetStoriesMeta from "../Charts/AreaChartWidget/index.stories"
import LineChartWidgetStoriesMeta from "../Charts/LineChartWidget/index.stories"
import RadialProgressWidgetStoriesMeta from "../Charts/RadialProgressWidget/index.stories"
import VerticalBarChartWidgetStoriesMeta from "../Charts/VerticalBarChartWidget/index.stories"

const renderWidget = (index: number) => {
  const Widgets = [
    () => <AreaChartWidget {...AreaChartWidgetStoriesMeta.args} />,
    () => <LineChartWidget {...LineChartWidgetStoriesMeta.args} />,
    () => <RadialProgressWidget {...RadialProgressWidgetStoriesMeta.args} />,
    () => (
      <VerticalBarChartWidget {...VerticalBarChartWidgetStoriesMeta.args} />
    ),
  ]

  const Component = Widgets[index % Widgets.length]
  return <Component />
}

const meta = {
  component: Gallery,
  tags: ["autodocs"],
  args: {
    children: Array.from({ length: 6 }).map((_, i) => renderWidget(i)),
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
    children: [
      <AreaChartWidget {...AreaChartWidgetStoriesMeta.args} data-full-width />,
      <LineChartWidget {...LineChartWidgetStoriesMeta.args} />,
      <RadialProgressWidget {...RadialProgressWidgetStoriesMeta.args} />,
      <VerticalBarChartWidget {...VerticalBarChartWidgetStoriesMeta.args} />,
      <AreaChartWidget {...AreaChartWidgetStoriesMeta.args} />,
    ],
  },
}

export const Skeleton: Story = {
  render() {
    return <Gallery.Skeleton />
  },
}

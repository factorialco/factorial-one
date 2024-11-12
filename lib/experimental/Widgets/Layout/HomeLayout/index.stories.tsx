import type { Meta, StoryObj } from "@storybook/react"

import { Placeholder } from "@/lib/storybook-utils/placeholder"
import { HomeLayout } from "."
import { AreaChartWidget } from "../../Charts/AreaChartWidget"

import { AreaChartProps } from "@/components/Charts/AreaChart"
import AreaChartWidgetStoriesMeta from "../../Charts/AreaChartWidget/index.stories"
import { BarChartWidget } from "../../Charts/BarChartWidget"
import BarChartWidgetStoriesMeta from "../../Charts/BarChartWidget/index.stories"
import { ComposeChartContainerProps } from "../../Charts/ChartContainer"
import { LineChartWidget } from "../../Charts/LineChartWidget"
import LineChartWidgetStoriesMeta from "../../Charts/LineChartWidget/index.stories"
import { PieChartWidget } from "../../Charts/PieChartWidget"
import PieChartWidgetStoriesMeta from "../../Charts/PieChartWidget/index.stories"
import { RadialProgressWidget } from "../../Charts/RadialProgressWidget"
import RadialProgressWidgetStoriesMeta from "../../Charts/RadialProgressWidget/index.stories"
import { VerticalBarChartWidget } from "../../Charts/VerticalBarChartWidget"
import VerticalBarChartWidgetStoriesMeta from "../../Charts/VerticalBarChartWidget/index.stories"
import { Widget } from "../../Widget"

// /* eslint-disable react/jsx-key */
const widgets = [
  <AreaChartWidget
    {...(AreaChartWidgetStoriesMeta.args as ComposeChartContainerProps<AreaChartProps>)}
  />,
  <Widget header={{ title: "A form widget" }}>
    <p>
      Never gonna give you up. Never gonna let you down. Never gonna turn around
      and desert you.
    </p>
  </Widget>,
  <LineChartWidget {...LineChartWidgetStoriesMeta.args} />,
  <BarChartWidget {...BarChartWidgetStoriesMeta.args} />,
  <PieChartWidget {...PieChartWidgetStoriesMeta.args} />,
  <VerticalBarChartWidget {...VerticalBarChartWidgetStoriesMeta.args} />,
  <RadialProgressWidget {...RadialProgressWidgetStoriesMeta.args} />,
]
// /* eslint-enable react/jsx-key */

const meta = {
  component: HomeLayout,
  tags: ["autodocs"],
  args: {
    children: (
      <div>
        <Placeholder className="h-[1500px]">Content</Placeholder>
      </div>
    ),
    widgets: Array.from({ length: 6 }, (_, i) => widgets[i]),
  },
} satisfies Meta<typeof HomeLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

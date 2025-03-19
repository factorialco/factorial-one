import type { Meta, StoryObj } from "@storybook/react"

import { AreaChartWidget } from "../../Widgets/Charts/AreaChartWidget"
import { Placeholder } from "../../../lib/storybook-utils/placeholder"
import { HomeLayout } from "./index"

import { AreaChartProps } from "../../../components/Charts/AreaChart"
import AreaChartWidgetStoriesMeta from "../../Widgets/Charts/AreaChartWidget/index.stories"
import { BarChartWidget } from "../../Widgets/Charts/BarChartWidget"
import BarChartWidgetStoriesMeta from "../../Widgets/Charts/BarChartWidget/index.stories"
import { ComposeChartContainerProps } from "../../Widgets/Charts/ChartContainer"
import { LineChartWidget } from "../../Widgets/Charts/LineChartWidget"
import LineChartWidgetStoriesMeta from "../../Widgets/Charts/LineChartWidget/index.stories"
import { RadialProgressWidget } from "../../Widgets/Charts/RadialProgressWidget"
import RadialProgressWidgetStoriesMeta from "../../Widgets/Charts/RadialProgressWidget/index.stories"
import { VerticalBarChartWidget } from "../../Widgets/Charts/VerticalBarChartWidget"
import VerticalBarChartWidgetStoriesMeta from "../../Widgets/Charts/VerticalBarChartWidget/index.stories"
import { Widget } from "../../Widgets/Widget"

const widgets = [
  <AreaChartWidget
    key="area-chart"
    {...(AreaChartWidgetStoriesMeta.args as ComposeChartContainerProps<AreaChartProps>)}
  />,
  <Widget key="never-gonna" header={{ title: "A form widget" }}>
    <p>
      Never gonna give you up. Never gonna let you down. Never gonna turn around
      and desert you.
    </p>
  </Widget>,
  <LineChartWidget key="line-chart" {...LineChartWidgetStoriesMeta.args} />,
  <BarChartWidget key="bar-chart" {...BarChartWidgetStoriesMeta.args} />,
  <VerticalBarChartWidget
    key="vertical-bar-chart"
    {...VerticalBarChartWidgetStoriesMeta.args}
  />,
  <RadialProgressWidget
    key="radial-progress"
    {...RadialProgressWidgetStoriesMeta.args}
  />,
]

const meta = {
  title: "Layout/HomeLayout",
  component: HomeLayout,
  tags: ["autodocs", "experimental"],
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

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: "reset",
    },
  },
  args: meta.args,
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone14pro",
    },
  },
}

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "ipad",
    },
  },
}

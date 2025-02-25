import type { Meta, StoryObj } from "@storybook/react"

import { AreaChartWidget } from "@/domain/components/widgets/Charts/AreaChartWidget"
import { Placeholder } from "@/lib/storybook-utils/placeholder.tsx"
import { HomeLayout } from "./index.tsx"

import { AreaChartProps } from "@/core/components/charts/AreaChart"
import AreaChartWidgetStoriesMeta from "@/domain/components/widgets/Charts/AreaChartWidget/index.stories.tsx"
import { BarChartWidget } from "@/domain/components/widgets/Charts/BarChartWidget"
import BarChartWidgetStoriesMeta from "@/domain/components/widgets/Charts/BarChartWidget/index.stories.tsx"
import { ComposeChartContainerProps } from "@/domain/components/widgets/Charts/ChartContainer.tsx"
import { LineChartWidget } from "@/domain/components/widgets/Charts/LineChartWidget"
import LineChartWidgetStoriesMeta from "@/domain/components/widgets/Charts/LineChartWidget/index.stories.tsx"
import { RadialProgressWidget } from "@/domain/components/widgets/Charts/RadialProgressWidget"
import RadialProgressWidgetStoriesMeta from "@/domain/components/widgets/Charts/RadialProgressWidget/index.stories.tsx"
import { VerticalBarChartWidget } from "@/domain/components/widgets/Charts/VerticalBarChartWidget"
import VerticalBarChartWidgetStoriesMeta from "@/domain/components/widgets/Charts/VerticalBarChartWidget/index.stories.tsx"
import { Widget } from "@/domain/components/widgets/Widget"

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

import type { Meta, StoryObj } from "@storybook/react"

import { AreaChartWidget } from "@/domain/components/widgets/charts/AreaChartWidget"
import { Dashboard } from "./index.tsx"

import { AreaChartProps } from "@/core/components/charts/AreaChart"
import AreaChartWidgetStoriesMeta from "@/domain/components/widgets/charts/AreaChartWidget/index.stories.tsx"
import { BarChartWidget } from "@/domain/components/widgets/charts/BarChartWidget"
import BarChartWidgetStoriesMeta from "@/domain/components/widgets/charts/BarChartWidget/index.stories.tsx"
import { ComposeChartContainerProps } from "@/domain/components/widgets/charts/ChartContainer.tsx"
import { LineChartWidget } from "@/domain/components/widgets/charts/LineChartWidget"
import LineChartWidgetStoriesMeta from "@/domain/components/widgets/charts/LineChartWidget/index.stories.tsx"
import { PieChartWidget } from "@/domain/components/widgets/charts/PieChartWidget"
import PieChartWidgetStoriesMeta from "@/domain/components/widgets/charts/PieChartWidget/index.stories.tsx"
import { RadialProgressWidget } from "@/domain/components/widgets/charts/RadialProgressWidget"
import RadialProgressWidgetStoriesMeta from "@/domain/components/widgets/charts/RadialProgressWidget/index.stories.tsx"
import { VerticalBarChartWidget } from "@/domain/components/widgets/charts/VerticalBarChartWidget"
import VerticalBarChartWidgetStoriesMeta from "@/domain/components/widgets/charts/VerticalBarChartWidget/index.stories.tsx"
import { Widget } from "../../Widget"

/* eslint-disable react/jsx-key */
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
/* eslint-enable react/jsx-key */

const meta = {
  title: "widgets/layout/Dashboard",
  component: Dashboard,
  tags: ["autodocs", "experimental"],
  argTypes: {
    widgetWidth: {
      control: "select",
      options: [undefined, "sm", "md", "lg"],
    },
  },
  args: {
    widgetWidth: "sm",
    children: Array.from({ length: 20 }, (_, i) => widgets[i % widgets.length]),
  },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "svg-img-alt", enabled: false }],
      },
    },
  },
} satisfies Meta<typeof Dashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Skeleton: Story = {
  render() {
    return <Dashboard.Skeleton />
  },
}

export const Small: Story = {
  args: {
    children: Array.from({ length: 4 }, (_, i) => widgets[i % widgets.length]),
  },
}

import type { Meta, StoryObj } from "@storybook/react"

import { Dashboard } from "."
import { AreaChartWidget } from "../../Charts/AreaChartWidget"

import { AreaChartProps } from "@/components/Charts/AreaChart"
import { Calendar } from "@/experimental/Forms/Fields/Calendar"
import AreaChartWidgetStoriesMeta from "../../Charts/AreaChartWidget/index.stories"
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

const renderWidget = (index: number) => {
  const Widgets = [
    () => (
      <AreaChartWidget
        {...(AreaChartWidgetStoriesMeta.args as ComposeChartContainerProps<AreaChartProps>)}
      />
    ),
    () => (
      <Widget header={{ title: "A form widget" }}>
        <p>
          Never gonna give you up. Never gonna let you down. Never gonna turn
          around and desert you.
        </p>
      </Widget>
    ),
    () => <LineChartWidget {...LineChartWidgetStoriesMeta.args} />,
    () => (
      <Widget
        header={{
          title: "A widget",
        }}
      >
        <div className="flex justify-center">
          <Calendar defaultMonth={new Date(2024, 10, 15)} />
        </div>
      </Widget>
    ),
    () => <PieChartWidget {...PieChartWidgetStoriesMeta.args} />,
    () => (
      <VerticalBarChartWidget {...VerticalBarChartWidgetStoriesMeta.args} />
    ),
    () => <RadialProgressWidget {...RadialProgressWidgetStoriesMeta.args} />,
  ]

  const Component = Widgets[index % Widgets.length]
  return <Component />
}

const meta = {
  component: Dashboard,
  tags: ["autodocs"],
  args: {
    children: Array.from({ length: 20 }).map((_, i) => renderWidget(i)),
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: "color-contrast", enabled: false },
          { id: "svg-img-alt", enabled: false },
        ],
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
    children: Array.from({ length: 4 }).map((_, i) => renderWidget(i)),
  },
}

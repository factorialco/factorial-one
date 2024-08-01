import type { Meta, StoryObj } from "@storybook/react"

import { Dashboard } from "."
import { AreaChartWidget } from "../Charts/AreaChartWidget"

import { Calendar } from "@/components/Forms/Fields/Calendar"
import AreaChartWidgetStoriesMeta from "../Charts/AreaChartWidget/index.stories"
import { LineChartWidget } from "../Charts/LineChartWidget"
import LineChartWidgetStoriesMeta from "../Charts/LineChartWidget/index.stories"
import { PieChartWidget } from "../Charts/PieChartWidget"
import PieChartWidgetStoriesMeta from "../Charts/PieChartWidget/index.stories"
import { VerticalBarChartWidget } from "../Charts/VerticalBarChartWidget"
import VerticalBarChartWidgetStoriesMeta from "../Charts/VerticalBarChartWidget/index.stories"
import { WidgetContainer } from "../WidgetContainer"

const renderWidget = (index: number) => {
  const Widgets = [
    () => <AreaChartWidget {...AreaChartWidgetStoriesMeta.args} />,
    () => (
      <WidgetContainer
        header={{ title: "A form widget", description: "Enter your data" }}
      >
        <p>
          Never gonna give you up. Never gonna let you down. Never gonna turn
          around and desert you.
        </p>
      </WidgetContainer>
    ),
    () => <LineChartWidget {...LineChartWidgetStoriesMeta.args} />,
    () => (
      <WidgetContainer
        header={{
          title: "A widget",
          description: "This widget contains some data",
        }}
      >
        <Calendar />
      </WidgetContainer>
    ),
    () => <PieChartWidget {...PieChartWidgetStoriesMeta.args} />,
    () => (
      <VerticalBarChartWidget {...VerticalBarChartWidgetStoriesMeta.args} />
    ),
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
} satisfies Meta<typeof Dashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

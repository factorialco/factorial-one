import type { Meta, StoryObj } from "@storybook/react"

import { WidgetRow } from "."
import { AreaChartWidget } from "../Charts/AreaChartWidget"

import AreaChartWidgetStoriesMeta from "../Charts/AreaChartWidget/index.stories"
import { LineChartWidget } from "../Charts/LineChartWidget"
import LineChartWidgetStoriesMeta from "../Charts/LineChartWidget/index.stories"
import { PieChartWidget } from "../Charts/PieChartWidget"
import PieChartWidgetStoriesMeta from "../Charts/PieChartWidget/index.stories"
import { WidgetContainer } from "../WidgetContainer"

const renderWidget = (index: number) => {
  const Widgets = [
    () => <AreaChartWidget {...AreaChartWidgetStoriesMeta.args} />,
    () => <LineChartWidget {...LineChartWidgetStoriesMeta.args} />,
    () => <PieChartWidget {...PieChartWidgetStoriesMeta.args} />,
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
  ]

  const Component = Widgets[index % Widgets.length]
  return <Component key={index} />
}

const renderWidgets = (length: number) =>
  Array.from({ length }).map((_, i) => renderWidget(i))

const meta = {
  component: WidgetRow,
  tags: ["autodocs"],
  args: {
    children: renderWidgets(3),
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
} satisfies Meta<typeof WidgetRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Single: Story = {
  args: {
    children: renderWidgets(1),
  },
}

export const Overflow: Story = {
  args: {
    children: renderWidgets(10),
  },
}

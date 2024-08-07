import type { Meta, StoryObj } from "@storybook/react"

import { WidgetStrip } from "."
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
        header={{ title: "A form widget", subtitle: "Enter your data" }}
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
  component: WidgetStrip,
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
} satisfies Meta<typeof WidgetStrip>

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

const headcountDataConfig = {
  employees: { label: "Employees" },
}

const headcountData = [
  { label: "July", values: { employees: 100 } },
  { label: "August", values: { employees: 140 } },
  { label: "September", values: { employees: 210 } },
  { label: "October", values: { employees: 240 } },
  { label: "November", values: { employees: 230 } },
  { label: "December", values: { employees: 250 } },
]

const promotionDataConfig = {
  employeeRate: { label: "Employees", color: "hsl(var(--chart-2))" },
}

const promotionData = [
  { label: "July", values: { employeeRate: 9 } },
  { label: "August", values: { employeeRate: 30 } },
  { label: "September", values: { employeeRate: 12 } },
  { label: "October", values: { employeeRate: 11 } },
  { label: "November", values: { employeeRate: 15 } },
  { label: "December", values: { employeeRate: 20 } },
]

const turnoverDataConfig = {
  rate: { label: "Rate", color: "hsl(var(--chart-3))" },
}

const turnoverData = [
  { label: "July", values: { rate: 0.4 } },
  { label: "August", values: { rate: 0.6 } },
  { label: "September", values: { rate: 1 } },
  { label: "October", values: { rate: 1.1 } },
  { label: "November", values: { rate: 1 } },
  { label: "December", values: { rate: 1.6 } },
]

export const EmployeesList: Story = {
  args: {
    children: [
      <AreaChartWidget
        {...AreaChartWidgetStoriesMeta.args}
        header={{
          title: "Headcount",
          subtitle: undefined,
          info: "This is additional information for the headcount",
          link: undefined,
        }}
        summaries={[
          {
            label: "Now",
            value: "250",
          },
          {
            label: "Last month",
            value: "230",
          },
        ]}
        chart={{
          lineType: "natural",
          dataConfig: headcountDataConfig,
          data: headcountData,
          xAxis: AreaChartWidgetStoriesMeta.args.chart.xAxis,
          yAxis: { hide: true },
        }}
      />,
      <AreaChartWidget
        {...AreaChartWidgetStoriesMeta.args}
        header={{
          title: "Promotion rate",
          subtitle: undefined,
          info: "This is additional information for the promotion rate",
          link: undefined,
        }}
        summaries={[
          {
            label: "Rate",
            value: "20",
            unit: "%",
          },
        ]}
        chart={{
          lineType: "natural",
          dataConfig: promotionDataConfig,
          data: promotionData,
          xAxis: AreaChartWidgetStoriesMeta.args.chart.xAxis,
          yAxis: { hide: true },
        }}
      />,
      <AreaChartWidget
        {...AreaChartWidgetStoriesMeta.args}
        header={{
          title: "Turnover rate",
          subtitle: undefined,
          info: "This is additional information for the turnover rate",
          link: undefined,
        }}
        summaries={[
          {
            label: "Rate",
            value: "16",
            unit: "%",
          },
        ]}
        chart={{
          lineType: "natural",
          dataConfig: turnoverDataConfig,
          data: turnoverData,
          xAxis: AreaChartWidgetStoriesMeta.args.chart.xAxis,
          yAxis: { hide: true },
        }}
      />,
    ],
  },
}

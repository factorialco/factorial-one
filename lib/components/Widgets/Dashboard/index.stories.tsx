import type { Meta, StoryObj } from "@storybook/react"

import { Dashboard } from "."
import { AreaChartWidget } from "../Charts/AreaChartWidget"

import AreaChartWidgetStoriesMeta from "../Charts/AreaChartWidget/index.stories"
import { LineChartWidget } from "../Charts/LineChartWidget"
import LineChartWidgetStoriesMeta from "../Charts/LineChartWidget/index.stories"
import { PieChartWidget } from "../Charts/PieChartWidget"
import PieChartWidgetStoriesMeta from "../Charts/PieChartWidget/index.stories"
import { VerticalBarChartWidget } from "../Charts/VerticalBarChartWidget"
import VerticalBarChartWidgetStoriesMeta from "../Charts/VerticalBarChartWidget/index.stories"

const renderWidget = (index: number) => {
  const Widgets = [
    () => <AreaChartWidget {...AreaChartWidgetStoriesMeta.args} />,
    () => <LineChartWidget {...LineChartWidgetStoriesMeta.args} />,
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
    children: <>{Array.from({ length: 9 }).map((_, i) => renderWidget(i))}</>,
  },
} satisfies Meta<typeof Dashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithTitle: Story = {
  args: {
    header: {
      title: "Some data you can see below",
      description:
        "One can write a small description to further clarify what you're seeing. If the description is long enough, it will wrap before hitting the end of the container.",
    },
  },
}

export const Small: Story = {
  args: {
    tileSize: "sm",
  },
}

export const Large: Story = {
  args: {
    tileSize: "lg",
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
  employees: { label: "Employees" },
}

const promotionData = [
  { label: "July", values: { employees: 9 } },
  { label: "August", values: { employees: 30 } },
  { label: "September", values: { employees: 12 } },
  { label: "October", values: { employees: 11 } },
  { label: "November", values: { employees: 15 } },
  { label: "December", values: { employees: 20 } },
]

const turnoverDataConfig = {
  rate: { label: "Rate" },
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
    children: (
      <>
        <AreaChartWidget
          {...AreaChartWidgetStoriesMeta.args}
          header={{
            title: "Headcount",
            subtitle: "June 2024",
            info: "This is additional information for the headcount",
            link: "/",
          }}
          chart={{
            lineType: "natural",
            dataConfig: headcountDataConfig,
            data: headcountData,
            xAxis: AreaChartWidgetStoriesMeta.args.chart.xAxis,
            yAxis: { hide: true },
          }}
        />
        <AreaChartWidget
          {...AreaChartWidgetStoriesMeta.args}
          header={{
            title: "Promotion rate",
            subtitle: undefined,
            info: "This is additional information for the promotion rate",
            link: undefined,
          }}
          chart={{
            lineType: "natural",
            dataConfig: promotionDataConfig,
            data: promotionData,
            xAxis: AreaChartWidgetStoriesMeta.args.chart.xAxis,
            yAxis: { hide: true },
          }}
        />
        <AreaChartWidget
          {...AreaChartWidgetStoriesMeta.args}
          header={{
            title: "Turnover rate",
            subtitle: undefined,
            info: "This is additional information for the turnover rate",
            link: undefined,
          }}
          chart={{
            lineType: "natural",
            dataConfig: turnoverDataConfig,
            data: turnoverData,
            xAxis: AreaChartWidgetStoriesMeta.args.chart.xAxis,
            yAxis: { hide: true },
          }}
        />
      </>
    ),
  },
}

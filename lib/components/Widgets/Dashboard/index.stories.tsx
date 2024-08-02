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
        <div className="flex justify-center">
          <Calendar defaultMonth={new Date(2024, 10, 15)} />
        </div>
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

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: "reset",
    },
  },
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphonex",
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
        />
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
            },
          ]}
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
          summaries={[
            {
              label: "Rate",
              value: "16%",
            },
          ]}
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

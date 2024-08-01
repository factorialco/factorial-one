import { AreaChartWidget } from "@/components/Widgets/Charts/AreaChartWidget"
import AreaChartWidgetStoriesMeta from "@/components/Widgets/Charts/AreaChartWidget/index.stories"
import { LineChartWidget } from "@/components/Widgets/Charts/LineChartWidget"
import LineChartWidgetStoriesMeta from "@/components/Widgets/Charts/LineChartWidget/index.stories"
import { PieChartWidget } from "@/components/Widgets/Charts/PieChartWidget"
import PieChartWidgetStoriesMeta from "@/components/Widgets/Charts/PieChartWidget/index.stories"
import { VerticalBarChartWidget } from "@/components/Widgets/Charts/VerticalBarChartWidget"
import VerticalBarChartWidgetStoriesMeta from "@/components/Widgets/Charts/VerticalBarChartWidget/index.stories"
import { Dashboard } from "@/components/Widgets/Dashboard"
import type { Meta, StoryObj } from "@storybook/react"
import { Tabs } from "."

const meta = {
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

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

const Overview = () => (
  <div className="grid grid-cols-[2fr_1fr] divide-x divide-y-0 divide-dashed divide-muted">
    <div className="pl-10 pr-8 pt-6">
      <Dashboard>
        <>{Array.from({ length: 6 }).map((_, i) => renderWidget(i))}</>
      </Dashboard>
    </div>
    <div className="pl-8 pr-10 pt-6">
      Column 2 Column 2 Column 2 Column 2 Column 2 Column 2 Column 2 Column 2
      Column 2 Column 2 Column 2 Column 2 Column 2 Column 2 Column 2 Column 2
      Column 2 Column 2 Column 2 Column 2 Column 2 Column 2 Column 2 Column 2
      Column 2 Column 2 Column 2 Column 2 Column 2 Column 2 Column 2 Column 2
      Column 2 Column 2 Column 2 Column 2 Column 2 Column 2 Column 2 Column 2
      Column 2 Column 2 Column 2 Column 2 Column 2 Column 2
    </div>
  </div>
)

const Profile = () => <div>Profile</div>
const Personal = () => <div>Personal</div>
const Agreement = () => <div>Agreement</div>
const TimeOff = () => <div>Time off</div>
const Competencies = () => <div>Competencies</div>
const Activity = () => <div>Activity</div>

export const Default: Story = {
  args: {
    tabs: [
      { name: "Overview", key: "overview", content: <Overview /> },
      { name: "Profile", key: "profile", content: <Profile /> },
      { name: "Personal", key: "personal", content: <Personal /> },
      { name: "Agreement", key: "agreement", content: <Agreement /> },
      { name: "Time off", key: "time-off", content: <TimeOff /> },
      { name: "Competencies", key: "competencies", content: <Competencies /> },
      { name: "Activity", key: "activity", content: <Activity /> },
    ],
    title: "Alba Horneros",
    subtitle: "Product Designer",
    src: "https://github.com/dani-moreno.png",
    alt: "DM",
  },
}

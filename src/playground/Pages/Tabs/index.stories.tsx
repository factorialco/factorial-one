import { AreaChartWidget } from "@/components/Widgets/Charts/AreaChartWidget"
import AreaChartWidgetStoriesMeta from "@/components/Widgets/Charts/AreaChartWidget/index.stories"
import { LineChartWidget } from "@/components/Widgets/Charts/LineChartWidget"
import LineChartWidgetStoriesMeta from "@/components/Widgets/Charts/LineChartWidget/index.stories"
import { PieChartWidget } from "@/components/Widgets/Charts/PieChartWidget"
import PieChartWidgetStoriesMeta from "@/components/Widgets/Charts/PieChartWidget/index.stories"
import { VerticalBarChartWidget } from "@/components/Widgets/Charts/VerticalBarChartWidget"
import VerticalBarChartWidgetStoriesMeta from "@/components/Widgets/Charts/VerticalBarChartWidget/index.stories"
import { Dashboard } from "@/components/Widgets/Dashboard"
import { User } from "@/icons"
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
  <Dashboard>
    {Array.from({ length: 6 }).map((_, i) => renderWidget(i))}
  </Dashboard>
)

const Profile = () => <div>Profile</div>
const Agreements = () => <div>Agreement</div>
const TimePlanning = () => <div>Time Planning</div>
const Documents = () => <div>Documents</div>

const TimeOff = () => <div>Time off</div>
const Reviews = () => <div>Reviews</div>

const Goals = () => <div>Goals</div>
const Activity = () => <div>Activity</div>

export const Default: Story = {
  args: {
    tabs: [
      { name: "Overview", key: "overview", content: <Overview /> },
      { name: "Profile", key: "profile", content: <Profile /> },
      { name: "Agreements", key: "agreements", content: <Agreements /> },
      {
        name: "Time planning",
        key: "time-planning",
        content: <TimePlanning />,
      },
      { name: "Documents", key: "documents", content: <Documents /> },
      { name: "Time off", key: "time-off", content: <TimeOff /> },
      { name: "Reviews", key: "reviews", content: <Reviews /> },
      { name: "Goals", key: "goals", content: <Goals /> },
      { name: "Activity", key: "activity", content: <Activity /> },
    ],
    title: "Alba Horneros",
    subtitle: "Product Designer",
    src: "https://github.com/dani-moreno.png",
    alt: "DM",
    routes: [{ title: "Employees", url: "/employees" }],
    breadcrumbTitle: "Alba Horneros",
    icon: User,
    details: [
      {
        title: "Email",
        content: "alicia.keys@factorial.co",
      },
      {
        title: "Phone",
        content: "(120) 687-3123",
      },
      {
        title: "Legal entity",
        content: "Everyday Software SL",
      },
      {
        title: "Start date",
        content: "01/01/2023",
      },
      {
        title: "Contract type",
        content: "Full time",
      },
    ],
    activatedDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    manager: "Isabella González",
    teams: ["Design", "Product", "Foundations Squad"],
  },
  parameters: {
    layout: "fullscreen",
    a11y: {
      config: {
        rules: [
          { id: "color-contrast", enabled: false },
          { id: "svg-img-alt", enabled: false },
        ],
      },
    },
  },
}

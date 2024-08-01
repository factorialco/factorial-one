// import AreaChartStory from "@/components/Charts/AreaChart/index.stories"
// import { AreaChartInsight } from "@/components/Insights/Charts/AreaChartInsight"
import { AutoGrid } from "@/components/Layout/AutoGrid"
import type { Meta, StoryObj } from "@storybook/react"
import { Tabs } from "."

const meta = {
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const Overview = () => (
  <div className="grid grid-cols-[2fr_1fr] divide-x divide-y-0 divide-dashed divide-muted">
    <AutoGrid tileSize="md" className="col-span-2 pl-10 pr-8 pt-6">
      {/* {Array.from({ length: 6 }).map((_, i) => (
        <AreaChartInsight
          key={i}
          header={{
            title: "An area chart",
            description: "This an awesome chart, enjoy",
          }}
          footer={{
            trend: "Going up",
            time: "5 months",
          }}
          chart={AreaChartStory.args}
        />
      ))} */}
    </AutoGrid>
    <div className="col-span-1 pl-8 pr-10 pt-6">
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
    alt: "@dani-moreno",
  },
}

import { WidgetContainer } from "@/components/Widgets/WidgetContainer"
import type { Meta, StoryObj } from "@storybook/react"
import { ProgressSection } from "../ProgressSection"

const meta = {
  title: "Insights/Examples/Timesheet",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[380px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Timesheet: Story = {
  render: () => (
    <>
      <h2 className="mb-4">Timesheet example</h2>
      <WidgetContainer
        header={{
          title: "Timesheet",
          subtitle: "July",
          link: {
            title: "View timesheet",
            url: "#",
          },
        }}
      >
        <ProgressSection
          label="Worked / Planned hours"
          value={75}
          max={100}
          showMax={true}
          unit="h"
          valueLabel="Worked"
          remainingLabel="Remaining"
          legend={false}
        />
        <ProgressSection
          label="Balance"
          value={9}
          max={50}
          showMax={true}
          unit="h"
          valueLabel="Worked"
          remainingLabel="Remaining"
          legend={false}
        />
      </WidgetContainer>
    </>
  ),
}

export const TimesheetOvertime: Story = {
  render: () => (
    <>
      <h2 className="mb-4">Timesheet Overtime example</h2>
      <WidgetContainer
        header={{
          title: "Timesheet",
          subtitle: "July",
          link: {
            title: "View timesheet",
            url: "#",
          },
        }}
      >
        <ProgressSection
          label="Worked / Planned hours"
          value={121}
          max={100}
          showMax={true}
          unit="h"
          valueLabel="Regular"
          remainingLabel="Overtime"
          legend={true}
        />
        <ProgressSection
          label="Balance"
          value={9}
          max={50}
          showMax={true}
          unit="h"
          valueLabel="Worked"
          remainingLabel="Remaining"
          legend={false}
        />
      </WidgetContainer>
    </>
  ),
}

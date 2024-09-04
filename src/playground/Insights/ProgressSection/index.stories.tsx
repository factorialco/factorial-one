import { WidgetContainer } from "@/components/Widgets/WidgetContainer"
import type { Meta, StoryObj } from "@storybook/react"
import { ProgressSection } from "."

const meta = {
  title: "Insights/ProgressSection",
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
          data={[
            { name: "Worked", value: 75 },
            {
              name: "Remaining",
              value: 25,
              color: "hsl(var(--muted))",
            },
          ]}
          legend={false}
        />
        <ProgressSection
          label="Balance"
          value={9}
          max={50}
          showMax={true}
          unit="h"
          data={[
            { name: "Worked", value: 9 },
            { name: "Remaining", value: 50, color: "hsl(var(--muted))" },
          ]}
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
          data={[
            { name: "Worked", value: 100 },
            {
              name: "Overtime",
              value: 21,
              color: "hsl(var(--primary-foreground))",
            },
          ]}
          legend={true}
        />
        <ProgressSection
          label="Balance"
          value={9}
          max={50}
          showMax={true}
          unit="h"
          data={[
            { name: "Worked", value: 9 },
            { name: "Remaining", value: 50, color: "hsl(var(--muted))" },
          ]}
          legend={false}
        />
      </WidgetContainer>
    </>
  ),
}

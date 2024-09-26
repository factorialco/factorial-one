import { CategoryBarSection } from "@/experimental/Widgets/Content/CategoryBarSection"
import { Widget } from "@/experimental/Widgets/Widget"
import type { Meta, StoryObj } from "@storybook/react"

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
      <Widget
        header={{
          title: "Timesheet",
          subtitle: "July",
          link: {
            title: "View timesheet",
            url: "#",
          },
        }}
      >
        <CategoryBarSection
          label="Worked / Planned hours"
          title="75h"
          subtitle="100h"
          data={[
            {
              name: "Worked",
              value: 75,
            },
            {
              name: "Remaining",
              value: 25,
              color: "#25253D1A",
            },
          ]}
          legend
        />
        <CategoryBarSection
          label="Balance"
          title="9h"
          subtitle="50h"
          data={[
            {
              name: "Worked",
              value: 9,
            },
            {
              name: "Remaining",
              value: 41,
              color: "#25253D1A",
            },
          ]}
          legend
        />
      </Widget>
    </>
  ),
}

export const TimesheetOvertime: Story = {
  render: () => (
    <>
      <h2 className="mb-4">Timesheet Overtime example</h2>
      <Widget
        header={{
          title: "Timesheet",
          subtitle: "July",
          link: {
            title: "View timesheet",
            url: "#",
          },
        }}
      >
        <CategoryBarSection
          label="Worked / Planned hours"
          title="121h"
          subtitle="100h"
          data={[
            {
              name: "Regular",
              value: 100,
            },
            {
              name: "Overtime",
              value: 21,
              color: "#FF9153",
            },
          ]}
          legend
        />
        <CategoryBarSection
          label="Balance"
          title="+9h"
          subtitle="50h"
          data={[
            {
              name: "Regular",
              value: 9,
              color: "#FF9153",
            },
            {
              name: "Overtime",
              value: 41,
              color: "#FF915333",
            },
          ]}
        />
      </Widget>
    </>
  ),
}

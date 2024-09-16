import { WidgetContainer } from "@/components/Widgets/WidgetContainer"
import type { Meta, StoryObj } from "@storybook/react"
import { CategoryBarSection } from "../CategoryBarSection"

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
        <CategoryBarSection
          label="Worked / Planned hours"
          title="75h / 100h"
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
          title="9h / 50h"
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
        <CategoryBarSection
          label="Worked / Planned hours"
          title="121h / 100h"
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
          helpText="of 50h max"
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
      </WidgetContainer>
    </>
  ),
}

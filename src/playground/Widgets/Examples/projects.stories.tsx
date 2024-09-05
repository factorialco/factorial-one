import { WidgetContainer } from "@/components/Widgets/WidgetContainer"
import type { Meta, StoryObj } from "@storybook/react"
import { List } from "../List"

const meta = {
  title: "Widgets/Examples/Projects",
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

export const Projects: Story = {
  render: () => (
    <>
      <h2 className="mb-4">Projects example</h2>
      <WidgetContainer
        header={{
          title: "Projects",
          subtitle: "July",
          link: {
            title: "View projects",
            url: "#",
          },
        }}
        summaries={[
          { label: "Total hours", value: 561, postfixUnit: "h" },
          { label: "Cost per hour", value: 45, postfixUnit: "€" },
        ]}
        action={{
          label: "See 5 more",
          onClick: () => {},
        }}
      >
        <List
          items={[
            { name: "Project 1", value: "115h" },
            { name: "Project 2", value: "112h" },
            { name: "Project 3", value: "110h" },
          ]}
        />
      </WidgetContainer>
    </>
  ),
}

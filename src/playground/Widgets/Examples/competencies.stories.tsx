import { WidgetContainer } from "@/components/Widgets/WidgetContainer"
import type { Meta, StoryObj } from "@storybook/react"
import { List } from "../List"

const meta = {
  title: "Widgets/Examples/Competencies",
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

export const Competencies: Story = {
  render: () => (
    <>
      <h2 className="mb-4">Competencies example</h2>
      <WidgetContainer
        header={{
          title: "Competencies",
          link: {
            title: "View competencies",
            url: "#",
          },
        }}
      >
        <List
          title="Soft skills"
          items={[
            { name: "Research & Analysis", value: 60, type: "progress" },
            { name: "Ideation & Planning", value: 80, type: "progress" },
          ]}
        />
        <List
          title="Soft skills"
          items={[{ name: "Design & Craft", value: 70, type: "progress" }]}
        />
        <List
          title="Soft skills"
          items={[
            { name: "Learning & Sharing", value: 30, type: "progress" },
            {
              name: "Communication & Collaboration",
              value: 50,
              type: "progress",
            },
          ]}
        />
      </WidgetContainer>
    </>
  ),
}

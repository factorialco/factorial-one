import type { Meta, StoryObj } from "@storybook/react"

import { ApplicationFrame } from "../ApplicationFrame"

import { HomeLayout } from "../../PageLayouts/HomeLayout"
import { Default as DefaultHomeLayoutStory } from "../../PageLayouts/HomeLayout/index.stories"
import { DaytimePage, DaytimePageProps } from "./index"

const meta: Meta<typeof DaytimePage> = {
  title: "Navigation/DaytimePage",
  component: DaytimePage,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <ApplicationFrame sidebar={null}>
        <Story />
      </ApplicationFrame>
    ),
  ],
}

export default meta
type Story = StoryObj<DaytimePageProps>

export const DaytimeHomeLayout: Story = {
  args: {
    period: "morning",
  },
  argTypes: {
    period: {
      control: "select",
      options: ["morning", "afternoon", "evening"],
    },
  },
  render: ({ period }) => (
    <DaytimePage
      period={period}
      header={{
        employeeFirstName: "Saul",
        employeeLastName: "Goodman",
        title: "Good morning, Saul!",
        employeeAvatar: "https://github.com/sauldom102.png",
      }}
    >
      <HomeLayout {...DefaultHomeLayoutStory.args} />
    </DaytimePage>
  ),
}

import type { Meta, StoryObj } from "@storybook/react-vite"

import { ApplicationFrame } from "../ApplicationFrame"

import { HomeLayout } from "@/components/layouts/HomeLayout"
import { Default as DefaultHomeLayoutStory } from "@/components/layouts/HomeLayout/index.stories"
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

export const DaytimeHomeLayoutWithDescription: Story = {
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
        description: "How are you feeling today?",
        employeeAvatar: "https://github.com/sauldom102.png",
      }}
    >
      <HomeLayout {...DefaultHomeLayoutStory.args} />
    </DaytimePage>
  ),
}

export const DaytimeHomeLayoutWithMood: Story = {
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
        description: "How are you feeling today?",
        pulse: "positive",
        onPulseClick: () => {},
        employeeAvatar: "https://github.com/sauldom102.png",
      }}
    >
      <HomeLayout {...DefaultHomeLayoutStory.args} />
    </DaytimePage>
  ),
}

export const DaytimeHomeLayoutWithMoodNotSet: Story = {
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
        description: "How are you feeling today?",
        pulse: undefined,
        onPulseClick: () => {},
        employeeAvatar: "https://github.com/sauldom102.png",
      }}
    >
      <HomeLayout {...DefaultHomeLayoutStory.args} />
    </DaytimePage>
  ),
}

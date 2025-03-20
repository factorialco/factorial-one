import type { Meta, StoryObj } from "@storybook/react"

import { TwoColumnsList } from "."
import { ProgressBarDuo } from "../ProgressBarDuo"

const meta: Meta = {
  title: "Widgets/Content/TwoColumnsList",
  component: TwoColumnsList,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  args: {
    list: [
      {
        title: "Project 3",
        info: "115 h",
      },
      {
        title: "Project 2",
        info: "112 h",
      },
      {
        title: "Project 5",
        info: "111 h",
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-[386px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Title: Story = {
  args: {
    title: "Soft skills",
  },
}

export const Progress: Story = {
  args: {
    title: "Soft skills",
    list: [
      {
        title: "Research & Analysis",
        info: <ProgressBarDuo value={65} />,
      },
      {
        title: "Ideation & Planning",
        info: <ProgressBarDuo value={75} />,
      },
    ],
  },
}

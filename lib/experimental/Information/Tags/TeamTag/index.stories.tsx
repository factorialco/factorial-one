import type { Meta, StoryObj } from "@storybook/react"

import { TeamTag } from "."

const meta: Meta = {
  component: TeamTag,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    teamName: "Team Foundations",
    teamImageUrl: "https://avatars.githubusercontent.com/t/6173255?s=116&v=4",
    onClick: () => {},
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTeamTag: Story = {}
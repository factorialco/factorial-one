import type { Meta, StoryObj } from "@storybook/react"

import { TeamTag } from "."

const meta: Meta = {
  component: TeamTag,
  title: "Tag/TeamTag",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
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

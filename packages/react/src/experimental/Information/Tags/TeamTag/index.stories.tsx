import type { Meta, StoryObj } from "@storybook/react-vite"

import { TeamTag } from "./index"

const meta: Meta = {
  component: TeamTag,
  title: "Tag/TeamTag",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  args: {
    teamName: "Team Foundations",
    teamImageUrl: "/avatars/team01.jpg",
    onClick: () => {},
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTeamTag: Story = {}

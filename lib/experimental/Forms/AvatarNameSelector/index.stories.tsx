import type { Meta, StoryObj } from "@storybook/react"

import { fn } from "@storybook/test"
import { ComponentProps } from "react"
import { AvatarNameSelector } from "."
import { famousEmployees } from "./avatar-name.factory.spec"
import { teamsWithEmployees } from "./teams-avatar-name.factory.spec"

const meta: Meta = {
  component: AvatarNameSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full min-w-72 max-w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    entities: famousEmployees,
    placeholder: "Select employees...",
    groups: [
      { label: "Employees", value: "all" },
      { label: "Teams", value: "teams" },
      { label: "Projects", value: "projects" },
    ],
    selectedGroup: "all",
    onGroupChange: fn(),
  } satisfies ComponentProps<typeof AvatarNameSelector>,
} satisfies Meta<typeof AvatarNameSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithSelectedGroup: Story = {
  args: {
    entities: teamsWithEmployees,
    placeholder: "Select employees...",
    groups: [
      { label: "Employees", value: "all" },
      { label: "Teams", value: "teams" },
      { label: "Projects", value: "projects" },
    ],
    selectedGroup: "teams",
    onGroupChange: fn(),
  } satisfies ComponentProps<typeof AvatarNameSelector>,
}

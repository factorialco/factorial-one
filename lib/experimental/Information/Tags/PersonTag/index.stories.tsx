import type { Meta, StoryObj } from "@storybook/react"

import { PersonTag } from "."

const meta: Meta = {
  component: PersonTag,
  title: "Tag/PersonTag",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  args: {
    name: "Saul Dominguez",
    avatarUrl: "https://avatars.githubusercontent.com/u/22561733?v=4",
    onClick: () => {},
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultPersonTag: Story = {}

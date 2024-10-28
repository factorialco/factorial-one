import type { Meta, StoryObj } from "@storybook/react"

import { PersonTag } from "."

const meta: Meta = {
  component: PersonTag,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    name: "Saul Dominguez",
    avatarUrl: "https://avatars.githubusercontent.com/u/22561733?v=4",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCompanyTag: Story = {}

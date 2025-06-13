import type { Meta, StoryObj } from "@storybook/react-vite"

import { PersonTag } from "./index"

const meta: Meta = {
  component: PersonTag,
  title: "Tag/PersonTag",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  args: {
    name: "Saul Dominguez",
    avatarUrl: "/avatars/person05.jpg",
    onClick: () => {},
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultPersonTag: Story = {}

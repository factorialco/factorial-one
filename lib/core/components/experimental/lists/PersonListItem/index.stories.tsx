import { Check, Placeholder } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import avatar from "../../../../../../storybook-assets/avatar.jpeg"
import { PersonListItem } from "./index.tsx"

const meta = {
  title: "PersonListItem",
  component: PersonListItem,
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof PersonListItem>

export default meta
type Story = StoryObj<typeof PersonListItem>

export const Default: Story = {
  args: {
    person: {
      firstName: "John",
      lastName: "Smith",
      avatarUrl: avatar,
      avatarBadge: {
        icon: Check,
        type: "positive",
      },
    },
    description: "Software Engineer",
    rightTag: {
      text: "Parental leave",
      color: "army",
    },
  },
}

export const WithActions: Story = {
  args: {
    person: {
      firstName: "Sarah",
      lastName: "Johnson",
      avatarUrl: avatar,
    },
    description: "Product Designer",
    actions: {
      primary: {
        icon: Placeholder,
        label: "Message",
        onClick: fn(),
      },
      secondary: {
        icon: Placeholder,
        onClick: fn(),
      },
    },
  },
}

export const WithTags: Story = {
  args: {
    person: {
      firstName: "Emma",
      lastName: "Wilson",
      avatarUrl: avatar,
    },
    bottomTags: [
      { text: "Label", icon: Placeholder },
      { text: "Label", icon: Placeholder },
      { text: "Label", icon: Placeholder },
      { text: "Label", icon: Placeholder },
    ],
  },
}

export const Minimal: Story = {
  args: {
    person: {
      firstName: "Emma",
      lastName: "Wilson",
      avatarUrl: avatar,
    },
    description: "Software Engineer",
  },
}

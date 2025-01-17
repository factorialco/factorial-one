import { Check, Placeholder } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { PersonListItem } from "./index"

const meta = {
  title: "Experimental/Lists/PersonListItem",
  component: PersonListItem,
  tags: ["autodocs"],
} satisfies Meta<typeof PersonListItem>

export default meta
type Story = StoryObj<typeof PersonListItem>

export const Default: Story = {
  args: {
    person: {
      firstName: "John",
      lastName: "Smith",
      avatarUrl: "https://i.pravatar.cc/300",
      avatarBadge: {
        icon: Check,
        type: "positive",
      },
    },
    description: "Software Engineer",
    tag: {
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
      avatarUrl: "https://i.pravatar.cc/300",
    },
    description: "Product Designer",
    actions: {
      primary: {
        icon: Placeholder,
        label: "Message",
        onClick: () => console.log("Primary action clicked"),
      },
      secondary: {
        icon: Placeholder,
        onClick: () => console.log("Secondary action clicked"),
      },
    },
  },
}

export const WithTags: Story = {
  args: {
    person: {
      firstName: "Emma",
      lastName: "Wilson",
      avatarUrl: "https://i.pravatar.cc/300",
    },
    tags: [
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
      avatarUrl: "https://i.pravatar.cc/300",
    },
    description: "Software Engineer",
  },
}

import {
  Add,
  Archive,
  Delete,
  Download,
  Envelope,
  Placeholder,
} from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { OneCard } from "./OneCard"

const meta = {
  component: OneCard,
  title: "Card",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex h-[calc(100vh-32px)] w-full items-center justify-center">
        <div className="w-full max-w-[372px]">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof OneCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Card with Description",
    description: "This is a description for the card.",
    metadata: [
      {
        type: "text",
        icon: Placeholder,
        title: "Metadata Item 1",
      },
      {
        type: "avatarList",
        icon: Placeholder,
        avatars: [
          {
            type: "person",
            firstName: "John",
            lastName: "Doe",
          },
          {
            type: "person",
            firstName: "Jane",
            lastName: "Smith",
          },
          {
            type: "person",
            firstName: "Jim",
            lastName: "Beam",
          },
        ],
      },
      {
        type: "status",
        icon: Placeholder,
        status: "positive",
        label: "Active",
      },
    ],
    primaryAction: {
      label: "Add",
      icon: Add,
      onClick: fn(),
    },
    secondaryActions: [
      {
        label: "Archive",
        icon: Archive,
        onClick: fn(),
      },
      {
        label: "Download",
        icon: Download,
        onClick: fn(),
      },
    ],
    otherActions: [
      {
        label: "Mail",
        icon: Envelope,
        onClick: fn(),
      },
      { type: "separator" },
      {
        label: "Delete",
        icon: Delete,
        onClick: fn(),
        critical: true,
      },
    ],
  },
}

export const WithLink: Story = {
  args: {
    ...Default.args,
    link: "/",
  },
}

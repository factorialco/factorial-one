import { Calendar } from "@/icons/app"
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
        <div className="max-w-[372px]">
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
    title: "Custom Card Title",
  },
}

export const WithContent: Story = {
  args: {
    title: "Card with Content",
    children: <p>This is some sample content for the card.</p>,
  },
}

export const WithDescription: Story = {
  args: {
    title: "Card with Description",
    description: "This is a description for the card.",
    primaryAction: {
      label: "View",
      onClick: fn(),
    },
    secondaryAction: {
      label: "Calendar",
      icon: Calendar,
      onClick: fn(),
    },
    otherAction: {
      label: "Delete",
      onClick: fn(),
    },
  },
}

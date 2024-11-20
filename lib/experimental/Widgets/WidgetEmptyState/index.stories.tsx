import type { Meta, StoryObj } from "@storybook/react"

import { Placeholder as PlaceholderIcon } from "@/icons/app"
import { WidgetEmptyState } from "."

const meta: Meta<typeof WidgetEmptyState> = {
  component: WidgetEmptyState,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    title: "Title",
    description: "Description",
    emoji: "🍆",
    actions: {
      primary: {
        icon: PlaceholderIcon,
        onClick: () => {},
        label: "Label",
      },
      outline: {
        icon: PlaceholderIcon,
        onClick: () => {},
        label: "Label",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[360px] rounded-lg border border-solid border-f1-border-secondary">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultWidgetEmptyState: Story = {}

export const AlertWidgetEmptyState: Story = {
  args: {
    emoji: undefined,
  },
}

export const WidgetEmptyStateWithLongTexts: Story = {
  args: {
    emoji: undefined,
    title:
      "Really really long title that we want to show that we want to show to our users for them to read",
    description:
      "Really really long description that we want to show to our users for them to read and express their thoughts",
  },
}

export const WidgetEmptyStateWithoutActions: Story = {
  args: {
    emoji: undefined,
    actions: undefined,
  },
}

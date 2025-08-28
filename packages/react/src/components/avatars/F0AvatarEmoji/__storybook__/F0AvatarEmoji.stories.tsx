import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0AvatarEmoji } from "../F0AvatarEmoji"

const meta: Meta<typeof F0AvatarEmoji> = {
  component: F0AvatarEmoji,
  title: "Avatars/AvatarEmoji",
  tags: ["autodocs", "experimental"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  args: {
    emoji: "🍑",
    size: "medium",
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof F0AvatarEmoji>

export const Default: Story = {}

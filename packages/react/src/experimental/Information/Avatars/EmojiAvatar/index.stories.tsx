import type { Meta, StoryObj } from "@storybook/react-vite"
import { EmojiAvatar } from "./index"

const meta: Meta<typeof EmojiAvatar> = {
  component: EmojiAvatar,
  title: "Avatars/EmojiAvatar",
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

type Story = StoryObj<typeof EmojiAvatar>

export const Default: Story = {}

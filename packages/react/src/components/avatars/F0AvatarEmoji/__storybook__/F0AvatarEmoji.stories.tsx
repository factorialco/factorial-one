import type { Meta, StoryObj } from "@storybook/react-vite"
import { getBaseAvatarArgTypes } from "../../BaseAvatar/__stories__/utils"
import { avatarEmojiSizes, F0AvatarEmoji } from "../F0AvatarEmoji"

const meta: Meta<typeof F0AvatarEmoji> = {
  component: F0AvatarEmoji,
  title: "Avatars/AvatarEmoji",
  tags: ["autodocs"],
  argTypes: {
    ...getBaseAvatarArgTypes(["size", "aria-label", "aria-labelledby"]),
    size: {
      control: "select",
      options: avatarEmojiSizes,
      description: "The size of the avatar",
    },
  },
  args: {
    emoji: "🍑",
    size: "sm",
  },
  parameters: {
    docs: {
      description: {
        component: ["An avatar component that displays an emoji."]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
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

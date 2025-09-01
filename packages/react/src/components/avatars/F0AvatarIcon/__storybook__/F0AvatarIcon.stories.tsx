import * as Icons from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { getBaseAvatarArgTypes } from "../../BaseAvatar/__stories__/utils"
import { avatarIconSizes, F0AvatarIcon } from "../F0AvatarIcon"

const meta: Meta<typeof F0AvatarIcon> = {
  component: F0AvatarIcon,
  title: "Avatars/AvatarIcon",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: avatarIconSizes,
      description: "The size of the avatar",
    },
    icon: {
      control: "select",
      options: Object.keys(Icons),
      mapping: Icons,
      description: "The icon to display in the avatar",
    },
    ...getBaseAvatarArgTypes(["aria-label", "aria-labelledby"]),
  },
  args: {
    icon: Icons.Placeholder,
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        component: ["An avatar component that displays an icon."]
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

type Story = StoryObj<typeof F0AvatarIcon>

export const Default: Story = {}

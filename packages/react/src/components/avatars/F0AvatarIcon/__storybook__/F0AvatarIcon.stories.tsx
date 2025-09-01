import { Placeholder } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0AvatarIcon } from "../F0AvatarIcon"

const meta: Meta<typeof F0AvatarIcon> = {
  component: F0AvatarIcon,
  title: "Avatars/AvatarIcon",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  args: {
    icon: Placeholder,
    size: "md",
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

type Story = StoryObj<typeof F0AvatarIcon>

export const Default: Story = {}

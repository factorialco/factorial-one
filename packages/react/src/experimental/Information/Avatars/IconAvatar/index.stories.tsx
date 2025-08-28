import { Placeholder } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconAvatar } from "./index"

const meta: Meta<typeof IconAvatar> = {
  component: IconAvatar,
  title: "Avatars/IconAvatar",
  tags: ["autodocs", "experimental"],
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

type Story = StoryObj<typeof IconAvatar>

export const Default: Story = {}

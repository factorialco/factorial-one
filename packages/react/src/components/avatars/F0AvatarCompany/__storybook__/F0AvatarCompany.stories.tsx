import { sizes } from "@/ui/avatar"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0AvatarCompany } from "../F0AvatarCompany"

const meta: Meta<typeof F0AvatarCompany> = {
  component: F0AvatarCompany,
  title: "Avatars/AvatarCompany",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: sizes,
      defaultValue: "medium",
      description: "The size of the avatar",
    },
    badge: {
      control: "object",
    },
    "aria-label": {
      control: "text",
    },
    "aria-labelledby": {
      control: "text",
    },
    src: {
      control: "text",
    },
    name: {
      control: "text",
    },
  },
  parameters: {
    docs: {
      description: {
        component: [
          "A company avatar component.",
          "If no logo is provided, it will display the company name initials",
          "NOTE: The avatar color is always viridian",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  args: {
    name: "Factorial",
    size: "medium",
    "aria-label": "Factorial avatar",
  },
}

export default meta

type Story = StoryObj<typeof F0AvatarCompany>

export const Default: Story = {}

export const WithImage: Story = {
  args: {
    src: "/avatars/factorial.png",
  },
}

export const WithModuleBadge: Story = {
  args: {
    src: "/avatars/factorial.png",
    badge: {
      type: "module",
      module: "inbox",
    },
  },
}

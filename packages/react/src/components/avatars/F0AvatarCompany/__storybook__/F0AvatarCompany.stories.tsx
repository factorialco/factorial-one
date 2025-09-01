import type { Meta, StoryObj } from "@storybook/react-vite"
import { getBaseAvatarArgTypes } from "../../BaseAvatar/__stories__/utils"
import { F0AvatarCompany } from "../F0AvatarCompany"

const meta: Meta<typeof F0AvatarCompany> = {
  component: F0AvatarCompany,
  title: "Avatars/AvatarCompany",
  tags: ["autodocs"],
  argTypes: {
    ...getBaseAvatarArgTypes([
      "size",
      "aria-label",
      "aria-labelledby",
      "badge",
    ]),
    name: {
      control: "text",
      description:
        "The company name to display (used for initials if no image provided)",
    },
    src: {
      control: "text",
      description:
        "URL of the company logo/image. If no logo is provided, it will display the company name initials with a fixed background color.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: ["A company avatar component."]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  args: {
    name: "Factorial",
    size: "md",
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

import * as Icon from "@/icons/app/"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { PersonHeader } from "./index"
const meta: Meta<typeof PersonHeader> = {
  title: "ResourceHeader/PersonHeader",
  component: PersonHeader,
  parameters: {
    layout: "padded",
  },
}

export default meta

type Story = StoryObj<typeof PersonHeader>

export const Default: Story = {
  args: {
    firstName: "René",
    lastName: "Galindo",
    description: "Product Design Lead",
    src: "https://github.com/renegalindo.png",
    metadata: [
      {
        label: "Manager",
        value: {
          type: "avatar",
          variant: {
            type: "person",
            firstName: "Ilya",
            lastName: "Zayats",
            src: "https://github.com/somebody32.png",
          },
          text: "ilya Zayats",
        },
      },
      {
        label: "Team",
        value: {
          type: "avatar",
          variant: {
            type: "team",
            name: "Product design",
          },
          text: "Product design",
        },
      },
      {
        label: "Phone",
        value: { type: "text", content: "+34 675 254 394" },
        actions: [
          {
            label: "Chat in WhatsApp",
            icon: Icon.WhatsappChat,
            onClick: fn(),
          },
          {
            label: "Copy",
            icon: Icon.LayersFront,
            onClick: fn(),
          },
        ],
      },
    ],
  },
}

import * as Icon from "@/icons/app/"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { Metadata } from "."

const meta: Meta<typeof Metadata> = {
  component: Metadata,
  parameters: {
    layout: "padded",
  },
}

export default meta

type Story = StoryObj<typeof Metadata>

export const Default: Story = {
  args: {
    items: [
      {
        label: "Type",
        value: { type: "text", content: "Text" },
      },
      {
        label: "Type",
        value: {
          type: "avatar",
          variant: {
            type: "team",
            name: "Avatar",
          },
          text: "Avatar",
        },
      },
      {
        label: "Type",
        value: {
          type: "status",
          label: "Status",
          variant: "warning",
        },
      },
    ],
  },
}

export const WithActions: Story = {
  args: {
    items: [
      {
        label: "Email",
        value: { type: "text", content: "mario@confetti.fantasy" },
        actions: [
          {
            label: "Copy",
            icon: Icon.LayersFront,
            onClick: fn(),
          },
          {
            label: "Edit",
            icon: Icon.Pencil,
            onClick: fn(),
          },
        ],
      },
    ],
  },
}

import * as Icon from "@/icons/app/"
import { LayersFront, Pencil } from "@/icons/app/"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { PersonHeader } from "./index"

const meta: Meta<typeof PersonHeader> = {
  component: PersonHeader,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof PersonHeader>

export const Default: Story = {
  args: {
    firstName: "Josep Jaume",
    lastName: "Rey",
    description: "Chief Confetti Officer",
    src: "https://github.com/josepjaume.png",
    primaryAction: {
      label: "Edit",
      icon: Icon.Pencil,
      onClick: () => console.log("Edit clicked"),
    },
    secondaryActions: [
      {
        label: "Promote",
        onClick: () => console.log("Promote clicked"),
      },
      {
        label: "Remove",
        icon: Icon.Delete,
        variant: "critical",
        onClick: () => console.log("Remove clicked"),
      },
    ],
    metadata: [
      {
        label: "Email",
        value: { type: "text", content: "josep@confetti.com" },
        actions: [
          {
            label: "Edit",
            icon: Pencil,
            onClick: fn(),
          },
          {
            label: "Copy",
            icon: LayersFront,
            onClick: fn(),
          },
        ],
      },
    ],
  },
}

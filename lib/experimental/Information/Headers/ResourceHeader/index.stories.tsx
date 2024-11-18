import * as Icon from "@/icons/app/"
import type { Meta, StoryObj } from "@storybook/react"
import { ResourceHeader } from "./index"

const meta: Meta<typeof ResourceHeader> = {
  component: ResourceHeader,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof ResourceHeader>

export const Default: Story = {
  args: {
    title: "Senior Product Designer",
    description:
      "Open position on our team, seeking an experienced product designer to lead design initiatives",
    status: {
      label: "Published",
      variant: "positive",
    },
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
  },
}

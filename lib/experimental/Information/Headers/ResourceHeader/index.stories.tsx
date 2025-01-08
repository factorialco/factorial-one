import { Comment, LayersFront, Pencil } from "@/icons/app"
import * as Icon from "@/icons/app/"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
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
      label: "Status",
      text: "Published",
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

export const Metadata: Story = {
  args: {
    title: "Senior Product Designer",
    description:
      "Open position on our team, seeking an experienced product designer to lead design initiatives",
    status: {
      label: "Status",
      text: "Published",
      variant: "positive",
    },
    secondaryActions: [
      {
        label: "Edit",
        icon: Icon.Pencil,
        onClick: fn(),
      },
      {
        label: "Export",
        icon: Icon.Download,
        onClick: fn(),
      },
    ],
    metadata: [
      {
        label: "Created at a large label indeed",
        value: { type: "text", content: "2024-01-01" },
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
      {
        label: "Manager",
        value: {
          type: "avatar",
          variant: {
            type: "person",
            firstName: "Josep Jaume",
            lastName: "Rey",
            src: "https://github.com/josepjaume.png",
          },
          text: "Josep Jaume Rey",
        },
        actions: [
          {
            label: "Edit",
            icon: Pencil,
            onClick: fn(),
          },
          {
            label: "Comment",
            icon: Comment,
            onClick: fn(),
          },
        ],
      },
      {
        label: "Contract",
        value: {
          type: "status",
          label: "Pending",
          variant: "warning",
        },
      },
    ],
  },
}

import {
  Archive,
  Comment,
  Download,
  ExternalLink,
  LayersFront,
  Pencil,
} from "@/icons/app"
import * as Icon from "@/icons/app/"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { ResourceHeader } from "./index"

const meta: Meta<typeof ResourceHeader> = {
  component: ResourceHeader,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      description: "Main heading identifying the resource",
    },
    description: {
      description: "Supporting text providing additional context",
    },
    status: {
      description: "Visual indicator of the resource's current state",
    },
    metadata: {
      description:
        "Horizontal list of key-value pairs showing relevant information",
    },
    primaryAction: {
      description:
        "Main button representing the most important action available for the resource",
    },
    secondaryActions: {
      description:
        "Complementary set of lower-priority actions offering additional but less frequent functionalities",
    },
    otherActions: {
      description:
        "Expandable menu containing additional operations and advanced options",
    },
  },
}

export default meta

type Story = StoryObj<typeof ResourceHeader>

const defaultArgs = {
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
    onClick: fn(),
  },
} as const

export const Default: Story = {
  args: {
    ...defaultArgs,
    secondaryActions: [
      {
        label: "Promote",
        onClick: fn(),
      },
      {
        label: "Remove",
        icon: Icon.Delete,
        variant: "critical",
        onClick: fn(),
      },
    ],
  },
}

export const Metadata: Story = {
  args: {
    ...defaultArgs,
    primaryAction: undefined,
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
        label: "Created",
        value: { type: "text", content: "2024-01-01" },
        actions: [
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

export const WithOtherActions: Story = {
  args: {
    ...defaultArgs,
    secondaryActions: [
      {
        label: "Promote",
        onClick: fn(),
      },
    ],
    otherActions: [
      {
        label: "Share",
        icon: ExternalLink,
        onClick: fn(),
      },
      {
        label: "Download",
        icon: Download,
        onClick: fn(),
      },
      "separator",
      {
        label: "Archive",
        icon: Archive,
        critical: true,
        onClick: fn(),
      },
    ],
  },
}

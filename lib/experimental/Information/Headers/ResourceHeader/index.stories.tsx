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
  title: "ResourceHeader/ResourceHeader",
  component: ResourceHeader,
  tags: ["stable"],
  parameters: {
    layout: "padded",
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

export const Default: Story = {
  args: {
    title: "Senior Product Designer",
    description:
      "Seeking an experienced product designer to lead design initiatives",
    status: {
      label: "Status",
      text: "Published",
      variant: "positive",
      actions: [
        {
          label: "Edit",
          icon: Icon.Pencil,
          onClick: fn(),
        },
      ],
    },
    secondaryActions: [
      {
        label: "Edit",
        icon: Icon.Pencil,
        onClick: fn(),
      },
      {
        label: "Unlist",
        icon: Icon.Delete,
        variant: "critical",
        onClick: fn(),
      },
    ],
    otherActions: [
      {
        label: "Archive",
        icon: Icon.Archive,
        onClick: fn(),
      },
      {
        label: "Copy URL",
        icon: Icon.LayersFront,
        onClick: fn(),
      },
    ],
    metadata: [
      {
        label: "Location",
        value: { type: "text", content: "Barcelona, Spain" },
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
    ],
  },
}

export const Simple: Story = {
  args: {
    ...Default.args,
    status: undefined,
  },
}

export const Metadata: Story = {
  args: {
    ...Default.args,
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
    ...Default.args,
    secondaryActions: [
      {
        label: "Promote",
        onClick: fn(),
        disabled: true,
        tooltip: "Recharge your account",
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

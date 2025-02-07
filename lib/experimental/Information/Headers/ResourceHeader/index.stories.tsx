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
      text: "Draft",
      variant: "neutral",
      actions: [
        {
          label: "Edit",
          icon: Icon.Pencil,
          onClick: fn(),
        },
      ],
    },

    primaryAction: {
      label: "Publish",
      icon: Icon.ArrowUp,
      onClick: fn(),
    },
    secondaryActions: [
      {
        label: "Edit",
        icon: Icon.Pencil,
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
      "separator",
      {
        label: "Unlist",
        icon: Icon.Delete,
        critical: true,
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

export const CompanyHeader: Story = {
  args: {
    title: "Factorial",
    description: "HR Software to Empower Your Team",
    avatar: {
      type: "company",
      name: "Factorial",
      src: "https://github.com/factorialco.png",
    },
    secondaryActions: [
      {
        label: "Edit client",
        icon: Icon.Pencil,
        onClick: fn(),
      },
    ],
    metadata: [
      {
        label: "Legal name",
        value: { type: "text", content: "Everyday Software S.L." },
        actions: [
          {
            label: "Copy",
            icon: Icon.LayersFront,
            onClick: fn(),
          },
        ],
      },
      {
        label: "Tax identification number",
        value: { type: "text", content: "B-675254394" },
      },
    ],
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

export const PersonHeader: Story = {
  args: {
    title: "René Galindo",
    description: "Product Design Lead",
    avatar: {
      type: "person",
      firstName: "René",
      lastName: "Galindo",
      src: "https://github.com/renegalindo.png",
    },
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

export const TeamHeader: Story = {
  args: {
    title: "Product designers",
    description: "Rectangle drawers and post-it stickers",
    avatar: {
      type: "team",
      name: "Product designers",
    },
    primaryAction: {
      label: "Add members",
      icon: Icon.Add,
      onClick: fn(),
    },
    secondaryActions: [
      {
        label: "Edit",
        icon: Icon.Pencil,
        onClick: fn(),
      },
    ],
    otherActions: [
      {
        label: "Export",
        icon: Icon.Download,
        onClick: fn(),
      },
      {
        label: "Share",
        icon: Icon.ExternalLink,
        onClick: fn(),
      },
      "separator",
      {
        label: "Delete",
        icon: Icon.Delete,
        critical: true,
        onClick: fn(),
      },
    ],
    metadata: [
      {
        label: "Team leader",
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
            icon: Icon.Pencil,
            onClick: fn(),
          },
          {
            label: "Comment",
            icon: Icon.Comment,
            onClick: fn(),
          },
        ],
      },
      {
        label: "Members",
        value: { type: "text", content: "22" },
      },
    ],
  },
}

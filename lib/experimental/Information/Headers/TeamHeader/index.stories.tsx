import * as Icon from "@/icons/app/"
import { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { TeamHeader } from "."

const meta = {
  title: "ResourceHeader/TeamHeader",
  component: TeamHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TeamHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: "Product designers",
    description: "Rectangle drawers and post-it stickers",
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

export const WithAvatar: Story = {
  args: {
    name: "Design Team",
    description: "Product design and user experience team",
    src: "https://avatars.githubusercontent.com/u/12345678?v=4",
  },
}

export const WithActions: Story = {
  args: {
    name: "Marketing Team",
    description: "Brand and marketing strategy team",
    primaryAction: {
      label: "Edit Team",
      onClick: () => alert("Edit clicked"),
    },
  },
}

export const WithMetadata: Story = {
  args: {
    name: "Product Team",
    description: "Product management and strategy team",
    metadata: [
      { label: "Members", value: { type: "text", content: "12" } },
      { label: "Projects", value: { type: "text", content: "5" } },
      { label: "Location", value: { type: "text", content: "Remote" } },
    ],
  },
}

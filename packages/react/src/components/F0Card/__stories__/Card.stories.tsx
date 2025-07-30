import {
  Add,
  Briefcase,
  Calendar,
  CalendarArrowRight,
  Delete,
  Envelope,
  ExternalLink,
  Office,
  Star,
} from "@/icons/app"
import image from "@storybook-static/avatars/person04.jpg"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { fn } from "storybook/test"
import { F0Card } from "../Card"

const SlotComponent = () => {
  return (
    <div className="w-full rounded border-2 border-dashed border-f1-border-info bg-f1-background-info p-5 text-center font-medium text-f1-foreground-info">
      This is a slot (children)
    </div>
  )
}

const meta = {
  component: F0Card,
  title: "Card",
  parameters: {
    docs: {
      story: { inline: false, height: "320px" },
    },
  },
  tags: ["autodocs", "stable"],
  decorators: [
    (Story) => (
      <div className="flex h-[calc(100vh-32px)] w-full items-center justify-center">
        <div className="w-full max-w-[372px]">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof F0Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    avatar: {
      type: "person",
      firstName: "Daniel",
      lastName: "Moreno",
    },
    title: "Daniel Moreno",
    description: "This is a cool description",
    metadata: [
      {
        icon: Briefcase,
        property: {
          type: "text",
          value: "Design Engineer",
        },
      },
      {
        icon: CalendarArrowRight,
        property: {
          type: "text",
          value: "3 years ago",
        },
      },
      {
        icon: Star,
        property: {
          type: "status",
          value: {
            status: "positive",
            label: "Active",
          },
        },
      },
    ],
    otherActions: [
      {
        label: "Mail",
        icon: Envelope,
        onClick: fn(),
      },
      { type: "separator" },
      {
        label: "Delete",
        icon: Delete,
        onClick: fn(),
        critical: true,
      },
    ],
  },
}

export const WithActions: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    title: "Product designer",
    description:
      "Seeking an experienced product designer to lead design initiatives.",
    primaryAction: {
      label: "Refer",
      icon: Envelope,
      onClick: fn(),
    },
    secondaryActions: [
      {
        label: "Apply",
        icon: Add,
        onClick: fn(),
      },
      {
        label: "Share",
        icon: ExternalLink,
        onClick: fn(),
      },
    ],
    metadata: [
      {
        icon: Office,
        property: {
          type: "tag",
          value: {
            label: "Barcelona, Spain",
          },
        },
      },
      {
        icon: Calendar,
        property: {
          type: "text",
          value: "10 months ago",
        },
      },
    ],
  },
}

export const WithActionsAndLink: Story = {
  args: {
    ...WithActions.args,
    secondaryActions: {
      label: "View more",
      href: "/",
      target: "_blank",
    },
  },
}

export const WithLink: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    ...Default.args,
    link: "/",
  },
}

export const Selectable: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    ...Default.args,
    selectable: true,
  },
  render: (args) => {
    const [selected, setSelected] = useState(false)
    return <F0Card {...args} selected={selected} onSelect={setSelected} />
  },
}

export const WithChildren: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    title: "Card with children",
    children: <SlotComponent />,
  },
}

export const WithEmoji: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    ...Default.args,
    avatar: {
      type: "emoji",
      emoji: "🐱",
    },
  },
}

export const WithImage: Story = {
  args: {
    ...Default.args,
    selectable: true,
    image: image,
  },
  render: (args) => {
    const [selected, setSelected] = useState(false)
    return <F0Card {...args} selected={selected} onSelect={setSelected} />
  },
}

export const WithFileAvatar: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    ...WithImage.args,
    selectable: true,
    image: image,
    avatar: {
      type: "file",
      file: new File([""], "document.pdf", { type: "application/pdf" }),
    },
  },
  render: (args) => {
    const [selected, setSelected] = useState(false)
    return <F0Card {...args} selected={selected} onSelect={setSelected} />
  },
}

export const Compact: Story = {
  args: {
    ...WithActions.args,
    compact: true,
  },
}

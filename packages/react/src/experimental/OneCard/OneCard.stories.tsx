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
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { useState } from "react"
import cat from "../../../storybook-assets/cat.jpeg"
import { OneCard } from "./OneCard"

const meta = {
  component: OneCard,
  title: "Card",
  parameters: {
    docs: {
      story: { inline: false, height: "320px" },
    },
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="flex h-[calc(100vh-32px)] w-full items-center justify-center">
        <div className="w-full max-w-[372px]">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof OneCard>

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
    metadata: [
      {
        type: "text",
        icon: Briefcase,
        title: "Design Engineer",
      },
      {
        type: "text",
        icon: CalendarArrowRight,
        title: "3 years ago",
      },
      {
        type: "status",
        icon: Star,
        status: "positive",
        label: "Active",
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
        type: "tag",
        icon: Office,
        label: "Barcelona, Spain",
      },
      {
        type: "text",
        icon: Calendar,
        title: "10 months ago",
      },
    ],
  },
}

export const WithLink: Story = {
  args: {
    ...Default.args,
    link: "/",
  },
}

export const Selectable: Story = {
  args: {
    ...Default.args,
    selectable: true,
  },
  render: (args) => {
    const [selected, setSelected] = useState(false)
    return <OneCard {...args} selected={selected} onSelect={setSelected} />
  },
}

export const WithChildren: Story = {
  args: {
    title: "A cool cat",
    description: "This is a cool cat",
    children: (
      <div className="h-[220px] w-fit overflow-hidden rounded-sm">
        <img src={cat} alt="cat" className="w-full object-cover" />
      </div>
    ),
  },
}

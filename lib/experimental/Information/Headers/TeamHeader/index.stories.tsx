import { Meta, StoryObj } from "@storybook/react"
import { TeamHeader } from "."

const meta = {
  title: "Experimental/Information/Headers/TeamHeader",
  component: TeamHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TeamHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: "Engineering Team",
    description:
      "Frontend development team responsible for core product features",
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

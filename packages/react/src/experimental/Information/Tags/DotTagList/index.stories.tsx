import type { Meta, StoryObj } from "@storybook/react"
import { DotTagList } from "./index"

const meta: Meta = {
  component: DotTagList,
  title: "Tag/DotTagList",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  args: {
    tags: [
      { label: "Design", color: "viridian", description: "Design description" },
      {
        label: "Development",
        color: "malibu",
        description: "Development description",
      },
      { label: "Product", color: "yellow", description: "Product description" },
      {
        label: "Marketing",
        color: "purple",
        description: "Marketing description",
      },
      { label: "Sales", color: "lilac", description: "Sales description" },
      { label: "Finance", color: "barbie", description: "Finance description" },
      {
        label: "Operations",
        color: "smoke",
        description: "Operations description",
      },
      { label: "HR", color: "army" },
    ],
  },
  argTypes: {
    layout: {
      control: "radio",
      options: ["compact", "fill"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LimitedTags: Story = {
  args: {
    max: 3,
  },
}

export const WithInitialRemainingCount: Story = {
  args: {
    max: 3,
    remainingCount: 10,
  },
}

export const CompactLayout: Story = {
  args: {
    layout: "compact",
    max: 5,
  },
}

export const FillLayout: Story = {
  args: {
    layout: "fill",
  },
  parameters: {
    layout: "padded",
  },
}

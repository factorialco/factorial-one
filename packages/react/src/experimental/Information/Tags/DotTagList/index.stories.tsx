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
      { label: "Design", color: "viridian" },
      { label: "Development", color: "malibu" },
      { label: "Product", color: "yellow" },
      { label: "Marketing", color: "purple" },
      { label: "Sales", color: "lilac" },
      { label: "Finance", color: "barbie" },
      { label: "Operations", color: "smoke" },
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

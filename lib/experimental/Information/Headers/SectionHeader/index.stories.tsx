import * as Icon from "@/icons/app/"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { SectionHeader } from "."
const meta: Meta<typeof SectionHeader> = {
  component: SectionHeader,
  parameters: {
    layout: "padded",
  },
}

export default meta

type Story = StoryObj<typeof SectionHeader>

export const Default: Story = {
  args: {
    title: "Section title",
    description: "Section description",
    action: {
      label: "Action",
      icon: Icon.Add,
      onClick: fn(),
    },
    help: {
      label: "Help Center link",
      onClick: fn(),
    },
  },
}

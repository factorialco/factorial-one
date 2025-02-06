import type { Meta, StoryObj } from "@storybook/react"
import { SidebarIcon } from "."

const meta: Meta<typeof SidebarIcon> = {
  title: "Sidebar/Icon",
  component: SidebarIcon,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof SidebarIcon>

export const Default: Story = {
  args: {
    isExpanded: true,
  },
}

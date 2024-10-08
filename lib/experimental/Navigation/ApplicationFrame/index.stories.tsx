import { Placeholder } from "@/lib/storybook-utils"
import type { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react"
import { ApplicationFrame } from "."
import * as SidebarStories from "../Sidebar/index.stories"
import { Sidebar } from "../Sidebar/Sidebar"

const meta: Meta<typeof ApplicationFrame> = {
  component: ApplicationFrame,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    sidebar: <Sidebar {...SidebarStories.default.args} />,
    children: <Placeholder className="flex-1">Application Content</Placeholder>,
  } satisfies ComponentProps<typeof ApplicationFrame>,
}

export default meta

type Story = StoryObj<typeof ApplicationFrame>

export const Default: Story = {}

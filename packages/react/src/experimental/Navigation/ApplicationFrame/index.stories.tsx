import type { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react"
import { Page } from "../Page"
import * as PageStories from "../Page/index.stories"
import * as SidebarStories from "../Sidebar/index.stories"
import { Sidebar } from "../Sidebar/Sidebar"
import { ApplicationFrame } from "./index"

const meta: Meta<typeof ApplicationFrame> = {
  title: "ApplicationFrame",
  component: ApplicationFrame,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    sidebar: <Sidebar {...SidebarStories.default.args} />,
    children: <Page {...PageStories.Default.args} />,
  } satisfies ComponentProps<typeof ApplicationFrame>,
}

export default meta

type Story = StoryObj<typeof ApplicationFrame>

export const Default: Story = {}

import type { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react"
import { SidebarHeader } from "./Header"
import * as SidebarHeaderStories from "./Header/index.stories"
import { Menu } from "./Menu"
import * as SidebarMenuStories from "./Menu/index.stories"
import { SearchBar } from "./Searchbar"
import * as SearchBarStories from "./Searchbar/index.stories"
import { Sidebar } from "./Sidebar"
const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[240px] bg-f1-background-tertiary">
        <Story />
      </div>
    ),
  ],
  args: {
    children: (
      <>
        <SidebarHeader {...SidebarHeaderStories.Default.args} />
        <SearchBar {...SearchBarStories.Default.args} />
        <Menu {...SidebarMenuStories.Default.args} />
      </>
    ),
  } satisfies ComponentProps<typeof Sidebar>,
}

export default meta

type Story = StoryObj

export const Default: Story = {}

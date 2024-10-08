import type { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react"
import { Menu } from "./Menu"
import * as SidebarMenuStories from "./Menu/index.stories"
import { SearchBar } from "./Searchbar"
import * as SearchBarStories from "./Searchbar/index.stories"
import { Sidebar } from "./Sidebar"

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <SearchBar {...SearchBarStories.Default.args} />
        <Menu {...SidebarMenuStories.Default.args} />
      </>
    ),
  } satisfies ComponentProps<typeof Sidebar>,
}

export default meta

type Story = StoryObj

export const Default: Story = {}

import type { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react"
import { Menu } from "./Menu"
import * as SidebarMenuStories from "./Menu/index.stories"
import { SearchBar } from "./Searchbar"
import * as SearchBarStories from "./Searchbar/index.stories"
import { Sidebar } from "./Sidebar"
import { User } from "./User"
import * as UserStories from "./User/index.stories"

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[240px] bg-f1-background-tertiary p-3">
        <Story />
      </div>
    ),
  ],
  args: {
    children: (
      <>
        <SearchBar {...SearchBarStories.Default.args} />
        <Menu {...SidebarMenuStories.Default.args} />
        <User {...UserStories.Default.args} />
      </>
    ),
  } satisfies ComponentProps<typeof Sidebar>,
}

export default meta

type Story = StoryObj

export const Default: Story = {}

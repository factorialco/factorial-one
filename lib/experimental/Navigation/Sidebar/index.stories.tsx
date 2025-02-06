import type { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react"
import { SidebarHeader } from "./Header"
import * as SidebarHeaderStories from "./Header/index.stories"
import { Menu } from "./Menu"
import * as SidebarMenuStories from "./Menu/index.stories"
import { SearchBar } from "./Searchbar"
import * as SearchBarStories from "./Searchbar/index.stories"
import { Sidebar } from "./Sidebar"
import { User } from "./User"
import * as UserStories from "./User/index.stories"

const meta: Meta<typeof Sidebar> = {
  title: "Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="h-[500px] w-[240px] bg-f1-background-tertiary">
        <Story />
      </div>
    ),
  ],
  args: {
    header: (
      <>
        <SidebarHeader {...SidebarHeaderStories.Default.args} />
        <SearchBar {...SearchBarStories.Default.args} />
      </>
    ),
    body: (
      <>
        <Menu {...SidebarMenuStories.Default.args} />
      </>
    ),
    footer: <User {...UserStories.Default.args} />,
  } satisfies ComponentProps<typeof Sidebar>,
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Default: Story = {}

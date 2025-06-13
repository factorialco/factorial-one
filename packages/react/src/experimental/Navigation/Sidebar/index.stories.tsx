import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentProps } from "react"
import { SidebarFooter } from "./Footer"
import * as SidebarFooterStories from "./Footer/index.stories"
import { SidebarHeader } from "./Header"
import * as SidebarHeaderStories from "./Header/index.stories"
import { Menu } from "./Menu"
import * as SidebarMenuStories from "./Menu/index.stories"
import { SearchBar } from "./Searchbar"
import * as SearchBarStories from "./Searchbar/index.stories"
import { Sidebar } from "./Sidebar"

const meta: Meta<typeof Sidebar> = {
  title: "Navigation/Sidebar",
  component: Sidebar,
  tags: ["autodocs", "experimental", "internal"],
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
    footer: <SidebarFooter {...SidebarFooterStories.Default.args} />,
  } satisfies ComponentProps<typeof Sidebar>,
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Default: Story = {}

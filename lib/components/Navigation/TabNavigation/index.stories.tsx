import type { Meta, StoryObj } from "@storybook/react"

import { TabNavigation, TabNavigationLink } from "."

const meta = {
  component: TabNavigation,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <TabNavigationLink href="#" active>
          Home
        </TabNavigationLink>
        <TabNavigationLink href="#">Balances</TabNavigationLink>
        <TabNavigationLink href="#">Transactions</TabNavigationLink>
        <TabNavigationLink href="#">Customers</TabNavigationLink>
      </>
    ),
  },
} satisfies Meta<typeof TabNavigation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

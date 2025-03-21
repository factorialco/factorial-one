import type { Meta, StoryObj } from "@storybook/react"

import { Dashboard } from "../../Widgets/Layout/Dashboard"
import * as DashboardStories from "../../Widgets/Layout/Dashboard/index.stories"
import { PageDecorator } from "../../../lib/storybook-utils/pageDecorator"
import { Placeholder } from "../../../lib/storybook-utils/placeholder"
import { ComponentProps } from "react"
import { OverviewLayout } from "./index"
import { DetailsItemsList } from "../Utils/DetailsItemsList"
import * as DetailsItemsListStories from "../Utils/DetailsItemsList/index.stories"

const DETAILS_ITEMS_ARGS = DetailsItemsListStories.default
  .args as ComponentProps<typeof DetailsItemsList>

const meta = {
  title: "Layout/OverviewLayout",
  component: OverviewLayout,
  tags: ["autodocs", "experimental"],
  decorators: [PageDecorator],
  args: {
    children: <Placeholder className="h-[450px]">Main</Placeholder>,
    sidepanel: {
      title: DETAILS_ITEMS_ARGS.title,
      items: DETAILS_ITEMS_ARGS.details,
    },
  },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "svg-img-alt", enabled: false }],
      },
    },
  },
} satisfies Meta<typeof OverviewLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const EmployeeProfile: Story = {
  args: {
    children: <Dashboard {...DashboardStories.default.args} />,
  },
}

export const EmployeeProfileWithFewWidgets: Story = {
  args: {
    children: (
      <Dashboard {...DashboardStories.default.args}>
        {DashboardStories.default.args.children.slice(0, 3)}
      </Dashboard>
    ),
  },
  decorators: [
    (Story) => (
      <div className="h-screen">
        <Story />
      </div>
    ),
  ],
}

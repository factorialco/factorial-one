import type { Meta, StoryObj } from "@storybook/react"

import { Dashboard } from "@/domain/components/widgets/Layout/Dashboard"
import * as DashboardStories from "@/domain/components/widgets/Layout/Dashboard/index.stories.tsx"
import { PageDecorator } from "@/lib/storybook-utils/pageDecorator.tsx"
import { Placeholder } from "@/lib/storybook-utils/placeholder.tsx"
import { ComponentProps } from "react"
import { DetailsItemsList } from "../Utils/DetailsItemsList"
import * as DetailsItemsListStories from "../Utils/DetailsItemsList/index.stories.tsx"
import { OverviewLayout } from "./index.tsx"

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

import type { Meta, StoryObj } from "@storybook/react"

import { Dashboard } from "@/experimental/Widgets/Layout/Dashboard"
import * as DashboardStories from "@/experimental/Widgets/Layout/Dashboard/index.stories"
import { PageDecorator } from "@/lib/storybook-utils/pageDecorator"
import { Placeholder } from "@/lib/storybook-utils/placeholder"
import { OverviewLayout } from "."
import { SAMPLE_DETAILS_ITEMS_LIST_ARGS } from "../Utils/DetailsItemsList/index.stories"

const meta = {
  component: OverviewLayout,
  tags: ["autodocs"],
  decorators: [PageDecorator],
  args: {
    children: <Placeholder className="h-[450px]">Main</Placeholder>,
    sidepanel: {
      title: SAMPLE_DETAILS_ITEMS_LIST_ARGS.title,
      items: SAMPLE_DETAILS_ITEMS_LIST_ARGS.details,
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

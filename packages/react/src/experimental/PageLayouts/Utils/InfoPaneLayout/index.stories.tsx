import type { Meta, StoryObj } from "@storybook/react"

import { DetailsItemsList } from "../DetailsItemsList"
import * as DetailsItemsListStories from "../DetailsItemsList/index.stories"
import { Dashboard } from "../../../Widgets/Layout/Dashboard"
import * as DashboardStories from "../../../Widgets/Layout/Dashboard/index.stories"
import { PageDecorator } from "../../../../lib/storybook-utils/pageDecorator"
import { ComponentProps } from "react"
import { InfoPaneLayout } from "./index"

const meta = {
  title: "Layout/InfoPaneLayout",
  component: InfoPaneLayout,
  tags: ["autodocs", "experimental"],
  decorators: [PageDecorator],
  args: {
    children: (
      <div className="flex h-64 items-center justify-center bg-f1-foreground-info text-f1-foreground-inverse">
        Main
      </div>
    ),
    sideContent: (
      <div className="flex h-48 items-center justify-center bg-f1-foreground-secondary text-f1-foreground-inverse">
        Side
      </div>
    ),
  },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "svg-img-alt", enabled: false }],
      },
    },
  },
} satisfies Meta<typeof InfoPaneLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Profile: Story = {
  args: {
    children: <Dashboard {...DashboardStories.default.args} />,
    sideContent: (
      <DetailsItemsList
        {...(DetailsItemsListStories.default.args as ComponentProps<
          typeof DetailsItemsList
        >)}
      />
    ),
  },
}

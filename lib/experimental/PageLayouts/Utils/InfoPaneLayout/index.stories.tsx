import type { Meta, StoryObj } from "@storybook/react"

import { DetailsItemsList } from "@/experimental/PageLayouts/Utils/DetailsItemsList"
import * as DetailsItemsListStories from "@/experimental/PageLayouts/Utils/DetailsItemsList/index.stories"
import { Dashboard } from "@/experimental/Widgets/Layout/Dashboard"
import * as DashboardStories from "@/experimental/Widgets/Layout/Dashboard/index.stories"
import { PageDecorator } from "@/lib/storybook-utils/pageDecorator"
import { ComponentProps } from "react"
import { InfoPaneLayout } from "."

const meta = {
  title: "InfoPaneLayout",
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

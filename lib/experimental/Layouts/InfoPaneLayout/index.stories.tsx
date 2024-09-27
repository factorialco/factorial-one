import type { Meta, StoryObj } from "@storybook/react"

import { Dashboard } from "@/experimental/Widgets/Layout/Dashboard"
import * as DashboardStories from "@/experimental/Widgets/Layout/Dashboard/index.stories"
import { ComponentProps } from "react"
import { InfoPaneLayout } from "."
import { DetailsItemsList } from "../Utils/DetailsItemsList"
import * as DetailsItemsListStories from "../Utils/DetailsItemsList/index.stories"

const meta = {
  component: InfoPaneLayout,
  tags: ["autodocs"],
  args: {
    mainContent: (
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
    mainContent: <Dashboard {...DashboardStories.default.args} />,
    sideContent: (
      <DetailsItemsList
        // Storybook doesn't return the correct type for the args
        {...(DetailsItemsListStories.default.args as ComponentProps<
          typeof DetailsItemsList
        >)}
      />
    ),
  },
}

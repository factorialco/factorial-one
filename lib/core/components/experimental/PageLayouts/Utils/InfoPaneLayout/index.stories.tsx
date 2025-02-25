import type { Meta, StoryObj } from "@storybook/react"

import { DetailsItemsList } from "@/core/components/experimental/PageLayouts/Utils/DetailsItemsList"
import * as DetailsItemsListStories from "@/core/components/experimental/PageLayouts/Utils/DetailsItemsList/index.stories.tsx"
import { Dashboard } from "@/domain/components/widgets/Layout/Dashboard"
import * as DashboardStories from "@/domain/components/widgets/Layout/Dashboard/index.stories.tsx"
import { PageDecorator } from "@/lib/storybook-utils/pageDecorator.tsx"
import { ComponentProps } from "react"
import { InfoPaneLayout } from "./index.tsx"

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

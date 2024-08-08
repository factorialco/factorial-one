import type { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react"
import { WidgetSkeleton } from "."

const meta: Meta<ComponentProps<typeof WidgetSkeleton>> = {
  title: "Widgets/WidgetContainer/Skeleton",
  component: WidgetSkeleton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full min-w-72 max-w-96">
        <Story />
      </div>
    ),
  ],
}

export default meta
export type Story = StoryObj<typeof WidgetSkeleton>

export const Default: Story = {}

export const WithTitle: Story = {
  args: {
    header: {
      title: "I know the title!",
    },
  },
}

export const WithSubtitle: Story = {
  args: {
    header: {
      title: "I know the title!",
      subtitle: "Also the subtitle!",
    },
  },
}

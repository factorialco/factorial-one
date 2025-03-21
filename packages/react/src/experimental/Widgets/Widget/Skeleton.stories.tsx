import type { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react"
import { Widget } from "./index"

const meta: Meta<ComponentProps<typeof Widget.Skeleton>> = {
  title: "Widgets/Widget/Skeleton",
  component: Widget.Skeleton,
  tags: ["autodocs", "experimental"],
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
export type Story = StoryObj<typeof Widget.Skeleton>

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
      title: "I know the titles!",
      subtitle: "Also the subtitle!",
    },
  },
}

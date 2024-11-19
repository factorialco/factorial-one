import { ClockIn as ClockInIcon } from "@/icons/modules"
import type { Meta, StoryObj } from "@storybook/react"
import { WidgetInboxListItem, WidgetInboxListItemProps } from "./index"

const meta: Meta<WidgetInboxListItemProps> = {
  component: WidgetInboxListItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[348px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<WidgetInboxListItemProps>

export const Default: Story = {
  args: {
    id: "1",
    icon: ClockInIcon,
    title: "Title",
    subtitle: "Module · 4 Nov 2024",
    onClick: () => {},
  },
}

export const WithLongTitle: Story = {
  args: {
    ...Default.args,
    title: "This item will show a really really really long title",
    subtitle: "This item will show a really really really long subtitle",
  },
}

import { Placeholder } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { Props, WidgetSimpleListItem } from "./index"

const meta: Meta<Props> = {
  component: WidgetSimpleListItem,
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
type Story = StoryObj<Props>

export const Default: Story = {
  args: {
    id: "1",
    icon: Placeholder,
    title: "Title",
    count: 2,
    alert: {
      text: "Info",
      level: "info",
    },
    rawTag: {
      text: "Label",
      icon: Placeholder,
    },
    onClick: () => {},
  },
}

export const WithLongTitle: Story = {
  args: {
    ...Default.args,
    title: "This item will show a really really long title",
  },
}

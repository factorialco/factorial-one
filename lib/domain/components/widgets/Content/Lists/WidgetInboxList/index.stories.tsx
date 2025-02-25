import type { Meta, StoryObj } from "@storybook/react"
import { WidgetInboxListItemProps } from "../../ListItems/WidgetInboxListItem"
import {
  Default as DefaulWidgetInboxListItemStory,
  WithLongTitle as WithLongTitleWidgetInboxListItemStory,
} from "../../ListItems/WidgetInboxListItem/index.stories.tsx"
import { WidgetInboxList, WidgetInboxListProps } from "./index.tsx"

const meta: Meta<WidgetInboxListProps> = {
  title: "widgets/WidgetInboxList",
  component: WidgetInboxList,
  tags: ["autodocs", "experimental"],
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
type Story = StoryObj<WidgetInboxListProps>

export const Default: Story = {
  args: {
    items: new Array(5).fill(null).map(() => ({
      ...(DefaulWidgetInboxListItemStory.args as WidgetInboxListItemProps),
    })),
    onClickItem: () => {},
  },
}

export const WithLongTitles: Story = {
  args: {
    ...Default.args,
    items: new Array(5).fill(null).map(() => ({
      ...(WithLongTitleWidgetInboxListItemStory.args as WidgetInboxListItemProps),
    })),
  },
}

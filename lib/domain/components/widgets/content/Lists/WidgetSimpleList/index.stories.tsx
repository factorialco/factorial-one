import type { Meta, StoryObj } from "@storybook/react"
import {
  Default as DefaultWidgetSimpleListItemStory,
  WithLongTitle as WithLongTitleWidgetSimpleListItemStory,
} from "../../ListItems/WidgetSimpleListItem/index.stories.tsx"
import { WidgetSimpleList, WidgetSimpleListProps } from "./index.tsx"

const meta: Meta<WidgetSimpleListProps> = {
  title: "widgets/WidgetSimpleList",
  component: WidgetSimpleList,
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
type Story = StoryObj<WidgetSimpleListProps>

export const Default: Story = {
  args: {
    items: new Array(5).fill(null).map((_, i) => ({
      id: i,
      ...DefaultWidgetSimpleListItemStory.args,
      title: DefaultWidgetSimpleListItemStory.args?.title ?? "Example title",
    })),
    onClickItem: () => {},
  },
}

export const WithLongTitles: Story = {
  args: {
    ...Default.args,
    items: new Array(5).fill(null).map((_, i) => ({
      id: i,
      ...WithLongTitleWidgetSimpleListItemStory.args,
      title:
        WithLongTitleWidgetSimpleListItemStory.args?.title ??
        "This item will show a really really long title",
    })),
  },
}

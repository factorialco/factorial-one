import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { WidgetList, WidgetListProps } from "./index"
import {
  TaskWidgetListItem,
  TaskWidgetListItemProps,
} from "./WidgetListItem/TaskWidgetListItem"
import { WidgetListItemProps } from "./WidgetListItemTypes"

const meta: Meta<WidgetListProps<WidgetListItemProps>> = {
  component: WidgetList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The `WidgetList` component is a flexible container for rendering various widgets (e.g., `TaskWidgetListItem`). It manages overflow by hiding excess items when `maxHeight` is reached and shows a `+X items` button instead of adding scrollbars, providing a concise and non-scrollable display.",
      },
    },
  },
  argTypes: {
    onMoreElementsClick: {
      description:
        "Function triggered when the `+X items` button is clicked, typically used to reveal hidden items or expand the list view.",
      control: { type: "object" },
    },
    maxHeight: {
      description:
        "Sets the maximum height of the `WidgetList` container in pixels. If the total content exceeds this height, additional items are hidden, and a `+X items` button appears.",
      control: { type: "number" },
    },
    children: {
      description:
        "An array of `TaskWidgetListItem`, etc., to be displayed within the `WidgetList`. The component automatically manages the display of excess widgets if they exceed the `maxHeight` limit.",
      control: { type: "object" },
    },
  },
  decorators: [
    (Story) => (
      <div className="h-[300px] w-[348px]">
        <Story />
      </div>
    ),
  ],
}

export default meta

// Default story: Renders a list of text widgets
export const Default: StoryObj<WidgetListProps<TaskWidgetListItemProps>> = {
  args: {
    onMoreElementsClick: fn(),
    maxHeight: 150,
    children: [
      <TaskWidgetListItem
        task={{
          id: 1,
          text: "Write changelog",
          badge: { text: "Due Oct 2", isPastDue: true },
          counter: 4,
        }}
        status="due"
        key={1}
      />,
      <TaskWidgetListItem
        task={{
          id: 2,
          text: "Write changelog 2",
          badge: { text: "Due Nov 2" },
          counter: 4,
        }}
        status="due"
        key={2}
      />,
      <TaskWidgetListItem
        task={{
          id: 3,
          text: "Write changelog 3",
          badge: { text: "Due Dec 2" },
          counter: 4,
        }}
        status="due"
        key={3}
      />,
    ],
  },
}

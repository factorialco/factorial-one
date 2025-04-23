import { Meta, StoryObj } from "@storybook/react"
import { ExampleComponent } from "./mockData"

const meta = {
  title: "Data Collection/Navigation Filters",
  component: ExampleComponent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Navigation filters are filters that are used to filter the data in the collection but they are not the same as the filters. They are displayed in the top left of the collection. For example, a date navigator is a filter that allows you to filter the data by date, and using the arrow keys you can navigate through the dates.",
      },
    },
  },
  argTypes: {
    useObservable: {
      control: "boolean",
      description: "Use Observable for data fetching",
    },
    usePresets: {
      control: "boolean",
      description: "Include filter presets",
    },
    onSelectItems: {
      action: "onSelectItems",
      description:
        "<p>Callback triggered when items are selected. It gets if `allItemsCheck` is checked(boolean | 'indeterminate', indeterminate means at least one item was delected), `itemsStatus` return the list of know items (if the datacollection is async we don't all the items) and the check status for each item, and `filters` the current filters state.</p>" +
        "‼️ If the datacollection is async, the `itemsStatus` will return the items that are known at the moment of the callback execution, that means when the `allChecked` is not false you need to apply the selection logic in the backend for all the items (using the filters state) and removing the items which status is `checked: false`, but in this case never use the `itemsStatus` ",
    },
    onBulkAction: {
      action: "onBulkAction",
      description:
        "<p>Callback triggered when a bulk action is performed. It gets the action name, and the same args as `inSelectItems`. ‼️ Please check the `onSelectItems` docs for more information.</p>",
    },
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        initialValue: new Date(),
        options: {
          granularity: "day",
          min: new Date(),
          max: new Date(new Date().setDate(new Date().getDate() + 1)),
        },
      },
    },
  },
}

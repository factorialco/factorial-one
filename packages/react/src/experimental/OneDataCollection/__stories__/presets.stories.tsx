import { Meta, StoryObj } from "@storybook/react-vite"
import { OneDataCollection, useDataSource } from "../index"
import {
  createPromiseDataFetch,
  ExampleComponent,
  filterPresets,
  filters,
  sortings,
} from "./mockData"

const meta = {
  title: "Data Collection/Presets",
  component: ExampleComponent,
  parameters: {
    layout: "padded",
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

export const WithPreselectedFilters: Story = {
  render: () => {
    const dataSource = useDataSource({
      filters,
      sortings,
      presets: filterPresets,
      currentFilters: {
        department: ["Engineering"],
      },
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { label: "Name", render: (item) => item.name },
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
            },
          },
        ]}
      />
    )
  },
}

const ITEMS_COUNT_MOCK = [53, 21, 97, 8, 72, 44, 103, 33, 86, 67]
export const WithPreselectedFiltersAndItemCount: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    const dataSource = useDataSource({
      filters,
      sortings,
      presets: filterPresets.map((preset, index) => ({
        ...preset,
        itemsCount: () =>
          new Promise((resolve) =>
            setTimeout(
              () => resolve(ITEMS_COUNT_MOCK[index % ITEMS_COUNT_MOCK.length]),
              index * 500 + 500
            )
          ),
      })),
      currentFilters: {
        department: ["Engineering"],
      },
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { label: "Name", render: (item) => item.name },
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
            },
          },
        ]}
      />
    )
  },
}

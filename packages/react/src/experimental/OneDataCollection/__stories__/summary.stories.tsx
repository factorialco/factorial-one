import { Meta, StoryObj } from "@storybook/react-vite"
import { OneDataCollection, useDataSource } from "../index"
import {
  createDataAdapter,
  createPromiseDataFetch,
  ExampleComponent,
  filterPresets,
  filters,
  generateMockUsers,
  sortings,
} from "./mockData"

const meta = {
  title: "Data Collection/Summary",
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

export const BasicSummaryRow: Story = {
  render: () => {
    const dataSource = useDataSource({
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
      summaries: {
        salary: {
          type: "sum",
        },
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
                {
                  label: "Salary",
                  summary: "salary",
                  align: "right",
                  render: (item) => item.salary,
                },
              ],
            },
          },
        ]}
      />
    )
  },
}

export const WithInfiniteScrollSummarySticky: Story = {
  render: () => {
    const paginatedMockUsers = generateMockUsers(50)
    const dataSource = useDataSource({
      filters,
      sortings,
      presets: filterPresets,
      summaries: {
        salary: {
          type: "sum",
          label: "Total",
        },
      },
      dataAdapter: createDataAdapter({
        data: paginatedMockUsers,
        delay: 500,
        paginationType: "infinite-scroll",
        perPage: 10,
      }),
    })

    return (
      <div className="space-y-4" style={{ height: "500px", overflow: "auto" }}>
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
                  {
                    label: "Salary",
                    summary: "salary",
                    align: "right",
                    render: (item) => item.salary,
                  },
                ],
              },
            },
          ]}
        />
      </div>
    )
  },
}

import { Meta, StoryObj } from "@storybook/react"
import { Delete } from "../../../icons/app"
import {
  GroupingDefinition,
  OneDataCollection,
  useDataSource,
} from "../exports"
import {
  createDataAdapter,
  DEPARTMENTS,
  ExampleComponent,
  filterPresets,
  filters,
  generateMockUsers,
  mockUsers,
  sortings,
} from "./mockData"

const meta = {
  title: "Data Collection/Grouping",
  component: ExampleComponent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Grouping is a feature that allows you to group data by a specific field. This is useful for displaying data in a more organized way.",
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

// Examples with multiple visualizations
export const WithGrouping: Story = {
  render: () => (
    <ExampleComponent
      frozenColumns={2}
      currentGrouping={{
        field: "role",
        order: "desc",
      }}
      grouping={{
        mandatory: true,
        groupBy: {
          department: {
            name: "Department",
            label: (groupId) => groupId,
            itemCount: async (groupId) => {
              await new Promise((resolve) => setTimeout(resolve, 1000))
              return mockUsers.filter((user) => user.department === groupId)
                .length
            },
          },
          role: {
            name: "Role",
            label: (groupId) => groupId,
            itemCount: (groupId) => {
              return mockUsers.filter((user) => user.role === groupId).length
            },
          },
        },
      }}
    />
  ),
}

// Examples with multiple visualizations
export const WithOptionalGrouping: Story = {
  render: () => (
    <ExampleComponent
      frozenColumns={2}
      grouping={{
        groupBy: {
          department: {
            name: "Department",
            label: (groupId) => groupId,
            itemCount: async (groupId) => {
              await new Promise((resolve) => setTimeout(resolve, 1000))
              return mockUsers.filter((user) => user.department === groupId)
                .length
            },
          },
          role: {
            name: "Role",
            label: (groupId) => groupId,
            itemCount: (groupId) => {
              return mockUsers.filter((user) => user.role === groupId).length
            },
          },
        },
      }}
    />
  ),
}

export const WithPaginationAndGrouping: Story = {
  render: () => {
    // Create a fixed set of paginated users so we're not regenerating them on every render
    const paginatedMockUsers = generateMockUsers(50)

    const grouping: GroupingDefinition<(typeof mockUsers)[number]> = {
      mandatory: true,
      groupBy: {
        department: {
          name: "Department",
          label: async (groupId) => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            return groupId
          },
          itemCount: async (groupId) => {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            return paginatedMockUsers.filter(
              (user) => user.department === groupId
            ).length
          },
        },
        role: {
          name: "Role",
          label: (groupId) => groupId,
          itemCount: (groupId) => {
            return paginatedMockUsers.filter((user) => user.role === groupId)
              .length
          },
        },
      },
    }

    const source = useDataSource({
      filters,
      presets: filterPresets,
      sortings,
      grouping,
      currentGrouping: {
        field: "department",
        order: "asc",
      },
      bulkActions: (allSelected) => {
        return {
          primary: [
            {
              label: allSelected ? "Delete All" : "Delete",
              icon: Delete,
              id: "delete-all",
            },
          ],
        }
      },
      dataAdapter: createDataAdapter<
        {
          id: string
          name: string
          email: string
          role: string
          department: (typeof DEPARTMENTS)[number]
          status: string
          isStarred: boolean
          href: string
          salary: number | undefined
        },
        typeof filters,
        typeof sortings,
        typeof grouping
      >({
        data: paginatedMockUsers,
        delay: 500,
        paginationType: "pages",
      }),
    })

    return (
      <OneDataCollection
        source={source}
        onSelectItems={(selectedItems) => {
          console.log("Selected items", "->", selectedItems)
        }}
        onBulkAction={(action, selectedItems) => {
          console.log(`Bulk action: ${action}`, "->", selectedItems)
        }}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item) => item.name,
                  sorting: "name",
                },
                {
                  label: "Email",
                  render: (item) => item.email,
                  sorting: "email",
                },
                {
                  label: "Role",
                  render: (item) => item.role,
                  sorting: "role",
                },
                {
                  label: "Department",
                  render: (item) => item.department,
                  sorting: "department",
                },
              ],
            },
          },
          {
            type: "card",
            options: {
              cardProperties: [
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
              title: (item) => item.name,
            },
          },
        ]}
      />
    )
  },
}

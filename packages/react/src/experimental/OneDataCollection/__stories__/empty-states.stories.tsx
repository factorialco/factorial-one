import { BaseResponse } from "@/experimental/OneDataCollection/types.ts"
import { Meta, StoryObj } from "@storybook/react-vite"
import { OneDataCollection, useDataSource } from "../index"
import {
  createPromiseDataFetch,
  filters,
  getMockVisualizations,
  mockUsers,
  sortings,
} from "./mockData"

const meta = {
  title: "Data Collection/Empty State",
  parameters: {
    layout: "padded",
  },
  tags: ["internal"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// Basic story showing all action types
export const NoDataExample: Story = {
  render: () => {
    const dataSource = useDataSource({
      filters,
      dataAdapter: {
        fetchData: () =>
          new Promise<BaseResponse<(typeof mockUsers)[number]>>((resolve) => {
            resolve({ records: [] })
          }),
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
                {
                  label: "Name",
                  width: 140,
                  render: (item) => ({
                    type: "person",
                    value: {
                      firstName: item.name.split(" ")[0],
                      lastName: item.name.split(" ")[1],
                    },
                  }),
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
        ]}
      />
    )
  },
}

export const NoResultsExample: Story = {
  render: () => {
    const dataSource = useDataSource({
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
      filters: {
        search: {
          type: "search",
          label: "Search",
        },
        department: {
          type: "in",
          label: "Department",
          options: {
            options: [
              { value: "Engineering", label: "Engineering" },
              { value: "Product", label: "Product" },
              { value: "Design", label: "Design" },
              { value: "Marketing", label: "Marketing" },
            ],
          },
        },
      },
      currentFilters: {
        search: "Joey Tribbiani",
      },
      sortings,
    })

    const mockVisualizations = getMockVisualizations()
    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[mockVisualizations.table, mockVisualizations.card]}
      />
    )
  },
}

export const ErrorExample: Story = {
  render: () => {
    const dataSource = useDataSource({
      dataAdapter: {
        fetchData: () => Promise.reject(new Error("Error loading the users")),
      },
      filters,
      currentFilters: { search: "Joey Tribbiani" },
    })
    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [],
            },
          },
        ]}
      />
    )
  },
}

export const CustomMessagesAndActions: Story = {
  render: () => {
    const dataSource = useDataSource({
      dataAdapter: { fetchData: createPromiseDataFetch() },
      filters: {
        search: { type: "search", label: "Search" },
        department: {
          type: "in",
          label: "Department",
          options: {
            options: [
              { value: "Engineering", label: "Engineering" },
              { value: "Product", label: "Product" },
              { value: "Design", label: "Design" },
              { value: "Marketing", label: "Marketing" },
            ],
          },
        },
      },
      currentFilters: { search: "Joey Tribbiani" },
      sortings,
    })

    const emptyStates = {
      "no-data": {
        description: "This is a no data custom message",
        emoji: "🤷",
      },
      "no-results": {
        title: "THIS IS A CUSTOM NO RESULTS TITLE",
        description: "This is a no results custom message",
        emoji: "😢",
        actions: [
          {
            label: "Go to main page",
            variant: "outline" as const,
            onClick: () => {
              console.log("clicked")
            },
          },
          {
            label: "Clear filters",
            onClick: () => {
              console.log("clicked")
            },
          },
        ],
      },
      error: {
        description: "This is a error custom message",
      },
    }

    const mockVisualizations = getMockVisualizations()
    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[mockVisualizations.table, mockVisualizations.card]}
        emptyStates={emptyStates}
      />
    )
  },
}

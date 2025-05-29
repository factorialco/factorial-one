import { Meta, StoryObj } from "@storybook/react"
import { FiltersDefinition } from "../Filters/types"
import { OneDataCollection, useDataSource } from "../index"
import { ItemActionsDefinition } from "../item-actions"
import { NavigationFiltersDefinition } from "../navigationFilters/types"
import { SortingsDefinition } from "../sortings"
import { DataSource } from "../types"
import { CustomEmptyStates } from "../useEmptyState"
import {
  createPromiseDataFetch,
  getMockVisualizations,
  mockUsers,
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

function BaseStory<
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<(typeof mockUsers)[number]>,
  NavigationFilters extends NavigationFiltersDefinition,
>({
  dataSource,
  emptyStates,
}: {
  dataSource: DataSource<
    (typeof mockUsers)[number],
    Filters,
    Sortings,
    ItemActions,
    NavigationFilters
  >
  emptyStates?: CustomEmptyStates
}) {
  const mockVisualizations = getMockVisualizations()
  return (
    <div className="space-y-8">
      <OneDataCollection
        source={dataSource}
        visualizations={[mockVisualizations.table, mockVisualizations.card]}
        emptyStates={emptyStates}
      />
    </div>
  )
}

// Basic story showing all action types
export const NoDataExample: Story = {
  render: () => {
    const dataSource = useDataSource<
      (typeof mockUsers)[number],
      FiltersDefinition,
      SortingsDefinition,
      ItemActionsDefinition<(typeof mockUsers)[number]>,
      NavigationFiltersDefinition
    >({
      dataAdapter: {
        fetchData: () => Promise.resolve([]),
      },
    })

    return <BaseStory dataSource={dataSource} />
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
    })

    return <BaseStory dataSource={dataSource} />
  },
}

export const ErrorExample: Story = {
  render: () => {
    const dataSource = useDataSource<
      (typeof mockUsers)[number],
      FiltersDefinition,
      SortingsDefinition,
      ItemActionsDefinition<(typeof mockUsers)[number]>,
      NavigationFiltersDefinition
    >({
      dataAdapter: { fetchData: () => Promise.reject(new Error("Error")) },
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
    })
    return <BaseStory dataSource={dataSource} />
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
            variant: "outline",
            onClick: () => {
              console.log("clicked")
            },
          },
          {
            label: "Clear filters",
            variant: "default",
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

    return <BaseStory dataSource={dataSource} emptyStates={emptyStates} />
  },
}

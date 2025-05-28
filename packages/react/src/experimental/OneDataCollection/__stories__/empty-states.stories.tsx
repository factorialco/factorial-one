import { Meta, StoryObj } from "@storybook/react"
import { FiltersDefinition } from "../Filters/types"
import { OneDataCollection, useDataSource } from "../index"
import { ItemActionsDefinition } from "../item-actions"
import { NavigationFiltersDefinition } from "../navigationFilters/types"
import { SortingsDefinition } from "../sortings"
import { DataSource } from "../types"
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
}: {
  dataSource: DataSource<
    (typeof mockUsers)[number],
    Filters,
    Sortings,
    ItemActions,
    NavigationFilters
  >
}) {
  const mockVisualizations = getMockVisualizations()
  return (
    <div className="space-y-8">
      <OneDataCollection
        source={dataSource}
        visualizations={[mockVisualizations.table, mockVisualizations.card]}
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
    const dataSource = useDataSource({
      dataAdapter: {
        fetchData: () => Promise.reject(new Error("Error")),
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

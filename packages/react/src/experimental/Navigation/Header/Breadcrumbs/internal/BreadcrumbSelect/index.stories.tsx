import {
  FiltersDefinition,
  GroupingDefinition,
  ItemActionsDefinition,
  NavigationFiltersDefinition,
  SortingsDefinition,
  SummariesDefinition,
} from "@/experimental/exports"
import { useDataSource } from "@/experimental/OneDataCollection"
import {
  FIRST_NAMES_MOCK,
  MOCK_ICONS,
  SURNAMES_MOCK,
  getMockValue,
} from "@/mocks"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Search } from "../../../../../../icons/app"
import { SelectItemProps } from "../../../../../Forms/Fields/Select"
import { BreadcrumbSelect } from "./index"
const meta: Meta<typeof BreadcrumbSelect> = {
  title: "Navigation/BreadcrumbSelect",
  component: BreadcrumbSelect,
  tags: ["autodocs", "internal"],
}

export default meta

type Story = StoryObj<typeof BreadcrumbSelect>

export const Default: Story = {
  args: {
    value: "recruitment",
    onChange: (value: string) => {
      console.log("onChange BreadcrumbSelect", value)
    },
    options: [
      {
        value: "recruitment",
        label: "Recruitment",
      },
      {
        value: "candidates",
        label: "Candidates",
        icon: Search,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "<p>A basic breadcrumb select component that allows users to choose from a list of options. Works a `Select` component but it can not be empty.</p>" +
          "<p>Options can be an array of objects or a function that returns a promise of an array of objects to load data asynchronously.</p>" +
          "<p>You the do the filtering in the component or do the filtering externally using the props `options` and `externalSearch`.</p>",
      },
    },
  },
}

export const WithSearchbox: Story = {
  args: {
    value: "recruitment",
    onChange: (value: string) => {
      console.log("onChange BreadcrumbSelect", value)
    },
    searchBoxPlaceholder: "Search",
    showSearchBox: true,
    options: [
      {
        value: "recruitment",
        label: "Recruitment",
      },
      {
        value: "candidates",
        label: "Candidates",
        icon: Search,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Breadcrumb select with a search box that allows users to filter through options. The search is handled internally by the component.",
      },
    },
  },
}

export const AsyncData: Story = {
  render: (args) => {
    const mockItems = Array.from({ length: 30 }, (_, i) => ({
      value: `option-${i}`,
      label: `${getMockValue(FIRST_NAMES_MOCK, i)} ${getMockValue(SURNAMES_MOCK, i)}`,
      icon: getMockValue(MOCK_ICONS, i),
      description: `Description for option ${i}`,
    }))

    const source = useDataSource<
      (typeof mockItems)[number],
      FiltersDefinition,
      SortingsDefinition,
      SummariesDefinition,
      ItemActionsDefinition<(typeof mockItems)[number]>,
      NavigationFiltersDefinition,
      GroupingDefinition<(typeof mockItems)[number]>
    >({
      dataAdapter: {
        fetchData: async (options) => {
          const { search } = options
          return new Promise((resolve) => {
            setTimeout(() => {
              const results = mockItems.filter(
                (item) =>
                  !search ||
                  item.label.toLowerCase().includes(search.toLowerCase())
              )

              const res = {
                records: results,
              }
              resolve(res)
            }, 100)
          })
        },
      },
    })
    const mapOptions = (
      item: (typeof mockItems)[number]
    ): SelectItemProps<string, (typeof mockItems)[number]> => ({
      value: item.value,
      label: item.label,
      icon: item.icon,
    })

    return (
      <BreadcrumbSelect<(typeof mockItems)[number]>
        source={source}
        mapOptions={mapOptions}
        {...args}
      />
    )
  },
  args: {
    value: "option-3",
    onChange: (value: string) => {
      console.log("onChange BreadcrumbSelect", value)
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates loading options asynchronously. Shows a loading state while data is being fetched.",
      },
    },
  },
}

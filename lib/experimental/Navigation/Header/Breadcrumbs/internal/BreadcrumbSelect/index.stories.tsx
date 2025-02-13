import { Search } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { BreadcrumbSelect } from "."
const meta: Meta<typeof BreadcrumbSelect> = {
  title: "Header/Breadcrumbs/BreadcrumbSelect",
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
  args: {
    ...Default.args,
    options: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return [
        {
          value: "recruitment",
          label: "Recruitment",
        },
        {
          value: "candidates",
          label: "Candidates",
          icon: Search,
        },
      ]
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

export const AsyncDataWithSearchbox: Story = {
  args: {
    ...WithSearchbox.args,
    externalSearch: true,
    options: async (search?: string) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return [
        {
          value: "recruitment",
          label: "Recruitment",
        },
        {
          value: "candidates",
          label: "Candidates",
          icon: Search,
        },
      ].filter((option) =>
        option.label.toLowerCase().includes(search?.toLowerCase() || "")
      )
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Combines async data loading with search functionality. The search is handled externally, making it suitable for server-side filtering.",
      },
    },
  },
}

import type { Meta, StoryObj } from "@storybook/react-vite"
import { Search } from "../../../../../../icons/app"
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

// export const AsyncData: Story = {
//   args: {
//     value: "recruitment",
//     onChange: (value: string) => {
//       console.log("onChange BreadcrumbSelect", value)
//     },
//     source: useDataSource({
//       dataAdapter: {
//         fetchData: async () => {
//           await new Promise((resolve) => setTimeout(resolve, 1000))
//           return [
//             {
//               value: "recruitment",
//               label: "Recruitment",
//             },
//             {
//               value: "candidates",
//               label: "Candidates",
//               icon: Search,
//             },
//           ]
//         },
//       },
//     }),
//     mapOptions: (item: { value: string; label: string; icon?: IconType }) => ({
//       value: item.value,
//       label: item.label,
//       icon: item.icon,
//     }),
//   },
//   parameters: {
//     docs: {
//       description: {
//         story:
//           "Demonstrates loading options asynchronously. Shows a loading state while data is being fetched.",
//       },
//     },
//   },
// }

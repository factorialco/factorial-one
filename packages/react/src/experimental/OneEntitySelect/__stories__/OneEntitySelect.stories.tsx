import { useDataSource } from "@/experimental/OneDataCollection/exports"
import { Add, Ai, Delete, Download, Pencil, Star, Upload } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { OneEntitySelect } from "../OneEntitySelect"
import {
  createDataAdapter,
  DEPARTMENTS_MOCK,
  filterPresets,
  filters,
} from "./mockData"

const meta = {
  component: OneEntitySelect,
  title: "EntitySelect",
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof OneEntitySelect>

export default meta
type Story = StoryObj<typeof OneEntitySelect>

export const Default: Story = {
  render: () => {
    const extendedMockUsers = Array(50)
      .fill(null)
      .map((_, index) => ({
        id: `user-ex-${index}`,
        name: `User ${index + 1}`,
        department: DEPARTMENTS_MOCK[index % DEPARTMENTS_MOCK.length],
        status: index % 4 === 0 ? "inactive" : "active",
        href: `/users/user-${index + 1}`,
      }))

    // Define extended sortings for the example
    const extendedSortings = {
      name: { label: "Name" },
    } as const

    // Create a custom data adapter for the extended data structure
    const dataAdapter = createDataAdapter({
      data: extendedMockUsers,
      delay: 300,
      paginationType: "infinite-scroll",
    })

    const dataSource = useDataSource({
      filters,
      search: {
        enabled: true,
      },
      selectable: (item) => item.id,
      bulkActions: () => ({
        primary: [
          {
            id: "edit",
            label: "Edit",
            icon: Pencil,
            onClick: () => console.log(`Editing`),
          },
        ],
        secondary: [
          {
            id: "delete",
            label: "Delete",
            icon: Delete,
            onClick: () => console.log(`Deleting`),
          },
        ],
      }),
      itemActions: (item) => [
        {
          label: "Edit",
          icon: Pencil,
          onClick: () => console.log(`Editing ${item.name}`),
          description: "Modify user information",
        },
        {
          label: "View Profile",
          icon: Ai,
          onClick: () => console.log(`Viewing ${item.name}'s profile`),
        },
        { type: "separator" },
        {
          label:
            Number(item.id.replace("user-ex-", "")) % 2
              ? "Remove Star"
              : "Star User",
          icon: Star,
          onClick: () => console.log(`Toggling star for ${item.name}`),
          description:
            Number(item.id.replace("user-ex-", "")) % 2
              ? "Remove from favorites"
              : "Add to favorites",
        },
        {
          label: "Delete",
          icon: Delete,
          onClick: () => console.log(`Deleting ${item.name}`),
          critical: true,
          description: "Permanently remove user",
          enabled: Boolean(Number(item.id.replace("user-ex-", "")) % 2),
        },
      ],
      primaryActions: () => ({
        label: "New employee",
        icon: Add,
        onClick: () => console.log(`Primary action`),
      }),
      secondaryActions: () => [
        {
          label: "Export",
          icon: Upload,
          onClick: () => console.log(`Export`),
        },
        {
          label: "Import",
          icon: Download,
          onClick: () => console.log(`Import`),
        },
      ],
      presets: filterPresets,
      sortings: extendedSortings,
      dataAdapter,
    })

    return (
      <OneEntitySelect
        source={dataSource}
        visualizations={[
          {
            type: "simpleList",
            options: {
              fields: [
                {
                  label: "By Name",
                  render: (item) => item.name,
                  info: "Filter by name",
                  sorting: "name",
                },
              ],
              itemDefinition: (item) => ({
                title: item.name,
                description: [item.department, item.status],
              }),
            },
          },
          {
            type: "simpleList",
            options: {
              fields: [
                {
                  label: "With Department",
                  info: "Filter by department",
                  render: (item) => item.name,
                  sorting: "name",
                },
              ],
              itemDefinition: (item) => ({
                title: item.name + " " + item.department,
                description: [item.department, item.status],
              }),
            },
          },
        ]}
      />
    )
  },
}

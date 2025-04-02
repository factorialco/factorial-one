import { Meta, StoryObj } from "@storybook/react"
import { Ai, Download, Pencil } from "../../icons/app"
import { SecondaryActionsDefinition } from "./actions"
import { OneDataCollection, useDataSource } from "./index"

const meta = {
  title: "Data Collection/Actions",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Data collection actions are a way to add actions to a data collection. There actions are displayed in the top right button or top right actions menu (three dots). The actions are data collection specific and are not related to the items in the collection. (check Item Actions for item specific actions)",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// Mock data with various states to demonstrate conditional actions
const mockUsers = [
  {
    id: "user-1",
    name: "John Doe",
    email: "john@example.com",
    role: "Senior Engineer",
    department: "Engineering",
    status: "active",
    isStarred: true,
    permissions: {
      canEdit: true,
      canDelete: true,
      canShare: true,
    },
  },
  {
    id: "user-2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Product Manager",
    department: "Product",
    status: "active",
    isStarred: false,
    permissions: {
      canEdit: true,
      canDelete: false,
      canShare: true,
    },
  },
  {
    id: "user-3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Designer",
    department: "Design",
    status: "inactive",
    isStarred: false,
    permissions: {
      canEdit: false,
      canDelete: false,
      canShare: true,
    },
  },
  {
    id: "user-4",
    name: "Alice Williams",
    email: "alice@example.com",
    role: "Marketing Lead",
    department: "Marketing",
    status: "active",
    isStarred: true,
    permissions: {
      canEdit: true,
      canDelete: true,
      canShare: false,
    },
  },
]

// Example of a comprehensive actions definition with various types of actions
const buildActions = (): SecondaryActionsDefinition => {
  return () => {
    return [
      // Action with description
      {
        label: "Another user actions User",
        icon: Pencil,
        onClick: () => console.log(`Another user action`),
        description: "User actions",
      },

      // Separator between action groups
      { type: "separator" },
      {
        label: "Export",
        icon: Download,
        onClick: () => console.log(`Downloading users`),
        description: "Download users",
      },
      {
        label: "Import",
        icon: Download,
        onClick: () => console.log(`Importing users`),
        description: "Import users",
      },
    ]
  }
}

// Basic story showing all action types
export const BasicActionsExample: Story = {
  render: () => {
    const dataSource = useDataSource({
      dataAdapter: {
        fetchData: () => Promise.resolve(mockUsers),
      },
      primaryActions: () => ({
        label: "Create user",
        icon: Ai,
        onClick: () => console.log(`Creating a user`),
      }),
      secondaryActions: buildActions(),
    })

    return (
      <div className="space-y-8">
        <div>
          <h2 className="mb-2 text-xl font-semibold">
            Data Collection Actions Example
          </h2>
          <p className="mb-4 text-f1-foreground-secondary">
            This example demonstrates various types of actions that can be used
            in Collections. Click in the top right button or top right actions
            menu (three dots) to see the available actions for the data
            collection.
          </p>
        </div>

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
                    label: "Status",
                    render: (item) => ({
                      type: "status",
                      value: {
                        status:
                          item.status === "active" ? "positive" : "warning",
                        label: item.status,
                      },
                    }),
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

// Example showing how actions can be used with card visualization
export const CardActionsExample: Story = {
  render: () => {
    const dataSource = useDataSource({
      dataAdapter: {
        fetchData: () => Promise.resolve(mockUsers),
      },
      secondaryActions: buildActions(),
    })

    return (
      <div className="space-y-8">
        <div>
          <h2 className="mb-2 text-xl font-semibold">
            Card Collection Actions Example
          </h2>
          <p className="mb-4 text-f1-foreground-secondary">
            This example shows how data collection actions work with card
            visualization.
          </p>
        </div>

        <OneDataCollection
          source={dataSource}
          visualizations={[
            {
              type: "card",
              options: {
                title: (item) => item.name,
                cardProperties: [
                  { label: "Email", render: (item) => item.email },
                  { label: "Role", render: (item) => item.role },
                  { label: "Department", render: (item) => item.department },
                  {
                    label: "Status",
                    render: (item) => ({
                      type: "status",
                      value: {
                        status:
                          item.status === "active" ? "positive" : "warning",
                        label: item.status,
                      },
                    }),
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

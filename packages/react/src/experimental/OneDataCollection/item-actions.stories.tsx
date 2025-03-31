import { Meta, StoryObj } from "@storybook/react"
import {
  Ai,
  ArrowRight,
  Delete,
  Download,
  Pencil,
  Share,
  Star,
} from "../../icons/app"
import { SecondaryActionsDefinition } from "./actions"
import { OneDataCollection, useDataSource } from "./index"
import { ItemActionsDefinition } from "./item-actions"

const meta = {
  title: "Data Collection/Item Actions",
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
  return () => [
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

const createUserActions = (): ItemActionsDefinition<
  (typeof mockUsers)[number]
> => {
  return (user: (typeof mockUsers)[number]) => {
    if (user.id === "user-1") {
      return undefined
    }
    return [
      // Basic action with icon
      {
        label: "View Profile",
        icon: Ai,
        onClick: () => console.log(`Viewing ${user.name}'s profile`),
      },

      // Action with description
      {
        label: "Edit User",
        icon: Pencil,
        onClick: () => console.log(`Editing ${user.name}`),
        description: "Modify user information",
        enabled: user.permissions.canEdit,
      },
      // Action with description
      {
        label: "Another user actions User",
        icon: Pencil,
        onClick: () => console.log(`Another user action`),
        description: "User actions",
      },

      // Separator between action groups
      { type: "separator" },

      // Conditional action based on item state
      {
        label: user.isStarred ? "Remove Star" : "Add Star",
        icon: Star,
        onClick: () => console.log(`Toggling star for ${user.name}`),
        description: user.isStarred
          ? "Remove from favorites"
          : "Add to favorites",
      },

      // Action with conditional visibility
      {
        label: "Share User",
        icon: Share,
        onClick: () => console.log(`Sharing ${user.name}`),
        enabled: user.permissions.canShare,
      },

      // Conditional action based on status
      ...(user.status === "active"
        ? [
            {
              label: "Deactivate User",
              icon: Delete,
              onClick: () => console.log(`Deactivating ${user.name}`),
              description: "Temporarily disable account",
            } as const,
          ]
        : [
            {
              label: "Activate User",
              icon: ArrowRight,
              onClick: () => console.log(`Activating ${user.name}`),
              description: "Re-enable account",
            } as const,
          ]),

      // Critical action with conditional visibility
      {
        label: "Delete Permanently",
        icon: Delete,
        onClick: () => {
          if (confirm(`Are you sure you want to delete ${user.name}?`)) {
            console.log(`Deleting ${user.name}`)
          }
        },
        critical: true,
        description: "This action cannot be undone",
        enabled: user.permissions.canDelete,
      },

      // Action with download functionality
      {
        label: "Download Data",
        icon: Download,
        onClick: () => {
          console.log(`Downloading data for ${user.name}`)
          // In a real implementation, this would trigger a download
        },
        enabled: user.status === "active",
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
      itemActions: createUserActions(),
    })

    return (
      <div className="space-y-8">
        <div>
          <h2 className="mb-2 text-xl font-semibold">Items Actions Example</h2>
          <p className="mb-4 text-f1-foreground-secondary">
            This example demonstrates various types of actions that can be used
            in Collections. Click on the actions menu (three dots) to see the
            available actions for each user.
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
      itemActions: createUserActions(),
    })

    return (
      <div className="space-y-8">
        <div>
          <h2 className="mb-2 text-xl font-semibold">
            Card Item Actions Example
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

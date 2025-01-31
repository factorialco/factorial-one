import { Meta, StoryObj } from "@storybook/react"
import { Code } from "lucide-react"
import { Observable } from "zen-observable-ts"
import { DataCollection, useDataSource } from "."
import type {
  InFilterDefinition,
  SearchFilterDefinition,
} from "./Filters/types"
import { StringPropertySchema } from "./properties"
import { useData } from "./useData"

// Example schema for a user entity
type UserSchema = {
  name: Omit<StringPropertySchema, "value">
  email: Omit<StringPropertySchema, "value">
  role: Omit<StringPropertySchema, "value">
  department: Omit<StringPropertySchema, "value">
}

const properties: UserSchema = {
  name: {
    type: "string",
  },
  email: {
    type: "string",
  },
  role: {
    type: "string",
  },
  department: {
    type: "string",
  },
}

// Mock data
const mockUsers = [
  {
    name: "John Doe",
    email: "john@example.com",
    role: "Senior Engineer",
    department: "Engineering",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Product Manager",
    department: "Product",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Designer",
    department: "Design",
  },
  {
    name: "Alice Williams",
    email: "alice@example.com",
    role: "Marketing Lead",
    department: "Marketing",
  },
]

// Define our filter types explicitly
type UserFilters = {
  search: SearchFilterDefinition
  department: InFilterDefinition<string>
}

// Example filter definition
const filters: { fields: UserFilters } = {
  fields: {
    search: {
      type: "search",
      label: "Search",
    },
    department: {
      type: "in",
      label: "Department",
      options: [
        { value: "Engineering", label: "Engineering" },
        { value: "Product", label: "Product" },
        { value: "Design", label: "Design" },
        { value: "Marketing", label: "Marketing" },
      ],
    },
  },
}

// Example component using useDataSource
const ExampleComponent = ({
  useObservable = false,
}: {
  useObservable?: boolean
}) => {
  const dataSource = useDataSource({
    properties,
    filters,
    fetchData: useObservable
      ? ({ filters }) => {
          return new Observable<typeof mockUsers>((observer) => {
            let filteredUsers = [...mockUsers]

            const searchValue = filters.search
            if (typeof searchValue === "string") {
              const searchLower = searchValue.toLowerCase()
              filteredUsers = filteredUsers.filter(
                (user) =>
                  user.name.toLowerCase().includes(searchLower) ||
                  user.email.toLowerCase().includes(searchLower)
              )
            }

            const departmentValue = filters.department
            if (Array.isArray(departmentValue) && departmentValue.length > 0) {
              filteredUsers = filteredUsers.filter((user) =>
                departmentValue.includes(user.department)
              )
            }

            observer.next(filteredUsers)
            return () => {}
          })
        }
      : ({ filters }) => {
          return new Promise<typeof mockUsers>((resolve) => {
            setTimeout(() => {
              let filteredUsers = [...mockUsers]

              const searchValue = filters.search
              if (typeof searchValue === "string") {
                const searchLower = searchValue.toLowerCase()
                filteredUsers = filteredUsers.filter(
                  (user) =>
                    user.name.toLowerCase().includes(searchLower) ||
                    user.email.toLowerCase().includes(searchLower)
                )
              }

              const departmentValue = filters.department
              if (
                Array.isArray(departmentValue) &&
                departmentValue.length > 0
              ) {
                filteredUsers = filteredUsers.filter((user) =>
                  departmentValue.includes(user.department)
                )
              }

              resolve(filteredUsers)
            }, 500)
          })
        },
  })

  return (
    <div className="space-y-4">
      <DataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { key: "name", label: "Name" },
                { key: "email", label: "Email" },
                { key: "role", label: "Role" },
                { key: "department", label: "Department" },
              ],
            },
          },
          {
            type: "card",
            options: {
              cardProperties: [
                { key: "name", label: "Name" },
                { key: "email", label: "Email" },
                { key: "role", label: "Role" },
                { key: "department", label: "Department" },
              ],
            },
          },
        ]}
      />
    </div>
  )
}

const meta = {
  title: "Experimental/Collections/DataSource",
  component: ExampleComponent,
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

// Basic examples with single visualization
export const BasicTableView: Story = {
  render: () => {
    const dataSource = useDataSource({
      properties,
      filters,
      fetchData: ({ filters }) => {
        return new Promise<typeof mockUsers>((resolve) => {
          setTimeout(() => {
            let filteredUsers = [...mockUsers]

            const searchValue = filters.search
            if (typeof searchValue === "string") {
              const searchLower = searchValue.toLowerCase()
              filteredUsers = filteredUsers.filter(
                (user) =>
                  user.name.toLowerCase().includes(searchLower) ||
                  user.email.toLowerCase().includes(searchLower)
              )
            }

            const departmentValue = filters.department
            if (Array.isArray(departmentValue) && departmentValue.length > 0) {
              filteredUsers = filteredUsers.filter((user) =>
                departmentValue.includes(user.department)
              )
            }

            resolve(filteredUsers)
          }, 500)
        })
      },
    })

    return (
      <DataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { key: "name", label: "Name" },
                { key: "email", label: "Email" },
                { key: "role", label: "Role" },
                { key: "department", label: "Department" },
              ],
            },
          },
        ]}
      />
    )
  },
}

export const BasicCardView: Story = {
  render: () => {
    const dataSource = useDataSource({
      properties,
      filters,
      fetchData: ({ filters }) => {
        return new Promise<typeof mockUsers>((resolve) => {
          setTimeout(() => {
            let filteredUsers = [...mockUsers]

            const searchValue = filters.search
            if (typeof searchValue === "string") {
              const searchLower = searchValue.toLowerCase()
              filteredUsers = filteredUsers.filter(
                (user) =>
                  user.name.toLowerCase().includes(searchLower) ||
                  user.email.toLowerCase().includes(searchLower)
              )
            }

            const departmentValue = filters.department
            if (Array.isArray(departmentValue) && departmentValue.length > 0) {
              filteredUsers = filteredUsers.filter((user) =>
                departmentValue.includes(user.department)
              )
            }

            resolve(filteredUsers)
          }, 500)
        })
      },
    })

    return (
      <DataCollection
        source={dataSource}
        visualizations={[
          {
            type: "card",
            options: {
              cardProperties: [
                { key: "name", label: "Name" },
                { key: "email", label: "Email" },
                { key: "role", label: "Role" },
                { key: "department", label: "Department" },
              ],
            },
          },
        ]}
      />
    )
  },
}

// Examples with customized visualizations
export const CustomTableColumns: Story = {
  render: () => {
    const dataSource = useDataSource({
      properties,
      filters,
      fetchData: ({ filters }) => {
        return new Promise<typeof mockUsers>((resolve) => {
          setTimeout(() => {
            let filteredUsers = [...mockUsers]

            const searchValue = filters.search
            if (typeof searchValue === "string") {
              const searchLower = searchValue.toLowerCase()
              filteredUsers = filteredUsers.filter(
                (user) =>
                  user.name.toLowerCase().includes(searchLower) ||
                  user.email.toLowerCase().includes(searchLower)
              )
            }

            const departmentValue = filters.department
            if (Array.isArray(departmentValue) && departmentValue.length > 0) {
              filteredUsers = filteredUsers.filter((user) =>
                departmentValue.includes(user.department)
              )
            }

            resolve(filteredUsers)
          }, 500)
        })
      },
    })

    return (
      <DataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  key: "name",
                  label: "Name",
                  render: (item) => `👤 ${item.name}`,
                },
                {
                  key: "email",
                  label: "Email",
                  render: (item) => `📧 ${item.email}`,
                },
                {
                  key: "role",
                  label: "Role",
                  render: (item) => `💼 ${item.role}`,
                },
                {
                  key: "department",
                  label: "Department",
                  render: (item) => `🏢 ${item.department}`,
                },
              ],
            },
          },
        ]}
      />
    )
  },
}

export const CustomCardProperties: Story = {
  render: () => {
    const dataSource = useDataSource({
      properties,
      filters,
      fetchData: ({ filters }) => {
        return new Promise<typeof mockUsers>((resolve) => {
          setTimeout(() => {
            let filteredUsers = [...mockUsers]

            const searchValue = filters.search
            if (typeof searchValue === "string") {
              const searchLower = searchValue.toLowerCase()
              filteredUsers = filteredUsers.filter(
                (user) =>
                  user.name.toLowerCase().includes(searchLower) ||
                  user.email.toLowerCase().includes(searchLower)
              )
            }

            const departmentValue = filters.department
            if (Array.isArray(departmentValue) && departmentValue.length > 0) {
              filteredUsers = filteredUsers.filter((user) =>
                departmentValue.includes(user.department)
              )
            }

            resolve(filteredUsers)
          }, 500)
        })
      },
    })

    return (
      <DataCollection
        source={dataSource}
        visualizations={[
          {
            type: "card",
            options: {
              cardProperties: [
                { key: "name", label: "Name" },
                { key: "role", label: "Role" },
              ],
            },
          },
        ]}
      />
    )
  },
}

// Examples with multiple visualizations
export const SwitchableVisualizations: Story = {
  args: {
    useObservable: false,
  },
}

// Examples with different data sources
export const WithObservableData: Story = {
  args: {
    useObservable: true,
  },
}

// Examples with filters and loading states
export const WithPreselectedFilters: Story = {
  render: () => {
    const dataSource = useDataSource({
      properties,
      filters,
      currentFilters: {
        department: ["Engineering"],
      },
      fetchData: ({ filters }) => {
        return new Promise<typeof mockUsers>((resolve) => {
          setTimeout(() => {
            let filteredUsers = [...mockUsers]

            const searchValue = filters.search
            if (typeof searchValue === "string") {
              const searchLower = searchValue.toLowerCase()
              filteredUsers = filteredUsers.filter(
                (user) =>
                  user.name.toLowerCase().includes(searchLower) ||
                  user.email.toLowerCase().includes(searchLower)
              )
            }

            const departmentValue = filters.department
            if (Array.isArray(departmentValue) && departmentValue.length > 0) {
              filteredUsers = filteredUsers.filter((user) =>
                departmentValue.includes(user.department)
              )
            }

            resolve(filteredUsers)
          }, 500)
        })
      },
    })

    return (
      <DataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { key: "name", label: "Name" },
                { key: "email", label: "Email" },
                { key: "role", label: "Role" },
                { key: "department", label: "Department" },
              ],
            },
          },
        ]}
      />
    )
  },
}

export const LoadingStateExample: Story = {
  render: () => {
    const dataSource = useDataSource({
      properties,
      filters,
      fetchData: (_) => {
        return new Promise<typeof mockUsers>((resolve) => {
          setTimeout(() => {
            resolve(mockUsers)
          }, 5000) // Long delay to show loading state
        })
      },
    })

    return (
      <DataCollection
        source={dataSource}
        visualizations={[
          {
            type: "card",
            options: {
              cardProperties: [
                { key: "name", label: "Name" },
                { key: "email", label: "Email" },
                { key: "role", label: "Role" },
                { key: "department", label: "Department" },
              ],
            },
          },
        ]}
      />
    )
  },
}

const JsonVisualization = ({
  source,
}: {
  source: ReturnType<typeof useDataSource<UserSchema, UserFilters>>
}) => {
  const { data, isLoading } = useData({ source })

  if (isLoading) {
    return (
      <pre className="bg-muted overflow-auto rounded-lg p-4">
        <code>Loading...</code>
      </pre>
    )
  }

  return (
    <pre className="bg-muted overflow-auto rounded-lg p-4">
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  )
}

export const WithCustomJsonView: Story = {
  render: () => {
    const dataSource = useDataSource({
      properties,
      filters,
      fetchData: ({ filters }) => {
        return new Observable<typeof mockUsers>((observer) => {
          let filteredUsers = [...mockUsers]

          const searchValue = filters.search
          if (typeof searchValue === "string") {
            const searchLower = searchValue.toLowerCase()
            filteredUsers = filteredUsers.filter(
              (user) =>
                user.name.toLowerCase().includes(searchLower) ||
                user.email.toLowerCase().includes(searchLower)
            )
          }

          const departmentValue = filters.department
          if (Array.isArray(departmentValue) && departmentValue.length > 0) {
            filteredUsers = filteredUsers.filter((user) =>
              departmentValue.includes(user.department)
            )
          }

          observer.next(filteredUsers)
          return () => {}
        })
      },
    })

    return (
      <DataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { key: "name", label: "Name" },
                { key: "email", label: "Email" },
                { key: "role", label: "Role" },
                { key: "department", label: "Department" },
              ],
            },
          },
          {
            type: "card",
            options: {
              cardProperties: [
                { key: "name", label: "Name" },
                { key: "email", label: "Email" },
                { key: "role", label: "Role" },
                { key: "department", label: "Department" },
              ],
            },
          },
          {
            type: "custom",
            label: "JSON View",
            icon: Code,
            component: JsonVisualization,
          },
        ]}
      />
    )
  },
}

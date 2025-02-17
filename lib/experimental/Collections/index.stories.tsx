import { Meta, StoryObj } from "@storybook/react"
import { Code } from "lucide-react"
import { Observable } from "zen-observable-ts"
import { DataCollection, useDataSource } from "."
import { ExtractDataType } from "./types"
import { useData } from "./useData"

const DEPARTMENTS = ["Engineering", "Product", "Design", "Marketing"] as const

const properties = {
  name: {
    type: "string",
    label: "Name",
  },
  email: {
    type: "string",
    label: "Email",
  },
  role: {
    type: "string",
    label: "Role",
  },
  department: {
    type: "enum",
    label: "Department",
    values: DEPARTMENTS,
  },
} as const

// Mock data
const mockUsers = [
  {
    name: "John Doe",
    email: "john@example.com",
    role: "Senior Engineer",
    department: DEPARTMENTS[0],
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Product Manager",
    department: DEPARTMENTS[1],
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Designer",
    department: DEPARTMENTS[2],
  },
  {
    name: "Alice Williams",
    email: "alice@example.com",
    role: "Marketing Lead",
    department: DEPARTMENTS[3],
  },
]

// Example filter definition
const filters = {
  fields: {
    search: {
      type: "search",
      label: "Search",
    },
    department: {
      type: "in",
      label: "Department",
      options: DEPARTMENTS.map((value) => ({ value, label: value })),
    },
  },
} as const

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
          return new Observable<Array<(typeof mockUsers)[0]>>((observer) => {
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
                departmentValue.some((d) => d === user.department)
              )
            }

            observer.next(filteredUsers)
            return () => {}
          })
        }
      : ({ filters }) => {
          return new Promise<Array<(typeof mockUsers)[0]>>((resolve) => {
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
                  departmentValue.some((d) => d === user.department)
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
                { key: "name" },
                { key: "email" },
                { key: "role" },
                { key: "department" },
              ],
            },
          },
          {
            type: "card",
            options: {
              cardProperties: [
                { key: "name" },
                { key: "email" },
                { key: "role" },
                { key: "department" },
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
                departmentValue.some((d) => d === user.department)
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
                { key: "name" },
                { key: "email" },
                { key: "role" },
                { key: "department" },
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
                departmentValue.some((d) => d === user.department)
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
                { key: "name" },
                { key: "email" },
                { key: "role" },
                { key: "department" },
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
                departmentValue.some((d) => d === user.department)
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
                  render: (item) => `👤 ${item.name}`,
                },
                {
                  key: "email",
                  render: (item) => `📧 ${item.email}`,
                },
                {
                  key: "role",
                  render: (item) => `💼 ${item.role}`,
                },
                {
                  key: "department",
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
                departmentValue.some((d) => d === user.department)
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
              cardProperties: [{ key: "name" }, { key: "role" }],
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
                departmentValue.some((d) => d === user.department)
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
                { key: "name" },
                { key: "email" },
                { key: "role" },
                { key: "department" },
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
  source: ReturnType<
    typeof useDataSource<typeof properties, (typeof filters)["fields"]>
  >
}) => {
  const { data, isLoading } = useData(source)

  if (isLoading) {
    return (
      <pre className="bg-muted overflow-auto rounded-lg p-4">
        <code>Loading...</code>
      </pre>
    )
  }

  return (
    <pre className="overflow-auto rounded-lg bg-f1-background-info p-4">
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
              departmentValue.some((d) => d === user.department)
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
            type: "custom",
            label: "JSON View",
            icon: Code,
            component: ({ source }) => <JsonVisualization source={source} />,
          },
          {
            type: "table",
            options: {
              columns: [
                { key: "name" },
                { key: "email" },
                { key: "role" },
                { key: "department" },
              ],
            },
          },
          {
            type: "card",
            options: {
              cardProperties: [
                { key: "name" },
                { key: "email" },
                { key: "role" },
                { key: "department" },
              ],
            },
          },
        ]}
      />
    )
  },
}

// Example usage with table visualization
export const WithTableVisualization: Story = {
  render: () => {
    const source = useDataSource({
      properties,
      filters,
      fetchData: ({ filters }) =>
        new Observable<Array<ExtractDataType<typeof properties>>>(
          (observer) => {
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
                  departmentValue.some((d) => d === user.department)
                )
              }

              observer.next(filteredUsers)
              observer.complete()
            }, 1000)
          }
        ),
    })

    return (
      <DataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { key: "name" },
                { key: "email" },
                { key: "role" },
                { key: "department" },
              ],
            },
          },
        ]}
      />
    )
  },
}

// Example usage with card visualization
export const WithCardVisualization: Story = {
  render: () => {
    const source = useDataSource({
      properties,
      filters,
      fetchData: () =>
        new Observable<Array<ExtractDataType<typeof properties>>>(
          (observer) => {
            setTimeout(() => {
              observer.next(mockUsers)
              observer.complete()
            }, 1000)
          }
        ),
    })

    return (
      <DataCollection
        source={source}
        visualizations={[
          {
            type: "card",
            options: {
              cardProperties: [
                { key: "name" },
                { key: "email" },
                { key: "role" },
                { key: "department" },
              ],
            },
          },
        ]}
      />
    )
  },
}

// Example usage with multiple visualizations
export const WithMultipleVisualizations: Story = {
  render: () => {
    const source = useDataSource({
      properties,
      filters,
      fetchData: () =>
        new Observable<Array<ExtractDataType<typeof properties>>>(
          (observer) => {
            setTimeout(() => {
              observer.next(mockUsers)
              observer.complete()
            }, 1000)
          }
        ),
    })

    return (
      <DataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [{ key: "name" }, { key: "email" }],
            },
          },
          {
            type: "card",
            options: {
              cardProperties: [
                { key: "name" },
                { key: "email" },
                { key: "role" },
                { key: "department" },
              ],
            },
          },
        ]}
      />
    )
  },
}

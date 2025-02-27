import { Link } from "@/components/Actions/Link"
import { Meta, StoryObj } from "@storybook/react"
import { Code } from "lucide-react"
import { Observable } from "zen-observable-ts"
import { DataCollection, useDataSource } from "."
import { PromiseState } from "../../lib/promise-to-observable"
import { FilterDefinition, FiltersState } from "./Filters/types"
import { DataAdapter, PaginatedResponse, RecordType } from "./types"
import { useData } from "./useData"

const DEPARTMENTS = ["Engineering", "Product", "Design", "Marketing"] as const

// Example filter definition
const filters = {
  search: {
    type: "search",
    label: "Search",
  },
  department: {
    type: "in",
    label: "Department",
    options: DEPARTMENTS.map((value) => ({ value, label: value })),
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

// Helper function to filter users based on filters
const filterUsers = <
  T extends RecordType & { name: string; email: string; department: string },
>(
  users: T[],
  filterValues: FiltersState<FiltersType>
) => {
  let filteredUsers = [...users]

  const searchValue = filterValues.search
  if (typeof searchValue === "string") {
    const searchLower = searchValue.toLowerCase()
    filteredUsers = filteredUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower)
    )
  }

  const departmentValue = filterValues.department
  if (Array.isArray(departmentValue) && departmentValue.length > 0) {
    filteredUsers = filteredUsers.filter((user) =>
      departmentValue.some((d) => d === user.department)
    )
  }

  return filteredUsers
}

// Utility functions for data fetching
type FiltersType = typeof filters

const createObservableDataFetch = (delay = 0) => {
  return ({ filters }: { filters: FiltersState<FiltersType> }) =>
    new Observable<PromiseState<(typeof mockUsers)[number][]>>((observer) => {
      observer.next({
        loading: true,
        error: null,
        data: null,
      })

      const timeoutId = setTimeout(() => {
        observer.next({
          loading: false,
          error: null,
          data: filterUsers(mockUsers, filters),
        })
        observer.complete()
      }, delay)

      return () => clearTimeout(timeoutId)
    })
}

const createPromiseDataFetch = (delay = 500) => {
  return ({ filters }: { filters: FiltersState<FiltersType> }) =>
    new Promise<(typeof mockUsers)[number][]>((resolve) => {
      setTimeout(() => {
        resolve(filterUsers(mockUsers, filters))
      }, delay)
    })
}

// Example component using useDataSource
const ExampleComponent = ({
  useObservable = false,
}: {
  useObservable?: boolean
}) => {
  const dataSource = useDataSource({
    filters,
    dataAdapter: {
      fetchData: useObservable
        ? createObservableDataFetch()
        : createPromiseDataFetch(),
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
                { label: "Name", render: (item) => item.name },
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
            },
          },
          {
            type: "card",
            options: {
              title: (item) => item.name,
              cardProperties: [
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
            },
          },
        ]}
      />
    </div>
  )
}

const meta = {
  title: "Data Collection/DataSource",
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
      filters,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
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
                { label: "Name", render: (item) => item.name },
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
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
      filters,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
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
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
              title: (item) => item.name,
            },
          },
        ]}
      />
    )
  },
}

// Examples with customized visualizations
export const ComponentsAsCells: Story = {
  render: () => {
    const dataSource = useDataSource({
      filters,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
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
                { label: "Name", render: (item) => `👤  ${item.name}` },
                {
                  label: "Email",
                  render: (item) => (
                    <Link href={`mailto:${item.email}`}>{item.email}</Link>
                  ),
                },
                { label: "Role", render: (item) => `💼  ${item.role}` },
                {
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
      filters,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    })

    return (
      <DataCollection
        source={dataSource}
        visualizations={[
          {
            type: "card",
            options: {
              cardProperties: [{ label: "Role", render: (item) => item.role }],
              title: (item) => item.name,
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
      filters,
      currentFilters: {
        department: ["Engineering"],
      },
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
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
                { label: "Name", render: (item) => item.name },
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
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
    typeof useDataSource<(typeof mockUsers)[number], typeof filters>
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
      filters,
      dataAdapter: {
        fetchData: createObservableDataFetch(),
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
                { label: "Name", render: (item) => item.name },
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
            },
          },
          {
            type: "card",
            options: {
              cardProperties: [
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
              title: (item) => item.name,
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
      filters,
      dataAdapter: {
        fetchData: createObservableDataFetch(1000),
      },
    })

    return (
      <DataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { label: "Name", render: (item) => item.name },
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
            },
          },
        ]}
      />
    )
  },
}

interface DataAdapterOptions<TRecord> {
  data: TRecord[]
  delay?: number
  useObservable?: boolean
  paginationType?: "pages"
  perPage?: number
}

function createDataAdapter<
  TRecord extends RecordType & {
    name: string
    email: string
    department: string
  },
  TFilters extends Record<string, FilterDefinition<unknown>>,
>({
  data,
  delay = 500,
  useObservable = false,
  paginationType,
  perPage = 10,
}: DataAdapterOptions<TRecord>): DataAdapter<TRecord, TFilters> {
  const filterData = (
    records: TRecord[],
    filters: FiltersState<TFilters>,
    pagination?: { currentPage?: number; perPage?: number }
  ): TRecord[] | PaginatedResponse<TRecord> => {
    const filteredRecords = filterUsers(
      records,
      filters as FiltersState<FiltersType>
    )

    if (paginationType === "pages" && pagination) {
      const { currentPage = 1, perPage: pageSize = perPage } = pagination
      const pagesCount = Math.ceil(filteredRecords.length / pageSize)
      const startIndex = (currentPage - 1) * pageSize
      const endIndex = startIndex + pageSize

      return {
        records: filteredRecords.slice(startIndex, endIndex),
        total: filteredRecords.length,
        currentPage,
        perPage: pageSize,
        pagesCount,
      }
    }

    return filteredRecords
  }

  if (paginationType === "pages") {
    const adapter: DataAdapter<TRecord, TFilters> = {
      paginationType: "pages",
      perPage: undefined,
      fetchData: ({
        filters,
        pagination,
      }: {
        filters: FiltersState<TFilters>
        pagination: { currentPage: number; perPage: number }
      }) => {
        const fetch = () =>
          filterData(data, filters, pagination) as PaginatedResponse<TRecord>

        return useObservable
          ? new Observable<PromiseState<PaginatedResponse<TRecord>>>(
              (observer) => {
                observer.next({
                  loading: true,
                  error: null,
                  data: null,
                })

                const timeoutId = setTimeout(() => {
                  observer.next({
                    loading: false,
                    error: null,
                    data: fetch(),
                  })
                  observer.complete()
                }, delay)
                return () => clearTimeout(timeoutId)
              }
            )
          : new Promise<PaginatedResponse<TRecord>>((resolve) => {
              setTimeout(() => resolve(fetch()), delay)
            })
      },
    }
    return adapter
  }

  const adapter: DataAdapter<TRecord, TFilters> = {
    fetchData: ({ filters }: { filters: FiltersState<TFilters> }) => {
      const fetch = () => filterData(data, filters) as TRecord[]

      return useObservable
        ? new Observable<PromiseState<TRecord[]>>((observer) => {
            observer.next({
              loading: true,
              error: null,
              data: null,
            })

            const timeoutId = setTimeout(() => {
              observer.next({
                loading: false,
                error: null,
                data: fetch(),
              })
              observer.complete()
            }, delay)
            return () => clearTimeout(timeoutId)
          })
        : new Promise<TRecord[]>((resolve) => {
            setTimeout(() => resolve(fetch()), delay)
          })
    },
  }
  return adapter
}

// Example usage with card visualization
export const WithCardVisualization: Story = {
  render: () => {
    const source = useDataSource({
      filters,
      dataAdapter: createDataAdapter<
        (typeof mockUsers)[number],
        typeof filters
      >({
        data: mockUsers,
        delay: 1000,
        useObservable: true,
      }),
    })

    return (
      <DataCollection
        source={source}
        visualizations={[
          {
            type: "card",
            options: {
              cardProperties: [
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
              title: (item) => item.name,
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
    type MockUser = (typeof mockUsers)[number]
    const source = useDataSource<MockUser, typeof filters>({
      filters,
      dataAdapter: {
        fetchData: () =>
          new Observable<PromiseState<MockUser[]>>((observer) => {
            observer.next({
              loading: true,
              error: null,
              data: null,
            })

            setTimeout(() => {
              observer.next({
                loading: false,
                error: null,
                data: mockUsers,
              })
              observer.complete()
            }, 1000)
          }),
      },
    })

    return (
      <DataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { label: "Name", render: (item: MockUser) => item.name },
                { label: "Email", render: (item: MockUser) => item.email },
              ],
            },
          },
          {
            type: "card",
            options: {
              cardProperties: [
                { label: "Email", render: (item: MockUser) => item.email },
                { label: "Role", render: (item: MockUser) => item.role },
                {
                  label: "Department",
                  render: (item: MockUser) => item.department,
                },
              ],
              title: (item: MockUser) => item.name,
            },
          },
        ]}
      />
    )
  },
}

// Generate more mock data for pagination example
const generateMockUsers = (count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
    role:
      index % 3 === 0 ? "Engineer" : index % 3 === 1 ? "Designer" : "Manager",
    department: DEPARTMENTS[index % DEPARTMENTS.length],
  }))
}

const paginatedMockUsers = generateMockUsers(50)

// Example with pagination
export const WithPagination: Story = {
  render: () => {
    const source = useDataSource({
      filters,
      dataAdapter: createDataAdapter<
        (typeof mockUsers)[number],
        typeof filters
      >({
        data: paginatedMockUsers,
        delay: 500,
        paginationType: "pages",
        perPage: 10,
      }),
    })

    return (
      <DataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { label: "Name", render: (item) => item.name },
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
            },
          },
          {
            type: "card",
            options: {
              cardProperties: [
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
              title: (item) => item.name,
            },
          },
        ]}
      />
    )
  },
}

// Example with synchronous data
export const WithSynchronousData: Story = {
  render: () => {
    const source = useDataSource({
      filters,
      dataAdapter: {
        fetchData: ({ filters }) => filterUsers(mockUsers, filters),
      },
    })

    return (
      <DataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { label: "Name", render: (item) => item.name },
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
            },
          },
          {
            type: "card",
            options: {
              cardProperties: [
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
              title: (item) => item.name,
            },
          },
        ]}
      />
    )
  },
}

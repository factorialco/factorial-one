import { Meta, StoryObj } from "@storybook/react"
import { DownloadIcon, Mail, Tag, UploadIcon } from "lucide-react"
import { Observable } from "zen-observable-ts"
import {
  Ai,
  ArrowRight,
  Delete,
  Download,
  EyeInvisible,
  Pencil,
  Share,
  Star,
} from "../../icons/app"
import { PromiseState } from "../../lib/promise-to-observable"
import { FilterDefinition, FiltersState } from "./Filters/types"
import { OneDataCollection, useDataSource } from "./index"
import { ItemActionsDefinition } from "./item-actions"
import { SortingsDefinition, SortingsState } from "./sortings"
import { DataAdapter, PaginatedResponse, Presets, RecordType } from "./types"
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

// Define presets for the filters
const filterPresets: Presets<typeof filters> = [
  {
    label: "Engineering Team",
    filter: {
      department: ["Engineering"],
    },
  },
  {
    label: "Product Team",
    filter: {
      department: ["Product"],
    },
  },
  {
    label: "Design Team",
    filter: {
      department: ["Design"],
    },
  },
  {
    label: "Marketing Team",
    filter: {
      department: ["Marketing"],
    },
  },
]

// Mock data
const mockUsers: {
  id: string
  name: string
  email: string
  role: string
  department: (typeof DEPARTMENTS)[number]
  status: string
  isStarred: boolean
  href?: string
  salary: number | undefined
}[] = [
  {
    id: "user-1",
    name: "John Doe",
    email: "john@example.com",
    role: "Senior Engineer",
    department: DEPARTMENTS[0],
    status: "active",
    isStarred: true,
    salary: 100000,
  },
  {
    id: "user-2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Product Manager",
    department: DEPARTMENTS[1],
    status: "active",
    isStarred: false,
    salary: 80000,
  },
  {
    id: "user-3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Designer",
    department: DEPARTMENTS[2],
    status: "inactive",
    isStarred: false,
    salary: 90000,
  },
  {
    id: "user-4",
    name: "Alice Williams",
    email: "alice@example.com",
    role: "Marketing Lead",
    department: DEPARTMENTS[3],
    status: "active",
    isStarred: true,
    salary: undefined,
  },
]

// Helper function to filter users based on filters
const filterUsers = <
  T extends RecordType & {
    name: string
    email: string
    department: string
    salary: number | undefined
  },
>(
  users: T[],
  filterValues: FiltersState<FiltersType>,
  sortingState: SortingsState<typeof sortings>,
  search?: string
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

  if (sortingState) {
    filteredUsers = filteredUsers.sort((a, b) => {
      const aValue = a[sortingState.field]
      const bValue = b[sortingState.field]

      // Handle string comparisons
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortingState.order === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      }

      // Handle number comparisons
      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortingState.order === "asc" ? aValue - bValue : bValue - aValue
      }

      // Handle boolean comparisons
      if (typeof aValue === "boolean" && typeof bValue === "boolean") {
        // false comes before true when ascending
        return sortingState.order === "asc"
          ? aValue === bValue
            ? 0
            : aValue
              ? 1
              : -1
          : aValue === bValue
            ? 0
            : aValue
              ? -1
              : 1
      }

      // Default case: use string representation
      return sortingState.order === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue))
    })
  }

  // Handle department filter
  const departmentFilterValues = filterValues.department
  if (
    Array.isArray(departmentFilterValues) &&
    departmentFilterValues.length > 0
  ) {
    filteredUsers = filteredUsers.filter((user) =>
      departmentFilterValues.some((d) => d === user.department)
    )
  }

  if (search) {
    filteredUsers = filteredUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )
  }

  return filteredUsers
}

// Utility functions for data fetching
type FiltersType = typeof filters

const createObservableDataFetch = (delay = 0) => {
  return ({
    filters,
    sortings: sortingsState,
  }: {
    filters: FiltersState<FiltersType>
    sortings: SortingsState<typeof sortings>
  }) =>
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
          data: filterUsers(mockUsers, filters, sortingsState),
        })
        observer.complete()
      }, delay)

      return () => clearTimeout(timeoutId)
    })
}

const createPromiseDataFetch = (delay = 500) => {
  return ({
    filters,
    sortings: sortingsState,
    search,
  }: {
    filters: FiltersState<FiltersType>
    sortings: SortingsState<typeof sortings>
    search?: string
  }) =>
    new Promise<(typeof mockUsers)[number][]>((resolve) => {
      setTimeout(() => {
        resolve(filterUsers(mockUsers, filters, sortingsState, search))
      }, delay)
    })
}

// Example component using useDataSource
const ExampleComponent = ({
  useObservable = false,
  usePresets = false,
  frozenCols = 0,
}: {
  useObservable?: boolean
  usePresets?: boolean
  frozenCols?: 0 | 1 | 2
}) => {
  type MockUser = (typeof mockUsers)[number]

  const dataSource = useDataSource({
    filters,
    presets: usePresets ? filterPresets : undefined,
    sortings,
    itemActions: (item: MockUser) => [
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
        label: item.isStarred ? "Remove Star" : "Star User",
        icon: Star,
        onClick: () => console.log(`Toggling star for ${item.name}`),
        description: item.isStarred
          ? "Remove from favorites"
          : "Add to favorites",
      },
      {
        label: "Delete",
        icon: Delete,
        onClick: () => console.log(`Deleting ${item.name}`),
        critical: true,
        description: "Permanently remove user",
        enabled: item.department === "Engineering" && item.status === "active",
      },
    ],
    dataAdapter: {
      fetchData: useObservable
        ? createObservableDataFetch()
        : createPromiseDataFetch(),
    },
  })

  return (
    <div className="space-y-4">
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              frozenColumns: frozenCols,
              columns: [
                {
                  label: "Name",
                  width: 140,
                  render: (item) => ({
                    type: "person",
                    value: {
                      firstName: item.name.split(" ")[0],
                      lastName: item.name.split(" ")[1],
                    },
                  }),
                  sorting: "name",
                },
                {
                  label: "Email",
                  render: (item) => item.email,
                  sorting: "email",
                },
                {
                  label: "Role",
                  render: (item) => item.role,
                  sorting: "role",
                },
                {
                  label: "Department",
                  render: (item) => item.department,
                  sorting: "department",
                },
                {
                  label: "Email",
                  render: (item) => item.email,
                  sorting: "email",
                },
                {
                  label: "Role",
                  render: (item) => item.role,
                  sorting: "role",
                },
                {
                  label: "Department",
                  render: (item) => item.department,
                  sorting: "department",
                },
                {
                  label: "Email",
                  render: (item) => item.email,
                  sorting: "email",
                },
                {
                  label: "Role",
                  render: (item) => item.role,
                  sorting: "role",
                },
                {
                  label: "Department",
                  render: (item) => item.department,
                  sorting: "department",
                },
                {
                  label: "Email",
                  render: (item) => item.email,
                  sorting: "email",
                },
                {
                  label: "Role",
                  render: (item) => item.role,
                  sorting: "role",
                },
                {
                  label: "Department",
                  render: (item) => item.department,
                  sorting: "department",
                },
              ],
            },
          },
          {
            type: "card",
            options: {
              title: (item) => item.name,
              cardProperties: [
                {
                  label: "Email",
                  render: (item) => item.email,
                },
                {
                  label: "Role",
                  render: (item) => item.role,
                },
                {
                  label: "Department",
                  render: (item) => item.department,
                },
              ],
            },
          },
        ]}
      />
    </div>
  )
}

const meta = {
  title: "Data Collection",
  component: ExampleComponent,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    useObservable: {
      control: "boolean",
      description: "Use Observable for data fetching",
    },
    usePresets: {
      control: "boolean",
      description: "Include filter presets",
    },
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

// Basic examples with single visualization
export const BasicTableView: Story = {
  render: () => {
    const dataSource = useDataSource({
      filters,
      presets: filterPresets,
      sortings: {
        name: {
          label: "Name",
        },
        email: {
          label: "Email",
        },
        role: {
          label: "Role",
        },
        department: {
          label: "Department",
        },
        salary: {
          label: "Salary",
        },
      },
      search: {
        enabled: true,
      },
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
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
          label: item.isStarred ? "Remove Star" : "Star User",
          icon: Star,
          onClick: () => console.log(`Toggling star for ${item.name}`),
          description: item.isStarred
            ? "Remove from favorites"
            : "Add to favorites",
        },
        {
          label: "Delete",
          icon: Delete,
          onClick: () => console.log(`Deleting ${item.name}`),
          critical: true,
          description: "Permanently remove user",
          enabled:
            item.department === "Engineering" && item.status === "active",
        },
      ],
      primaryActions: () => ({
        label: "Primary action",
        icon: EyeInvisible,
        onClick: () => console.log(`Primary action`),
      }),
      secondaryActions: () => [
        {
          label: "Import",
          icon: UploadIcon,
          onClick: () => console.log(`Import`),
        },
        {
          label: "Export",
          icon: DownloadIcon,
          onClick: () => console.log(`Export`),
        },
      ],
    })

    return (
      <div className="space-y-4">
        <OneDataCollection
          source={dataSource}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  {
                    label: "Name",
                    render: (item) => ({
                      type: "person",
                      value: {
                        firstName: item.name.split(" ")[0],
                        lastName: item.name.split(" ")[1],
                      },
                    }),
                    sorting: "name",
                  },
                  {
                    label: "Email",
                    render: (item) => item.email,
                    sorting: "email",
                  },
                  {
                    label: "Role",
                    render: (item) => item.role,
                    sorting: "role",
                  },
                  {
                    label: "Department",
                    render: (item) => item.department,
                    sorting: "department",
                  },
                  {
                    label: "Salary",
                    render: (item) => ({
                      type: "amount",
                      value: item.salary ?? 0,
                    }),
                    align: "right",
                    sorting: "salary",
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

// Examples with multiple visualizations
export const TableFrozenCols: Story = {
  render: () => <ExampleComponent frozenCols={2} />,
}

// Basic examples with single visualization
export const WithLinkedItems: Story = {
  render: () => {
    const dataSource = useDataSource({
      filters,
      presets: filterPresets,
      itemUrl: (item) => {
        if (item.id === "user-1") return undefined
        return `/users/${item.id}`
      },
      sortings: {
        name: {
          label: "Name",
        },
        email: {
          label: "Email",
        },
        role: {
          label: "Role",
        },
        department: {
          label: "Department",
        },
        salary: {
          label: "Salary",
        },
      },
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
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
          label: item.isStarred ? "Remove Star" : "Star User",
          icon: Star,
          onClick: () => console.log(`Toggling star for ${item.name}`),
          description: item.isStarred
            ? "Remove from favorites"
            : "Add to favorites",
        },
        {
          label: "Delete",
          icon: Delete,
          onClick: () => console.log(`Deleting ${item.name}`),
          critical: true,
          description: "Permanently remove user",
          enabled:
            item.department === "Engineering" && item.status === "active",
        },
      ],
    })

    return (
      <div className="space-y-4">
        <OneDataCollection
          source={dataSource}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  {
                    label: "Name",
                    render: (item) => item.name,
                    sorting: "name",
                  },
                  {
                    label: "Email",
                    render: (item) => item.email,
                    sorting: "email",
                  },
                  {
                    label: "Role",
                    render: (item) => item.role,
                    sorting: "role",
                  },
                  {
                    label: "Department",
                    render: (item) => item.department,
                    sorting: "department",
                  },
                ],
              },
            },
            {
              type: "card",
              options: {
                title: (item) => item.name,
                cardProperties: [
                  {
                    label: "Email",
                    render: (item) => item.email,
                  },
                  {
                    label: "Role",
                    render: (item) => item.role,
                  },
                  {
                    label: "Department",
                    render: (item) => item.department,
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

export const BasicCardView: Story = {
  render: () => {
    const dataSource = useDataSource({
      filters,
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
      itemActions: (item) => [
        {
          label: "Edit",
          icon: Pencil,
          onClick: () => console.log(`Editing ${item.name}`),
        },
        {
          label: "Share",
          icon: Share,
          onClick: () => console.log(`Sharing ${item.name}`),
        },
      ],
      secondaryActions: () => [
        {
          label: "Import",
          icon: DownloadIcon,
          onClick: () => console.log(`Import`),
        },
        {
          label: "Export",
          icon: DownloadIcon,
          onClick: () => console.log(`Export`),
        },
      ],
    })

    return (
      <OneDataCollection
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

// Examples with different property renderers
export const RendererTypes: Story = {
  render: () => {
    const dataSource = useDataSource({
      filters,
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item) => ({
                    type: "person",
                    value: {
                      firstName: item.name.split(" ")[0],
                      lastName: item.name.split(" ")[1],
                    },
                  }),
                  sorting: "name",
                },
                {
                  label: "Email",
                  render: (item) => item.email,
                  sorting: "email",
                },
                {
                  label: "Role",
                  render: (item) => ({
                    type: "status",
                    value: {
                      status: "info",
                      label: item.role,
                    },
                  }),
                  sorting: "role",
                },
                {
                  label: "Department",
                  render: (item) => ({
                    type: "tag",
                    value: {
                      label: item.department,
                      icon: Tag,
                    },
                  }),
                  sorting: "department",
                },
                {
                  label: "Teamates",
                  render: (item) => ({
                    type: "avatarList",
                    value: {
                      avatarList: [
                        {
                          type: "person",
                          firstName: item.name,
                          lastName: "Doe",
                          src: "https://github.com/shadcn.png",
                        },
                        {
                          type: "person",
                          firstName: "Dani",
                          lastName: "Moreno",
                          src: "https://github.com/dani-moreno.png",
                        },
                        {
                          type: "person",
                          firstName: "Sergio",
                          lastName: "Carracedo",
                          src: "https://github.com/sergiocarracedo.png",
                        },
                      ],
                    },
                  }),
                  sorting: "department",
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
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    })

    return (
      <OneDataCollection
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
  render: () => <ExampleComponent />,
}

// Examples with filters and loading states
export const WithPreselectedFilters: Story = {
  render: () => {
    const dataSource = useDataSource({
      filters,
      sortings,
      presets: filterPresets,
      currentFilters: {
        department: ["Engineering"],
      },
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    })

    return (
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
              ],
            },
          },
        ]}
      />
    )
  },
}

// Example of using the object-based approach (recommended)
const sortings = {
  name: {
    label: "Name",
  },
  email: {
    label: "Email",
  },
  department: {
    label: "Department",
  },
  role: {
    label: "Role",
  },
  salary: {
    label: "Salary",
  },
} as const

const JsonVisualization = ({
  source,
}: {
  source: ReturnType<
    typeof useDataSource<
      (typeof mockUsers)[number],
      typeof filters,
      typeof sortings,
      ItemActionsDefinition<(typeof mockUsers)[number]>
    >
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
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "custom",
            label: "JSON View",
            icon: Ai,
            component: ({ source }) => <JsonVisualization source={source} />,
          },
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item) => ({
                    type: "person",
                    value: {
                      firstName: item.name.split(" ")[0],
                      lastName: item.name.split(" ")[1],
                    },
                  }),
                  sorting: "name",
                },
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
                {
                  label: "Name",
                  render: (item) => ({
                    type: "person",
                    value: {
                      firstName: item.name.split(" ")[0],
                      lastName: item.name.split(" ")[1],
                    },
                  }),
                },
                {
                  label: "Email",
                  render: (item) => ({
                    type: "tag",
                    value: {
                      label: item.email,
                      icon: Mail,
                    },
                  }),
                },
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
      sortings,
      defaultSorting: {
        field: "name",
        order: "asc",
      },
      presets: filterPresets,
      dataAdapter: createDataAdapter<
        (typeof mockUsers)[number],
        typeof filters,
        typeof sortings
      >({
        data: mockUsers,
        delay: 500,
      }),
    })

    return (
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item) => item.name,
                  sorting: "name",
                },
                {
                  label: "Email",
                  render: (item) => item.email,
                  sorting: "email",
                },
                {
                  label: "Role",
                  render: (item) => item.role,
                  sorting: "role",
                },
                {
                  label: "Department",
                  render: (item) => item.department,
                  sorting: "department",
                },
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
    department: (typeof DEPARTMENTS)[number]
    salary?: number
  },
  TFilters extends Record<string, FilterDefinition<unknown>>,
  TSortings extends SortingsDefinition,
>({
  data,
  delay = 500,
  useObservable = false,
  paginationType,
  perPage = 10,
}: DataAdapterOptions<TRecord>): DataAdapter<TRecord, TFilters, TSortings> {
  const filterData = (
    records: TRecord[],
    filters: FiltersState<TFilters>,
    sortingsState: SortingsState<TSortings>,
    pagination?: { currentPage?: number; perPage?: number }
  ): TRecord[] | PaginatedResponse<TRecord> => {
    let filteredRecords = [...records]

    // Apply text search if available
    if (
      "search" in filters &&
      typeof filters.search === "string" &&
      filters.search.trim() !== ""
    ) {
      const searchTerm = (filters.search as string).toLowerCase()
      filteredRecords = filteredRecords.filter(
        (record) =>
          record.name.toLowerCase().includes(searchTerm) ||
          record.email.toLowerCase().includes(searchTerm)
      )
    }

    // Apply department filter if provided
    if (
      "department" in filters &&
      Array.isArray(filters.department) &&
      filters.department.length > 0
    ) {
      filteredRecords = filteredRecords.filter((record) =>
        (filters.department as string[]).includes(record.department)
      )
    }

    // Apply sorting if available
    if (sortingsState) {
      const sortField = sortingsState.field as keyof TRecord
      const sortDirection = sortingsState.order

      filteredRecords.sort((a, b) => {
        const aValue = a[sortField]
        const bValue = b[sortField]

        // Handle string comparisons
        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortDirection === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue)
        }

        // Handle number comparisons
        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortDirection === "asc" ? aValue - bValue : bValue - aValue
        }

        // Handle boolean comparisons
        if (typeof aValue === "boolean" && typeof bValue === "boolean") {
          return sortDirection === "asc"
            ? aValue === bValue
              ? 0
              : aValue
                ? 1
                : -1
            : aValue === bValue
              ? 0
              : aValue
                ? -1
                : 1
        }

        // Default case: use string representation
        return sortDirection === "asc"
          ? String(aValue).localeCompare(String(bValue))
          : String(bValue).localeCompare(String(aValue))
      })
    }

    // Apply pagination if needed
    if (pagination && paginationType === "pages") {
      const { currentPage = 1 } = pagination
      const pageSize = pagination.perPage || perPage
      const startIndex = (currentPage - 1) * pageSize
      const paginatedRecords = filteredRecords.slice(
        startIndex,
        startIndex + pageSize
      )

      return {
        records: paginatedRecords,
        total: filteredRecords.length,
        currentPage,
        perPage: pageSize,
        pagesCount: Math.ceil(filteredRecords.length / pageSize),
      }
    }

    return filteredRecords
  }

  if (paginationType === "pages") {
    const adapter: DataAdapter<TRecord, TFilters, TSortings> = {
      paginationType: "pages",
      perPage,
      fetchData: ({ filters, sortings, pagination }) => {
        if (useObservable) {
          return new Observable<PromiseState<PaginatedResponse<TRecord>>>(
            (observer) => {
              observer.next({
                loading: true,
                error: null,
                data: null,
              })

              setTimeout(() => {
                const fetch = () =>
                  filterData(
                    data,
                    filters,
                    sortings,
                    pagination
                  ) as PaginatedResponse<TRecord>

                try {
                  observer.next({
                    loading: false,
                    error: null,
                    data: fetch(),
                  })
                  observer.complete()
                } catch (error) {
                  observer.next({
                    loading: false,
                    error:
                      error instanceof Error ? error : new Error(String(error)),
                    data: null,
                  })
                  observer.complete()
                }
              }, delay)
            }
          )
        }

        return new Promise<PaginatedResponse<TRecord>>((resolve, reject) => {
          setTimeout(() => {
            try {
              resolve(
                filterData(
                  data,
                  filters,
                  sortings,
                  pagination
                ) as PaginatedResponse<TRecord>
              )
            } catch (error) {
              reject(error)
            }
          }, delay)
        })
      },
    }

    return adapter
  }

  const adapter: DataAdapter<TRecord, TFilters, TSortings> = {
    fetchData: ({ filters, sortings }) => {
      if (useObservable) {
        return new Observable<PromiseState<TRecord[]>>((observer) => {
          observer.next({
            loading: true,
            error: null,
            data: null,
          })

          setTimeout(() => {
            try {
              const fetch = () =>
                filterData(data, filters, sortings) as TRecord[]

              observer.next({
                loading: false,
                error: null,
                data: fetch(),
              })
              observer.complete()
            } catch (error) {
              observer.next({
                loading: false,
                error:
                  error instanceof Error ? error : new Error(String(error)),
                data: null,
              })
              observer.complete()
            }
          }, delay)
        })
      }

      return new Promise<TRecord[]>((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve(filterData(data, filters, sortings) as TRecord[])
          } catch (error) {
            reject(error)
          }
        }, delay)
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
      presets: filterPresets,
      sortings,
      dataAdapter: createDataAdapter({
        data: mockUsers,
        delay: 1000,
        useObservable: true,
      }),
    })

    return (
      <OneDataCollection
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
    const source = useDataSource({
      filters,
      presets: filterPresets,
      sortings,
      dataAdapter: createDataAdapter({
        data: mockUsers,
        delay: 500,
      }),
    })

    return (
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item) => item.name,
                  sorting: "name",
                },
                {
                  label: "Email",
                  render: (item) => item.email,
                  sorting: "email",
                },
                {
                  label: "Role",
                  render: (item) => item.role,
                  sorting: "role",
                },
                {
                  label: "Department",
                  render: (item) => item.department,
                  sorting: "department",
                },
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

// Fix the generateMockUsers function to use the correct department types
const generateMockUsers = (count: number) => {
  return Array.from({ length: count }).map((_, index) => {
    const department = DEPARTMENTS[index % DEPARTMENTS.length]
    return {
      id: `user-${index + 1}`,
      name: `User ${index + 1}`,
      email: `user${index + 1}@example.com`,
      role:
        index % 3 === 0 ? "Engineer" : index % 3 === 1 ? "Designer" : "Manager",
      department,
      status: index % 5 === 0 ? "inactive" : "active",
      isStarred: index % 3 === 0,
      href: `/users/user-${index + 1}`,
      salary: department === "Marketing" ? 50000 + index * 1000 : undefined,
    }
  })
}

export const WithPagination: Story = {
  render: () => {
    // Create a fixed set of paginated users so we're not regenerating them on every render
    const paginatedMockUsers = generateMockUsers(50)

    const source = useDataSource({
      filters,
      presets: filterPresets,
      sortings,
      dataAdapter: createDataAdapter<
        {
          id: string
          name: string
          email: string
          role: string
          department: (typeof DEPARTMENTS)[number]
          status: string
          isStarred: boolean
          href: string
          salary: number | undefined
        },
        typeof filters,
        typeof sortings
      >({
        data: paginatedMockUsers,
        delay: 500,
        paginationType: "pages",
        perPage: 10,
      }),
    })

    return (
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item) => item.name,
                  sorting: "name",
                },
                {
                  label: "Email",
                  render: (item) => item.email,
                  sorting: "email",
                },
                {
                  label: "Role",
                  render: (item) => item.role,
                  sorting: "role",
                },
                {
                  label: "Department",
                  render: (item) => item.department,
                  sorting: "department",
                },
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

export const WithSynchronousData: Story = {
  render: () => {
    const source = useDataSource({
      filters,
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: ({ filters, sortings }) => {
          // Ensure sortings are properly applied
          return filterUsers(mockUsers, filters, sortings)
        },
      },
    })

    return (
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item) => item.name,
                  sorting: "name",
                },
                {
                  label: "Email",
                  render: (item) => item.email,
                  sorting: "email",
                },
                {
                  label: "Role",
                  render: (item) => item.role,
                  sorting: "role",
                },
                {
                  label: "Department",
                  render: (item) => item.department,
                  sorting: "department",
                },
              ],
            },
          },
        ]}
      />
    )
  },
}

export const WithAdvancedActions: Story = {
  render: () => {
    const source = useDataSource({
      filters,
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
      itemActions: (item) => [
        // Basic actions
        {
          label: "View Details",
          icon: Ai,
          onClick: () => console.log(`Viewing ${item.name}`),
          description: "See complete user information",
        },
        {
          label: "Edit",
          icon: Pencil,
          onClick: () => console.log(`Editing ${item.name}`),
        },
        { type: "separator" },
        // Conditional actions based on item state
        ...(item.status === "active"
          ? [
              {
                label: "Deactivate User",
                icon: Delete,
                onClick: () => console.log(`Deactivating ${item.name}`),
                description: "Temporarily disable account",
              } as const,
            ]
          : [
              {
                label: "Activate User",
                icon: ArrowRight,
                onClick: () => console.log(`Activating ${item.name}`),
                description: "Re-enable account",
              } as const,
            ]),
        // Conditional visibility
        {
          label: "Download Data",
          icon: Download,
          onClick: () => console.log(`Downloading data for ${item.name}`),
          enabled: item.status === "active",
        },
        // Critical action with confirmation
        {
          label: "Delete Permanently",
          icon: Delete,
          onClick: () => {
            if (confirm(`Are you sure you want to delete ${item.name}?`)) {
              console.log(`Deleting ${item.name}`)
            }
          },
          critical: true,
          description: "This action cannot be undone",
          enabled: item.department === "Engineering",
        },
        // Toggle action
        {
          label: item.isStarred ? "Remove Star" : "Add Star",
          icon: Star,
          onClick: () => console.log(`Toggling star for ${item.name}`),
          description: item.isStarred
            ? "Remove from favorites"
            : "Add to favorites",
        },
        // Copy action
        {
          label: "Duplicate User",
          icon: Share,
          onClick: () => console.log(`Duplicating ${item.name}`),
          description: "Create a copy of this user",
        },
      ],
    })

    return (
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item) => item.name,
                  sorting: "name",
                },
                {
                  label: "Email",
                  render: (item) => item.email,
                  sorting: "email",
                },
                {
                  label: "Role",
                  render: (item) => item.role,
                  sorting: "role",
                },
                {
                  label: "Department",
                  render: (item) => item.department,
                  sorting: "department",
                },
                { label: "Status", render: (item) => item.status },
              ],
            },
          },
        ]}
      />
    )
  },
}

// Search functionality demonstration
export const WithSyncSearch: Story = {
  render: () => {
    const source = useDataSource({
      filters,
      sortings,
      search: {
        enabled: true,
        // Set sync to true to see immediate search results without debounce
        sync: true,
      },
      dataAdapter: {
        fetchData: ({ filters, sortings, search }) => {
          // Store mock data in a local variable for filtering
          const mockUserData = [
            {
              id: "user-1",
              name: "John Doe",
              email: "john@example.com",
              role: "Senior Engineer",
              department: DEPARTMENTS[0],
              status: "active",
              isStarred: true,
            },
            {
              id: "user-2",
              name: "Jane Smith",
              email: "jane@example.com",
              role: "Product Manager",
              department: DEPARTMENTS[1],
              status: "active",
              isStarred: false,
            },
            {
              id: "user-3",
              name: "Alice Johnson",
              email: "alice@example.com",
              role: "UX Designer",
              department: DEPARTMENTS[2],
              status: "active",
              isStarred: false,
            },
            {
              id: "user-4",
              name: "Bob Brown",
              email: "bob@example.com",
              role: "Developer",
              department: DEPARTMENTS[0],
              status: "inactive",
              isStarred: true,
            },
            {
              id: "user-5",
              name: "Emma Wilson",
              email: "emma@example.com",
              role: "Marketing Lead",
              department: DEPARTMENTS[3],
              status: "active",
              isStarred: false,
            },
          ]

          // Apply search filter if search term is provided
          let filteredUsers = [...mockUserData]

          if (search) {
            const searchLower = search.toLowerCase()
            filteredUsers = filteredUsers.filter(
              (user) =>
                user.name.toLowerCase().includes(searchLower) ||
                user.email.toLowerCase().includes(searchLower) ||
                user.role.toLowerCase().includes(searchLower) ||
                user.department.toLowerCase().includes(searchLower)
            )
            console.log(
              `Searching for: "${search}" - Found ${filteredUsers.length} results`
            )
          }

          // Apply department filter if provided
          const departmentFilter = filters.department as string[] | undefined
          if (departmentFilter && departmentFilter.length > 0) {
            filteredUsers = filteredUsers.filter((user) =>
              departmentFilter.includes(user.department)
            )
          }

          // Apply sorting if provided
          if (sortings) {
            const field = sortings.field as keyof (typeof mockUserData)[0]
            const direction = sortings.order

            filteredUsers.sort((a, b) => {
              const aValue = a[field]
              const bValue = b[field]

              if (typeof aValue === "string" && typeof bValue === "string") {
                return direction === "asc"
                  ? aValue.localeCompare(bValue)
                  : bValue.localeCompare(aValue)
              }

              return 0
            })
          }

          return filteredUsers
        },
      },
    })

    return (
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item) => item.name,
                  sorting: "name",
                },
                {
                  label: "Email",
                  render: (item) => item.email,
                  sorting: "email",
                },
                {
                  label: "Role",
                  render: (item) => item.role,
                  sorting: "role",
                },
                {
                  label: "Department",
                  render: (item) => item.department,
                  sorting: "department",
                },
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
    )
  },
}

// Example with async search functionality
export const WithAsyncSearch: Story = {
  render: () => {
    type MockUser = (typeof mockUsers)[number]
    type MockActions = ItemActionsDefinition<MockUser>

    const source = useDataSource<
      MockUser,
      typeof filters,
      typeof sortings,
      MockActions
    >({
      filters,
      sortings,
      search: {
        enabled: true,
        // Set sync to false to simulate async search with debounce
        sync: false,
        // Set debounce time to 300ms
        debounceTime: 300,
      },
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
          label: item.isStarred ? "Remove Star" : "Star User",
          icon: Star,
          onClick: () => console.log(`Toggling star for ${item.name}`),
          description: item.isStarred
            ? "Remove from favorites"
            : "Add to favorites",
        },
      ],
      dataAdapter: {
        fetchData: ({ filters, sortings, search }) => {
          // Simulate an API call with a delay
          return new Promise((resolve) => {
            setTimeout(() => {
              const mockUserData = generateMockUsers(20)
              let filteredUsers = [...mockUserData]

              if (search) {
                const searchLower = search.toLowerCase()
                filteredUsers = filteredUsers.filter(
                  (user) =>
                    user.name.toLowerCase().includes(searchLower) ||
                    user.email.toLowerCase().includes(searchLower) ||
                    user.role.toLowerCase().includes(searchLower) ||
                    user.department.toLowerCase().includes(searchLower)
                )
                console.log(
                  `Async search for: "${search}" - Found ${filteredUsers.length} results`
                )
              }

              // Apply department filter if provided
              const departmentFilter = filters.department as
                | string[]
                | undefined
              if (departmentFilter && departmentFilter.length > 0) {
                filteredUsers = filteredUsers.filter((user) =>
                  departmentFilter.includes(user.department)
                )
              }

              // Apply sorting if provided
              if (sortings) {
                const field = sortings.field as keyof MockUser
                const direction = sortings.order

                filteredUsers.sort((a, b) => {
                  const aValue = a[field]
                  const bValue = b[field]

                  if (
                    typeof aValue === "string" &&
                    typeof bValue === "string"
                  ) {
                    return direction === "asc"
                      ? aValue.localeCompare(bValue)
                      : bValue.localeCompare(aValue)
                  }

                  return 0
                })
              }

              resolve(filteredUsers)
            }, 1000) // Simulate 1 second delay for API response
          })
        },
      },
    })

    return (
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item: MockUser) => item.name,
                  sorting: "name",
                },
                {
                  label: "Email",
                  render: (item: MockUser) => item.email,
                  sorting: "email",
                },
                {
                  label: "Role",
                  render: (item: MockUser) => item.role,
                  sorting: "role",
                },
                {
                  label: "Department",
                  render: (item: MockUser) => item.department,
                  sorting: "department",
                },
              ],
            },
          },
          {
            type: "card",
            options: {
              title: (item: MockUser) => item.name,
              cardProperties: [
                { label: "Email", render: (item: MockUser) => item.email },
                { label: "Role", render: (item: MockUser) => item.role },
                {
                  label: "Department",
                  render: (item: MockUser) => item.department,
                },
              ],
            },
          },
        ]}
      />
    )
  },
}

// Example showcasing table column properties (width, info, sticky, hidden)
export const TableColumnProperties: Story = {
  render: () => {
    // Generate more mock users for this example to better demonstrate scrolling with sticky columns
    const extendedMockUsers = Array(50)
      .fill(null)
      .map((_, index) => ({
        id: `user-ex-${index}`,
        name: `User ${index + 1}`,
        email: `user${index + 1}@example.com`,
        role:
          index % 3 === 0
            ? "Engineer"
            : index % 3 === 1
              ? "Designer"
              : "Manager",
        department: DEPARTMENTS[index % DEPARTMENTS.length],
        status: index % 4 === 0 ? "inactive" : "active",
        isStarred: index % 5 === 0,
        salary: 50000 + index * 1000,
        location:
          index % 3 === 0 ? "Remote" : index % 3 === 1 ? "Office" : "Hybrid",
        startDate: new Date(2020, index % 12, 1 + (index % 28))
          .toISOString()
          .split("T")[0],
        performance:
          index % 5 === 0
            ? "Exceptional"
            : index % 5 === 1
              ? "Above Average"
              : index % 5 === 2
                ? "Average"
                : index % 5 === 3
                  ? "Below Average"
                  : "Needs Improvement",
        yearsExperience: Math.floor(Math.random() * 15) + 1,
        team: ["Alpha", "Beta", "Gamma", "Delta", "Epsilon"][index % 5],
        certifications:
          index % 3 === 0
            ? "AWS, Google Cloud"
            : index % 3 === 1
              ? "Azure, MongoDB"
              : "Kubernetes, Docker",
        education:
          index % 4 === 0
            ? "Ph.D."
            : index % 4 === 1
              ? "Master's"
              : index % 4 === 2
                ? "Bachelor's"
                : "Associate's",
        languages:
          index % 3 === 0
            ? "English, Spanish"
            : index % 3 === 1
              ? "English, French, German"
              : "English, Mandarin",
        projects: Math.floor(Math.random() * 10) + 1,
        performanceScore: Math.floor(Math.random() * 100) + 1,
        lastReview: new Date(2023, index % 12, 1 + (index % 28))
          .toISOString()
          .split("T")[0],
        nextReview: new Date(2024, index % 12, 1 + (index % 28))
          .toISOString()
          .split("T")[0],
      }))

    // Define extended sortings for the example
    const extendedSortings = {
      name: { label: "Name" },
      email: { label: "Email" },
      role: { label: "Role" },
      department: { label: "Department" },
      salary: { label: "Salary" },
      location: { label: "Location" },
      startDate: { label: "Start Date" },
      performance: { label: "Performance" },
      yearsExperience: { label: "Experience" },
      team: { label: "Team" },
      certifications: { label: "Certifications" },
      education: { label: "Education" },
      languages: { label: "Languages" },
      projects: { label: "Projects" },
      performanceScore: { label: "Score" },
      lastReview: { label: "Last Review" },
      nextReview: { label: "Next Review" },
    } as const

    // Create a custom data adapter for the extended data structure
    const dataAdapter = createDataAdapter({
      data: extendedMockUsers,
      delay: 300,
    })

    const dataSource = useDataSource({
      filters,
      presets: filterPresets,
      sortings: extendedSortings,
      dataAdapter,
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "ID",
                  render: (item) => item.id,
                  hidden: true, // This column will be hidden
                },
                {
                  label: "Name",
                  render: (item) => item.name,
                  sorting: "name",
                  width: 100,
                },
                {
                  label: "Email",
                  render: (item) => item.email,
                  sorting: "email",
                  width: 150,
                },
                {
                  label: "Role",
                  render: (item) => item.role,
                  sorting: "role",
                  width: 100,
                },
                {
                  label: "Department",
                  render: (item) => item.department,
                  sorting: "department",
                },
                {
                  label: "Years Experience",
                  render: (item) => item.yearsExperience,
                  sorting: "yearsExperience",
                },
                {
                  label: "Team",
                  render: (item) => item.team,
                  sorting: "team",
                },
                {
                  label: "Salary",
                  render: (item) => `$${item.salary.toLocaleString()}`,
                  sorting: "salary",
                  info: "Annual gross salary before taxes and deductions", // Info tooltip
                },
                {
                  label: "Location",
                  render: (item) => item.location,
                  sorting: "location",
                },
                {
                  label: "Start Date",
                  render: (item) => item.startDate,
                  sorting: "startDate",
                },
                {
                  label: "Certifications",
                  render: (item) => item.certifications,
                  sorting: "certifications",
                },
                {
                  label: "Education",
                  render: (item) => item.education,
                  sorting: "education",
                },
                {
                  label: "Languages",
                  render: (item) => item.languages,
                  sorting: "languages",
                  width: 360, // Wider column for longer text
                },
                {
                  label: "Projects",
                  render: (item) => item.projects,
                  sorting: "projects",
                },
                {
                  label: "Performance",
                  render: (item) => item.performance,
                  sorting: "performance",
                  info: "Based on the last annual performance review", // Info tooltip
                },
                {
                  label: "Score",
                  render: (item) => item.performanceScore,
                  sorting: "performanceScore",
                },
                {
                  label: "Last Review",
                  render: (item) => item.lastReview,
                  sorting: "lastReview",
                },
                {
                  label: "Next Review",
                  render: (item) => item.nextReview,
                  sorting: "nextReview",
                },
              ],
            },
          },
        ]}
      />
    )
  },
}

import { Link } from "@/components/Actions/Link"
import {
  Ai,
  ArrowRight,
  Delete,
  Download,
  Pencil,
  Share,
  Star,
} from "@/icons/app"
import { Meta, StoryObj } from "@storybook/react"
import { Observable } from "zen-observable-ts"
import { DataCollection, useDataSource } from "."
import { PromiseState } from "../../lib/promise-to-observable"
import { ActionsDefinition } from "./actions"
import {
  FilterDefinition,
  FiltersDefinition,
  FiltersState,
  SearchFilterDefinition,
} from "./Filters/types"
import {
  DataAdapter,
  PaginatedFetchOptions,
  PaginatedResponse,
  Presets,
  RecordType,
} from "./types"
import { useData } from "./useData"

// Extended filter type definitions
interface CustomSearchFilterDefinition extends SearchFilterDefinition {
  placeholder?: string
}

// Custom types for our mock data
interface MockUser extends Record<string, unknown> {
  id: string
  name: string
  email: string
  role: string
  department:
    | "Engineering"
    | "Product"
    | "Design"
    | "Marketing"
    | "Sales"
    | "Customer Support"
    | "HR"
    | "Finance"
  status: string // More flexible to allow for all status values
  level?: string // More flexible to allow for all level values
  location?: string
  isStarred: boolean
  startDate?: string
  projects?: string[]
}

// Define department and status types
const DEPARTMENTS = [
  "Engineering",
  "Product",
  "Design",
  "Marketing",
  "Sales",
  "Customer Support",
  "HR",
  "Finance",
] as const

const STATUS_OPTIONS = [
  "active",
  "inactive",
  "onboarding",
  "on_leave",
  "terminated",
] as const
const ROLE_LEVELS = [
  "Junior",
  "Mid",
  "Senior",
  "Lead",
  "Manager",
  "Director",
  "VP",
  "C-Level",
] as const
const LOCATIONS = [
  "Remote",
  "New York",
  "San Francisco",
  "London",
  "Tokyo",
  "Berlin",
  "Sydney",
] as const

// Example filter definition
const filters: Record<string, FilterDefinition | CustomSearchFilterDefinition> =
  {
    search: {
      type: "search" as const,
      label: "Search",
      placeholder: "Search by name or email",
    },
    department: {
      type: "in" as const,
      label: "Department",
      options: DEPARTMENTS.map((value) => ({ value, label: value })),
    },
    status: {
      type: "in" as const,
      label: "Status",
      options: STATUS_OPTIONS.map((value) => ({
        value,
        label: value.charAt(0).toUpperCase() + value.slice(1).replace("_", " "),
      })),
    },
    roleSearch: {
      type: "search" as const,
      label: "Role",
      placeholder: "Filter by role",
    },
    level: {
      type: "in" as const,
      label: "Level",
      options: ROLE_LEVELS.map((value) => ({ value, label: value })),
    },
    location: {
      type: "in" as const,
      label: "Location",
      options: LOCATIONS.map((value) => ({ value, label: value })),
    },
    // We'll handle starred status with a "in" filter with true/false options
    starredStatus: {
      type: "in" as const,
      label: "Starred Status",
      options: [
        { value: "starred", label: "Starred" },
        { value: "not_starred", label: "Not Starred" },
      ],
    },
  }

// Define the FiltersType only once
type FiltersType = typeof filters

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
  {
    label: "Active Engineers",
    filter: {
      department: ["Engineering"],
      status: ["active"],
    },
  },
  {
    label: "Senior+ Level",
    filter: {
      level: ["Senior", "Lead", "Manager", "Director", "VP", "C-Level"],
    },
  },
  {
    label: "New Hires (Onboarding)",
    filter: {
      status: ["onboarding"],
    },
  },
  {
    label: "Remote Workers",
    filter: {
      location: ["Remote"],
    },
  },
  {
    label: "Starred Users",
    filter: {
      starredStatus: ["starred"],
    },
  },
  {
    label: "Senior Remote Engineers",
    filter: {
      department: ["Engineering"],
      level: ["Senior", "Lead"],
      location: ["Remote"],
    },
  },
]

// Expanded mock data with more diverse attributes
const mockUsers = [
  {
    id: "user-1",
    name: "John Doe",
    email: "john@example.com",
    role: "Engineer",
    level: ROLE_LEVELS[2], // Senior
    department: DEPARTMENTS[0], // Engineering
    status: STATUS_OPTIONS[0], // active
    location: LOCATIONS[0], // Remote
    isStarred: true,
    startDate: "2020-01-15",
    projects: ["Project Alpha", "Project Beta"],
  },
  {
    id: "user-2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Product Manager",
    level: ROLE_LEVELS[4], // Manager
    department: DEPARTMENTS[1], // Product
    status: STATUS_OPTIONS[0], // active
    location: LOCATIONS[1], // New York
    isStarred: false,
    startDate: "2019-05-20",
    projects: ["Project Gamma"],
  },
  {
    id: "user-3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Designer",
    level: ROLE_LEVELS[1], // Mid
    department: DEPARTMENTS[2], // Design
    status: STATUS_OPTIONS[1], // inactive
    location: LOCATIONS[2], // San Francisco
    isStarred: false,
    startDate: "2021-03-10",
    projects: ["Project Delta"],
  },
  {
    id: "user-4",
    name: "Alice Williams",
    email: "alice@example.com",
    role: "Marketing Lead",
    level: ROLE_LEVELS[3], // Lead
    department: DEPARTMENTS[3], // Marketing
    status: STATUS_OPTIONS[0], // active
    location: LOCATIONS[3], // London
    isStarred: true,
    startDate: "2018-11-05",
    projects: ["Project Epsilon", "Project Zeta"],
  },
  {
    id: "user-5",
    name: "Michael Chen",
    email: "michael@example.com",
    role: "Senior Engineer",
    level: ROLE_LEVELS[2], // Senior
    department: DEPARTMENTS[0], // Engineering
    status: STATUS_OPTIONS[0], // active
    location: LOCATIONS[0], // Remote
    isStarred: true,
    startDate: "2019-08-12",
    projects: ["Project Alpha", "Project Kappa"],
  },
  {
    id: "user-6",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "UX Designer",
    level: ROLE_LEVELS[3], // Lead
    department: DEPARTMENTS[2], // Design
    status: STATUS_OPTIONS[0], // active
    location: LOCATIONS[0], // Remote
    isStarred: false,
    startDate: "2020-04-18",
    projects: ["Project Delta", "Project Theta"],
  },
  {
    id: "user-7",
    name: "David Rodriguez",
    email: "david@example.com",
    role: "Sales Representative",
    level: ROLE_LEVELS[1], // Mid
    department: DEPARTMENTS[4], // Sales
    status: STATUS_OPTIONS[0], // active
    location: LOCATIONS[2], // San Francisco
    isStarred: false,
    startDate: "2021-01-25",
    projects: ["Project Iota"],
  },
  {
    id: "user-8",
    name: "Emma Wilson",
    email: "emma@example.com",
    role: "Customer Support Specialist",
    level: ROLE_LEVELS[1], // Mid
    department: DEPARTMENTS[5], // Customer Support
    status: STATUS_OPTIONS[2], // onboarding
    location: LOCATIONS[4], // Tokyo
    isStarred: false,
    startDate: "2022-06-01",
    projects: ["Project Lambda"],
  },
  {
    id: "user-9",
    name: "James Taylor",
    email: "james@example.com",
    role: "Engineering Director",
    level: ROLE_LEVELS[5], // Director
    department: DEPARTMENTS[0], // Engineering
    status: STATUS_OPTIONS[0], // active
    location: LOCATIONS[1], // New York
    isStarred: true,
    startDate: "2017-03-15",
    projects: ["Project Alpha", "Project Omega"],
  },
  {
    id: "user-10",
    name: "Sophia Martinez",
    email: "sophia@example.com",
    role: "HR Manager",
    level: ROLE_LEVELS[4], // Manager
    department: DEPARTMENTS[6], // HR
    status: STATUS_OPTIONS[3], // on_leave
    location: LOCATIONS[5], // Berlin
    isStarred: false,
    startDate: "2019-11-10",
    projects: ["Project Pi"],
  },
  {
    id: "user-11",
    name: "Ryan O'Connor",
    email: "ryan@example.com",
    role: "Junior Engineer",
    level: ROLE_LEVELS[0], // Junior
    department: DEPARTMENTS[0], // Engineering
    status: STATUS_OPTIONS[2], // onboarding
    location: LOCATIONS[0], // Remote
    isStarred: false,
    startDate: "2022-09-01",
    projects: ["Project Rho"],
  },
  {
    id: "user-12",
    name: "Olivia Brown",
    email: "olivia@example.com",
    role: "Finance Analyst",
    level: ROLE_LEVELS[2], // Senior
    department: DEPARTMENTS[7], // Finance
    status: STATUS_OPTIONS[0], // active
    location: LOCATIONS[6], // Sydney
    isStarred: true,
    startDate: "2020-02-28",
    projects: ["Project Sigma", "Project Tau"],
  },
]

// Define a consistent type for user data
type UserData = (typeof mockUsers)[number]

// Helper function to filter users based on filters
const filterUsers = <
  T extends RecordType & {
    name: string
    email: string
    department: string
    role?: string
    level?: string
    status?: string
    location?: string
    isStarred?: boolean
  },
>(
  users: T[],
  filterValues: FiltersState<FiltersType>
) => {
  let filteredUsers = [...users]

  // Full-text search filter
  const searchValue = filterValues.search
  if (typeof searchValue === "string" && searchValue.trim() !== "") {
    const searchLower = searchValue.toLowerCase()
    filteredUsers = filteredUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower)
    )
  }

  // Role search filter
  const roleSearchValue = filterValues.roleSearch
  if (typeof roleSearchValue === "string" && roleSearchValue.trim() !== "") {
    const roleLower = roleSearchValue.toLowerCase()
    filteredUsers = filteredUsers.filter((user) =>
      user.role?.toLowerCase().includes(roleLower)
    )
  }

  // Department filter
  const departmentValue = filterValues.department
  if (Array.isArray(departmentValue) && departmentValue.length > 0) {
    filteredUsers = filteredUsers.filter((user) =>
      departmentValue.some((d) => d === user.department)
    )
  }

  // Status filter
  const statusValue = filterValues.status
  if (Array.isArray(statusValue) && statusValue.length > 0) {
    filteredUsers = filteredUsers.filter((user) =>
      statusValue.some((s) => s === user.status)
    )
  }

  // Level filter
  const levelValue = filterValues.level
  if (Array.isArray(levelValue) && levelValue.length > 0) {
    filteredUsers = filteredUsers.filter((user) =>
      levelValue.some((l) => l === user.level)
    )
  }

  // Location filter
  const locationValue = filterValues.location
  if (Array.isArray(locationValue) && locationValue.length > 0) {
    filteredUsers = filteredUsers.filter((user) =>
      locationValue.some((l) => l === user.location)
    )
  }

  // Starred status filter
  const starredValue = filterValues.starredStatus
  if (Array.isArray(starredValue) && starredValue.length > 0) {
    filteredUsers = filteredUsers.filter((user) => {
      if (starredValue.includes("starred")) {
        return user.isStarred === true
      }
      if (starredValue.includes("not_starred")) {
        return user.isStarred === false
      }
      return true
    })
  }

  return filteredUsers
}

// Utility functions for data fetching
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
  usePresets = false,
}: {
  useObservable?: boolean
  usePresets?: boolean
}) => {
  const dataSource = useDataSource({
    filters,
    presets: usePresets ? filterPresets : undefined,
    actions: (item) => [
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
      "separator",
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
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

// Basic examples with single visualization
export const BasicTableView: Story = {
  render: () => {
    const dataSource = useDataSource({
      filters,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
      actions: (item) => [
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
        "separator",
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
      </div>
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
      actions: (item) => [
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
      presets: filterPresets,
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
    usePresets: true,
  },
}

// Examples with filters and loading states
export const WithPreselectedFilters: Story = {
  render: () => {
    const dataSource = useDataSource({
      filters,
      presets: filterPresets,
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
    typeof useDataSource<
      (typeof mockUsers)[number],
      typeof filters,
      ActionsDefinition<(typeof mockUsers)[number]>
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
      dataAdapter: {
        fetchData: createObservableDataFetch(),
      },
      presets: [
        {
          label: "Engineers",
          filter: {
            department: ["Engineering"],
          },
        },
      ],
    })

    return (
      <DataCollection
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
      presets: filterPresets,
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
      presets: filterPresets,
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
    const source = useDataSource<
      MockUser,
      typeof filters,
      ActionsDefinition<MockUser>
    >({
      filters,
      presets: filterPresets,
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

// Example with pagination
export const WithPagination: Story = {
  render: () => {
    const source = useDataSource({
      filters,
      presets: filterPresets,
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
      presets: filterPresets,
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
        ]}
      />
    )
  },
}

// Add a new story specifically showcasing different action types
export const WithAdvancedActions: Story = {
  render: () => {
    const dataSource = useDataSource({
      filters,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
      actions: (item) => [
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
        "separator",
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
                { label: "Status", render: (item) => item.status },
              ],
            },
          },
        ]}
      />
    )
  },
}

// Example with presets only
export const WithPresets: Story = {
  args: {
    usePresets: true,
  },
}

// Example with presets and observable data
export const WithPresetsAndObservable: Story = {
  args: {
    useObservable: true,
    usePresets: true,
  },
}

// Additional example with enhanced filters and data
export const EnhancedFiltersAndData: Story = {
  render: () => {
    // Extended department options for more variety
    const extendedDepartments = [
      "Engineering",
      "Product",
      "Design",
      "Marketing",
      "Sales",
      "Customer Support",
      "HR",
      "Finance",
    ]

    const statusOptions = [
      "active",
      "inactive",
      "onboarding",
      "on_leave",
      "terminated",
    ]

    const locationOptions = [
      "Remote",
      "New York",
      "San Francisco",
      "London",
      "Tokyo",
      "Berlin",
      "Sydney",
    ]

    // Create enhanced filters
    const enhancedFilters = {
      search: {
        type: "search" as const,
        label: "Search",
        placeholder: "Search by name, email, or role",
      },
      department: {
        type: "in" as const,
        label: "Department",
        options: extendedDepartments.map((value) => ({ value, label: value })),
      },
      status: {
        type: "in" as const,
        label: "Status",
        options: statusOptions.map((value) => ({
          value,
          label:
            value.charAt(0).toUpperCase() + value.slice(1).replace("_", " "),
        })),
      },
      location: {
        type: "in" as const,
        label: "Location",
        options: locationOptions.map((value) => ({ value, label: value })),
      },
    }

    // Enhanced presets
    const enhancedPresets = [
      {
        label: "Active Engineering Team",
        filter: {
          department: ["Engineering"],
          status: ["active"],
        },
      },
      {
        label: "Product & Design",
        filter: {
          department: ["Product", "Design"],
        },
      },
      {
        label: "New Hires (Onboarding)",
        filter: {
          status: ["onboarding"],
        },
      },
      {
        label: "Remote Workers",
        filter: {
          location: ["Remote"],
        },
      },
      {
        label: "San Francisco Office",
        filter: {
          location: ["San Francisco"],
        },
      },
      {
        label: "On Leave",
        filter: {
          status: ["on_leave"],
        },
      },
    ]

    // Complete the enhancedUsers data
    const enhancedUsers: MockUser[] = [
      {
        id: "1",
        name: "Alex Johnson",
        email: "alex@example.com",
        role: "Frontend Developer",
        department: "Engineering",
        status: "active",
        level: "Senior",
        location: "Remote",
        isStarred: true,
        startDate: "2021-03-15",
        projects: ["Dashboard", "Mobile App"],
      },
      {
        id: "2",
        name: "Sam Smith",
        email: "sam@example.com",
        role: "Designer",
        department: "Design",
        status: "active",
        level: "Mid",
        location: "New York",
        isStarred: false,
        startDate: "2022-01-10",
        projects: ["Website Redesign"],
      },
      {
        id: "3",
        name: "Taylor Kim",
        email: "taylor@example.com",
        role: "Product Manager",
        department: "Product",
        status: "active",
        level: "Lead",
        location: "San Francisco",
        isStarred: true,
        startDate: "2020-11-05",
        projects: ["Mobile App", "Analytics Platform"],
      },
      {
        id: "4",
        name: "Jordan Lee",
        email: "jordan@example.com",
        role: "Backend Developer",
        department: "Engineering",
        status: "inactive",
        level: "Senior",
        location: "Berlin",
        isStarred: false,
        startDate: "2021-05-20",
        projects: ["API Services"],
      },
      {
        id: "5",
        name: "Casey Wong",
        email: "casey@example.com",
        role: "Marketing Specialist",
        department: "Marketing",
        status: "active",
        level: "Mid",
        location: "Toronto",
        isStarred: false,
        startDate: "2022-02-15",
        projects: ["Brand Campaign"],
      },
      {
        id: "6",
        name: "Jamie Rivera",
        email: "jamie@example.com",
        role: "Sales Representative",
        department: "Sales",
        status: "active",
        level: "Junior",
        location: "Miami",
        isStarred: true,
        startDate: "2022-06-01",
        projects: ["Enterprise Accounts"],
      },
      {
        id: "7",
        name: "Morgan Taylor",
        email: "morgan@example.com",
        role: "Support Specialist",
        department: "Customer Support",
        status: "active",
        level: "Mid",
        location: "Chicago",
        isStarred: false,
        startDate: "2021-09-12",
        projects: ["Support Portal"],
      },
      {
        id: "8",
        name: "Riley Jackson",
        email: "riley@example.com",
        role: "HR Manager",
        department: "HR",
        status: "active",
        level: "Senior",
        location: "London",
        isStarred: false,
        startDate: "2020-07-15",
        projects: ["Recruitment Process"],
      },
      {
        id: "9",
        name: "Avery Martinez",
        email: "avery@example.com",
        role: "Financial Analyst",
        department: "Finance",
        status: "pending",
        level: "Mid",
        location: "Sydney",
        isStarred: false,
        startDate: "2022-03-01",
        projects: ["Budget Planning"],
      },
      {
        id: "10",
        name: "Quinn Chen",
        email: "quinn@example.com",
        role: "DevOps Engineer",
        department: "Engineering",
        status: "suspended",
        level: "Senior",
        location: "Singapore",
        isStarred: false,
        startDate: "2021-08-10",
        projects: ["Infrastructure"],
      },
    ]

    // Properly type the filterEnhancedUsers function
    const filterEnhancedUsers = (
      users: MockUser[],
      filterValues: FiltersState<FiltersType>
    ) => {
      let filteredUsers = [...users]

      // Full-text search filter
      const searchValue = filterValues.search
      if (typeof searchValue === "string" && searchValue.trim() !== "") {
        const searchLower = searchValue.toLowerCase()
        filteredUsers = filteredUsers.filter(
          (user) =>
            user.name.toLowerCase().includes(searchLower) ||
            user.email.toLowerCase().includes(searchLower)
        )
      }

      // Department filter
      const departmentValue = filterValues.department
      if (Array.isArray(departmentValue) && departmentValue.length > 0) {
        filteredUsers = filteredUsers.filter((user) =>
          departmentValue.includes(user.department)
        )
      }

      // Status filter
      const statusValue = filterValues.status
      if (Array.isArray(statusValue) && statusValue.length > 0) {
        filteredUsers = filteredUsers.filter((user) =>
          statusValue.includes(user.status)
        )
      }

      // Location filter
      const locationValue = filterValues.location
      if (Array.isArray(locationValue) && locationValue.length > 0) {
        filteredUsers = filteredUsers.filter((user) =>
          locationValue.includes(user.location)
        )
      }

      return filteredUsers
    }

    // Enhanced data adapter with proper typing and corrected paginationType
    const enhancedDataAdapter: DataAdapter<MockUser, FiltersType> = {
      fetchData: ({
        filters,
        pagination = { currentPage: 1, perPage: 10 },
      }: PaginatedFetchOptions<FiltersType>) => {
        return new Promise<PaginatedResponse<MockUser>>((resolve) => {
          setTimeout(() => {
            const filteredUsers = filterEnhancedUsers(enhancedUsers, filters)
            const totalUsers = filteredUsers.length
            const { currentPage, perPage } = pagination

            // Return data in the expected PaginatedResponse format
            resolve({
              records: filteredUsers,
              total: totalUsers,
              currentPage: currentPage,
              perPage: perPage,
              pagesCount: Math.ceil(totalUsers / perPage),
            })
          }, 500)
        })
      },
      paginationType: "pages",
      perPage: 10,
    }

    // Set up data source
    const dataSource = useDataSource({
      filters: enhancedFilters,
      presets: enhancedPresets,
      dataAdapter: enhancedDataAdapter,
      actions: (item) => [
        {
          label: "Edit User",
          icon: Pencil,
          onClick: () => console.log(`Editing ${item.name}`),
          description: "Modify user information",
        },
        {
          label: "View Profile",
          icon: Ai,
          onClick: () => console.log(`Viewing ${item.name}'s profile`),
        },
        "separator",
        {
          label: item.isStarred ? "Remove Star" : "Add Star",
          icon: Star,
          onClick: () => console.log(`Toggling star for ${item.name}`),
          description: item.isStarred
            ? "Remove from favorites"
            : "Add to favorites",
        },
        {
          label: item.status === "active" ? "Deactivate" : "Activate",
          icon: item.status === "active" ? Delete : ArrowRight,
          onClick: () => console.log(`Toggling active status for ${item.name}`),
          description:
            item.status === "active"
              ? "Set user as inactive"
              : "Set user as active",
        },
        {
          label: "Generate Report",
          icon: Download,
          onClick: () => console.log(`Generating report for ${item.name}`),
          enabled: item.status === "active",
        },
      ],
    })

    return (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">
          Enhanced Collection with Multiple Filters and Presets
        </h2>
        <p className="text-gray-600 text-sm">
          This example showcases a collection with extended data, multiple
          filter types, and various presets to explore data in different ways.
        </p>
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
                  {
                    label: "Status",
                    render: (item) => (
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusClass(item.status)}`}
                      >
                        {formatStatusText(item.status)}
                      </span>
                    ),
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
                  {
                    label: "Status",
                    render: (item) => (
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusClass(item.status)}`}
                      >
                        {formatStatusText(item.status)}
                      </span>
                    ),
                  },
                  { label: "Location", render: (item) => item.location },
                ],
              },
            },
          ]}
        />
      </div>
    )
  },
}

// Example with comprehensive statistics visualization
export const ComprehensiveStatistics: Story = {
  render: () => {
    // Set up data source with the existing structures
    const dataSource = useDataSource<
      UserData,
      FiltersType,
      ActionsDefinition<UserData>
    >({
      filters,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    })

    // Type definition for our visualization component props
    interface VisualizationProps {
      source: ReturnType<
        typeof useDataSource<UserData, FiltersType, ActionsDefinition<UserData>>
      >
    }

    const StatisticsVisualization = ({ source }: VisualizationProps) => {
      const { data, isLoading } = useData(source)

      if (isLoading) {
        return (
          <div className="py-8 text-center">
            <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></div>
            <p className="text-gray-500 mt-2 text-sm">Loading statistics...</p>
          </div>
        )
      }

      // Define our stats with proper typing
      interface Stats {
        departments: Record<string, number>
        statuses: Record<string, number>
        totalUsers: number
        starredUsers: number
      }

      const stats: Stats = {
        departments: {},
        statuses: {},
        totalUsers: data.length,
        starredUsers: 0,
      }

      // Process data with proper type safety
      data.forEach((user: UserData) => {
        // Count by department
        const dept = user.department || "Unknown"
        stats.departments[dept] = (stats.departments[dept] || 0) + 1

        // Count by status
        const status = user.status || "Unknown"
        stats.statuses[status] = (stats.statuses[status] || 0) + 1

        // Count starred
        if (user.isStarred) {
          stats.starredUsers++
        }
      })

      // Rest of component implementation...
    }

    return (
      <DataCollection
        source={dataSource}
        visualizations={[
          {
            type: "custom",
            label: "Statistics",
            icon: Ai,
            component: ({ source }) => (
              <StatisticsVisualization source={source} />
            ),
          },
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
                  render: (item) => (
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusClass(item.status)}`}
                    >
                      {formatStatusText(item.status)}
                    </span>
                  ),
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
                { label: "Status", render: (item) => item.status },
              ],
            },
          },
        ]}
      />
    )
  },
}

// Example with users grouped by department
export const GroupedByDepartment: Story = {
  render: () => {
    // Set up data source using our type-safe adapter
    const dataSource = useDataSource<
      UserData,
      FiltersType,
      ActionsDefinition<UserData>
    >({
      filters,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    })

    // Type definition for our visualization component props
    interface VisualizationProps {
      source: ReturnType<
        typeof useDataSource<UserData, FiltersType, ActionsDefinition<UserData>>
      >
    }

    const GroupedVisualization = ({ source }: VisualizationProps) => {
      const { data, isLoading } = useData(source)

      if (isLoading) {
        return (
          <div className="py-8 text-center">
            <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></div>
            <p className="text-gray-500 mt-2 text-sm">
              Loading department groups...
            </p>
          </div>
        )
      }

      // Create department groups with proper typing
      const departmentGroups: Record<string, UserData[]> = {}

      // Group users by department with proper type safety
      data.forEach((user: UserData) => {
        const dept = user.department || "Unknown"
        if (!departmentGroups[dept]) {
          departmentGroups[dept] = []
        }
        departmentGroups[dept].push(user)
      })

      // Rest of component implementation...
    }

    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Grouped by Department</h2>
        <p className="text-gray-600 text-sm">
          This example shows how users can be organized by their departments for
          better team management.
        </p>
        <DataCollection
          source={dataSource}
          visualizations={[
            {
              type: "custom",
              label: "Departments",
              icon: Ai,
              component: ({ source }) => (
                <GroupedVisualization source={source} />
              ),
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
          ]}
        />
      </div>
    )
  },
}

// Add this utility function for safe status display
const formatStatusText = (status?: string): string => {
  if (!status) return "Unknown"
  return status.charAt(0).toUpperCase() + status.slice(1).replace("_", " ")
}

// Add this utility function for status classes
const getStatusClass = (status?: string): string => {
  if (!status) return "bg-gray-100 text-gray-800"

  switch (status) {
    case "active":
      return "bg-green-100 text-green-800"
    case "inactive":
      return "bg-orange-100 text-orange-800"
    case "onboarding":
      return "bg-blue-100 text-blue-800"
    case "on_leave":
      return "bg-purple-100 text-purple-800"
    case "terminated":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

// Add type compatibility to the visualization components
// Helper function to ensure type compatibility
function createTypeSafeDataAdapter<TFilters extends FiltersDefinition>(
  data: Partial<UserData>[],
  options: {
    delay?: number
    paginationType?: "pages"
    perPage?: number
    useObservable?: boolean
  } = {}
) {
  return createDataAdapter<UserData, TFilters>({
    data: data as UserData[],
    delay: options.delay ?? 500,
    paginationType: options.paginationType,
    perPage: options.perPage ?? 10,
    useObservable: options.useObservable,
  })
}

// Update the paginated mock users to match UserData
const paginatedMockUsers: UserData[] = mockUsers.map((user) => ({ ...user }))

// Modify the PaginatedTable story
export const PaginatedTable: Story = {
  render: () => {
    const source = useDataSource({
      filters,
      presets: filterPresets,
      dataAdapter: createTypeSafeDataAdapter<typeof filters>(
        paginatedMockUsers,
        {
          paginationType: "pages",
          perPage: 10,
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

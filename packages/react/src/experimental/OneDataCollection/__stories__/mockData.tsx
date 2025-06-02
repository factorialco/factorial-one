import {
  BaseFetchOptions,
  BulkActionDefinition,
  DataAdapter,
  FilterDefinition,
  FiltersState,
  GroupingDefinition,
  GroupingState,
  ItemActionsDefinition,
  OnBulkActionCallback,
  OneDataCollection,
  OnSelectItemsCallback,
  PaginatedResponse,
  PresetsDefinition,
  RecordType,
  SortingsStateMultiple,
  useDataSource,
} from "@/experimental/OneDataCollection/exports"
import { PromiseState } from "@/lib/promise-to-observable"
import { Observable } from "zen-observable-ts"

import { NewColor } from "@/experimental/Information/Tags/DotTag"
import { cn } from "@/lib/utils"
import { Ai, Delete, Pencil, Star } from "../../../icons/app"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "../navigationFilters/types"
import { Visualization, VisualizationType } from "../visualizations/collection"

export const DEPARTMENTS_MOCK = [
  "Engineering",
  "Product",
  "Design",
  "Marketing",
] as const

// Example filter definition
export const filters = {
  search: {
    type: "search",
    label: "Search",
  },
  department: {
    type: "in",
    label: "Department",
    options: {
      options: DEPARTMENTS_MOCK.map((value) => ({ value, label: value })),
    },
  },
} as const

export const YEARS_OF_EXPERIENCIE_MOCK = [
  8, 12, 4, 15, 7, 3, 11, 6, 13, 2, 9, 14, 5, 10, 1, 8, 13, 4, 11, 6,
]
export const START_DATE_MOCK = Array.from(
  { length: 20 },
  (_, i) => new Date(2025, 6, 30 + i)
)

export const PROJECTS_MOCK = [
  "Project A",
  "Project B",
  "Project C",
  "Project D",
]
export const PERFORMANCE_SCORE_MOCK = [
  85, 92, 78, 95, 88, 73, 91, 82, 94, 77, 89, 96, 81, 87, 93, 76, 90, 84, 97,
  80,
]

export const DOT_TAG_COLORS_MOCK: NewColor[] = [
  "yellow",
  "purple",
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
]

// Define presets for the filters
export const filterPresets: PresetsDefinition<typeof filters> = [
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

export type MockUser = {
  index: number
  id: string
  name: string
  email: string
  role: string
  department: (typeof DEPARTMENTS_MOCK)[number]
  status: string
  isStarred: boolean
  salary: number | undefined
  joinedAt: Date
}

export const FIRST_NAMES_MOCK = [
  "Dani",
  "Desirée",
  "Eliseo",
  "Arnau",
  "Carlos",
  "Lilian",
  "Andrea",
  "Mario",
  "Nik",
  "René",
  "Sergio",
  "Saúl",
]

export const SURNAMES_MOCK = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
  "Robinson",
]

export const ROLES_MOCK = [
  "Senior Engineer",
  "Product Manager",
  "Designer",
  "Marketing Lead",
  "Software Engineer",
]

export const STATUS_MOCK = ["active", "inactive", "active", "active", "active"]

export const SALARY_MOCK = [
  100000,
  80000,
  90000,
  undefined,
  120000,
  95000,
  85000,
  110000,
  undefined,
  75000,
  130000,
  92000,
  88000,
  undefined,
  115000,
  105000,
  82000,
  98000,
  undefined,
  125000,
  78000,
  108000,
  94000,
  undefined,
  135000,
]

export const generateMockUsers = (count: number): MockUser[] => {
  return Array.from({ length: count }).map((_, index) => {
    const department = DEPARTMENTS_MOCK[index % DEPARTMENTS_MOCK.length]
    const name = `${FIRST_NAMES_MOCK[index % FIRST_NAMES_MOCK.length]} ${SURNAMES_MOCK[index % SURNAMES_MOCK.length]}`
    const email = `${name.toLowerCase().replace(/\s+/g, ".")}@example.com`
    return {
      index,
      id: `user-${index + 1}`,
      name,
      email,
      role: ROLES_MOCK[index % ROLES_MOCK.length],
      department,
      status: STATUS_MOCK[index % STATUS_MOCK.length],
      isStarred: index % 3 === 0,
      href: `/users/user-${index + 1}`,
      salary: SALARY_MOCK[index % SALARY_MOCK.length],
      joinedAt: START_DATE_MOCK[index % START_DATE_MOCK.length],
    }
  })
}

// Mock data
export const mockUsers = generateMockUsers(10)

export const getMockVisualizations = (options?: {
  frozenColumns?: 0 | 1 | 2
}): Record<
  Exclude<VisualizationType, "custom">,
  Visualization<
    MockUser,
    FiltersType,
    typeof sortings,
    ItemActionsDefinition<MockUser>,
    NavigationFiltersDefinition,
    GroupingDefinition<MockUser>
  >
> => ({
  table: {
    type: "table",
    options: {
      frozenColumns: options?.frozenColumns,
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
          label: "Email 2",
          render: (item) => item.email,
          sorting: "email",
        },
        {
          label: "Role 2",
          render: (item) => item.role,
          sorting: "role",
        },
        {
          label: "Department 2",
          render: (item) => item.department,
          sorting: "department",
        },
        {
          label: "Email 3",
          render: (item) => item.email,
          sorting: "email",
        },
        {
          label: "Role 3",
          render: (item) => item.role,
          sorting: "role",
        },
        {
          label: "Department 3",
          render: (item) => item.department,
          sorting: "department",
        },
        {
          label: "Email 4",
          render: (item) => item.email,
          sorting: "email",
        },
        {
          label: "Role 4",
          render: (item) => item.role,
          sorting: "role",
        },
        {
          label: "Department 4",
          render: (item) => item.department,
          sorting: "department",
        },
      ],
    },
  },
  card: {
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
  list: {
    type: "list",
    options: {
      itemDefinition: (item) => ({
        title: item.name,
        description: item.email,
        metadata: item.role,
        avatar: {
          type: "person",
          firstName: item.name.split(" ")[0],
          lastName: item.name.split(" ")[1],
        },
      }),
      fields: [
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
          render: (item) => ({
            type: "dotTag",
            value: {
              color: "yellow",
              label: item.department,
            },
          }),
        },
      ],
    },
  },
})
// Example of using the object-based approach (recommended)
export const sortings = {
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

// Helper function to filter users based on filters
export const filterUsers = (
  users: MockUser[],
  filterValues: FiltersState<typeof filters>,
  sortingState: SortingsStateMultiple,
  navigationFilters?: NavigationFiltersState<NavigationFiltersDefinition>,
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
    sortingState.reverse().forEach(({ field, order }) => {
      filteredUsers = filteredUsers.sort((a, b) => {
        const aValue = a[field as keyof MockUser]
        const bValue = b[field as keyof MockUser]

        // Handle string comparisons
        if (typeof aValue === "string" && typeof bValue === "string") {
          return order === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue)
        }

        // Handle number comparisons
        if (typeof aValue === "number" && typeof bValue === "number") {
          return order === "asc" ? aValue - bValue : bValue - aValue
        }

        // Handle boolean comparisons
        if (typeof aValue === "boolean" && typeof bValue === "boolean") {
          // false comes before true when ascending
          return order === "asc"
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
        return order === "asc"
          ? String(aValue).localeCompare(String(bValue))
          : String(bValue).localeCompare(String(aValue))
      })
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

  if (navigationFilters) {
    filteredUsers = filteredUsers.filter((user) => {
      return (
        !navigationFilters.date ||
        (navigationFilters.date.value.from <= user.joinedAt &&
          navigationFilters.date.value.to >= user.joinedAt)
      )
    })
  }

  return filteredUsers
}

export const createObservableDataFetch = (delay = 0) => {
  return ({
    filters,
    sortings: sortingsState,
    navigationFilters,
  }: BaseFetchOptions<FiltersType, NavigationFiltersDefinition>) =>
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
          data: filterUsers(
            mockUsers,
            filters,
            sortingsState,
            navigationFilters
          ),
        })
        observer.complete()
      }, delay)

      return () => clearTimeout(timeoutId)
    })
}

export const createPromiseDataFetch = (delay = 500) => {
  return ({
    filters,
    sortings: sortingsState,
    search,
    navigationFilters,
  }: BaseFetchOptions<FiltersType, NavigationFiltersDefinition>) =>
    new Promise<MockUser[]>((resolve) => {
      setTimeout(() => {
        resolve(
          filterUsers(
            mockUsers,
            filters,
            sortingsState,
            navigationFilters,
            search
          )
        )
      }, delay)
    })
}

// Utility functions for data fetching
export type FiltersType = typeof filters

// Example component using useDataSource
export const ExampleComponent = ({
  useObservable = false,
  usePresets = false,
  frozenColumns = 0,
  selectable,
  bulkActions,
  currentGrouping,
  grouping,
  navigationFilters,
  totalItemSummary,
  visualizations,
  fullHeight,
}: {
  useObservable?: boolean
  usePresets?: boolean
  frozenColumns?: 0 | 1 | 2
  fullHeight?: boolean
  visualizations?: ReadonlyArray<
    Visualization<
      MockUser,
      FiltersType,
      typeof sortings,
      ItemActionsDefinition<MockUser>,
      NavigationFiltersDefinition,
      GroupingDefinition<MockUser>
    >
  >
  selectable?: (item: MockUser) => string | number | undefined
  bulkActions?: (
    selectedItems: Parameters<OnBulkActionCallback<MockUser, FiltersType>>[1]
  ) => {
    primary: BulkActionDefinition[]
    secondary?: BulkActionDefinition[]
  }
  onSelectItems?: OnSelectItemsCallback<MockUser, FiltersType>
  onBulkAction?: OnBulkActionCallback<MockUser, FiltersType>
  navigationFilters?: NavigationFiltersDefinition
  totalItemSummary?: (totalItems: number) => string
  grouping?: GroupingDefinition<MockUser> | undefined
  currentGrouping?: GroupingState<MockUser, GroupingDefinition<MockUser>>
}) => {
  const mockVisualizations = getMockVisualizations({
    frozenColumns,
  })
  const dataSource = useDataSource({
    filters,
    navigationFilters,
    presets: usePresets ? filterPresets : undefined,
    sortings,
    grouping,
    currentGrouping: currentGrouping,
    itemActions: (item) => [
      {
        label: "Edit",
        icon: Pencil,
        onClick: () => console.log(`Editing ${item.name}`),
        description: "Modify user information",
        type: "primary",
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
    selectable,
    bulkActions,
    totalItemSummary,
    dataAdapter: {
      fetchData: useObservable
        ? createObservableDataFetch()
        : createPromiseDataFetch(),
    },
  })

  return (
    <div className={cn("space-y-4", fullHeight && "absolute inset-0 top-10")}>
      <OneDataCollection
        fullHeight={fullHeight}
        source={dataSource}
        onSelectItems={(selectedItems) =>
          console.log("Selected items", "->", selectedItems)
        }
        onBulkAction={(action, selectedItems) =>
          console.log(`Bulk action: ${action}`, "->", selectedItems)
        }
        visualizations={
          visualizations ?? [
            mockVisualizations.table,
            mockVisualizations.card,
            mockVisualizations.list,
          ]
        }
      />
    </div>
  )
}

interface DataAdapterOptions<TRecord> {
  data: TRecord[]
  delay?: number
  useObservable?: boolean
  paginationType?: "pages"
  perPage?: number
}

export function createDataAdapter<
  TRecord extends RecordType & {
    name: string
    email: string
    department: (typeof DEPARTMENTS_MOCK)[number]
    salary?: number
  },
  TFilters extends Record<string, FilterDefinition>,
  TNavigationFilters extends NavigationFiltersDefinition,
>({
  data,
  delay = 500,
  useObservable = false,
  paginationType,
  perPage = 20,
}: DataAdapterOptions<TRecord>): DataAdapter<
  TRecord,
  TFilters,
  TNavigationFilters
> {
  const filterData = (
    records: TRecord[],
    filters: FiltersState<TFilters>,
    sortingsState: SortingsStateMultiple,
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
      sortingsState.reverse().forEach(({ field, order }) => {
        const sortField = field as keyof TRecord
        const sortDirection = order

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
    const adapter: DataAdapter<TRecord, TFilters, TNavigationFilters> = {
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

  const adapter: DataAdapter<TRecord, TFilters, TNavigationFilters> = {
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

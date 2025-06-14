import {
  BaseFetchOptions,
  BulkActionDefinition,
  DataAdapter,
  FilterDefinition,
  FiltersState,
  GroupingDefinition,
  GroupingState,
  InfiniteScrollPaginatedResponse,
  ItemActionsDefinition,
  OnBulkActionCallback,
  OneDataCollection,
  OnSelectItemsCallback,
  PaginatedResponse,
  PaginationType,
  PresetsDefinition,
  RecordType,
  SortingsStateMultiple,
  useDataSource,
} from "@/experimental/OneDataCollection/exports"
import { PromiseState } from "@/lib/promise-to-observable"
import { Observable } from "zen-observable-ts"

import { NewColor } from "@/experimental/Information/Tags/DotTag"
import { Ai, Delete, Pencil, Star } from "../../../icons/app"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "../navigationFilters/types"
import { Visualization, VisualizationType } from "../visualizations"

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

// Mock data
export const mockUsers: {
  index: number
  id: string
  name: string
  email: string
  role: string
  department: (typeof DEPARTMENTS_MOCK)[number]
  status: string
  isStarred: boolean
  href?: string
  salary: number | undefined
  joinedAt: Date
}[] = [
  {
    index: 0,
    id: "user-1",
    name: "John Doe",
    email: "john@example.com",
    role: "Senior Engineer",
    department: DEPARTMENTS_MOCK[0],
    status: "active",
    isStarred: true,
    salary: 100000,
    joinedAt: START_DATE_MOCK[0],
  },
  {
    index: 1,
    id: "user-2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Product Manager",
    department: DEPARTMENTS_MOCK[1],
    status: "active",
    isStarred: false,
    salary: 80000,
    joinedAt: START_DATE_MOCK[1],
  },
  {
    index: 2,
    id: "user-3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Designer",
    department: DEPARTMENTS_MOCK[2],
    status: "inactive",
    isStarred: false,
    salary: 90000,
    joinedAt: START_DATE_MOCK[2],
  },
  {
    index: 3,
    id: "user-4",
    name: "Alice Williams",
    email: "alice@example.com",
    role: "Marketing Lead",
    department: DEPARTMENTS_MOCK[3],
    status: "active",
    isStarred: true,
    salary: undefined,
    joinedAt: START_DATE_MOCK[3],
  },
]

export const getMockVisualizations = (options?: {
  frozenColumns?: 0 | 1 | 2
}): Record<
  Exclude<VisualizationType, "custom">,
  Visualization<
    (typeof mockUsers)[number],
    FiltersType,
    typeof sortings,
    ItemActionsDefinition<(typeof mockUsers)[number]>,
    NavigationFiltersDefinition,
    GroupingDefinition<(typeof mockUsers)[number]>
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
export const filterUsers = <
  T extends RecordType & {
    index: number
    name: string
    email: string
    department: string
    salary: number | undefined
    joinedAt: Date
  },
>(
  users: T[],
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
        const aValue = a[field]
        const bValue = b[field]

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
    new Promise<(typeof mockUsers)[number][]>((resolve) => {
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
}: {
  useObservable?: boolean
  usePresets?: boolean
  frozenColumns?: 0 | 1 | 2
  visualizations?: ReadonlyArray<
    Visualization<
      (typeof mockUsers)[number],
      FiltersType,
      typeof sortings,
      ItemActionsDefinition<(typeof mockUsers)[number]>,
      NavigationFiltersDefinition,
      GroupingDefinition<(typeof mockUsers)[number]>
    >
  >
  selectable?: (item: (typeof mockUsers)[number]) => string | number | undefined
  bulkActions?: (
    selectedItems: Parameters<
      OnBulkActionCallback<(typeof mockUsers)[number], FiltersType>
    >[1]
  ) => {
    primary: BulkActionDefinition[]
    secondary?: BulkActionDefinition[]
  }
  onSelectItems?: OnSelectItemsCallback<(typeof mockUsers)[number], FiltersType>
  onBulkAction?: OnBulkActionCallback<(typeof mockUsers)[number], FiltersType>
  navigationFilters?: NavigationFiltersDefinition
  totalItemSummary?: (totalItems: number) => string
  grouping?: GroupingDefinition<(typeof mockUsers)[number]> | undefined
  currentGrouping?: GroupingState<
    (typeof mockUsers)[number],
    GroupingDefinition<(typeof mockUsers)[number]>
  >
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
    <div className="space-y-4">
      <OneDataCollection
        source={dataSource}
        onSelectItems={(selectedItems) =>
          console.log("Selected items", "->", selectedItems)
        }
        onBulkAction={(action, selectedItems) =>
          console.log(`Bulk action: ${action}`, "->", selectedItems)
        }
        visualizations={
          visualizations ?? [mockVisualizations.table, mockVisualizations.card]
        }
      />
    </div>
  )
}

// Fix the generateMockUsers function to use the correct department types
export const generateMockUsers = (count: number) => {
  return Array.from({ length: count }).map((_, index) => {
    const department = DEPARTMENTS_MOCK[index % DEPARTMENTS_MOCK.length]
    return {
      index,
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
      joinedAt: START_DATE_MOCK[index % START_DATE_MOCK.length],
    }
  })
}

interface DataAdapterOptions<TRecord> {
  data: TRecord[]
  delay?: number
  useObservable?: boolean
  paginationType?: PaginationType
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
    pagination?: {
      currentPage?: number
      perPage?: number
      cursor?: string | null
    }
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
        type: "pages",
        records: paginatedRecords,
        total: filteredRecords.length,
        currentPage,
        perPage: pageSize,
        pagesCount: Math.ceil(filteredRecords.length / pageSize),
      }
    } else if (pagination && paginationType === "infinite-scroll") {
      const pageSize = pagination.perPage || perPage

      const cursor = "cursor" in pagination ? pagination.cursor : null

      const nextCursor = cursor ? Number(cursor) + pageSize : pageSize

      const paginatedRecords = filteredRecords.slice(
        Number(cursor) || 0,
        nextCursor
      )

      return {
        type: "infinite-scroll" as const, // Use const assertion to help TypeScript
        records: paginatedRecords,
        total: filteredRecords.length,
        cursor: String(nextCursor),
        perPage: pageSize,
        hasMore: nextCursor < filteredRecords.length,
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
  } else if (paginationType === "infinite-scroll") {
    const adapter: DataAdapter<TRecord, TFilters, TNavigationFilters> = {
      paginationType: "infinite-scroll",
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
                  ) as InfiniteScrollPaginatedResponse<TRecord>

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
              const result = filterData(
                data,
                filters,
                sortings,
                pagination
              ) as InfiniteScrollPaginatedResponse<TRecord>
              resolve(result)
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

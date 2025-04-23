import {
  BaseFetchOptions,
  BulkActionDefinition,
  DataAdapter,
  FilterDefinition,
  FiltersState,
  OnBulkActionCallback,
  OneDataCollection,
  OnSelectItemsCallback,
  PaginatedResponse,
  PresetsDefinition,
  RecordType,
  SortingsDefinition,
  SortingsState,
  useDataSource,
} from "@/experimental/exports"
import { PromiseState } from "@/lib/promise-to-observable"
import { Observable } from "zen-observable-ts"

import { setDateGranularity } from "@/lib/date"
import { Ai, Delete, Pencil, Star } from "../../../icons/app"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "../navigationFilters/types"

export const DEPARTMENTS = [
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
    options: DEPARTMENTS.map((value) => ({ value, label: value })),
  },
} as const

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
  id: string
  name: string
  email: string
  role: string
  department: (typeof DEPARTMENTS)[number]
  status: string
  isStarred: boolean
  href?: string
  salary: number | undefined
  joinedAt: Date
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
    joinedAt: new Date(),
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
    joinedAt: new Date(),
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
    joinedAt: new Date(new Date().setDate(new Date().getDate() + 1)),
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
    joinedAt: new Date(new Date().setDate(new Date().getDate() + 2)),
  },
]

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
    name: string
    email: string
    department: string
    salary: number | undefined
    joinedAt: Date
  },
>(
  users: T[],
  filterValues: FiltersState<typeof filters>,
  sortingState: SortingsState<typeof sortings>,
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
    ;[sortingState].forEach(({ field, order }) => {
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
        +setDateGranularity(navigationFilters.date, "day") ===
          +setDateGranularity(user.joinedAt, "day")
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
  }: BaseFetchOptions<
    FiltersType,
    typeof sortings,
    NavigationFiltersDefinition
  >) =>
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
  }: BaseFetchOptions<
    FiltersType,
    typeof sortings,
    NavigationFiltersDefinition
  >) =>
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
  navigationFilters,
}: {
  useObservable?: boolean
  usePresets?: boolean
  frozenColumns?: 0 | 1 | 2
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
}) => {
  const dataSource = useDataSource({
    filters,
    navigationFilters,
    presets: usePresets ? filterPresets : undefined,
    sortings,
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
        visualizations={[
          {
            type: "table",
            options: {
              frozenColumns,
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

// Fix the generateMockUsers function to use the correct department types
export const generateMockUsers = (count: number) => {
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
      joinedAt: new Date(
        new Date().setDate(new Date().getDate() + Math.floor(Math.random() * 4))
      ),
    }
  })
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
    department: (typeof DEPARTMENTS)[number]
    salary?: number
  },
  TFilters extends Record<string, FilterDefinition<unknown>>,
  TSortings extends SortingsDefinition,
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
  TSortings,
  TNavigationFilters
> {
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
      ;[sortingsState].reverse().forEach(({ field, order }) => {
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
    const adapter: DataAdapter<
      TRecord,
      TFilters,
      TSortings,
      TNavigationFilters
    > = {
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

  const adapter: DataAdapter<TRecord, TFilters, TSortings, TNavigationFilters> =
    {
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

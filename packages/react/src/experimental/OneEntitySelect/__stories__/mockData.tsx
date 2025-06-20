import {
  BaseFetchOptions,
  DataAdapter,
  FilterDefinition,
  FiltersState,
  InfiniteScrollPaginatedResponse,
  PaginatedResponse,
  PaginationType,
  PresetsDefinition,
  RecordType,
  SortingsStateMultiple,
} from "@/experimental/OneDataCollection/exports"
import { PromiseState } from "@/lib/promise-to-observable"
import { Observable } from "zen-observable-ts"

import { NewColor } from "@/experimental/Information/Tags/DotTag"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "../../OneDataCollection/navigationFilters/types"

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
  department: (typeof DEPARTMENTS_MOCK)[number]
  status: string
  href: string
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

export const generateMockUsers = (count: number): MockUser[] => {
  return Array.from({ length: count }).map((_, index) => {
    const department = DEPARTMENTS_MOCK[index % DEPARTMENTS_MOCK.length]
    const name = `${FIRST_NAMES_MOCK[index % FIRST_NAMES_MOCK.length]} ${SURNAMES_MOCK[index % SURNAMES_MOCK.length]}`
    return {
      index,
      id: `user-${index + 1}`,
      name,
      department,
      status: STATUS_MOCK[index % STATUS_MOCK.length],
      href: `/users/user-${index + 1}`,
    }
  })
}

// Mock data
export const mockUsers = generateMockUsers(10)

// Example of using the object-based approach (recommended)
export const sortings = {
  name: {
    label: "Name",
  },
  department: {
    label: "Department",
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
    filteredUsers = filteredUsers.filter((user) =>
      user.name.toLowerCase().includes(searchLower)
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
    filteredUsers = filteredUsers.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    )
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
    department: (typeof DEPARTMENTS_MOCK)[number]
    status: string
    href: string
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
      filteredRecords = filteredRecords.filter((record) =>
        record.name.toLowerCase().includes(searchTerm)
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
              reject({
                loading: false,
                error:
                  error instanceof Error ? error : new Error(String(error)),
                data: null,
              })
            }
          }, delay)
        })
      },
    }
    return adapter
  }

  // Not paginated
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

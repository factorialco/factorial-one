import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Observable } from "zen-observable-ts"
import type { FiltersState } from "./Filters/types"
import type { DataSource, RecordType } from "./types"
import { useData } from "./useData"

interface User extends RecordType {
  id: number
  name: string
  email: string
  role: string
}

type UserFilters = {
  search: {
    type: "search"
    label: string
  }
  role: {
    type: "in"
    label: string
    options: Array<{ value: string; label: string }>
  }
}

const mockUsers: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "user" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "user" },
]

const meta = {
  title: "Experimental/Collections/useData",
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const DataDisplay = ({ source }: { source: DataSource<User, UserFilters> }) => {
  const { data, isLoading, error, paginationInfo } = useData(source)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="space-y-4">
      <table className="divide-gray-200 min-w-full divide-y">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-gray-500 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Name
            </th>
            <th className="text-gray-500 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Email
            </th>
            <th className="text-gray-500 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Role
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-gray-200 divide-y">
          {data.map((user) => (
            <tr key={user.id}>
              <td className="whitespace-nowrap px-6 py-4">{user.name}</td>
              <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
              <td className="whitespace-nowrap px-6 py-4">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {paginationInfo && (
        <div className="flex items-center justify-between">
          <div>
            Page {paginationInfo.currentPage} of {paginationInfo.pagesCount}
          </div>
          <div>Total: {paginationInfo.total} items</div>
        </div>
      )}
    </div>
  )
}

export const WithSyncData: Story = {
  render: () => {
    const source: DataSource<User, UserFilters> = {
      dataAdapter: {
        fetchData: () => mockUsers,
      },
      currentFilters: {},
      setCurrentFilters: () => {},
    }

    return <DataDisplay source={source} />
  },
}

export const WithPaginatedData: Story = {
  render: () => {
    const source: DataSource<User, UserFilters> = {
      dataAdapter: {
        fetchData: () => ({
          records: mockUsers,
          total: mockUsers.length,
          currentPage: 1,
          perPage: 10,
          pagesCount: 1,
        }),
        paginationType: "pages",
        perPage: 10,
      },
      currentFilters: {},
      setCurrentFilters: () => {},
    }

    return <DataDisplay source={source} />
  },
}

export const WithAsyncData: Story = {
  render: () => {
    const source: DataSource<User, UserFilters> = {
      dataAdapter: {
        fetchData: async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000))
          return mockUsers
        },
      },
      currentFilters: {},
      setCurrentFilters: () => {},
    }

    return <DataDisplay source={source} />
  },
}

export const WithObservableData: Story = {
  render: () => {
    const source: DataSource<User, UserFilters> = {
      dataAdapter: {
        fetchData: () => {
          return new Observable((subscriber) => {
            subscriber.next({ loading: true, data: null, error: null })
            setTimeout(() => {
              subscriber.next({ loading: false, data: mockUsers, error: null })
              subscriber.complete()
            }, 1000)
          })
        },
      },
      currentFilters: {},
      setCurrentFilters: () => {},
    }

    return <DataDisplay source={source} />
  },
}

export const WithFilters: Story = {
  render: () => {
    const [filters, setFilters] = useState<FiltersState<UserFilters>>({})

    const source: DataSource<User, UserFilters> = {
      dataAdapter: {
        fetchData: ({ filters }) => {
          return mockUsers.filter((user) => {
            if (
              filters.search &&
              !user.name.toLowerCase().includes(filters.search.toLowerCase())
            ) {
              return false
            }
            if (filters.role?.length && !filters.role.includes(user.role)) {
              return false
            }
            return true
          })
        },
      },
      currentFilters: filters,
      setCurrentFilters: setFilters,
    }

    return (
      <div className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search by name"
            className="rounded border px-4 py-2"
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                search: e.target.value,
              }))
            }
          />
          <select
            className="rounded border px-4 py-2"
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                role: e.target.value ? [e.target.value] : undefined,
              }))
            }
          >
            <option value="">All roles</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <DataDisplay source={source} />
      </div>
    )
  },
}

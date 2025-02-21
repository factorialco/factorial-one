import { render, renderHook, screen, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { TableCollection } from "."
import type { FiltersDefinition } from "../Filters/types"
import type { DataSource } from "../types"
import { useData } from "../useData"

type TestFilters = FiltersDefinition

type Person = {
  id: number
  name: string
  email: string
  displayName: string
}

const testData: Person[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    displayName: "Dr. John Doe",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    displayName: "Dr. Jane Smith",
  },
]

const testColumns = [
  { label: "name", render: (item: Person) => item.name },
  { label: "email", render: (item: Person) => item.email },
]

const createTestSource = (
  data: Person[] = testData,
  error?: Error
): DataSource<Person, TestFilters> => ({
  currentFilters: {},
  setCurrentFilters: vi.fn(),
  dataAdapter: {
    fetchData: async () => {
      if (error) throw error
      return { records: data }
    },
  },
})

describe("TableCollection", () => {
  describe("rendering", () => {
    it("shows loading state initially", () => {
      render(
        <TableCollection<Person, TestFilters>
          columns={testColumns}
          source={createTestSource()}
        />
      )

      const loadingRows = screen.getAllByRole("row")
      // Header row + 4 loading rows
      expect(loadingRows).toHaveLength(5)

      // Look for skeleton elements by their class name
      const skeletons = document.getElementsByClassName("animate-pulse")
      expect(skeletons.length).toBe(8) // 4 rows * 2 columns
    })

    it("renders table with data after loading", async () => {
      render(
        <TableCollection<Person, TestFilters>
          columns={testColumns}
          source={createTestSource()}
        />
      )

      // Wait for loading state to disappear by checking for actual data
      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Verify table structure
      expect(screen.getByRole("table")).toBeInTheDocument()
      expect(screen.getAllByRole("columnheader")).toHaveLength(2)

      // Verify data rendering
      testData.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument()
        expect(screen.getByText(item.email)).toBeInTheDocument()
      })
    })
  })

  describe("features", () => {
    it("renders custom column formatting", async () => {
      const columnsWithCustomRender = [
        testColumns[0], // Keep original name column
        {
          key: "displayName" as const,
          label: "Formal Title",
          render: (item: Person) => `Dr. ${item.name}`,
        },
      ]

      render(
        <TableCollection<Person, TestFilters>
          columns={columnsWithCustomRender}
          source={createTestSource()}
        />
      )

      await waitFor(() => {
        testData.forEach((item) => {
          expect(screen.getByText(`Dr. ${item.name}`)).toBeInTheDocument()
        })
      })
    })

    it("renders links with correct attributes", async () => {
      render(
        <TableCollection<Person, TestFilters>
          columns={testColumns}
          source={createTestSource()}
          link={(item) => ({
            label: `View ${item.name}`,
            url: `/users/${item.id}`,
          })}
        />
      )

      await waitFor(() => {
        expect(screen.getAllByRole("link")).toHaveLength(testData.length)
        testData.forEach((item) => {
          const link = screen.getByText(`View ${item.name}`)
          expect(link.closest("a")).toHaveAttribute("href", `/users/${item.id}`)
        })
      })
    })
  })

  describe("edge cases", () => {
    it("handles empty data gracefully", async () => {
      render(
        <TableCollection<Person, TestFilters>
          columns={testColumns}
          source={createTestSource([])}
        />
      )

      // Wait for loading state to finish
      await waitFor(() => {
        const rows = screen.getAllByRole("row")
        expect(rows).toHaveLength(1) // Just the header row
      })

      // Headers should still be present
      expect(screen.getAllByRole("columnheader")).toHaveLength(2)
    })

    it("handles error states appropriately", async () => {
      const errorMessage = "Failed to fetch data"
      const error = new Error(errorMessage)

      render(
        <TableCollection<Person, TestFilters>
          columns={testColumns}
          source={createTestSource([], error)}
        />
      )

      // Wait for loading state to finish
      await waitFor(() => {
        const rows = screen.getAllByRole("row")
        expect(rows).toHaveLength(1) // Just the header row
      })

      // Headers should still be present
      expect(screen.getAllByRole("columnheader")).toHaveLength(2)

      // Verify error state
      const { result } = renderHook(() => useData(createTestSource([], error)))
      await waitFor(() => {
        expect(result.current.error).toEqual({
          message: "Error fetching data",
          cause: error,
        })
      })
    })
  })

  describe("pagination", () => {
    const createPaginatedTestSource = (
      totalItems = 50,
      itemsPerPage = 10
    ): DataSource<Person, TestFilters> => ({
      currentFilters: {},
      setCurrentFilters: vi.fn(),
      dataAdapter: {
        paginationType: "pages",
        perPage: itemsPerPage,
        fetchData: async ({ pagination }) => {
          const { currentPage = 1 } = pagination || {}
          const startIndex = (currentPage - 1) * itemsPerPage
          const endIndex = startIndex + itemsPerPage
          const paginatedData = Array.from({ length: totalItems }, (_, i) => ({
            id: i + 1,
            name: `User ${i + 1}`,
            email: `user${i + 1}@example.com`,
            displayName: `Dr. User ${i + 1}`,
          })).slice(startIndex, endIndex)

          return {
            records: paginatedData,
            total: totalItems,
            currentPage,
            perPage: itemsPerPage,
            pagesCount: Math.ceil(totalItems / itemsPerPage),
          }
        },
      },
    })

    it("renders pagination controls when pagination is enabled", async () => {
      render(
        <TableCollection<Person, TestFilters>
          columns={testColumns}
          source={createPaginatedTestSource()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Current page: 1")).toBeInTheDocument()
        expect(screen.getByText("Total: 50")).toBeInTheDocument()
      })

      // Should show 5 page buttons (50 items / 10 per page)
      const pageButtons = screen.getAllByRole("button")
      expect(pageButtons).toHaveLength(5)
      expect(pageButtons[0]).toHaveTextContent("1")
      expect(pageButtons[4]).toHaveTextContent("5")
    })

    it("shows loading state when switching pages", async () => {
      render(
        <TableCollection<Person, TestFilters>
          columns={testColumns}
          source={createPaginatedTestSource()}
        />
      )

      // Wait for initial load
      await waitFor(() => {
        expect(screen.getByText("User 1")).toBeInTheDocument()
      })

      // Click page 2
      const pageButtons = screen.getAllByRole("button")
      pageButtons[1].click()

      // Should show loading state
      await waitFor(() => {
        expect(screen.getByText("Loading...")).toBeInTheDocument()
      })

      // Wait for page 2 data to load
      await waitFor(() => {
        expect(screen.getByText("User 11")).toBeInTheDocument()
      })
    })

    it("displays correct data for each page", async () => {
      render(
        <TableCollection<Person, TestFilters>
          columns={testColumns}
          source={createPaginatedTestSource()}
        />
      )

      // Check first page
      await waitFor(() => {
        expect(screen.getByText("User 1")).toBeInTheDocument()
        expect(screen.getByText("User 10")).toBeInTheDocument()
      })

      // Go to second page
      const pageButtons = screen.getAllByRole("button")
      pageButtons[1].click()

      // Check second page
      await waitFor(() => {
        expect(screen.getByText("User 11")).toBeInTheDocument()
        expect(screen.getByText("User 20")).toBeInTheDocument()
      })
    })

    it("handles edge case with single page", async () => {
      render(
        <TableCollection<Person, TestFilters>
          columns={testColumns}
          source={createPaginatedTestSource(5, 10)}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Total: 5")).toBeInTheDocument()
      })

      // Should only show one page button
      const pageButtons = screen.getAllByRole("button")
      expect(pageButtons).toHaveLength(1)
    })

    it("handles edge case with empty data", async () => {
      render(
        <TableCollection<Person, TestFilters>
          columns={testColumns}
          source={createPaginatedTestSource(0, 10)}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Total: 0")).toBeInTheDocument()
      })

      // Should not show any page buttons
      const pageButtons = screen.queryAllByRole("button")
      expect(pageButtons).toHaveLength(0)
    })
  })
})

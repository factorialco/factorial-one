import { render, screen, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { TableCollection } from "."
import type { FiltersDefinition } from "../Filters/types"
import type { DataSource } from "../types"

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

  describe("pagination", () => {
    const paginatedTestData = Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      name: `Person ${i + 1}`,
      email: `person${i + 1}@example.com`,
      displayName: `Dr. Person ${i + 1}`,
    }))

    const createPaginatedTestSource = (
      page = 1,
      perPage = 10
    ): DataSource<Person, TestFilters> => ({
      currentFilters: {},
      setCurrentFilters: vi.fn(),
      dataAdapter: {
        paginationType: "pages" as const,
        perPage,
        fetchData: async () => {
          const start = (page - 1) * perPage
          const end = start + perPage
          const records = paginatedTestData.slice(start, end)

          return {
            records,
            total: paginatedTestData.length,
            currentPage: page,
            perPage,
            pagesCount: Math.ceil(paginatedTestData.length / perPage),
          }
        },
      },
    })

    it("renders paginated data correctly", async () => {
      render(
        <TableCollection<Person, TestFilters>
          columns={testColumns}
          source={createPaginatedTestSource(1, 10)}
        />
      )

      // Wait for initial data load
      await waitFor(() => {
        expect(screen.getByText("Person 1")).toBeInTheDocument()
      })

      // Should show first 10 items
      expect(screen.getByText("Person 1")).toBeInTheDocument()
      expect(screen.getByText("Person 10")).toBeInTheDocument()
      expect(screen.queryByText("Person 11")).not.toBeInTheDocument()

      // Verify pagination info is displayed
      expect(screen.getByText(/1-10 of 25/i)).toBeInTheDocument()
    })

    it("handles custom page sizes", async () => {
      render(
        <TableCollection<Person, TestFilters>
          columns={testColumns}
          source={createPaginatedTestSource(1, 5)}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Person 1")).toBeInTheDocument()
      })

      // Should show first 5 items
      expect(screen.getByText("Person 1")).toBeInTheDocument()
      expect(screen.getByText("Person 5")).toBeInTheDocument()
      expect(screen.queryByText("Person 6")).not.toBeInTheDocument()

      // Verify pagination info reflects custom page size
      expect(screen.getByText(/1-5 of 25/i)).toBeInTheDocument()
    })

    it("updates data when page changes", async () => {
      const { rerender } = render(
        <TableCollection<Person, TestFilters>
          columns={testColumns}
          source={createPaginatedTestSource(1, 10)}
        />
      )

      // Wait for initial data load
      await waitFor(() => {
        expect(screen.getByText("Person 1")).toBeInTheDocument()
      })

      // Simulate page change by re-rendering with new page
      rerender(
        <TableCollection<Person, TestFilters>
          columns={testColumns}
          source={createPaginatedTestSource(2, 10)}
        />
      )

      // Wait for new page data
      await waitFor(() => {
        expect(screen.getByText("Person 11")).toBeInTheDocument()
      })

      // Verify second page data
      expect(screen.queryByText("Person 1")).not.toBeInTheDocument()
      expect(screen.getByText("Person 11")).toBeInTheDocument()
      expect(screen.getByText("Person 20")).toBeInTheDocument()
      expect(screen.getByText(/11-20 of 25/i)).toBeInTheDocument()
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
      const consoleError = vi
        .spyOn(console, "error")
        .mockImplementation(() => {})

      render(
        <TableCollection<Person, TestFilters>
          columns={testColumns}
          source={createTestSource([], new Error("Failed to fetch data"))}
        />
      )

      // Wait for loading state to finish
      await waitFor(() => {
        const rows = screen.getAllByRole("row")
        expect(rows).toHaveLength(1) // Just the header row
      })

      // Verify error was logged
      expect(consoleError).toHaveBeenCalledWith(
        "Error fetching data:",
        expect.any(Error)
      )

      consoleError.mockRestore()
    })
  })
})

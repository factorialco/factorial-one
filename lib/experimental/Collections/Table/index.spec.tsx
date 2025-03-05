import { I18nProvider } from "@/lib/i18n-provider"
import { defaultTranslations } from "@/lib/i18n-provider-defaults"
import { render, renderHook, screen, waitFor } from "@testing-library/react"
import { ReactNode } from "react"
import { describe, expect, it, vi } from "vitest"
import { TableCollection } from "."
import { ActionsDefinition } from "../actions"
import type { FiltersDefinition } from "../Filters/types"
import { SortingsDefinition } from "../sortings"
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
): DataSource<
  Person,
  TestFilters,
  SortingsDefinition,
  ActionsDefinition<Person>
> => ({
  currentFilters: {},
  setCurrentFilters: vi.fn(),
  dataAdapter: {
    fetchData: async ({ filters: _filters }) => {
      if (error) throw error
      return data
    },
  },
})

// Test wrapper component that provides I18nProvider
const TestWrapper = ({ children }: { children: ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

describe("TableCollection", () => {
  describe("rendering", () => {
    it("shows loading state initially", () => {
      render(
        <TestWrapper>
          <TableCollection<
            Person,
            TestFilters,
            SortingsDefinition,
            ActionsDefinition<Person>
          >
            columns={testColumns}
            source={createTestSource()}
          />
        </TestWrapper>
      )

      // The OneTable.Skeleton component uses aria-hidden="true" and role="presentation"
      // so we need to use { hidden: true } to find these elements
      const loadingRows = screen.getAllByRole("row", { hidden: true })

      // Header row + skeleton rows (5 by default in OneTable.Skeleton)
      expect(loadingRows.length).toBeGreaterThan(0)

      // Look for skeleton elements by their class name
      const skeletons = document.getElementsByClassName("animate-pulse")
      expect(skeletons.length).toBeGreaterThan(0) // Should have multiple skeleton elements
    })

    it("renders table with data after loading", async () => {
      render(
        <TestWrapper>
          <TableCollection<
            Person,
            TestFilters,
            SortingsDefinition,
            ActionsDefinition<Person>
          >
            columns={testColumns}
            source={createTestSource()}
          />
        </TestWrapper>
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
        <TestWrapper>
          <TableCollection<
            Person,
            TestFilters,
            SortingsDefinition,
            ActionsDefinition<Person>
          >
            columns={columnsWithCustomRender}
            source={createTestSource()}
          />
        </TestWrapper>
      )

      await waitFor(() => {
        testData.forEach((item) => {
          expect(screen.getByText(`Dr. ${item.name}`)).toBeInTheDocument()
        })
      })
    })
  })

  describe("edge cases", () => {
    it("handles empty data gracefully", async () => {
      render(
        <TestWrapper>
          <TableCollection<
            Person,
            TestFilters,
            SortingsDefinition,
            ActionsDefinition<Person>
          >
            columns={testColumns}
            source={createTestSource([])}
          />
        </TestWrapper>
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
        <TestWrapper>
          <TableCollection<
            Person,
            TestFilters,
            SortingsDefinition,
            ActionsDefinition<Person>
          >
            columns={testColumns}
            source={createTestSource([], error)}
          />
        </TestWrapper>
      )

      // Wait for loading state to finish
      await waitFor(() => {
        const rows = screen.getAllByRole("row")
        expect(rows).toHaveLength(1) // Just the header row
      })

      // Headers should still be present
      expect(screen.getAllByRole("columnheader")).toHaveLength(2)

      // Verify error state
      const { result } = renderHook(
        () => useData(createTestSource([], error)),
        {
          wrapper: TestWrapper,
        }
      )
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
    ): DataSource<
      Person,
      TestFilters,
      SortingsDefinition,
      ActionsDefinition<Person>
    > => ({
      currentFilters: {},
      setCurrentFilters: vi.fn(),
      dataAdapter: {
        paginationType: "pages",
        perPage: itemsPerPage,
        fetchData: async ({ pagination }) => {
          const { currentPage = 1 } = pagination || {}
          const pagesCount = Math.ceil(totalItems / itemsPerPage)
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
            pagesCount,
          }
        },
      },
    })

    it("renders pagination controls when pagination is enabled", async () => {
      render(
        <TestWrapper>
          <TableCollection<
            Person,
            TestFilters,
            SortingsDefinition,
            ActionsDefinition<Person>
          >
            columns={testColumns}
            source={createPaginatedTestSource()}
          />
        </TestWrapper>
      )

      await waitFor(() => {
        // OnePagination renders navigation buttons and page numbers
        const buttons = screen.getAllByRole("button")
        expect(buttons).toHaveLength(2) // Previous and Next buttons
        expect(screen.getByText("1")).toBeInTheDocument()
      })
    })

    it("shows loading state when switching pages", async () => {
      render(
        <TestWrapper>
          <TableCollection<
            Person,
            TestFilters,
            SortingsDefinition,
            ActionsDefinition<Person>
          >
            columns={testColumns}
            source={createPaginatedTestSource()}
          />
        </TestWrapper>
      )

      // Wait for initial load
      await waitFor(() => {
        expect(screen.getByText("User 1")).toBeInTheDocument()
      })

      // Click page 2
      const nextButton = screen.getByLabelText("Go to next page")
      nextButton.click()

      // Wait for page 2 data to load
      await waitFor(() => {
        expect(screen.getByText("User 11")).toBeInTheDocument()
      })
    })

    it("displays correct data for each page", async () => {
      render(
        <TestWrapper>
          <TableCollection<
            Person,
            TestFilters,
            SortingsDefinition,
            ActionsDefinition<Person>
          >
            columns={testColumns}
            source={createPaginatedTestSource()}
          />
        </TestWrapper>
      )

      // Check first page
      await waitFor(() => {
        expect(screen.getByText("User 1")).toBeInTheDocument()
        expect(screen.getByText("User 10")).toBeInTheDocument()
      })

      // Go to second page
      const nextButton = screen.getByLabelText("Go to next page")
      nextButton.click()

      // Check second page
      await waitFor(() => {
        expect(screen.getByText("User 11")).toBeInTheDocument()
        expect(screen.getByText("User 20")).toBeInTheDocument()
      })
    })

    it("handles edge case with single page", async () => {
      render(
        <TestWrapper>
          <TableCollection<
            Person,
            TestFilters,
            SortingsDefinition,
            ActionsDefinition<Person>
          >
            columns={testColumns}
            source={createPaginatedTestSource(5, 10)}
          />
        </TestWrapper>
      )

      await waitFor(() => {
        expect(screen.getByText("User 1")).toBeInTheDocument()
        expect(screen.getByText("User 5")).toBeInTheDocument()
        // Previous and Next buttons should be disabled
        const prevButton = screen.getByLabelText("Go to previous page")
        const nextButton = screen.getByLabelText("Go to next page")
        expect(prevButton).toHaveAttribute("aria-disabled", "true")
        expect(nextButton).toHaveAttribute("aria-disabled", "true")
      })
    })

    it("handles edge case with empty data", async () => {
      render(
        <TestWrapper>
          <TableCollection<
            Person,
            TestFilters,
            SortingsDefinition,
            ActionsDefinition<Person>
          >
            columns={testColumns}
            source={createPaginatedTestSource(0, 10)}
          />
        </TestWrapper>
      )

      await waitFor(() => {
        // With empty data, there should be no pagination controls
        expect(screen.queryByRole("navigation")).not.toBeInTheDocument()
      })
    })
  })
})

import { I18nProvider } from "@/lib/i18n-provider"
import { defaultTranslations } from "@/lib/i18n-provider-defaults"
import {
  act,
  render,
  renderHook,
  screen,
  waitFor,
  within,
} from "@testing-library/react"
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
  currentSortings: null,
  setCurrentSortings: vi.fn(),
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
      currentSortings: null,
      setCurrentSortings: vi.fn(),
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

  describe("sorting", () => {
    it("allows sorting by column with a sorting key", async () => {
      // Create a modified source with sorting capability
      const sortableSource = {
        ...createTestSource(),
        currentSortings: null,
        setCurrentSortings: vi.fn(),
        sortings: {
          name: { label: "Name" },
          email: { label: "Email" },
        },
      }

      // Create columns with sorting keys
      const columnsWithSorting = [
        {
          label: "name",
          render: (item: Person) => item.name,
          sorting: "name" as const,
        },
        {
          label: "email",
          render: (item: Person) => item.email,
          sorting: "email" as const,
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
            columns={columnsWithSorting}
            source={sortableSource}
          />
        </TestWrapper>
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Get the header cells - we need to find the th element that contains the name text
      const headerCells = screen.getAllByRole("columnheader")
      const nameHeader = headerCells.find((cell) =>
        cell.textContent?.includes("name")
      )

      // Verify column headers have sort buttons and aria-sort attribute
      expect(nameHeader).toHaveAttribute("aria-sort", "none")
    })

    it("calls setCurrentSortings when a sortable column is clicked", async () => {
      // Given a table with sortable columns
      const setCurrentSortingsMock = vi.fn()

      const modifiedSource = {
        ...createTestSource(),
        currentSortings: null,
        setCurrentSortings: setCurrentSortingsMock,
        sortings: {
          name: { label: "Name" },
        },
      }

      render(
        <TestWrapper>
          <TableCollection<
            Person,
            TestFilters,
            SortingsDefinition,
            ActionsDefinition<Person>
          >
            columns={[
              {
                label: "name",
                render: (item: Person) => item.name,
                sorting: "name" as const,
              },
              {
                label: "email",
                render: (item: Person) => item.email,
              },
            ]}
            source={modifiedSource}
          />
        </TestWrapper>
      )

      // Wait for the table to load and verify it's rendered
      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Find the header with the sortable column
      const headers = screen.getAllByRole("columnheader")
      const nameHeader = headers[0]
      const sortButton = within(nameHeader).queryByRole("button")

      // When we click the sort button
      act(() => {
        if (sortButton) {
          ;(sortButton as HTMLButtonElement).click()
        }
      })

      // Then setCurrentSortings should be called with a function
      expect(setCurrentSortingsMock).toHaveBeenCalled()

      // Execute the function passed to setCurrentSortings
      const setStateFn = setCurrentSortingsMock.mock.calls[0][0]
      const result = setStateFn()

      // Check the result of the function
      expect(result).toEqual({
        field: "name",
        direction: "asc",
      })
    })

    it("toggles sort direction when clicking the same column twice", async () => {
      // Given a table with sortings already applied
      const setCurrentSortingsMock = vi.fn()

      const modifiedSource = {
        ...createTestSource(),
        currentSortings: {
          field: "name",
          direction: "asc" as const,
        },
        setCurrentSortings: setCurrentSortingsMock,
        sortings: {
          name: { label: "Name" },
        },
      }

      render(
        <TestWrapper>
          <TableCollection<
            Person,
            TestFilters,
            SortingsDefinition,
            ActionsDefinition<Person>
          >
            columns={[
              {
                label: "name",
                render: (item: Person) => item.name,
                sorting: "name" as const,
              },
              {
                label: "email",
                render: (item: Person) => item.email,
              },
            ]}
            source={modifiedSource}
          />
        </TestWrapper>
      )

      // Wait for the table to load and verify it's rendered
      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Find the header with the sortable column
      const headers = screen.getAllByRole("columnheader")
      const nameHeader = headers[0]
      const sortButton = within(nameHeader).queryByRole("button")

      // Check that aria-sort is correctly set to "ascending"
      expect(nameHeader).toHaveAttribute("aria-sort", "ascending")

      // When we click the sort button again
      act(() => {
        if (sortButton) {
          ;(sortButton as HTMLButtonElement).click()
        }
      })

      // Then setCurrentSortings should be called with a function
      expect(setCurrentSortingsMock).toHaveBeenCalled()

      // Execute the function passed to setCurrentSortings
      const setStateFn = setCurrentSortingsMock.mock.calls[0][0]
      const result = setStateFn()

      // Check the result of the function
      expect(result).toEqual({
        field: "name",
        direction: "desc",
      })
    })

    it("clears sorting when clicking a sorted column in desc order", async () => {
      // Given a table with desc sortings already applied
      const setCurrentSortingsMock = vi.fn()

      const modifiedSource = {
        ...createTestSource(),
        currentSortings: {
          field: "name",
          direction: "desc" as const,
        },
        setCurrentSortings: setCurrentSortingsMock,
        sortings: {
          name: { label: "Name" },
        },
      }

      render(
        <TestWrapper>
          <TableCollection<
            Person,
            TestFilters,
            SortingsDefinition,
            ActionsDefinition<Person>
          >
            columns={[
              {
                label: "name",
                render: (item: Person) => item.name,
                sorting: "name" as const,
              },
              {
                label: "email",
                render: (item: Person) => item.email,
              },
            ]}
            source={modifiedSource}
          />
        </TestWrapper>
      )

      // Wait for the table to load and verify it's rendered
      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Find the header with the sortable column
      const headers = screen.getAllByRole("columnheader")
      const nameHeader = headers[0]
      const sortButton = within(nameHeader).queryByRole("button")

      // Check that aria-sort is correctly set to "descending"
      expect(nameHeader).toHaveAttribute("aria-sort", "descending")

      // When we click the sort button again
      act(() => {
        if (sortButton) {
          ;(sortButton as HTMLButtonElement).click()
        }
      })

      // Then setCurrentSortings should be called with a function
      expect(setCurrentSortingsMock).toHaveBeenCalled()

      // Execute the function passed to setCurrentSortings
      const setStateFn = setCurrentSortingsMock.mock.calls[0][0]
      const result = setStateFn()

      // Check the result of the function
      expect(result).toBeNull()
    })

    it("warns when sorting is used without sortings defined in source", async () => {
      // Spy on console.warn
      const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {})

      // Create columns with sorting but don't provide sortings in source
      const columnsWithSorting = [
        {
          label: "name",
          render: (item: Person) => item.name,
          sorting: "name" as const,
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
            columns={columnsWithSorting}
            source={createTestSource()} // No sortings defined
          />
        </TestWrapper>
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Verify warning was logged
      expect(consoleSpy).toHaveBeenCalledWith(
        "Sorting is defined on a column but no sortings are provided in the data source"
      )

      // Clean up mock
      consoleSpy.mockRestore()
    })
  })
})

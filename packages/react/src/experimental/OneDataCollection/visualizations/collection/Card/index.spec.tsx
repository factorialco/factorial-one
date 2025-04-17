import { render, renderHook, screen, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import type { FiltersDefinition } from "../../../Filters/types"
import { ItemActionsDefinition } from "../../../item-actions"
import { SortingsDefinition } from "../../../sortings"
import type { DataSource, GroupingDefinition } from "../../../types"
import { useData } from "../../../useData"
import { CardCollection } from "./index"

type Person = {
  id: number
  name: string
  email: string
  role: string
}

const testData: Person[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Senior Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Product Manager",
  },
]

const testCardProperties = [
  { label: "Email", render: (item: Person) => item.email },
  { label: "Role", render: (item: Person) => item.role },
]

const createTestSource = (
  data: Person[] = testData,
  error?: Error
): DataSource<
  Person,
  FiltersDefinition,
  SortingsDefinition,
  ItemActionsDefinition<Person>,
  GroupingDefinition<Person>
> => ({
  currentFilters: {},
  setCurrentFilters: vi.fn(),
  currentSortings: null,
  setCurrentSortings: vi.fn(),
  currentSearch: undefined,
  debouncedCurrentSearch: undefined,
  setCurrentSearch: vi.fn(),
  isLoading: false,
  setIsLoading: vi.fn(),
  dataAdapter: {
    fetchData: async ({ filters: _filters }) => {
      if (error) throw error
      return data
    },
  },
  currentGrouping: undefined,
  setCurrentGrouping: vi.fn(),
})

describe("CardCollection", () => {
  describe("rendering", () => {
    it("shows loading state initially", () => {
      render(
        <CardCollection<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          ItemActionsDefinition<Person>,
          GroupingDefinition<Person>
        >
          title={(item) => item.name}
          cardProperties={[
            { label: "Email", render: (item) => item.email },
            { label: "Role", render: (item) => item.role },
          ]}
          source={createTestSource()}
        />
      )

      // Look for skeleton elements
      const skeletons = document.getElementsByClassName("animate-pulse")
      expect(skeletons.length).toBeGreaterThan(0)
    })

    it("renders cards with data after loading", async () => {
      render(
        <CardCollection<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          ItemActionsDefinition<Person>,
          GroupingDefinition<Person>
        >
          title={(item) => item.name}
          cardProperties={testCardProperties}
          source={createTestSource()}
        />
      )

      // Wait for loading state to disappear by checking for actual data
      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Verify all data is rendered
      testData.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument()
        expect(screen.getByText(item.email)).toBeInTheDocument()
        expect(screen.getByText(item.role)).toBeInTheDocument()
      })
    })
  })

  describe("features", () => {
    it("uses titleProperty when provided", async () => {
      render(
        <CardCollection<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          ItemActionsDefinition<Person>,
          GroupingDefinition<Person>
        >
          title={(item) => item.name}
          cardProperties={testCardProperties}
          source={createTestSource()}
        />
      )

      await waitFor(() => {
        // Title should be the name
        testData.forEach((item) => {
          const titleElement = screen
            .getAllByRole("heading")
            .find((heading) => heading.textContent === item.name)
          expect(titleElement).toBeInTheDocument()
        })
      })
    })

    it("displays all properties correctly when using titleProperty", async () => {
      render(
        <CardCollection<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          ItemActionsDefinition<Person>,
          GroupingDefinition<Person>
        >
          title={(item) => item.name}
          cardProperties={testCardProperties}
          source={createTestSource()}
        />
      )

      await waitFor(() => {
        // Title (name) should be in a heading
        testData.forEach((item) => {
          const titleElement = screen
            .getAllByRole("heading")
            .find((heading) => heading.textContent === item.name)
          expect(titleElement).toBeInTheDocument()

          // Each card should have email and role with their labels
          const emailLabels = screen.getAllByText("Email")
          const roleLabels = screen.getAllByText("Role")
          expect(emailLabels.length).toBe(testData.length)
          expect(roleLabels.length).toBe(testData.length)

          // Each card should show the actual values
          expect(screen.getByText(item.email)).toBeInTheDocument()
          expect(screen.getByText(item.role)).toBeInTheDocument()

          // Name should only appear in headings, not in the content area
          const nameLabels = screen.queryAllByText("Name")
          nameLabels.forEach((label) => {
            const isInHeading = !!label.closest('[role="heading"]')
            const isInContent = label.classList.contains(
              "text-muted-foreground"
            )
            expect(isInHeading || isInContent).toBe(true)
          })
        })
      })
    })

    it("renders custom property formatting", async () => {
      const propertiesWithCustomRender = [
        { label: "Email", render: (item: Person) => `📧 ${item.email}` },
        { label: "Role", render: (item: Person) => item.role },
      ]

      render(
        <CardCollection<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          ItemActionsDefinition<Person>,
          GroupingDefinition<Person>
        >
          title={(item) => item.name}
          cardProperties={propertiesWithCustomRender}
          source={createTestSource()}
        />
      )

      await waitFor(() => {
        testData.forEach((item) => {
          expect(screen.getByText(`📧 ${item.email}`)).toBeInTheDocument()
        })
      })
    })
  })

  describe("edge cases", () => {
    it("handles empty data gracefully", async () => {
      render(
        <CardCollection<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          ItemActionsDefinition<Person>,
          GroupingDefinition<Person>
        >
          title={(item) => item.name}
          cardProperties={testCardProperties}
          source={createTestSource([])}
        />
      )

      // Wait for loading state to finish
      await waitFor(() => {
        const cards = document.querySelectorAll('[role="article"]')
        expect(cards.length).toBe(0)
      })
    })

    it("handles error states appropriately", async () => {
      const error = new Error("Failed to fetch data")

      render(
        <CardCollection<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          ItemActionsDefinition<Person>,
          GroupingDefinition<Person>
        >
          title={(item) => item.name}
          cardProperties={testCardProperties}
          source={createTestSource([], error)}
        />
      )

      // Wait for loading state to finish and verify error state
      const { result } = renderHook(() => useData(createTestSource([], error)))
      await waitFor(() => {
        expect(result.current.error).toEqual({
          message: "Error fetching data",
          cause: error,
        })
      })
    })
  })

  describe("pagination behavior", () => {
    it("adjusts perPage to be a multiple of 2, 3, and 4", async () => {
      const largeDataSet = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `Person ${i + 1}`,
        email: `person${i + 1}@example.com`,
        role: `Role ${i + 1}`,
      }))

      const source = {
        currentFilters: {},
        setCurrentFilters: vi.fn(),
        currentSortings: null,
        setCurrentSortings: vi.fn(),
        currentSearch: undefined,
        debouncedCurrentSearch: undefined,
        setCurrentSearch: vi.fn(),
        isLoading: false,
        setIsLoading: vi.fn(),
        dataAdapter: {
          paginationType: "pages" as const,
          perPage: 10,
          fetchData: async () => ({
            records: largeDataSet.slice(0, 12),
            pagesCount: Math.ceil(largeDataSet.length / 12),
            currentPage: 1,
            perPage: 12,
            total: largeDataSet.length,
          }),
        },
      }

      render(
        <CardCollection<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          ItemActionsDefinition<Person>,
          GroupingDefinition<Person>
        >
          title={(item) => item.name}
          cardProperties={testCardProperties}
          source={source}
        />
      )

      // Wait for the data to load
      await waitFor(() => {
        expect(screen.getByText("Person 1")).toBeInTheDocument()
      })

      // Should show exactly 12 cards (next multiple of 2, 3, and 4 after 10)
      const cards = screen.getAllByRole("article")
      expect(cards.length).toBe(12)
    })

    it("defaults to 24 items per page when perPage is not specified", async () => {
      const largeDataSet = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `Person ${i + 1}`,
        email: `person${i + 1}@example.com`,
        role: `Role ${i + 1}`,
      }))

      const source = {
        currentFilters: {},
        setCurrentFilters: vi.fn(),
        currentSortings: null,
        setCurrentSortings: vi.fn(),
        currentSearch: undefined,
        debouncedCurrentSearch: undefined,
        setCurrentSearch: vi.fn(),
        isLoading: false,
        setIsLoading: vi.fn(),
        dataAdapter: {
          paginationType: "pages" as const,
          fetchData: async () => ({
            records: largeDataSet.slice(0, 24),
            pagesCount: Math.ceil(largeDataSet.length / 24),
            currentPage: 1,
            perPage: 24,
            total: largeDataSet.length,
          }),
        },
      }

      render(
        <CardCollection<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          ItemActionsDefinition<Person>,
          GroupingDefinition<Person>
        >
          title={(item) => item.name}
          cardProperties={testCardProperties}
          source={source}
        />
      )

      // Wait for the data to load
      await waitFor(() => {
        expect(screen.getByText("Person 1")).toBeInTheDocument()
      })

      // Should show exactly 24 cards (default)
      const cards = screen.getAllByRole("article")
      expect(cards.length).toBe(24)
    })
  })
})

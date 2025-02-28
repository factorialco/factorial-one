import { render, renderHook, screen, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { CardCollection } from "."
import { ActionsDefinition } from "../actions"
import type { FiltersDefinition } from "../Filters/types"
import type { DataSource } from "../types"
import { useData } from "../useData"

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
): DataSource<Person, FiltersDefinition, ActionsDefinition<Person>> => ({
  currentFilters: {},
  setCurrentFilters: vi.fn(),
  dataAdapter: {
    fetchData: async ({ filters: _filters }) => {
      if (error) throw error
      return data
    },
  },
})

describe("CardCollection", () => {
  describe("rendering", () => {
    it("shows loading state initially", () => {
      render(
        <CardCollection<Person, FiltersDefinition, ActionsDefinition<Person>>
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
        <CardCollection<Person, FiltersDefinition, ActionsDefinition<Person>>
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
        <CardCollection<Person, FiltersDefinition, ActionsDefinition<Person>>
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
        <CardCollection<Person, FiltersDefinition, ActionsDefinition<Person>>
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
        <CardCollection<Person, FiltersDefinition, ActionsDefinition<Person>>
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
        <CardCollection<Person, FiltersDefinition, ActionsDefinition<Person>>
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
        <CardCollection<Person, FiltersDefinition, ActionsDefinition<Person>>
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
})

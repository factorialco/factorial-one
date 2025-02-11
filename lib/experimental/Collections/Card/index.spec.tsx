import { render, screen, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { CardCollection } from "."
import type { FiltersDefinition } from "../Filters/types"
import type { NumberPropertySchema, StringPropertySchema } from "../properties"
import type { DataSource } from "../types"

type TestSchema = {
  id: Omit<NumberPropertySchema, "value">
  name: Omit<StringPropertySchema, "value">
  email: Omit<StringPropertySchema, "value">
  role: Omit<StringPropertySchema, "value">
}

type TestFilters = FiltersDefinition

interface Person {
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
  { key: "name" as const, label: "Name" },
  { key: "email" as const, label: "Email" },
  { key: "role" as const, label: "Role" },
]

const createTestSource = (
  data: Person[] = testData,
  error?: Error
): DataSource<TestSchema, TestFilters> => ({
  properties: {
    id: { type: "number" },
    name: { type: "string" },
    email: { type: "string" },
    role: { type: "string" },
  },
  currentFilters: {},
  setCurrentFilters: vi.fn(),
  fetchData: async () => {
    if (error) throw error
    return data
  },
})

describe("CardCollection", () => {
  describe("rendering", () => {
    it("shows loading state initially", () => {
      render(
        <CardCollection<TestSchema, TestFilters>
          cardProperties={testCardProperties}
          source={createTestSource()}
        />
      )

      // Look for skeleton elements
      const skeletons = document.getElementsByClassName("animate-pulse")
      expect(skeletons.length).toBeGreaterThan(0)
    })

    it("renders cards with data after loading", async () => {
      render(
        <CardCollection<TestSchema, TestFilters>
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
      const titleProperty = { key: "role" as const, label: "Role" }

      render(
        <CardCollection<TestSchema, TestFilters>
          cardProperties={testCardProperties}
          titleProperty={titleProperty}
          source={createTestSource()}
        />
      )

      await waitFor(() => {
        // Title should be the role
        testData.forEach((item) => {
          const titleElement = screen
            .getAllByRole("heading")
            .find((heading) => heading.textContent === item.role)
          expect(titleElement).toBeInTheDocument()
        })
      })
    })

    it("displays all properties correctly when using titleProperty", async () => {
      const titleProperty = { key: "role" as const, label: "Role" }

      render(
        <CardCollection<TestSchema, TestFilters>
          cardProperties={testCardProperties}
          titleProperty={titleProperty}
          source={createTestSource()}
        />
      )

      await waitFor(() => {
        // Title (role) should be in a heading
        testData.forEach((item) => {
          const titleElement = screen
            .getAllByRole("heading")
            .find((heading) => heading.textContent === item.role)
          expect(titleElement).toBeInTheDocument()

          // Each card should have name and email with their labels
          const nameLabels = screen.getAllByText("Name")
          const emailLabels = screen.getAllByText("Email")
          expect(nameLabels.length).toBe(testData.length)
          expect(emailLabels.length).toBe(testData.length)

          // Each card should show the actual values
          expect(screen.getByText(item.name)).toBeInTheDocument()
          expect(screen.getByText(item.email)).toBeInTheDocument()

          // Role should only appear in headings, not in the content area
          const roleLabels = screen.queryAllByText("Role")
          roleLabels.forEach((label) => {
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
        testCardProperties[0],
        {
          key: "email" as const,
          label: "Contact",
          render: (item: Person) => `📧 ${item.email}`,
        },
        testCardProperties[2],
      ]

      render(
        <CardCollection<TestSchema, TestFilters>
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
        <CardCollection<TestSchema, TestFilters>
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
      const consoleError = vi
        .spyOn(console, "error")
        .mockImplementation(() => {})

      render(
        <CardCollection<TestSchema, TestFilters>
          cardProperties={testCardProperties}
          source={createTestSource([], new Error("Failed to fetch data"))}
        />
      )

      // Wait for loading state to finish and verify error was logged
      await waitFor(() => {
        expect(consoleError).toHaveBeenCalledWith(
          "Error fetching data:",
          expect.any(Error)
        )
      })

      consoleError.mockRestore()
    })
  })
})

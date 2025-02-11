import { render, screen, waitFor } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { TableCollection } from "."
import type { FiltersDefinition } from "../Filters/types"
import type { NumberPropertySchema, StringPropertySchema } from "../properties"
import type { DataSource } from "../types"

type TestSchema = {
  id: Omit<NumberPropertySchema, "value">
  name: Omit<StringPropertySchema, "value">
  email: Omit<StringPropertySchema, "value">
}

type TestFilters = FiltersDefinition

interface Person {
  id: number
  name: string
  email: string
}

const testData: Person[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
]

const testColumns = [
  { key: "name" as const, label: "Name" },
  { key: "email" as const, label: "Email" },
]

const testSource: DataSource<TestSchema, TestFilters> = {
  properties: {
    id: { type: "number" },
    name: { type: "string" },
    email: { type: "string" },
  },
  currentFilters: {},
  setCurrentFilters: () => {},
  fetchData: async () => testData,
}

describe("TableCollection", () => {
  it("renders table with data", async () => {
    render(
      <TableCollection<TestSchema, TestFilters>
        columns={testColumns}
        source={testSource}
      />
    )

    // Initially shows loading state
    const loadingCells = screen.getAllByRole("cell")
    expect(loadingCells[0].querySelector(".animate-pulse")).toBeInTheDocument()

    // Wait for loading state to disappear
    await waitFor(() => {
      expect(
        screen.queryByRole("cell")?.querySelector(".animate-pulse")
      ).not.toBeInTheDocument()
    })

    // Verify all data is rendered
    for (const item of testData) {
      expect(screen.getByText(item.name)).toBeInTheDocument()
      expect(screen.getByText(item.email)).toBeInTheDocument()
    }
  })

  it("renders custom column formatting", async () => {
    const columnsWithCustomRender = [
      ...testColumns,
      {
        key: "name" as const,
        label: "Custom",
        render: (item: Person) => `Custom: ${item.name}`,
      },
    ]

    render(
      <TableCollection<TestSchema, TestFilters>
        columns={columnsWithCustomRender}
        source={testSource}
      />
    )

    // Wait for loading state to disappear
    await waitFor(() => {
      expect(
        screen.queryByRole("cell")?.querySelector(".animate-pulse")
      ).not.toBeInTheDocument()
    })

    // Verify custom rendered content
    for (const item of testData) {
      expect(screen.getByText(`Custom: ${item.name}`)).toBeInTheDocument()
    }
  })

  it("renders links for each row", async () => {
    render(
      <TableCollection<TestSchema, TestFilters>
        columns={testColumns}
        source={testSource}
        link={(item) => ({
          label: `View ${item.name}`,
          url: `/users/${item.id}`,
        })}
      />
    )

    // Wait for loading state to disappear
    await waitFor(() => {
      expect(
        screen.queryByRole("cell")?.querySelector(".animate-pulse")
      ).not.toBeInTheDocument()
    })

    // Verify links are rendered correctly
    for (const item of testData) {
      const link = screen.getByText(`View ${item.name}`)
      expect(link).toBeInTheDocument()
      expect(link.closest("a")).toHaveAttribute("href", `/users/${item.id}`)
    }
  })

  it("renders empty state when no data is provided", async () => {
    const emptySource: DataSource<TestSchema, TestFilters> = {
      ...testSource,
      fetchData: async () => [],
    }

    render(
      <TableCollection<TestSchema, TestFilters>
        columns={testColumns}
        source={emptySource}
      />
    )

    // Headers should be present
    expect(screen.getByText("Name")).toBeInTheDocument()
    expect(screen.getByText("Email")).toBeInTheDocument()

    // Wait for loading state to disappear
    await waitFor(() => {
      expect(
        screen.queryByRole("cell")?.querySelector(".animate-pulse")
      ).not.toBeInTheDocument()
    })

    // Verify no data rows are present
    for (const item of testData) {
      expect(screen.queryByText(item.name)).not.toBeInTheDocument()
      expect(screen.queryByText(item.email)).not.toBeInTheDocument()
    }
  })
})

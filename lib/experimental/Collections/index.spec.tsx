import { render, renderHook, screen, waitFor } from "@testing-library/react"
import { LayoutGrid } from "lucide-react"
import { describe, expect, test } from "vitest"
import { Observable } from "zen-observable-ts"
import { DataCollection, useDataSource } from "."
import { I18nProvider } from "../../lib/i18n-provider"
import { defaultTranslations } from "../../lib/i18n-provider-defaults"
import type { FiltersDefinition } from "./Filters/types"
import type { StringPropertySchema } from "./properties"
import type { DataSource } from "./types"
import { useData } from "./useData"

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

// Example schema for a user entity
type UserSchema = {
  name: Omit<StringPropertySchema, "value">
  email: Omit<StringPropertySchema, "value">
  role: Omit<StringPropertySchema, "value">
  department: Omit<StringPropertySchema, "value">
}

const properties: UserSchema = {
  name: { type: "string" },
  email: { type: "string" },
  role: { type: "string" },
  department: { type: "string" },
}

const mockUsers = [
  {
    name: "John Doe",
    email: "john@example.com",
    role: "Senior Engineer",
    department: "Engineering",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Product Manager",
    department: "Product",
  },
]

describe("Collections", () => {
  test("renders with basic search filter", async () => {
    const { result } = renderHook(
      () =>
        useDataSource({
          properties: {
            name: {
              type: "string",
            },
          },
          filters: {
            fields: {
              name: { type: "search", label: "Name" },
            },
          },
          fetchData: async ({ filters }) => {
            // @ts-expect-error Property 'email' does not exist on type '{ name?: string | undefined; }'
            if (filters.email) {
              throw new Error("Email is not a valid filter")
            }

            return mockUsers.filter((user) => {
              if (filters.name) {
                return user.name
                  .toLowerCase()
                  .includes(filters.name.toLowerCase())
              }
              return true
            })
          },
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <DataCollection
          source={result.current}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [{ key: "name", label: "Name" }],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("Jane Smith")).toBeInTheDocument()
    })
  })

  test("renders with multiple visualizations", async () => {
    const { result } = renderHook(
      () =>
        useDataSource({
          properties,
          fetchData: async () => mockUsers,
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <DataCollection
          source={result.current}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  { key: "name", label: "Name" },
                  { key: "email", label: "Email" },
                ],
              },
            },
            {
              type: "card",
              options: {
                cardProperties: [
                  { key: "name", label: "Name" },
                  { key: "email", label: "Email" },
                ],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText("john@example.com")).toBeInTheDocument()
      expect(screen.getByText("jane@example.com")).toBeInTheDocument()
    })
  })

  test("handles observable data source", async () => {
    const { result } = renderHook(
      () =>
        useDataSource({
          properties,
          fetchData: () =>
            new Observable<typeof mockUsers>((observer) => {
              observer.next(mockUsers)
              return () => {}
            }),
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <DataCollection
          source={result.current}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  { key: "name", label: "Name" },
                  { key: "role", label: "Role" },
                ],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText("Senior Engineer")).toBeInTheDocument()
      expect(screen.getByText("Product Manager")).toBeInTheDocument()
    })
  })

  test("handles multiple filter types", async () => {
    const { result } = renderHook(
      () =>
        useDataSource({
          properties,
          filters: {
            fields: {
              search: {
                type: "search",
                label: "Search",
              },
              department: {
                type: "in",
                label: "Department",
                options: [
                  { value: "Engineering", label: "Engineering" },
                  { value: "Product", label: "Product" },
                ],
              },
            },
          },
          fetchData: async ({ filters }) => {
            let filtered = [...mockUsers]

            if (filters.search) {
              const searchLower = filters.search.toLowerCase()
              filtered = filtered.filter(
                (user) =>
                  user.name.toLowerCase().includes(searchLower) ||
                  user.email.toLowerCase().includes(searchLower)
              )
            }

            if (filters.department && filters.department.length > 0) {
              filtered = filtered.filter((user) =>
                filters.department?.includes(user.department)
              )
            }

            return filtered
          },
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <DataCollection
          source={result.current}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  { key: "name", label: "Name" },
                  { key: "department", label: "Department" },
                ],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("Engineering")).toBeInTheDocument()
    })
  })

  test("it allows data to be passed in with the right properties", () => {
    const { result } = renderHook(
      () =>
        useDataSource({
          properties: {
            name: { type: "string" },
          },
          fetchData: async () => [{ name: "John" }],
        }),
      { wrapper: TestWrapper }
    )

    expect(result.current).toBeDefined()
  })

  test("it fails when data has wrong property types", () => {
    const { result } = renderHook(
      () =>
        useDataSource({
          properties: {
            name: { type: "string" },
          },
          // @ts-expect-error Property 'name' should be string but got number
          fetchData: async () => [{ name: 123 }],
        }),
      { wrapper: TestWrapper }
    )

    expect(result.current).toBeDefined()
  })

  test("renders with custom visualization", async () => {
    type CustomVisualizationProps = {
      source: DataSource<UserSchema, FiltersDefinition>
    }

    const CustomComponent = ({ source }: CustomVisualizationProps) => {
      const { data } = useData({ source })

      return (
        <div data-testid="custom-visualization">
          {data?.map((user) => (
            <div key={user.email} className="custom-item">
              <h3>{user.name}</h3>
              <p>
                {user.role} - {user.department}
              </p>
            </div>
          ))}
        </div>
      )
    }

    const { result } = renderHook(
      () =>
        useDataSource({
          properties,
          fetchData: () =>
            new Observable<typeof mockUsers>((observer) => {
              observer.next(mockUsers)
              return () => {}
            }),
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <DataCollection
          source={result.current}
          visualizations={[
            {
              type: "custom",
              label: "Custom View",
              icon: LayoutGrid,
              component: CustomComponent,
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByTestId("custom-visualization")).toBeInTheDocument()
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(
        screen.getByText("Senior Engineer - Engineering")
      ).toBeInTheDocument()
      expect(screen.getByText("Product Manager - Product")).toBeInTheDocument()
    })
  })
})

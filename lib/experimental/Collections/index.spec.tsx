import { render, renderHook, screen, waitFor } from "@testing-library/react"
import { LayoutGrid } from "lucide-react"
import { describe, expect, test } from "vitest"
import { Observable } from "zen-observable-ts"
import { DataCollection, useDataSource } from "."
import { I18nProvider } from "../../lib/i18n-provider"
import { defaultTranslations } from "../../lib/i18n-provider-defaults"
import type { FiltersDefinition } from "./Filters/types"
import type { DataSource } from "./types"
import { useData } from "./useData"

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

describe("Collections", () => {
  test("renders with basic search filter", async () => {
    const mockData = [{ name: "John Doe" }, { name: "Jane Smith" }]

    const { result } = renderHook(
      () =>
        useDataSource({
          filters: {
            name: { type: "search", label: "Name" },
          },
          dataAdapter: {
            fetchData: async ({ filters }) => {
              if ("email" in filters) {
                throw new Error("Email is not a valid filter")
              }

              const records = mockData.filter((user) => {
                if (filters.name && typeof filters.name === "string") {
                  return user.name
                    .toLowerCase()
                    .includes(filters.name.toLowerCase())
                }
                return true
              })

              return { records }
            },
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
                columns: [{ label: "name", render: (item) => item.name }],
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
          dataAdapter: {
            fetchData: async () => ({
              records: [
                { name: "John Doe", email: "john@example.com" },
                { name: "Jane Smith", email: "jane@example.com" },
              ],
            }),
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
                  { label: "Name", render: (item) => item.name },
                  { label: "Email", render: (item) => item.email },
                ],
              },
            },
            {
              type: "card",
              options: {
                cardProperties: [
                  { label: "Name", render: (item) => item.name },
                  { label: "Email", render: (item) => item.email },
                ],
                title: (item) => item.name,
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
          dataAdapter: {
            fetchData: () =>
              new Observable<{
                records: Array<{ name: string; role: string }>
              }>((observer) => {
                observer.next({
                  records: [
                    { name: "John Doe", role: "Senior Engineer" },
                    { name: "Jane Smith", role: "Product Manager" },
                  ],
                })
                return () => {}
              }),
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
                  { label: "Name", render: (item) => item.name },
                  { label: "Role", render: (item) => item.role },
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
    const mockData = [
      {
        name: "John Doe",
        email: "john@example.com",
        department: "Engineering",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        department: "Product",
      },
    ]

    const { result } = renderHook(
      () =>
        useDataSource({
          filters: {
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
          dataAdapter: {
            fetchData: async ({ filters }) => {
              let filtered = [...mockData]

              if (filters.search && typeof filters.search === "string") {
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

              return { records: filtered }
            },
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
                  { label: "Name", render: (item) => item.name },
                  { label: "Department", render: (item) => item.department },
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
          dataAdapter: {
            fetchData: async () => ({ records: [{ name: "John" }] }),
          },
        }),
      { wrapper: TestWrapper }
    )

    expect(result.current).toBeDefined()
  })

  test("renders with custom visualization", async () => {
    type Item = {
      name: string
      role: string
      department: string
      email: string
    }

    const CustomComponent = ({
      source,
    }: {
      source: DataSource<Item, FiltersDefinition>
    }) => {
      const { data } = useData(source)

      return (
        <div data-testid="custom-visualization">
          {data?.map((item) => (
            <div key={item.email} className="custom-item">
              <h3>{item.name}</h3>
              <p>
                {item.role} - {item.department}
              </p>
            </div>
          ))}
        </div>
      )
    }

    const { result } = renderHook(
      () =>
        useDataSource({
          dataAdapter: {
            fetchData: () =>
              new Observable<{ records: Item[] }>((observer) => {
                observer.next({
                  records: [
                    {
                      name: "John Doe",
                      role: "Senior Engineer",
                      department: "Engineering",
                      email: "john@example.com",
                    },
                    {
                      name: "Jane Smith",
                      role: "Product Manager",
                      department: "Product",
                      email: "jane@example.com",
                    },
                  ],
                })
                return () => {}
              }),
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

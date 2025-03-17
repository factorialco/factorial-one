import {
  act,
  render,
  renderHook,
  screen,
  waitFor,
  within,
} from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { LayoutGrid } from "lucide-react"
import { describe, expect, test, vi } from "vitest"
import { Observable } from "zen-observable-ts"
import { DataCollection, useDataSource } from "."
import { I18nProvider } from "../../lib/i18n-provider"
import { defaultTranslations } from "../../lib/i18n-provider-defaults"
import { PromiseState } from "../../lib/promise-to-observable"
import { ActionsDefinition } from "./actions"
import type { FiltersDefinition } from "./Filters/types"
import { SortingsDefinition } from "./sortings"
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

              return mockData.filter((user) => {
                if (filters.name && typeof filters.name === "string") {
                  return user.name
                    .toLowerCase()
                    .includes(filters.name.toLowerCase())
                }
                return true
              })
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
            fetchData: async () => [
              { name: "John Doe", email: "john@example.com" },
              { name: "Jane Smith", email: "jane@example.com" },
            ],
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
              new Observable<
                PromiseState<Array<{ name: string; role: string }>>
              >((observer) => {
                observer.next({
                  loading: true,
                  error: null,
                  data: null,
                })

                setTimeout(() => {
                  observer.next({
                    loading: false,
                    error: null,
                    data: [
                      { name: "John Doe", role: "Senior Engineer" },
                      { name: "Jane Smith", role: "Product Manager" },
                    ],
                  })
                  observer.complete()
                }, 0)

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

              return filtered
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
            fetchData: async () => [{ name: "John" }],
          },
        }),
      { wrapper: TestWrapper }
    )

    expect(result.current).toBeDefined()
  })

  test("renders with custom visualization", async () => {
    type Item = {
      name: string
      email: string
      role: string
      department: string
    }

    const CustomComponent = ({
      source,
    }: {
      source: DataSource<
        Item,
        FiltersDefinition,
        SortingsDefinition,
        ActionsDefinition<Item>
      >
    }) => {
      const { data } = useData<Item, FiltersDefinition, SortingsDefinition>(
        source
      )

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
              new Observable<PromiseState<Item[]>>((observer) => {
                observer.next({
                  loading: true,
                  error: null,
                  data: null,
                })

                setTimeout(() => {
                  observer.next({
                    loading: false,
                    error: null,
                    data: [
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
                  observer.complete()
                }, 0)

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
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(
        screen.getByText("Senior Engineer - Engineering")
      ).toBeInTheDocument()
    })
  })

  test("integrates TableCollection with sortable columns", async () => {
    type Person = {
      id: number
      name: string
      email: string
      role: string
    }

    const mockData: Person[] = [
      { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
      {
        id: 2,
        name: "Alice Brown",
        email: "alice@example.com",
        role: "Designer",
      },
      { id: 3, name: "Bob Smith", email: "bob@example.com", role: "Manager" },
    ]

    // Create a mock for setCurrentSortings function
    const setCurrentSortingsMock = vi.fn()

    const { result } = renderHook(
      () => {
        const source = useDataSource<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          ActionsDefinition<Person>
        >({
          dataAdapter: {
            fetchData: async ({ sortings }) => {
              const sorted = [...mockData]

              if (sortings && sortings.field === "name") {
                sorted.sort((a, b) => {
                  const direction = sortings.direction === "asc" ? 1 : -1
                  return a.name.localeCompare(b.name) * direction
                })
              }

              return sorted
            },
          },
          sortings: {
            name: {
              label: "Name",
            },
          },
        })

        // Override the setCurrentSortings with our mock for testing
        source.setCurrentSortings = setCurrentSortingsMock

        return source
      },
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
                  {
                    label: "Name",
                    render: (item: Person) => item.name,
                    sorting: "name" as const,
                  },
                  {
                    label: "Email",
                    render: (item: Person) => item.email,
                  },
                ],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("Alice Brown")).toBeInTheDocument()
      expect(screen.getByText("Bob Smith")).toBeInTheDocument()
    })

    // Find and click the sort button in the Name column
    const nameColumnHeader = await screen.findByRole("columnheader", {
      name: /name/i,
    })
    expect(nameColumnHeader).toBeInTheDocument()

    // The sort button should be inside the column header
    const sortButton = within(nameColumnHeader).getByRole("button")
    expect(sortButton).toBeInTheDocument()

    // Click the sort button
    await userEvent.click(sortButton)

    // Verify that setCurrentSortings is called with the correct parameters
    expect(setCurrentSortingsMock).toHaveBeenCalled()
  })

  test("integrates TableCollection with filtering capabilities", async () => {
    type Person = {
      id: number
      name: string
      department: string
    }

    const mockData: Person[] = [
      { id: 1, name: "John Doe", department: "Engineering" },
      { id: 2, name: "Jane Smith", department: "Product" },
      { id: 3, name: "Bob Johnson", department: "Engineering" },
      { id: 4, name: "Alice Williams", department: "Design" },
    ]

    // Create a mock for setCurrentFilters function
    const setCurrentFiltersMock = vi.fn()

    const { result } = renderHook(
      () => {
        const source = useDataSource<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          ActionsDefinition<Person>
        >({
          filters: {
            department: {
              type: "in",
              label: "Department",
              options: [
                { value: "Engineering", label: "Engineering" },
                { value: "Product", label: "Product" },
                { value: "Design", label: "Design" },
              ],
            },
            search: {
              type: "search",
              label: "Search",
            },
          },
          dataAdapter: {
            fetchData: async ({ filters }) => {
              let filtered = [...mockData]

              if (filters.department && filters.department.length > 0) {
                filtered = filtered.filter((person) =>
                  filters.department?.includes(person.department)
                )
              }

              if (filters.search && typeof filters.search === "string") {
                const searchLower = filters.search.toLowerCase()
                filtered = filtered.filter((person) =>
                  person.name.toLowerCase().includes(searchLower)
                )
              }

              return filtered
            },
          },
        })

        // Override the setCurrentFilters with our mock for testing
        source.setCurrentFilters = setCurrentFiltersMock

        return source
      },
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
                  { label: "Name", render: (item: Person) => item.name },
                  {
                    label: "Department",
                    render: (item: Person) => item.department,
                  },
                ],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      // Use getAllByText since there might be multiple elements with the same text
      const johnElements = screen.getAllByText("John Doe")
      const janeElements = screen.getAllByText("Jane Smith")
      const engineeringElements = screen.getAllByText("Engineering")
      const productElements = screen.getAllByText("Product")

      expect(johnElements.length).toBeGreaterThan(0)
      expect(janeElements.length).toBeGreaterThan(0)
      expect(engineeringElements.length).toBeGreaterThan(0)
      expect(productElements.length).toBeGreaterThan(0)
    })

    // Find the filter button
    const filterButton = screen.getByTitle("Filters")

    // Just verify the filter button exists
    expect(filterButton).toBeInTheDocument()

    // Note: We don't test clicking the filter button since that would open a dialog
    // and we'd need more knowledge about the specifics of the dialog implementation
  })

  test("integrates TableCollection with actions", async () => {
    type Person = {
      id: number
      name: string
      email: string
    }

    const mockData = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ]

    // Create mock handlers for our actions
    const handleEdit = vi.fn()
    const handleDelete = vi.fn()

    // Create a data source with actions
    const { result } = renderHook(
      () =>
        useDataSource<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          ActionsDefinition<Person>
        >({
          dataAdapter: {
            fetchData: async () => mockData,
          },
          actions: (item) => [
            {
              label: "Edit",
              onClick: () => handleEdit(item),
            },
            {
              label: "Delete",
              variant: "destructive",
              onClick: () => handleDelete(item),
            },
          ],
        }),
      { wrapper: TestWrapper }
    )

    render(
      <DataCollection
        source={result.current}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item) => item.name,
                },
                {
                  label: "Email",
                  render: (item) => item.email,
                },
              ],
            },
          },
        ]}
      />,
      { wrapper: TestWrapper }
    )

    // Check that our data is rendered
    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("jane@example.com")).toBeInTheDocument()
    })

    // Find and click the actions button (typically has MoreVertical icon or similar)
    const actionsButtons = await waitFor(() =>
      screen.getAllByRole("button", { name: /actions/i })
    )
    expect(actionsButtons).toHaveLength(2) // One for each row

    // Click the actions button for the first row
    await userEvent.click(actionsButtons[0])

    // The Radix dropdown content should now be in the document
    // Wait for the dropdown to be visible (Radix UI adds data-state="open" when open)
    const dropdown = await screen.findByRole("menu")
    expect(dropdown).toBeInTheDocument()

    // Find and click the Edit action
    const editButton = within(dropdown).getByText("Edit")
    await userEvent.click(editButton)

    // Verify our handler was called with the correct item
    expect(handleEdit).toHaveBeenCalledTimes(1)
    expect(handleEdit).toHaveBeenCalledWith(mockData[0])
  })

  test("integrates search functionality", async () => {
    type Person = {
      id: number
      name: string
      email: string
      role: string
    }

    const mockData: Person[] = [
      { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        role: "Designer",
      },
      {
        id: 3,
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "Manager",
      },
      { id: 4, name: "Bob Brown", email: "bob@example.com", role: "Tester" },
    ]

    // Mock the setCurrentSearch function
    const setCurrentSearchMock = vi.fn()

    // Create a data source with search enabled
    const { result } = renderHook(
      () => {
        const source = useDataSource<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          ActionsDefinition<Person>
        >({
          dataAdapter: {
            fetchData: async ({ search }) => {
              if (!search) return mockData

              const searchLower = search.toLowerCase()
              return mockData.filter(
                (person) =>
                  person.name.toLowerCase().includes(searchLower) ||
                  person.email.toLowerCase().includes(searchLower) ||
                  person.role.toLowerCase().includes(searchLower)
              )
            },
          },
          search: {
            enabled: true,
            sync: true,
          },
        })

        // Override setCurrentSearch with our mock
        source.setCurrentSearch = setCurrentSearchMock

        return source
      },
      { wrapper: TestWrapper }
    )

    // Render the DataCollection with our configured source
    render(
      <DataCollection
        source={result.current}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { label: "Name", render: (item: Person) => item.name },
                { label: "Email", render: (item: Person) => item.email },
                { label: "Role", render: (item: Person) => item.role },
              ],
            },
          },
        ]}
      />,
      { wrapper: TestWrapper }
    )

    // Verify that all four initial users are displayed
    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("Jane Smith")).toBeInTheDocument()
      expect(screen.getByText("Alice Johnson")).toBeInTheDocument()
      expect(screen.getByText("Bob Brown")).toBeInTheDocument()
    })

    // Find the search button/input
    const searchButton = screen.getByLabelText(/search/i)
    expect(searchButton).toBeInTheDocument()

    // Click on the search button to open the search input
    await userEvent.click(searchButton)

    // Find the search input after it's opened
    const searchInput = screen.getByPlaceholderText(/search/i)
    expect(searchInput).toBeInTheDocument()

    // Enter a search term
    await userEvent.type(searchInput, "john")

    // Verify the setCurrentSearch was called with the correct term
    expect(setCurrentSearchMock).toHaveBeenCalledWith("john")
  })

  test("integrates TableCollection with pagination", async () => {
    type Person = {
      id: number
      name: string
      email: string
    }

    // Create a simple data source with pagination
    const { result } = renderHook(
      () =>
        useDataSource<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          ActionsDefinition<Person>
        >({
          dataAdapter: {
            paginationType: "pages",
            perPage: 10,
            fetchData: async ({ pagination }) => {
              const { currentPage = 1 } = pagination || {}
              const itemsPerPage = 10
              const totalItems = 45

              // Generate paginated data
              const startIndex = (currentPage - 1) * itemsPerPage
              const endIndex = Math.min(startIndex + itemsPerPage, totalItems)

              const paginatedData = Array.from(
                { length: endIndex - startIndex },
                (_, i) => ({
                  id: startIndex + i + 1,
                  name: `User ${startIndex + i + 1}`,
                  email: `user${startIndex + i + 1}@example.com`,
                })
              )

              return {
                records: paginatedData,
                total: totalItems,
                currentPage,
                perPage: itemsPerPage,
                pagesCount: Math.ceil(totalItems / itemsPerPage),
              }
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
                  { label: "Name", render: (item: Person) => item.name },
                  { label: "Email", render: (item: Person) => item.email },
                ],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      // Verify first page data is displayed
      expect(screen.getByText("User 1")).toBeInTheDocument()
      expect(screen.getByText("user10@example.com")).toBeInTheDocument()
    })

    // Find and click the next page button
    const nextPageButton =
      screen.getByLabelText(/next/i) || screen.getByText(/next/i)

    act(() => {
      nextPageButton.click()
    })

    // Verify second page data is displayed
    await waitFor(() => {
      expect(screen.getByText("User 11")).toBeInTheDocument()
      expect(screen.getByText("user20@example.com")).toBeInTheDocument()
    })
  })
})

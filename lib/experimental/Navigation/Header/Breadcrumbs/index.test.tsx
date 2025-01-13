import { Home, Settings } from "@/icons/app"
import { render, within } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import Breadcrumbs, { BreadcrumbItemType } from "."

const mockBreadcrumbs: BreadcrumbItemType[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Electronics", href: "/products/electronics" },
  { label: "Laptops", href: "/products/electronics/laptops" },
]

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

describe("Breadcrumbs", () => {
  beforeEach(() => {
    // Mock getBoundingClientRect for width calculations
    Element.prototype.getBoundingClientRect = vi.fn(() => ({
      width: 1000,
      height: 0,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      x: 0,
      y: 0,
      toJSON: () => {},
    }))
  })

  it("renders all breadcrumbs when there's enough space", () => {
    const { container } = render(<Breadcrumbs breadcrumbs={mockBreadcrumbs} />)
    const nav = container.querySelector("nav")
    expect(nav).toBeInTheDocument()

    // Check if all breadcrumb items are rendered
    mockBreadcrumbs.forEach((item) => {
      if ("loading" in item) return
      const links = within(nav!).getAllByRole("link")
      const matchingLink = links.find((link) =>
        link.textContent?.includes(item.label)
      )
      expect(matchingLink).toBeDefined()
    })
  })

  it("renders first and last items when space is limited", () => {
    // Mock a smaller width
    Element.prototype.getBoundingClientRect = vi.fn(() => ({
      width: 300,
      height: 0,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      x: 0,
      y: 0,
      toJSON: () => {},
    }))

    const { container } = render(<Breadcrumbs breadcrumbs={mockBreadcrumbs} />)
    const nav = container.querySelector("nav")
    expect(nav).toBeInTheDocument()

    // First and last items should always be visible
    const links = within(nav!).getAllByRole("link")
    const firstItem = mockBreadcrumbs[0]
    const lastItem = mockBreadcrumbs[mockBreadcrumbs.length - 1]

    if (!("loading" in firstItem) && !("loading" in lastItem)) {
      const firstLink = links.find((link) =>
        link.textContent?.includes(firstItem.label)
      )
      const lastElement = within(nav!).getByRole("link", { current: "page" })

      expect(firstLink).toBeDefined()
      expect(lastElement).toHaveTextContent(lastItem.label)
    }

    // Should show ellipsis for collapsed items
    expect(within(nav!).getByText("...")).toBeInTheDocument()
  })

  it("renders breadcrumbs with icons when provided", () => {
    const breadcrumbsWithIcons: BreadcrumbItemType[] = [
      { label: "Home", href: "/", icon: Home },
      { label: "Settings", href: "/settings", icon: Settings },
    ]

    const { container } = render(
      <Breadcrumbs breadcrumbs={breadcrumbsWithIcons} />
    )
    const nav = container.querySelector("nav")
    expect(nav).toBeInTheDocument()

    // Check if labels are rendered
    const links = within(nav!).getAllByRole("link")
    const homeLink = links.find((link) => link.textContent?.includes("Home"))
    const settingsLink = links.find((link) =>
      link.textContent?.includes("Settings")
    )

    expect(homeLink).toBeDefined()
    expect(settingsLink).toBeDefined()

    // Check if icons are rendered
    expect(nav!.querySelectorAll("svg")).toHaveLength(3) // 2 icons + 1 separator
  })

  it("renders correct links for non-last items", () => {
    const { container } = render(<Breadcrumbs breadcrumbs={mockBreadcrumbs} />)
    const nav = container.querySelector("nav")
    expect(nav).toBeInTheDocument()

    // First item should be a link
    const firstItem = mockBreadcrumbs[0]
    const lastItem = mockBreadcrumbs[mockBreadcrumbs.length - 1]

    if (!("loading" in firstItem) && !("loading" in lastItem)) {
      const links = within(nav!).getAllByRole("link")
      const firstLink = links.find((link) =>
        link.textContent?.includes(firstItem.label)
      )
      expect(firstLink).toHaveAttribute("href", firstItem.href)

      // Last item should not be a link
      const lastElement = within(nav!).getByRole("link", { current: "page" })
      expect(lastElement).toHaveTextContent(lastItem.label)
      expect(lastElement.closest("a")).toBeNull()
    }
  })

  it("handles empty breadcrumbs gracefully", () => {
    const { container } = render(<Breadcrumbs breadcrumbs={[]} />)
    const nav = container.querySelector("nav")
    expect(nav).toBeInTheDocument()
    expect(nav!.textContent).toBe("")
  })

  describe("loading states", () => {
    it("renders skeleton for last item when loading", () => {
      const breadcrumbsWithLoading: BreadcrumbItemType[] = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { loading: true },
      ]

      const { container } = render(
        <Breadcrumbs breadcrumbs={breadcrumbsWithLoading} />
      )
      const nav = container.querySelector("nav")
      expect(nav).toBeInTheDocument()

      // Find all items that contain text content
      const items = within(nav!).getAllByRole("listitem")
      const textItems = items.filter((item) => item.textContent)
      expect(textItems).toHaveLength(2)
      expect(textItems[0]).toHaveTextContent("Home")
      expect(textItems[1]).toHaveTextContent("Products")

      // Verify loading items
      const loadingItems = items.filter(
        (item) => item.getAttribute("aria-disabled") === "true"
      )
      expect(loadingItems).toHaveLength(1)
    })

    it("renders skeletons for last two items when loading", () => {
      const breadcrumbsWithLoading: BreadcrumbItemType[] = [
        { label: "Home", href: "/" },
        { loading: true },
        { loading: true },
      ]

      const { container } = render(
        <Breadcrumbs breadcrumbs={breadcrumbsWithLoading} />
      )
      const nav = container.querySelector("nav")
      expect(nav).toBeInTheDocument()

      // Find all items that contain text content
      const items = within(nav!).getAllByRole("listitem")
      const textItems = items.filter((item) => item.textContent)
      expect(textItems).toHaveLength(1)
      expect(textItems[0]).toHaveTextContent("Home")

      // Verify loading items
      const loadingItems = items.filter(
        (item) => item.getAttribute("aria-disabled") === "true"
      )
      expect(loadingItems).toHaveLength(2)
    })

    it("ensures loading items are not interactive", () => {
      const breadcrumbsWithLoading: BreadcrumbItemType[] = [
        { label: "Home", href: "/" },
        { loading: true },
        { loading: true },
      ]

      const { container } = render(
        <Breadcrumbs breadcrumbs={breadcrumbsWithLoading} />
      )
      const nav = container.querySelector("nav")

      // Ensure loading items are not interactive
      const items = within(nav!).getAllByRole("listitem")
      const loadingItems = items.filter(
        (item) => item.getAttribute("aria-disabled") === "true"
      )

      loadingItems.forEach((item) => {
        expect(item.closest("a")).toBeNull()
      })
    })
  })
})

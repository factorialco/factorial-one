import { Home, Settings } from "@/icons/app"
import { render, within } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import Breadcrumbs from "."

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
    const home = { label: "Home", href: "/" }
    const products = { label: "Products", href: "/products" }
    const electronics = { label: "Electronics", href: "/products/electronics" }
    const laptops = { label: "Laptops", href: "/products/electronics/laptops" }
    const breadcrumbs = [home, products, electronics, laptops]

    const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
    const nav = container.querySelector("nav")
    expect(nav).toBeInTheDocument()

    // Check if all non-last breadcrumb items are rendered as links
    breadcrumbs.slice(0, -1).forEach((item) => {
      const links = within(nav!).getAllByRole("link")
      const matchingLink = links.find((link) =>
        link.textContent?.includes(item.label)
      )
      expect(matchingLink).toBeDefined()
    })

    // Check if last item is rendered as text
    const lastItem = breadcrumbs[breadcrumbs.length - 1]
    const lastElement = nav!.querySelector('[aria-current="page"]')
    expect(lastElement).toHaveTextContent(lastItem.label)
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

    const home = { label: "Home", href: "/" }
    const products = { label: "Products", href: "/products" }
    const electronics = { label: "Electronics", href: "/products/electronics" }
    const laptops = { label: "Laptops", href: "/products/electronics/laptops" }
    const breadcrumbs = [home, products, electronics, laptops]

    const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
    const nav = container.querySelector("nav")
    expect(nav).toBeInTheDocument()

    // First item should be a link
    const links = within(nav!).getAllByRole("link")
    const firstLink = links.find((link) =>
      link.textContent?.includes(home.label)
    )
    expect(firstLink).toBeDefined()

    // Last item should be text
    const lastElement = nav!.querySelector('[aria-current="page"]')
    expect(lastElement).toHaveTextContent(laptops.label)

    // Should show ellipsis for collapsed items
    expect(within(nav!).getByText("...")).toBeInTheDocument()
  })

  it("renders breadcrumbs with icons when provided", () => {
    const home = { label: "Home", href: "/", icon: Home }
    const settings = { label: "Settings", href: "/settings", icon: Settings }
    const breadcrumbs = [home, settings]

    const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
    const nav = container.querySelector("nav")
    expect(nav).toBeInTheDocument()

    // Check if first item is rendered as a link with icon
    const links = within(nav!).getAllByRole("link")
    const homeLink = links.find((link) =>
      link.textContent?.includes(home.label)
    )
    expect(homeLink).toBeDefined()

    // Check if last item is rendered as text
    const lastElement = nav!.querySelector('[aria-current="page"]')
    expect(lastElement).toHaveTextContent(settings.label)

    // Check if icons are rendered (2 icons + 1 separator)
    expect(nav!.querySelectorAll("svg")).toHaveLength(3)
  })

  it("renders correct links for non-last items", () => {
    const home = { label: "Home", href: "/" }
    const products = { label: "Products", href: "/products" }
    const currentPage = { label: "Current Page", href: "/products/current" }
    const breadcrumbs = [home, products, currentPage]

    const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
    const nav = container.querySelector("nav")
    expect(nav).toBeInTheDocument()

    // Check non-last items are links
    const links = within(nav!).getAllByRole("link")
    const firstLink = links.find((link) =>
      link.textContent?.includes(home.label)
    )
    expect(firstLink).toHaveAttribute("href", home.href)

    // Last item should be text
    const lastElement = nav!.querySelector('[aria-current="page"]')
    expect(lastElement).toHaveTextContent(currentPage.label)
    expect(lastElement?.closest("a")).toBeNull()
  })

  it("handles empty breadcrumbs gracefully", () => {
    const { container } = render(<Breadcrumbs breadcrumbs={[]} />)
    const nav = container.querySelector("nav")
    expect(nav).toBeInTheDocument()
    expect(nav!.textContent).toBe("")
  })

  describe("loading states", () => {
    it("renders skeleton for last item when loading", () => {
      const home = { label: "Home", href: "/" }
      const products = { label: "Products", href: "/products" }
      const loadingItem = { loading: true } as const
      const breadcrumbs = [home, products, loadingItem]

      const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
      const nav = container.querySelector("nav")
      expect(nav).toBeInTheDocument()

      // Find all items that contain text content
      const items = within(nav!).getAllByRole("listitem")
      const textItems = items.filter((item) => item.textContent)
      expect(textItems).toHaveLength(2)
      expect(textItems[0]).toHaveTextContent(home.label)
      expect(textItems[1]).toHaveTextContent(products.label)

      // Verify loading items
      const loadingItems = items.filter((item) =>
        item.querySelector('[aria-hidden="true"]')
      )
      expect(loadingItems).toHaveLength(1)
    })

    it("renders skeletons for last two items when loading", () => {
      const home = { label: "Home", href: "/" }
      const loadingItem1 = { loading: true } as const
      const loadingItem2 = { loading: true } as const
      const breadcrumbs = [home, loadingItem1, loadingItem2]

      const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
      const nav = container.querySelector("nav")
      expect(nav).toBeInTheDocument()

      // Find all items that contain text content
      const items = within(nav!).getAllByRole("listitem")
      const textItems = items.filter((item) => item.textContent)
      expect(textItems).toHaveLength(1)
      expect(textItems[0]).toHaveTextContent(home.label)

      // Verify loading items
      const loadingItems = items.filter((item) =>
        item.querySelector('[aria-hidden="true"]')
      )
      expect(loadingItems).toHaveLength(2)
    })

    it("ensures loading items are not interactive", () => {
      const home = { label: "Home", href: "/" }
      const loadingItem1 = { loading: true } as const
      const loadingItem2 = { loading: true } as const
      const breadcrumbs = [home, loadingItem1, loadingItem2]

      const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
      const nav = container.querySelector("nav")

      // Ensure loading items are not interactive
      const items = within(nav!).getAllByRole("listitem")
      const loadingItems = items.filter((item) =>
        item.querySelector('[aria-hidden="true"]')
      )

      loadingItems.forEach((item) => {
        expect(item.closest("a")).toBeNull()
      })
    })
  })
})

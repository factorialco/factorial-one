import { render, screen } from "@testing-library/react"
import { ComponentProps, forwardRef, PropsWithChildren } from "react"
import { describe, expect, it, vi } from "vitest"
import { Home } from "../../../icons/app"
import { BaseTabs, TabsSkeleton } from "./index"

// Mock the linkHandler module
vi.mock("@/lib/linkHandler", () => ({
  Link: forwardRef<HTMLAnchorElement, PropsWithChildren<ComponentProps<"a">>>(
    function Link({ children, ...props }, ref) {
      return (
        <a ref={ref} {...props}>
          {children}
        </a>
      )
    }
  ),
  useNavigation: () => ({
    isActive: (href: string) => href === "/active",
  }),
}))

describe("Tabs", () => {
  const defaultTabs = [
    { label: "Tab 1", href: "/active" },
    { label: "Tab 2", href: "/other" },
    { label: "Tab 3", href: "/another" },
  ]

  const secondaryTabsWithIcons = [
    { label: "Tab 1", href: "/active", icon: Home },
    { label: "Tab 2", href: "/other", icon: Home },
  ]

  it("renders multiple tabs correctly", () => {
    render(<BaseTabs tabs={defaultTabs} />)

    expect(screen.getByText("Tab 1")).toBeInTheDocument()
    expect(screen.getByText("Tab 2")).toBeInTheDocument()
    expect(screen.getByText("Tab 3")).toBeInTheDocument()
  })

  it("renders a single tab as plain text", () => {
    const singleTab = [{ label: "Single Tab", href: "/single" }]
    render(<BaseTabs tabs={singleTab} />)

    const tab = screen.getByText("Single Tab")
    expect(tab.tagName).toBe("LI")
    expect(tab).toHaveClass("text-lg", "font-medium")
  })

  it("applies active state to the correct tab", () => {
    render(<BaseTabs tabs={defaultTabs} />)

    const activeTab = screen.getByText("Tab 1").closest("a")
    expect(activeTab).toHaveAttribute("data-active", "true")
  })

  it("renders secondary tabs with correct styling", () => {
    render(<BaseTabs tabs={defaultTabs} secondary />)

    const nav = screen.getByRole("navigation")
    expect(nav).toHaveAttribute("aria-label", "primary-navigation")
  })

  it("renders icons only for secondary tabs", () => {
    render(<BaseTabs tabs={secondaryTabsWithIcons} secondary />)

    const icons = screen.getAllByRole("img", { hidden: true })
    expect(icons).toHaveLength(2)
  })

  it("does not render icons for primary tabs", () => {
    render(<BaseTabs tabs={secondaryTabsWithIcons} secondary={false} />)

    const icons = screen.queryAllByRole("img", { hidden: true })
    expect(icons).toHaveLength(0)
  })

  describe("TabsSkeleton", () => {
    it("renders skeleton state with correct number of items", () => {
      render(<TabsSkeleton />)

      const skeletons = screen.getAllByRole("listitem")
      expect(skeletons).toHaveLength(4)
    })

    it("renders secondary skeleton with correct aria label", () => {
      render(<TabsSkeleton secondary />)

      const nav = screen.getByRole("navigation")
      expect(nav).toHaveAttribute("aria-label", "Secondary empty nav")
    })
  })
})

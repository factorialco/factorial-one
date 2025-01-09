import { Home } from "@/icons/app"
import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { PageHeader } from "."

// Mock the useSidebar hook
vi.mock("@/experimental/Navigation/ApplicationFrame/FrameProvider", () => ({
  useSidebar: () => ({
    sidebarState: "unlocked",
    toggleSidebar: vi.fn(),
  }),
}))

const defaultModule = {
  name: "Test Module",
  href: "/test",
  icon: Home,
}

describe("PageHeader", () => {
  it("renders basic module information", () => {
    render(<PageHeader module={defaultModule} />)
    expect(screen.getByText("Test Module")).toBeInTheDocument()
  })

  it("renders status tag when provided", () => {
    render(
      <PageHeader
        module={defaultModule}
        statusTag={{
          text: "Active",
          variant: "positive",
          tooltip: "This is active",
        }}
      />
    )
    expect(screen.getByText("Active")).toBeInTheDocument()
  })

  it("renders breadcrumbs when provided", () => {
    render(
      <PageHeader
        module={defaultModule}
        breadcrumbs={[
          { label: "Section", href: "/section" },
          { label: "Subsection", href: "/section/sub" },
        ]}
      />
    )
    expect(screen.getByText("Section")).toBeInTheDocument()
    expect(screen.getByText("Subsection")).toBeInTheDocument()
  })

  it("renders actions when provided", () => {
    render(
      <PageHeader
        module={defaultModule}
        actions={[
          {
            label: "Action 1",
            icon: Home,
            href: "/action1",
          },
        ]}
      />
    )
    expect(screen.getByTitle("Action 1")).toBeInTheDocument()
  })

  it("renders navigation controls when provided", () => {
    render(
      <PageHeader
        module={defaultModule}
        navigation={{
          previous: { url: "/prev", title: "Previous Item" },
          next: { url: "/next", title: "Next Item" },
          counter: { current: 2, total: 5 },
        }}
      />
    )
    expect(screen.getByText("2/5")).toBeInTheDocument()
    expect(screen.getByLabelText("Previous Item")).toBeInTheDocument()
    expect(screen.getByLabelText("Next Item")).toBeInTheDocument()
  })

  it("disables navigation buttons when no urls provided", () => {
    render(
      <PageHeader
        module={defaultModule}
        navigation={{
          counter: { current: 1, total: 5 },
        }}
      />
    )
    const prevButton = screen.getByLabelText("Previous")
    const nextButton = screen.getByLabelText("Next")
    expect(prevButton.closest("a")).toHaveClass("pointer-events-none")
    expect(nextButton.closest("a")).toHaveClass("pointer-events-none")
  })

  it("renders in embedded mode correctly", () => {
    const { container } = render(
      <PageHeader
        module={defaultModule}
        embedded
        breadcrumbs={[{ label: "Section", href: "/section" }]}
      />
    )
    expect(container.firstChild).toHaveClass("h-12")
    expect(screen.getByText("Section")).toBeInTheDocument()
  })

  it("renders dropdown actions when provided", () => {
    render(
      <PageHeader
        module={defaultModule}
        actions={[
          {
            label: "More",
            icon: Home,
            actions: [
              { label: "Action 1", href: "/action1" },
              { label: "Action 2", href: "/action2" },
            ],
          },
        ]}
      />
    )
    expect(screen.getByTitle("More")).toBeInTheDocument()
  })
})

import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import { RestrictComponent } from "."

// Mock window.location
const mockLocation = (pathname: string) => {
  Object.defineProperty(window, "location", {
    value: { pathname },
    writable: true,
  })
}

describe("RestrictComponent", () => {
  const TestContent = () => <div>Test Content</div>

  beforeEach(() => {
    // Reset window.location before each test
    mockLocation("/")
  })

  it("renders children when no restrictions are provided", () => {
    render(
      <RestrictComponent identifier="test-component">
        <TestContent />
      </RestrictComponent>
    )

    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  it("renders children when current path is in allowedRoutes", () => {
    mockLocation("/allowed-path")

    render(
      <RestrictComponent
        identifier="test-component"
        allowedRoutes={["/allowed-path"]}
      >
        <TestContent />
      </RestrictComponent>
    )

    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  it("does not render children when current path is not in allowedRoutes", () => {
    mockLocation("/not-allowed-path")

    render(
      <RestrictComponent
        identifier="test-component"
        allowedRoutes={["/allowed-path"]}
      >
        <TestContent />
      </RestrictComponent>
    )

    expect(screen.queryByText("Test Content")).not.toBeInTheDocument()
  })

  it("renders children when current path is not in disallowedRoutes", () => {
    mockLocation("/allowed-path")

    render(
      <RestrictComponent
        identifier="test-component"
        disallowedRoutes={["/disallowed-path"]}
      >
        <TestContent />
      </RestrictComponent>
    )

    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  it("does not render children when current path is in disallowedRoutes", () => {
    mockLocation("/disallowed-path")

    render(
      <RestrictComponent
        identifier="test-component"
        disallowedRoutes={["/disallowed-path"]}
      >
        <TestContent />
      </RestrictComponent>
    )

    expect(screen.queryByText("Test Content")).not.toBeInTheDocument()
  })

  it("prioritizes allowedRoutes over disallowedRoutes", () => {
    mockLocation("/test-path")

    render(
      <RestrictComponent
        identifier="test-component"
        allowedRoutes={["/test-path"]}
        disallowedRoutes={["/test-path"]}
      >
        <TestContent />
      </RestrictComponent>
    )

    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  it("handles empty arrays for both allowedRoutes and disallowedRoutes", () => {
    mockLocation("/any-path")

    render(
      <RestrictComponent
        identifier="test-component"
        allowedRoutes={[]}
        disallowedRoutes={[]}
      >
        <TestContent />
      </RestrictComponent>
    )

    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })
})

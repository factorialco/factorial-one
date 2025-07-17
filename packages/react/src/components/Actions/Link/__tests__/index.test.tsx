import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { Link } from "../"
import { useNavigation } from "../../../../lib/linkHandler"

vi.mock("@/lib/linkHandler", async () => {
  const module = await import("../__mocks__/linkHandler")
  return module
})

describe("Link", () => {
  it("renders children correctly", () => {
    render(<Link href="/test">Click me</Link>)
    expect(screen.getByText("Click me")).toBeInTheDocument()
  })

  it("applies link variant by default", () => {
    render(<Link href="/test">Click me</Link>)
    expect(screen.getByRole("link")).toHaveClass("underline")
  })

  it("shows external link icon when target is _blank", () => {
    render(
      <Link href="https://example.com" target="_blank">
        External Link
      </Link>
    )
    expect(screen.getByRole("link").querySelector("svg")).toBeInTheDocument()
  })

  it("applies active state when isActive returns true", () => {
    const { isActive } = vi.mocked(useNavigation)()
    vi.mocked(isActive).mockReturnValue(true)

    render(<Link href="/test">Click me</Link>)
    expect(screen.getByRole("link")).toHaveAttribute("aria-current", "page")
  })

  it("forwards ref correctly", () => {
    const ref = { current: null }
    render(
      <Link href="/test" ref={ref}>
        Click me
      </Link>
    )
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement)
  })

  it("passes href correctly", () => {
    render(<Link href="/test">Click me</Link>)
    expect(screen.getByRole("link")).toHaveAttribute("href", "/test")
  })
})

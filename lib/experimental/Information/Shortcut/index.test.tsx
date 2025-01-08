import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Shortcut } from "."

describe("Shortcut", () => {
  it("renders all keys in the correct order", () => {
    render(<Shortcut keys={["A", "B"]} />)

    const keys = screen.getAllByRole("generic")
    expect(keys).toHaveLength(2)
    expect(keys[0]).toHaveTextContent("A")
    expect(keys[1]).toHaveTextContent("B")
  })

  it("renders special keys with icons", () => {
    render(<Shortcut keys={["cmd", "K"]} />)

    const keys = screen.getAllByRole("generic")
    expect(keys).toHaveLength(2)
    expect(keys[0].querySelector("svg")).toBeInTheDocument()
    expect(keys[1]).toHaveTextContent("K")
  })

  it("handles mixed case input", () => {
    render(<Shortcut keys={["CMD", "k"]} />)

    const keys = screen.getAllByRole("generic")
    expect(keys).toHaveLength(2)
    expect(keys[0].querySelector("svg")).toBeInTheDocument()
    expect(keys[1]).toHaveTextContent("k")
  })

  it("renders with default and inverse variants", () => {
    const { container, rerender } = render(<Shortcut keys={["A"]} />)
    const defaultHtml = container.innerHTML

    rerender(<Shortcut keys={["A"]} variant="inverse" />)
    const inverseHtml = container.innerHTML

    // Verify that the variants render differently
    expect(defaultHtml).not.toBe(inverseHtml)
  })
})

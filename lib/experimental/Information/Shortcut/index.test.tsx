import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Shortcut } from "."

describe("Shortcut", () => {
  it("renders all keys in the correct order", () => {
    render(<Shortcut keys={["A", "B"]} />)

    const keys = screen.getAllByRole("term")
    expect(keys).toHaveLength(2)
    expect(keys[0]).toHaveTextContent("A")
    expect(keys[1]).toHaveTextContent("B")
  })

  it("renders special keys with icons", () => {
    render(<Shortcut keys={["cmd", "K"]} />)

    const keys = screen.getAllByRole("term")
    expect(keys).toHaveLength(2)
    expect(keys[0]).toContainElement(screen.getByTestId("cmd-icon"))
    expect(keys[1]).toHaveTextContent("K")
  })

  it("handles mixed case input", () => {
    render(<Shortcut keys={["CMD", "k"]} />)

    const keys = screen.getAllByRole("term")
    expect(keys).toHaveLength(2)
    expect(keys[0]).toContainElement(screen.getByTestId("cmd-icon"))
    expect(keys[1]).toHaveTextContent("k")
  })

  it("renders with default and inverse variants", () => {
    const { rerender } = render(<Shortcut keys={["A"]} />)
    const defaultKey = screen.getByRole("term")
    const defaultClassName = defaultKey.className

    rerender(<Shortcut keys={["A"]} variant="inverse" />)
    const inverseKey = screen.getByRole("term")
    const inverseClassName = inverseKey.className

    // Just verify they render differently without testing specific classes
    expect(defaultClassName).not.toBe(inverseClassName)
  })
})

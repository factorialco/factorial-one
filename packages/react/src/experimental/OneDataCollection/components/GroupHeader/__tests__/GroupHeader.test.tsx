import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { GroupHeader } from "../GroupHeader"

describe("GroupHeader", () => {
  it("renders with basic props", () => {
    render(<GroupHeader label="Test Group" itemCount={5} />)

    expect(screen.getByText("Test Group")).toBeInTheDocument()
    expect(screen.getByText("5")).toBeInTheDocument()
  })

  it("renders with async label and itemCount", async () => {
    const labelPromise = Promise.resolve("Async Group")
    const countPromise = Promise.resolve(10)

    render(<GroupHeader label={labelPromise} itemCount={countPromise} />)

    // Initially shows skeletons
    expect(screen.getByRole("status")).toBeInTheDocument()

    // Wait for promises to resolve
    expect(await screen.findByText("Async Group")).toBeInTheDocument()
    expect(await screen.findByText("10")).toBeInTheDocument()
  })

  it("handles open/close state", () => {
    const onOpenChange = vi.fn()
    render(
      <GroupHeader
        label="Test Group"
        itemCount={5}
        open={false}
        onOpenChange={onOpenChange}
        showOpenChange
      />
    )

    const header = screen.getByText("Test Group").closest("div")
    fireEvent.click(header!)

    expect(onOpenChange).toHaveBeenCalledWith(true)
  })

  it("handles selection state", () => {
    const onSelectChange = vi.fn()
    render(
      <GroupHeader
        label="Test Group"
        itemCount={5}
        selectable
        select={false}
        onSelectChange={onSelectChange}
      />
    )

    const checkbox = screen.getByRole("checkbox")
    fireEvent.click(checkbox)

    expect(onSelectChange).toHaveBeenCalledWith(true)
  })

  it("handles indeterminate selection state", () => {
    render(
      <GroupHeader
        label="Test Group"
        itemCount={5}
        selectable
        select="indeterminate"
      />
    )

    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toHaveAttribute("data-state", "indeterminate")
  })

  it("applies custom className", () => {
    render(
      <GroupHeader label="Test Group" itemCount={5} className="custom-class" />
    )

    const header = screen.getByText("Test Group").closest("div")
    expect(header).toHaveClass("custom-class")
  })

  it("doesn't show counter when itemCount is undefined", async () => {
    const countPromise = Promise.resolve(undefined)
    render(<GroupHeader label="Test Group" itemCount={countPromise} />)

    // Wait for promise to resolve
    await vi.waitFor(() => {
      expect(screen.queryByRole("status")).not.toBeInTheDocument()
    })
  })
})

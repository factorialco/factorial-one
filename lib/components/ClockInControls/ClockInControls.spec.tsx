import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { ClockInControls } from "./ClockInControls"

describe("ClockInControls", () => {
  it("renders clocked out state", () => {
    render(<ClockInControls status="clocked-out" />)
    expect(screen.getByText("Clocked out")).toBeInTheDocument()
    expect(screen.getByText("Clock in")).toBeInTheDocument()
  })

  it("renders clocked in state", () => {
    render(<ClockInControls status="clocked-in" />)
    expect(screen.getByText("Clocked in")).toBeInTheDocument()
  })

  it("renders on break state", () => {
    render(<ClockInControls status="on-break" />)
    expect(screen.getByText("On a break")).toBeInTheDocument()
    expect(screen.getByText("Resume")).toBeInTheDocument()
  })

  it("shows remaining time text", () => {
    render(
      <ClockInControls
        status="clocked-in"
        remainingTimeText="Remaining time 04:39"
      />
    )
    expect(screen.getByText("Remaining time 04:39")).toBeInTheDocument()
  })

  it("shows overtime text", () => {
    render(
      <ClockInControls status="clocked-in" overtimeText="Overtime 00:17" />
    )
    expect(screen.getByText("Overtime 00:17")).toBeInTheDocument()
  })

  it("calls onClockIn when clock in button is clicked", () => {
    const onClockIn = vi.fn()
    render(<ClockInControls status="clocked-out" onClockIn={onClockIn} />)
    screen.getByText("Clock in").click()
    expect(onClockIn).toHaveBeenCalled()
  })
})

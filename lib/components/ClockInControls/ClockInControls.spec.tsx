import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { ClockInControls } from "./ClockInControls"

const defaultLabels = {
  clockedOut: "Clocked out",
  clockedIn: "Clocked in",
  onBreak: "On a break",
  clockIn: "Clock in",
  clockOut: "Clock out",
  break: "Break",
  resume: "Resume",
  remainingTime: "Remaining time",
  overtime: "Overtime",
}

describe("ClockInControls", () => {
  it("renders clocked out state when no data", () => {
    render(<ClockInControls labels={defaultLabels} />)
    expect(screen.getByText("Clocked out")).toBeInTheDocument()
    expect(screen.getByText("Clock in")).toBeInTheDocument()
  })

  it("renders clocked in state", () => {
    render(
      <ClockInControls
        labels={defaultLabels}
        data={[
          {
            from: new Date(),
            to: new Date(),
            variant: "clocked-in",
          },
        ]}
      />
    )
    expect(screen.getByText("Clocked in")).toBeInTheDocument()
  })

  it("renders break state", () => {
    render(
      <ClockInControls
        labels={defaultLabels}
        data={[
          {
            from: new Date(),
            to: new Date(),
            variant: "break",
          },
        ]}
      />
    )
    expect(screen.getByText("On a break")).toBeInTheDocument()
    expect(screen.getByText("Resume")).toBeInTheDocument()
  })

  it("shows remaining time text", () => {
    render(
      <ClockInControls
        labels={defaultLabels}
        data={[
          {
            from: new Date(),
            to: new Date(),
            variant: "clocked-in",
          },
        ]}
      />
    )
    expect(screen.getByText("Remaining time 04:39")).toBeInTheDocument()
  })

  it("shows overtime text", () => {
    render(
      <ClockInControls
        labels={defaultLabels}
        data={[
          {
            from: new Date(),
            to: new Date(),
            variant: "clocked-in",
          },
        ]}
      />
    )
    expect(screen.getByText("Overtime 00:17")).toBeInTheDocument()
  })

  it("calls onClockIn when clock in button is clicked", () => {
    const onClockIn = vi.fn()
    render(<ClockInControls labels={defaultLabels} onClockIn={onClockIn} />)
    screen.getByText("Clock in").click()
    expect(onClockIn).toHaveBeenCalled()
  })
})

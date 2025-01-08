import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { ClockInGraph } from "./ClockInGraph"

describe("ClockInGraph", () => {
  it("renders with default props", () => {
    render(<ClockInGraph />)
    expect(screen.getByText("00:00")).toBeInTheDocument()
  })

  it("renders with custom dates", () => {
    const startAt = new Date("2024-03-20T09:00:00")
    const endAt = new Date("2024-03-20T17:00:00")
    render(<ClockInGraph startAt={startAt} endAt={endAt} />)
    expect(screen.getByText("09:00")).toBeInTheDocument()
    expect(screen.getByText("17:00")).toBeInTheDocument()
  })
})

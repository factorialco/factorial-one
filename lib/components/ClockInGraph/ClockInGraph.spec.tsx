import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { ClockInGraph } from "./ClockInGraph"

describe("ClockInGraph", () => {
  it("renders with default props", () => {
    render(<ClockInGraph />)
    expect(screen.getByText("00:00")).toBeInTheDocument()
  })

  it("renders with custom dates", () => {
    const data = [
      {
        from: new Date("2024-03-20T09:00:00"),
        to: new Date("2024-03-20T17:00:00"),
        variant: "clocked-in" as const,
      },
    ]
    render(<ClockInGraph data={data} />)
    expect(screen.getByText("09:00")).toBeInTheDocument()
  })
})

import "@testing-library/jest-dom/vitest"
import { describe, expect, it } from "vitest"
import { zeroRender as render, screen } from "../../../testing/test-utils"
import { OneLane } from "../OneLane"

describe("OneLane Component", () => {
  it("renders without crashing", () => {
    render(<OneLane />)

    expect(screen.getByText("TODO")).toBeInTheDocument()
  })
})

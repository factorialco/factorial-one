import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { ListModal } from "./OneListModal"

describe("ListModal", () => {
  const defaultProps = {
    title: "Test Modal",
    isOpen: true,
    onClose: vi.fn(),
    children: <div>Test Content</div>,
  }

  it("renders when isOpen is true", () => {
    render(<ListModal {...defaultProps} />)
    expect(screen.getByText("Test Modal")).toBeInTheDocument()
    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  it("does not render when isOpen is false", () => {
    render(<ListModal {...defaultProps} isOpen={false} />)
    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument()
  })

  it("calls onClose when clicking overlay", () => {
    render(<ListModal {...defaultProps} />)
    fireEvent.click(screen.getByRole("presentation"))
    expect(defaultProps.onClose).toHaveBeenCalled()
  })

  it("calls onClose when clicking close button", () => {
    render(<ListModal {...defaultProps} />)
    fireEvent.click(screen.getByLabelText("Close modal"))
    expect(defaultProps.onClose).toHaveBeenCalled()
  })
})

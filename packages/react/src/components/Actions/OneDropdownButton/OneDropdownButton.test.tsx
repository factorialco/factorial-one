import "@testing-library/jest-dom"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import type { HTMLAttributes, SVGProps } from "react"
import React from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { IconType } from "../../Utilities/Icon"
import { OneDropdownButton } from "./OneDropdownButton"

type ButtonInternalProps = {
  label: string
  icon?: IconType
  onClick?: () => void
  appendButton?: React.ReactNode
} & HTMLAttributes<HTMLButtonElement>

type DropdownInternalProps = {
  children: React.ReactNode
  items: Array<{
    label: string
    value: string
    onClick: () => void
  }>
} & HTMLAttributes<HTMLDivElement>

// Mock the imported components
vi.mock("@/components/Actions/Button/internal.tsx", () => ({
  ButtonInternal: Object.assign(
    React.forwardRef<HTMLButtonElement, ButtonInternalProps>(
      ({ label, icon: Icon, onClick, appendButton, ...props }, ref) => (
        <button
          ref={ref}
          onClick={onClick}
          {...props}
          data-testid="dropdown-main-button"
        >
          {Icon && <Icon data-testid="button-icon" />}
          <span data-testid="dropdown-main-label">{label}</span>
          <div data-testid="button-append">{appendButton}</div>
        </button>
      )
    ),
    { displayName: "ButtonInternal" }
  ),
}))

vi.mock("@/experimental/Navigation/Dropdown/internal.tsx", () => ({
  DropdownInternal: Object.assign(
    React.forwardRef<HTMLDivElement, DropdownInternalProps>(
      ({ children, items, ...props }, ref) => (
        <div
          ref={ref}
          {...props}
          data-testid="dropdown"
          data-items={JSON.stringify(items)}
        >
          {children}
        </div>
      )
    ),
    { displayName: "DropdownInternal" }
  ),
}))

vi.mock("@/icons/app", () => ({
  ChevronDown: Object.assign(
    React.forwardRef<HTMLDivElement, SVGProps<SVGSVGElement>>((props, ref) => (
      <div ref={ref} data-testid="chevron-icon">
        ▼
      </div>
    )),
    { displayName: "ChevronDown" }
  ),
}))

describe("OneDropdownButton", () => {
  const openDropdown = async (user: ReturnType<typeof userEvent.setup>) => {
    user.click(screen.getByRole("combobox"))
    await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
  }

  const createMockIcon = () => {
    return React.forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
      (props, ref) => (
        <svg ref={ref} {...props}>
          <path d="M0 0h24v24H0z" />
        </svg>
      )
    )
  }

  const mockItems = [
    { value: "item1", label: "Item 1", icon: createMockIcon() },
    { value: "item2", label: "Item 2", icon: createMockIcon() },
    { value: "item3", label: "Item 3", icon: createMockIcon() },
  ]

  const mockOnClick = vi.fn()

  beforeEach(() => {
    mockOnClick.mockReset()
  })

  it("renders with default selection (first item)", () => {
    render(<OneDropdownButton items={mockItems} onClick={mockOnClick} />)

    expect(screen.getByTestId("dropdown-main-button")).toBeInTheDocument()
    expect(screen.getByTestId("dropdown-main-label")).toHaveTextContent(
      "Item 1"
    )
    expect(screen.getByTestId("dropdown")).toBeInTheDocument()
    expect(screen.getByTestId("chevron-icon")).toBeInTheDocument()
  })

  it("renders with provided value", () => {
    render(
      <OneDropdownButton
        items={mockItems}
        value="item2"
        onClick={mockOnClick}
      />
    )

    expect(screen.getByTestId("dropdown-main-label")).toHaveTextContent(
      "Item 2"
    )
  })

  it("passes dropdown items excluding the selected item", () => {
    render(
      <OneDropdownButton
        items={mockItems}
        value="item1"
        onClick={mockOnClick}
      />
    )

    const dropdownElement = screen.getByTestId("dropdown")
    const passedItems = JSON.parse(
      dropdownElement.getAttribute("data-items") || "[]"
    )

    expect(passedItems).toHaveLength(2)
    expect(passedItems[0].label).toBe("Item 2")
    expect(passedItems[1].label).toBe("Item 3")
    expect(
      passedItems.find((item: { label: string }) => item.label === "Item 1")
    ).toBeUndefined()
    expect(mockOnClick).not.toHaveBeenCalled()
  })

  it("calls onClick with correct values when button is clicked", async () => {
    const user = userEvent.setup()
    render(
      <OneDropdownButton
        items={mockItems}
        value="item2"
        onClick={mockOnClick}
      />
    )

    await user.click(screen.getByTestId("dropdown-main-button"))

    expect(mockOnClick).toHaveBeenCalledTimes(1)
    expect(mockOnClick).toHaveBeenCalledWith("item2", mockItems[1])
  })

  it.skip("changes selected value when dropdown item is clicked", async () => {
    const user = userEvent.setup()
    render(
      <OneDropdownButton
        items={mockItems}
        value="item1"
        onClick={mockOnClick}
      />
    )

    await openDropdown(user)

    userEvent.click(screen.getByText("Item 2"))

    // Now if we click the main button, it should use the new value
    await userEvent.click(screen.getByTestId("dropdown-main-button"))
    expect(mockOnClick).toHaveBeenCalledWith("item2", mockItems[1])
  })
})

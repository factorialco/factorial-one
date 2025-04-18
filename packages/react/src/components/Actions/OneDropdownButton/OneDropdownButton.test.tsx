import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { defaultTranslations, I18nProvider } from "../../../lib/providers/i18n"
import { IconType } from "../../Utilities/Icon"

import { beforeEach, describe, expect, it, vi } from "vitest"
import { OneDropdownButton } from "./OneDropdownButton"

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

// Mock the imported components
vi.mock("@/components/Actions/Button/internal.tsx", () => ({
  ButtonInternal: ({ label, icon: Icon, onClick, appendButton, ...props }) => (
    <>
      <button onClick={onClick} {...props}>
        {Icon && <Icon data-testid="button-icon" />}
        <span data-testid="button-label">{label}</span>
      </button>
      <div data-testid="button-append">{appendButton}</div>
    </>
  ),
}))

vi.mock("@/experimental/Navigation/Dropdown/internal.tsx", () => ({
  DropdownInternal: ({ children, items }) => (
    <div data-testid="dropdown" data-items={JSON.stringify(items)}>
      {children}
    </div>
  ),
}))

vi.mock("@/icons/app", () => ({
  ChevronDown: () => <div data-testid="chevron-icon">▼</div>,
}))

describe("OneDropdownButton", () => {
  const openDropdown = async (user: ReturnType<typeof userEvent.setup>) => {
    user.click(screen.getByRole("combobox"))

    await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
  }

  const mockIcons: Record<string, () => IconType> = {
    Icon1: () => (<div>Icon1</div>) as unknown as IconType,
    Icon2: () => (<div>Icon2</div>) as unknown as IconType,
    Icon3: () => (<div>Icon3</div>) as unknown as IconType,
  }

  const mockItems = [
    { value: "item1", label: "Item 1", icon: mockIcons.Icon1 },
    { value: "item2", label: "Item 2", icon: mockIcons.Icon2 },
    { value: "item3", label: "Item 3", icon: mockIcons.Icon3 },
  ]

  const mockOnClick = vi.fn()

  beforeEach(() => {
    mockOnClick.mockReset()
  })

  it("renders with default selection (first item)", () => {
    render(
      <TestWrapper>
        <OneDropdownButton items={mockItems} onClick={mockOnClick} />
      </TestWrapper>
    )

    expect(screen.getByTestId("button-main")).toBeInTheDocument()
    expect(screen.getByTestId("dropdown")).toBeInTheDocument()
    expect(screen.getByTestId("chevron-icon")).toBeInTheDocument()
  })

  it("renders with provided value", () => {
    render(
      <TestWrapper>
        <OneDropdownButton
          items={mockItems}
          value="item2"
          onClick={mockOnClick}
        />
      </TestWrapper>
    )

    expect(screen.getByTestId("button-main")).toBeInTheDocument()
  })

  it("passes dropdown items excluding the selected item", () => {
    render(
      <TestWrapper>
        <OneDropdownButton
          items={mockItems}
          value="item1"
          onClick={mockOnClick}
        />
      </TestWrapper>
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
      <TestWrapper>
        <OneDropdownButton
          items={mockItems}
          value="item2"
          onClick={mockOnClick}
        />
      </TestWrapper>
    )

    await user.click(screen.getByTestId("button-main"))

    expect(mockOnClick).toHaveBeenCalledTimes(1)
    expect(mockOnClick).toHaveBeenCalledWith("item2", mockItems[1])
  })

  it.skip("changes selected value when dropdown item is clicked", async () => {
    const user = userEvent.setup()
    render(
      <TestWrapper>
        <OneDropdownButton
          items={mockItems}
          value="item1"
          onClick={mockOnClick}
        />
      </TestWrapper>
    )

    await openDropdown(user)

    userEvent.click(screen.getByText("Item 2"))

    // Now if we click the main button, it should use the new value
    await userEvent.click(screen.getByTestId("button-main"))
    expect(mockOnClick).toHaveBeenCalledWith("item2", mockItems[1])
  })
})

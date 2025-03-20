import { Ai, Pencil } from "@/icons/app"
import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { ActionsDefinition } from "../actions"
import { ActionsDropdown } from "./Dropdown"

// Mock the imported components
vi.mock("@/components/Actions/Button", () => ({
  Button: ({ label, icon: Icon, ...props }) => (
    <button {...props} data-testid="button">
      {Icon && <Icon data-testid="button-icon" />}
      {!props.hideLabel && label}
    </button>
  ),
}))

vi.mock("@/experimental/Navigation/Dropdown", () => ({
  Dropdown: ({ children, items }) => (
    <div data-testid="dropdown" data-items={JSON.stringify(items)}>
      {children}
    </div>
  ),
}))

vi.mock("@/icons/app", () => ({
  Ellipsis: () => <div data-testid="ellipsis-icon">...</div>,
  Ai: () => <div>AI Icon</div>,
  Pencil: () => <div>Pencil Icon</div>,
}))

describe("ActionsDropdown", () => {
  type TestRecord = {
    id: string
    name: string
    canEdit: boolean
  }

  const mockItem: TestRecord = {
    id: "test-1",
    name: "Test Item",
    canEdit: true,
  }

  const mockActions: ActionsDefinition<TestRecord> = (item) => [
    {
      label: "View Details",
      icon: Ai,
      onClick: () => console.log(`Viewing ${item.name}`),
    },
    {
      label: "Edit Item",
      icon: Pencil,
      onClick: () => console.log(`Editing ${item.name}`),
      enabled: item.canEdit,
    },
  ]

  it("renders dropdown with actions when actions are available", () => {
    render(<ActionsDropdown item={mockItem} actions={mockActions} />)

    expect(screen.getByTestId("dropdown")).toBeInTheDocument()
    expect(screen.getByTestId("button")).toBeInTheDocument()
    expect(screen.getByTestId("ellipsis-icon")).toBeInTheDocument()

    // Verify items are passed to dropdown
    const dropdownElement = screen.getByTestId("dropdown")
    const passedItems = JSON.parse(
      dropdownElement.getAttribute("data-items") || "[]"
    )
    expect(passedItems).toHaveLength(2)
    expect(passedItems[0].label).toBe("View Details")
    expect(passedItems[1].label).toBe("Edit Item")
  })

  it("doesn't render when actions array is empty", () => {
    const emptyActions: ActionsDefinition<TestRecord> = () => []
    const { container } = render(
      <ActionsDropdown item={mockItem} actions={emptyActions} />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it("doesn't render when actions is undefined", () => {
    const undefinedActions: ActionsDefinition<TestRecord> = () => undefined
    const { container } = render(
      <ActionsDropdown item={mockItem} actions={undefinedActions} />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it("filters actions based on enabled property", () => {
    const mockItemWithoutEdit = { ...mockItem, canEdit: false }
    const actionsWithDisabled: ActionsDefinition<TestRecord> = (item) => [
      {
        label: "View Details",
        icon: Ai,
        onClick: () => console.log(`Viewing ${item.name}`),
      },
      {
        label: "Edit Item",
        icon: Pencil,
        onClick: () => console.log(`Editing ${item.name}`),
        enabled: item.canEdit, // This will be false
      },
    ]

    render(
      <ActionsDropdown
        item={mockItemWithoutEdit}
        actions={actionsWithDisabled}
      />
    )

    const dropdownElement = screen.getByTestId("dropdown")
    const passedItems = JSON.parse(
      dropdownElement.getAttribute("data-items") || "[]"
    )

    // Only one action should be enabled
    expect(passedItems).toHaveLength(1)
    expect(passedItems[0].label).toBe("View Details")
  })
})

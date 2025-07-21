import type { RecordType } from "@/hooks/datasource"
import "@testing-library/jest-dom/vitest"
import { fireEvent, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { Search } from "../../../../icons/app"
import { render, TestI18nProvider } from "../../../../test-utils"
import { Select } from "./index"
import type { SelectItemProps } from "./types"

const mockOptions: SelectItemProps<string, RecordType>[] = [
  {
    value: "option1",
    label: "Option 1",
    icon: Search,
    description: "Description 1",
    item: {
      id: "option1",
      name: "Option 1",
      description: "Description 1",
    },
  },
  {
    value: "option2",
    label: "Option 2",
    item: {
      id: "option2",
      name: "Option 2",
      description: "Description 2",
    },
  },
  { type: "separator" },
  {
    value: "option3",
    label: "Option 3",
    description: "Description 3",
    item: {
      id: "option3",
      name: "Option 3",
      description: "Description 3",
    },
  },
]

// Default props to satisfy InputFieldProps requirements
const defaultSelectProps = {
  error: undefined,
  icon: undefined,
  loading: false,
  clearable: false,
  labelIcon: undefined,
  size: "md" as const,
  disabled: false,
  placeholder: "",
}

describe("Select", () => {
  // Mock ResizeObserver
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))

  beforeEach(() => {
    vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(
      () => ({
        width: 120,
        height: 120,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,

        toJSON: () => {},
      })
    )
  })

  const openSelect = async (user: ReturnType<typeof userEvent.setup>) => {
    user.click(screen.getByRole("combobox"))

    // Wait for animation to finish
    await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
    const teaser = screen.getByRole("listbox")
    fireEvent.animationStart(teaser)
  }

  it("renders with placeholder", () => {
    render(
      <TestI18nProvider>
        <Select
          {...defaultSelectProps}
          label="Select an option"
          hideLabel
          options={mockOptions}
          onChange={() => {}}
          placeholder="Select an option"
        />
      </TestI18nProvider>
    )
    expect(screen.getByText("Select an option")).toBeInTheDocument()
  })

  it("shows options when clicked", async () => {
    const user = userEvent.setup()
    render(
      <TestI18nProvider>
        <Select
          {...defaultSelectProps}
          label="Select an option"
          hideLabel
          options={mockOptions}
          onChange={() => {}}
        />
      </TestI18nProvider>
    )

    await openSelect(user)

    expect(screen.getByText("Option 1")).toBeInTheDocument()
    expect(screen.getByText("Option 2")).toBeInTheDocument()
    expect(screen.getByText("Option 3")).toBeInTheDocument()
    expect(screen.getByText("Description 1")).toBeInTheDocument()
  })

  it("displays selected value", async () => {
    render(
      <TestI18nProvider>
        <Select
          {...defaultSelectProps}
          label="Select an option"
          hideLabel
          options={mockOptions}
          onChange={() => {}}
          value="option1"
        />
      </TestI18nProvider>
    )

    await waitFor(() => {
      expect(screen.getByText("Option 1")).toBeInTheDocument()
    })
  })

  it("renders search box when showSearchBox is true", async () => {
    const user = userEvent.setup()
    render(
      <TestI18nProvider>
        <Select
          {...defaultSelectProps}
          label="Select an option"
          hideLabel
          options={mockOptions}
          onChange={() => {}}
          showSearchBox
          searchBoxPlaceholder="Search options"
        />
      </TestI18nProvider>
    )

    await openSelect(user)

    expect(screen.getByText("Search options")).toBeInTheDocument()
  })

  it("filters options based on search input", async () => {
    const user = userEvent.setup()
    render(
      <TestI18nProvider>
        <Select
          {...defaultSelectProps}
          label="Select an option"
          hideLabel
          options={mockOptions}
          onChange={() => {}}
          showSearchBox
        />
      </TestI18nProvider>
    )

    await openSelect(user)
    await user.type(screen.getByRole("searchbox"), "1")

    expect(screen.getByText("Option 1")).toBeInTheDocument()
    await waitFor(() =>
      expect(screen.queryByText("Option 2")).not.toBeInTheDocument()
    )
  })

  it("shows empty message when no options match search", async () => {
    const user = userEvent.setup()
    render(
      <TestI18nProvider>
        <Select
          {...defaultSelectProps}
          label="Select an option"
          hideLabel
          options={mockOptions}
          onChange={() => {}}
          showSearchBox
          searchEmptyMessage="No results found"
        />
      </TestI18nProvider>
    )

    await openSelect(user)
    await user.type(screen.getByRole("searchbox"), "xyz")

    expect(screen.getByText("No results found")).toBeInTheDocument()
  })

  it("disables select when disabled prop is true", async () => {
    render(
      <TestI18nProvider>
        <Select
          {...defaultSelectProps}
          label="Select an option"
          hideLabel
          options={mockOptions}
          onChange={() => {}}
          disabled
        />
      </TestI18nProvider>
    )

    await waitFor(() => {
      expect(screen.getByRole("combobox")).toBeDisabled()
    })
  })

  it("renders with custom trigger", () => {
    render(
      <TestI18nProvider>
        <Select
          {...defaultSelectProps}
          label="Select an option"
          hideLabel
          options={mockOptions}
          onChange={() => {}}
        >
          <button>Custom Trigger</button>
        </Select>
      </TestI18nProvider>
    )

    expect(screen.getByText("Custom Trigger")).toBeInTheDocument()
  })

  it("calls onChange when option is selected with item", async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(
      <TestI18nProvider>
        <Select
          {...defaultSelectProps}
          label="Select an option"
          hideLabel
          options={mockOptions}
          onChange={handleChange}
        />
      </TestI18nProvider>
    )

    await openSelect(user)
    await user.click(screen.getByText("Option 1"))

    expect(handleChange).toHaveBeenCalledWith(
      "option1",
      {
        id: "option1",
        name: "Option 1",
        description: "Description 1",
      },
      expect.objectContaining({
        label: "Option 1",
        value: "option1",
        description: "Description 1",
      })
    )
  })

  it("calls onChange when option is selected without item", async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    const mockOptions: SelectItemProps<string>[] = [
      {
        value: "option1",
        label: "Option 1",
      },
      {
        value: "option2",
        label: "Option 2",
      },
      { type: "separator" },
      {
        value: "option3",
        label: "Option 3",
      },
    ]

    render(
      <TestI18nProvider>
        <Select
          {...defaultSelectProps}
          label="Select an option"
          hideLabel
          options={mockOptions}
          onChange={handleChange}
        />
      </TestI18nProvider>
    )

    await openSelect(user)
    await user.click(screen.getByText("Option 1"))

    expect(handleChange).toHaveBeenCalledWith(
      "option1",
      undefined,
      expect.objectContaining({
        label: "Option 1",
        value: "option1",
      })
    )
  })
})

import { Search } from "@/icons/app"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { Select } from "./index"
import type { SelectItemProps } from "./types"

const mockOptions: SelectItemProps<string>[] = [
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
  "separator" as const,
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

describe("Select", () => {
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

  it("renders with placeholder", () => {
    render(
      <Select
        options={mockOptions}
        onChange={() => {}}
        placeholder="Select an option"
      />
    )
    expect(screen.getByText("Select an option")).toBeInTheDocument()
  })

  it("shows options when clicked", async () => {
    const user = userEvent.setup()
    render(<Select options={mockOptions} onChange={() => {}} />)

    await user.click(screen.getByRole("combobox"))

    expect(screen.getByText("Option 1")).toBeInTheDocument()
    expect(screen.getByText("Option 2")).toBeInTheDocument()
    expect(screen.getByText("Option 3")).toBeInTheDocument()
    expect(screen.getByText("Description 1")).toBeInTheDocument()
  })

  it("displays selected value", () => {
    render(<Select options={mockOptions} onChange={() => {}} value="option1" />)

    expect(screen.getByText("Option 1")).toBeInTheDocument()
  })

  it("renders search box when showSearchBox is true", async () => {
    const user = userEvent.setup()
    render(
      <Select
        options={mockOptions}
        onChange={() => {}}
        showSearchBox
        searchBoxPlaceholder="Search options"
      />
    )

    await user.click(screen.getByRole("combobox"))

    expect(screen.getByPlaceholderText("Search options")).toBeInTheDocument()
  })

  it("filters options based on search input", async () => {
    const user = userEvent.setup()
    render(<Select options={mockOptions} onChange={() => {}} showSearchBox />)

    await user.click(screen.getByRole("combobox"))
    await user.type(screen.getByRole("searchbox"), "1")

    expect(screen.getByText("Option 1")).toBeInTheDocument()
    expect(screen.queryByText("Option 2")).not.toBeInTheDocument()
  })

  it("shows empty message when no options match search", async () => {
    const user = userEvent.setup()
    render(
      <Select
        options={mockOptions}
        onChange={() => {}}
        showSearchBox
        searchEmptyMessage="No results found"
      />
    )

    await user.click(screen.getByRole("combobox"))
    await user.type(screen.getByRole("searchbox"), "xyz")

    expect(screen.getByText("No results found")).toBeInTheDocument()
  })

  it("handles external search when externalSearch is true", async () => {
    const handleSearchChange = vi.fn()
    const user = userEvent.setup()

    render(
      <Select
        options={mockOptions}
        onChange={() => {}}
        showSearchBox
        externalSearch
        onSearchChange={handleSearchChange}
      />
    )

    await user.click(screen.getByRole("combobox"))

    await user.type(screen.getByRole("searchbox"), "test")

    expect(handleSearchChange).toHaveBeenCalledWith("test")
    // Should still show all options when externalSearch is true
    expect(screen.getByText("Option 1")).toBeInTheDocument()
    expect(screen.getByText("Option 2")).toBeInTheDocument()
  })

  it("disables select when disabled prop is true", () => {
    render(<Select options={mockOptions} onChange={() => {}} disabled />)

    expect(screen.getByRole("combobox")).toBeDisabled()
  })

  it("renders with custom trigger", () => {
    render(
      <Select options={mockOptions} onChange={() => {}}>
        <button>Custom Trigger</button>
      </Select>
    )

    expect(screen.getByText("Custom Trigger")).toBeInTheDocument()
  })

  it("calls onChange when option is selected with item", async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(<Select options={mockOptions} onChange={handleChange} />)

    await user.click(screen.getByRole("combobox"))
    await user.click(screen.getByText("Option 1"))

    expect(handleChange).toHaveBeenCalledWith("option1", {
      id: "option1",
      name: "Option 1",
      description: "Description 1",
    })
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
      "separator" as const,
      {
        value: "option3",
        label: "Option 3",
      },
    ]

    render(<Select options={mockOptions} onChange={handleChange} />)

    await user.click(screen.getByRole("combobox"))
    await user.click(screen.getByText("Option 1"))

    expect(handleChange).toHaveBeenCalledWith("option1", undefined)
  })
})

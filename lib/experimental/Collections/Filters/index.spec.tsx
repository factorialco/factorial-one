import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { render, screen, within } from "~/lib/test-utils"
import { Filters } from "."
import type { FiltersDefinition } from "./types"

const definition = {
  department: {
    type: "in",
    label: "Department",
    options: [
      { label: "Engineering", value: "engineering" },
      { label: "Design", value: "design" },
      { label: "Product", value: "product" },
    ],
  },
  search: {
    type: "search",
    label: "Search",
  },
} as const satisfies FiltersDefinition

describe("Filters", () => {
  describe("Filter State Management", () => {
    it("maintains temporary filter state separately from applied filters", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<Filters schema={definition} filters={{}} onChange={onChange} />)

      // Open filter popover
      await user.click(screen.getByRole("button", { name: /filters/i }))

      // Configure a filter but don't apply it
      await user.click(screen.getByText("Department"))
      await user.click(screen.getByText("Engineering"))

      // Verify onChange hasn't been called yet
      expect(onChange).not.toHaveBeenCalled()

      // Close without applying
      await user.click(screen.getByRole("button", { name: /cancel/i }))

      // Verify state wasn't persisted
      expect(onChange).not.toHaveBeenCalled()
    })

    it("preserves filter order based on first application", async () => {
      const onChange = vi.fn()

      // Render with initial state
      render(
        <Filters
          schema={definition}
          filters={{
            search: "test",
            department: ["engineering"],
          }}
          onChange={onChange}
        />
      )

      // Verify both filters are visible in the UI in the correct order
      const filterButtons = screen
        .getAllByRole("button")
        .filter((button: HTMLElement) => {
          const text = button.textContent
          return (
            text && (text.includes("Search:") || text.includes("Department:"))
          )
        })

      expect(filterButtons).toHaveLength(2)
      expect(filterButtons[0]).toHaveTextContent(/search:test/i)
      expect(filterButtons[1]).toHaveTextContent(/department:/i)
    })

    it("preserves filter order when reopening the filter panel", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<Filters schema={definition} filters={{}} onChange={onChange} />)

      // Open and configure filter
      await user.click(screen.getByRole("button", { name: /filters/i }))
      await user.click(screen.getByText("Department"))
      await user.click(screen.getByText("Engineering"))

      // Close without applying
      await user.click(screen.getByRole("button", { name: /cancel/i }))

      // Reopen filter panel and verify no options are selected
      await user.click(screen.getByRole("button", { name: /filters/i }))
      await user.click(screen.getByText("Department"))

      // Verify Engineering is not selected by checking it can be clicked again
      await user.click(screen.getByText("Engineering"))

      // Apply the filter and verify it works
      await user.click(screen.getByRole("button", { name: /apply filters/i }))
      expect(onChange).toHaveBeenCalledWith({
        department: ["engineering"],
      })
    })
  })

  describe("Filter Operations", () => {
    it("allows removing individual filters while preserving others", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Filters
          schema={definition}
          filters={{
            department: ["engineering"],
            search: "test",
          }}
          onChange={onChange}
        />
      )

      // Remove department filter
      const departmentFilter = screen
        .getByText(/department/i)
        .closest("button")!
      await user.click(within(departmentFilter).getByLabelText("Remove"))

      // Verify only department was removed
      expect(onChange).toHaveBeenCalledWith({
        search: "test",
      })
    })

    it("clears temporary filter state when reopening the filter panel", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<Filters schema={definition} filters={{}} onChange={onChange} />)

      // Open and configure filter
      await user.click(screen.getByRole("button", { name: /filters/i }))
      await user.click(screen.getByText("Department"))
      await user.click(screen.getByText("Engineering"))

      // Close without applying
      await user.click(screen.getByRole("button", { name: /cancel/i }))

      // Reopen filter panel
      await user.click(screen.getByRole("button", { name: /filters/i }))
      await user.click(screen.getByText("Department"))

      // Select Engineering again and apply
      await user.click(screen.getByText("Engineering"))
      await user.click(screen.getByRole("button", { name: /apply filters/i }))

      // Verify the filter was applied correctly
      expect(onChange).toHaveBeenCalledWith({
        department: ["engineering"],
      })
    })
  })
})

// Type safety tests
describe("Filters Type Safety", () => {
  it.skip("should enforce type safety in props", () => {
    // Valid usage - this should type check
    render(
      <Filters
        schema={
          {
            status: {
              type: "in",
              label: "Status",
              options: [
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ],
            },
          } as const
        }
        filters={{ status: ["active"] }}
        onChange={() => {}}
      />
    )

    render(
      <Filters
        schema={
          {
            status: {
              // @ts-expect-error - Invalid filter type in definition
              type: "invalid",
              label: "Status",
            },
          } as const
        }
        filters={{}}
        onChange={() => {}}
      />
    )

    render(
      <Filters
        schema={
          {
            // @ts-expect-error - Missing options in "in" filter
            status: {
              type: "in",
              label: "Status",
            },
          } as const
        }
        filters={{}}
        onChange={() => {}}
      />
    )

    render(
      <Filters
        schema={
          {
            status: {
              type: "in",
              label: "Status",
              options: [
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ],
            },
          } as const
        }
        // @ts-expect-error - Wrong value type for "in" filter (string instead of string[])
        filters={{ status: "active" }}
        onChange={() => {}}
      />
    )

    render(
      <Filters
        schema={
          {
            status: {
              type: "in",
              label: "Status",
              options: [
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ],
            },
          } as const
        }
        // @ts-expect-error - Invalid filter key in filters state
        filters={{ invalid: ["something"] }}
        onChange={() => {}}
      />
    )

    render(
      <Filters
        schema={
          {
            status: {
              type: "in",
              label: "Status",
              options: [
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ],
            },
          } as const
        }
        // @ts-expect-error - Invalid value in options array
        filters={{ status: ["nonexistent"] }}
        onChange={() => {}}
      />
    )

    render(
      <Filters
        schema={
          {
            // @ts-expect-error - Missing required options in "in" filter
            status: {
              type: "in",
              label: "Status",
            },
          } as const
        }
        filters={{}}
        onChange={() => {}}
      />
    )
  })
})

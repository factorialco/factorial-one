import type { Meta, StoryObj } from "@storybook/react"
import { useEffect, useState } from "react"
import { Search } from "../../../../icons/app"
import { Input } from "../../../../ui/input"
import type { FilterOption } from "../types"
import { EqFilter } from "./EqFilter"

const meta = {
  title: "Data Collection/Filters/EqFilter",
  component: EqFilter,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="border-f1-border-primary w-[300px] rounded-md border p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EqFilter>

export default meta

type Story = StoryObj<typeof EqFilter>

// Static options example
export const Default: Story = {
  args: {
    filter: {
      type: "eq",
      label: "Status",
      options: [
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" },
        { value: "pending", label: "Pending" },
      ],
    },
    value: "active",
    onChange: () => {},
  },
}

// No selection example
export const WithNoSelection: Story = {
  args: {
    filter: {
      type: "eq",
      label: "Status",
      options: [
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" },
        { value: "pending", label: "Pending" },
      ],
    },
    value: null,
    onChange: () => {},
  },
}

// Interactive example
const InteractiveExample = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>("active")

  return (
    <EqFilter
      filter={{
        type: "eq",
        label: "Status",
        options: [
          { value: "active", label: "Active" },
          { value: "inactive", label: "Inactive" },
          { value: "pending", label: "Pending" },
          { value: "archived", label: "Archived" },
        ],
      }}
      value={selectedValue}
      onChange={setSelectedValue}
    />
  )
}

export const Interactive: Story = {
  render: () => <InteractiveExample />,
  parameters: {
    docs: {
      description: {
        story:
          "Interactive example where you can select and deselect options. Selecting an option will deselect any previously selected option.",
      },
    },
  },
}

// Async options example with immediate resolution
const AsyncOptionsExample = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null)

  return (
    <EqFilter
      filter={{
        type: "eq",
        label: "Category",
        options: async () => {
          // Simulate API call with a small delay
          return new Promise<FilterOption<string>[]>((resolve) => {
            setTimeout(() => {
              resolve([
                { value: "electronics", label: "Electronics" },
                { value: "clothing", label: "Clothing" },
                { value: "books", label: "Books" },
                { value: "home", label: "Home & Kitchen" },
              ])
            }, 1500)
          })
        },
      }}
      value={selectedValue}
      onChange={setSelectedValue}
    />
  )
}

export const AsyncOptions: Story = {
  render: () => <AsyncOptionsExample />,
  parameters: {
    docs: {
      description: {
        story:
          "Example with asynchronously loaded options. A loading indicator will be displayed while options are being fetched.",
      },
    },
  },
}

// Async options with search example
const AsyncOptionsWithSearchExample = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [options, setOptions] = useState<FilterOption<string>[]>([])
  const [filteredOptions, setFilteredOptions] = useState<
    FilterOption<string>[]
  >([])
  const [isLoading, setIsLoading] = useState(true)

  // Load options
  useEffect(() => {
    const loadOptions = async () => {
      setIsLoading(true)
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const allOptions = [
          { value: "red", label: "Red" },
          { value: "blue", label: "Blue" },
          { value: "green", label: "Green" },
          { value: "yellow", label: "Yellow" },
          { value: "purple", label: "Purple" },
          { value: "orange", label: "Orange" },
          { value: "pink", label: "Pink" },
          { value: "black", label: "Black" },
          { value: "white", label: "White" },
          { value: "gray", label: "Gray" },
        ]

        setOptions(allOptions)
        setFilteredOptions(allOptions)
      } finally {
        setIsLoading(false)
      }
    }

    loadOptions()
  }, [])

  // Filter options based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredOptions(options)
    } else {
      const filtered = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredOptions(filtered)
    }
  }, [searchTerm, options])

  return (
    <div className="flex flex-col gap-3">
      <Input
        type="search"
        placeholder="Search colors..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="h-8 rounded"
        icon={Search}
        clearable
      />

      <EqFilter
        filter={{
          type: "eq",
          label: "Color",
          options: isLoading
            ? async () => {
                // This will show loading state
                await new Promise((resolve) => setTimeout(resolve, 500))
                return []
              }
            : filteredOptions,
        }}
        value={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  )
}

export const AsyncOptionsWithSearch: Story = {
  render: () => <AsyncOptionsWithSearchExample />,
  parameters: {
    docs: {
      description: {
        story:
          "This example demonstrates how to implement search functionality with async options. The search is performed client-side after the options are loaded.",
      },
    },
  },
}

// Async options example with error
const ErrorAsyncOptionsExample = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null)

  return (
    <EqFilter
      filter={{
        type: "eq",
        label: "Priority",
        options: async () => {
          // Simulate API error
          return new Promise<FilterOption<string>[]>((_, reject) => {
            setTimeout(() => {
              reject(new Error("Failed to fetch priorities"))
            }, 1000)
          })
        },
      }}
      value={selectedValue}
      onChange={setSelectedValue}
    />
  )
}

export const AsyncOptionsWithError: Story = {
  render: () => <ErrorAsyncOptionsExample />,
  parameters: {
    docs: {
      description: {
        story:
          "This example demonstrates error handling when fetching options fails.",
      },
    },
  },
}

// Empty options example
export const EmptyOptions: Story = {
  args: {
    filter: {
      type: "eq",
      label: "Priority",
      options: [],
    },
    value: null,
    onChange: () => {},
  },
}

// Example showing deselection
const DeselectExample = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>("medium")

  return (
    <div className="flex flex-col gap-3">
      <div className="text-sm text-f1-foreground-secondary">
        Selected: {selectedValue || "None"}
      </div>
      <EqFilter
        filter={{
          type: "eq",
          label: "Priority",
          options: [
            { value: "high", label: "High" },
            { value: "medium", label: "Medium" },
            { value: "low", label: "Low" },
          ],
        }}
        value={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  )
}

export const WithDeselection: Story = {
  render: () => <DeselectExample />,
  parameters: {
    docs: {
      description: {
        story:
          "This example shows how clicking an already selected option will deselect it, resulting in null value.",
      },
    },
  },
}

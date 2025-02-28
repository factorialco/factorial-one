import { Search } from "@/icons/app"
import { Input } from "@/ui/input"
import type { Meta, StoryObj } from "@storybook/react"
import { useEffect, useState } from "react"
import type { FilterOption } from "../types"
import { InFilter } from "./InFilter"

const meta = {
  title: "Data Collection/Filters/InFilter",
  component: InFilter,
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
} satisfies Meta<typeof InFilter>

export default meta

type Story = StoryObj<typeof InFilter>

// Static options example
export const Default: Story = {
  args: {
    filter: {
      type: "in",
      label: "Department",
      options: [
        { value: "engineering", label: "Engineering" },
        { value: "marketing", label: "Marketing" },
        { value: "sales", label: "Sales" },
        { value: "hr", label: "Human Resources" },
      ],
    },
    value: ["engineering"],
    onChange: () => {},
  },
}

// With selected values
export const WithSelectedValues: Story = {
  args: {
    filter: {
      type: "in",
      label: "Department",
      options: [
        { value: "engineering", label: "Engineering" },
        { value: "marketing", label: "Marketing" },
        { value: "sales", label: "Sales" },
        { value: "hr", label: "Human Resources" },
      ],
    },
    value: ["engineering", "marketing"],
    onChange: () => {},
  },
}

// Interactive example
const InteractiveExample = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([
    "engineering",
  ])

  return (
    <InFilter
      filter={{
        type: "in",
        label: "Department",
        options: [
          { value: "engineering", label: "Engineering" },
          { value: "marketing", label: "Marketing" },
          { value: "sales", label: "Sales" },
          { value: "hr", label: "Human Resources" },
        ],
      }}
      value={selectedValues}
      onChange={setSelectedValues}
    />
  )
}

export const Interactive: Story = {
  render: () => <InteractiveExample />,
}

// Async options example with immediate resolution
const AsyncOptionsExample = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  return (
    <InFilter
      filter={{
        type: "in",
        label: "Users",
        options: async () => {
          // Simulate API call with a small delay
          return new Promise<FilterOption<string>[]>((resolve) => {
            setTimeout(() => {
              resolve([
                { value: "user1", label: "John Doe" },
                { value: "user2", label: "Jane Smith" },
                { value: "user3", label: "Bob Johnson" },
                { value: "user4", label: "Alice Williams" },
              ])
            }, 5000)
          })
        },
      }}
      value={selectedValues}
      onChange={setSelectedValues}
    />
  )
}

export const AsyncOptions: Story = {
  render: () => <AsyncOptionsExample />,
}

// Async options with search example
const AsyncOptionsWithSearchExample = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])
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
          { value: "us", label: "United States" },
          { value: "ca", label: "Canada" },
          { value: "mx", label: "Mexico" },
          { value: "br", label: "Brazil" },
          { value: "ar", label: "Argentina" },
          { value: "uk", label: "United Kingdom" },
          { value: "fr", label: "France" },
          { value: "de", label: "Germany" },
          { value: "it", label: "Italy" },
          { value: "es", label: "Spain" },
          { value: "pt", label: "Portugal" },
          { value: "ru", label: "Russia" },
          { value: "cn", label: "China" },
          { value: "jp", label: "Japan" },
          { value: "in", label: "India" },
          { value: "au", label: "Australia" },
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
        placeholder="Search countries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="h-8 rounded"
        icon={Search}
        clearable
      />

      <InFilter
        filter={{
          type: "in",
          label: "Countries",
          options: isLoading
            ? async () => {
                // This will show loading state
                await new Promise((resolve) => setTimeout(resolve, 500))
                return []
              }
            : filteredOptions,
        }}
        value={selectedValues}
        onChange={setSelectedValues}
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

// Async options example with longer delay
const SlowAsyncOptionsExample = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  return (
    <InFilter
      filter={{
        type: "in",
        label: "Countries",
        options: async () => {
          // Simulate slow API call
          return new Promise<FilterOption<string>[]>((resolve) => {
            setTimeout(() => {
              resolve([
                { value: "us", label: "United States" },
                { value: "uk", label: "United Kingdom" },
                { value: "ca", label: "Canada" },
                { value: "au", label: "Australia" },
                { value: "jp", label: "Japan" },
              ])
            }, 3000)
          })
        },
      }}
      value={selectedValues}
      onChange={setSelectedValues}
    />
  )
}

export const SlowAsyncOptions: Story = {
  render: () => <SlowAsyncOptionsExample />,
}

// Async options example with error
const ErrorAsyncOptionsExample = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  return (
    <InFilter
      filter={{
        type: "in",
        label: "Products",
        options: async () => {
          // Simulate API error
          return new Promise<FilterOption<string>[]>((_, reject) => {
            setTimeout(() => {
              reject(new Error("Failed to fetch products"))
            }, 1000)
          })
        },
      }}
      value={selectedValues}
      onChange={setSelectedValues}
    />
  )
}

export const AsyncOptionsWithError: Story = {
  render: () => <ErrorAsyncOptionsExample />,
}

// Empty options example
export const EmptyOptions: Story = {
  args: {
    filter: {
      type: "in",
      label: "Categories",
      options: [],
    },
    value: [],
    onChange: () => {},
  },
}

// Sync function options example
export const SyncFunctionOptions: Story = {
  args: {
    filter: {
      type: "in",
      label: "Priorities",
      options: () => [
        { value: "high", label: "High" },
        { value: "medium", label: "Medium" },
        { value: "low", label: "Low" },
      ],
    },
    value: [],
    onChange: () => {},
  },
}

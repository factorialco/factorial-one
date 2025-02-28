import { Input } from "@/ui/input"
import { Label } from "@/ui/label"
import type { Meta, StoryObj } from "@storybook/react"
import { useEffect, useState } from "react"
import { Filters } from "."
import { Presets } from "../types"
import type { FiltersDefinition, FiltersState } from "./types"
import {
  deserializeFilters,
  getFiltersFromUrl,
  serializeFilters,
  updateUrlWithFilters,
} from "./utils"

const meta = {
  title: "Data Collection/Filters",
  component: Filters,
} satisfies Meta<typeof Filters>

export default meta

const sampleDefinition: FiltersDefinition = {
  department: {
    type: "in",
    label: "Department",
    options: [
      {
        value: "engineering",
        label: "Engineering",
      },
      { value: "marketing", label: "Marketing" },
      { value: "sales", label: "Sales" },
      { value: "hr", label: "Human Resources" },
      { value: "finance", label: "Finance" },
    ],
  },
  name: {
    type: "search",
    label: "Employee name",
  },
  manager: {
    type: "in",
    label: "Manager",
    options: [
      { value: "alice", label: "Alice Johnson" },
      { value: "bob", label: "Bob Smith" },
      { value: "carol", label: "Carol Williams" },
      { value: "dave", label: "Dave Brown" },
    ],
  },
  location: {
    type: "in",
    label: "Office location",
    options: [
      { value: "london", label: "London" },
      { value: "new_york", label: "New York" },
      { value: "tokyo", label: "Tokyo" },
      { value: "remote", label: "Remote" },
    ],
  },
  role: {
    type: "in",
    label: "Role",
    options: [
      { value: "engineer", label: "Software Engineer" },
      { value: "designer", label: "Product Designer" },
      { value: "manager", label: "Product Manager" },
      { value: "analyst", label: "Data Analyst" },
      { value: "marketer", label: "Marketing Specialist" },
      { value: "sales", label: "Sales Representative" },
      { value: "hr", label: "Human Resources Specialist" },
      { value: "finance", label: "Financial Analyst" },
      { value: "customer_support", label: "Customer Support Specialist" },
      { value: "legal", label: "Legal Counsel" },
      { value: "operations", label: "Operations Manager" },
      { value: "research", label: "Research Scientist" },
      { value: "product", label: "Product Manager" },
      { value: "security", label: "Security Specialist" },
      { value: "other", label: "Other" },
    ],
  },
}

// Define sample presets for use in stories
const samplePresets: Presets<typeof sampleDefinition> = [
  {
    label: "Engineering Team",
    filter: {
      department: ["engineering"],
      role: ["engineer", "manager"],
    },
  },
  {
    label: "Remote Workers",
    filter: {
      location: ["remote"],
    },
  },
  {
    label: "Alice's Team",
    filter: {
      manager: ["alice"],
    },
  },
]

const FiltersWithState = () => {
  const [filters, setFilters] = useState<FiltersState<typeof sampleDefinition>>(
    {}
  )

  return (
    <Filters
      schema={sampleDefinition}
      filters={filters}
      onChange={setFilters}
    />
  )
}

export const Interactive: StoryObj = {
  render: () => <FiltersWithState />,
}

// Example of pre-populated filters
const FiltersWithInitialState = () => {
  const [filters, setFilters] = useState<FiltersState<typeof sampleDefinition>>(
    {
      department: ["engineering", "marketing"],
      name: "John",
      manager: ["alice"],
    }
  )

  return (
    <Filters
      schema={sampleDefinition}
      filters={filters}
      onChange={setFilters}
    />
  )
}

export const WithInitialFilters: StoryObj = {
  render: () => <FiltersWithInitialState />,
}

// Example with presets
const FiltersWithPresets = () => {
  const [filters, setFilters] = useState<FiltersState<typeof sampleDefinition>>(
    {}
  )

  return (
    <Filters
      schema={sampleDefinition}
      filters={filters}
      presets={samplePresets}
      onChange={setFilters}
    />
  )
}

export const WithPresets: StoryObj = {
  render: () => <FiltersWithPresets />,
}

// Example with presets and initial filters
const FiltersWithPresetsAndInitialState = () => {
  const [filters, setFilters] = useState<FiltersState<typeof sampleDefinition>>(
    {
      department: ["engineering"],
      role: ["engineer"],
    }
  )

  return (
    <Filters
      schema={sampleDefinition}
      filters={filters}
      presets={samplePresets}
      onChange={setFilters}
    />
  )
}

export const WithPresetsAndInitialFilters: StoryObj = {
  render: () => <FiltersWithPresetsAndInitialState />,
}

type Story = StoryObj<typeof Filters>

export const Default: Story = {
  args: {
    schema: sampleDefinition,
    filters: {},
  },
}

/**
 * This example demonstrates how presets can be used to quickly apply
 * predefined filter combinations.
 */
export const WithPresetsArgs: Story = {
  args: {
    schema: sampleDefinition,
    filters: {},
    presets: samplePresets,
  },
}

/**
 * This example demonstrates how filters can be serialized to and from the URL.
 * Try selecting some filters and notice how the URL updates. You can copy this URL
 * and paste it in a new tab to restore the same filter state.
 */
export const WithUrlSerialization: Story = {
  args: {
    schema: sampleDefinition,
  },
  render: (args) => {
    const [filters, setFilters] = useState(() => {
      // On initial render, try to get filters from URL
      return getFiltersFromUrl() || {}
    })

    const [serializedValue, setSerializedValue] = useState(() =>
      serializeFilters(filters)
    )

    // Update URL and serialized value whenever filters change
    useEffect(() => {
      updateUrlWithFilters(filters)
      setSerializedValue(serializeFilters(filters))
    }, [filters])

    const handleSerializedValueChange = (value: string) => {
      setSerializedValue(value)
      try {
        const newFilters = deserializeFilters(value)
        setFilters(newFilters)
      } catch {
        // If the value is invalid, we just update the input but not the filters
      }
    }

    return (
      <div className="flex w-[600px] flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="serialized-filters">Serialized Filters</Label>
          <Input
            id="serialized-filters"
            value={serializedValue}
            onChange={(e) => handleSerializedValueChange(e.target.value)}
            className="font-mono text-sm"
          />
          <p className="text-muted-foreground text-sm">
            This field shows the serialized filter state that would normally be
            in the URL. You can modify it to see how the filters update.
          </p>
        </div>
        <Filters {...args} filters={filters} onChange={setFilters} />
      </div>
    )
  },
}

/**
 * This example demonstrates how presets can be used together with URL serialization.
 * Clicking on a preset will update both the filters and the URL.
 */
export const WithPresetsAndUrlSerialization: Story = {
  args: {
    schema: sampleDefinition,
  },
  render: (args) => {
    const [filters, setFilters] = useState(() => {
      // On initial render, try to get filters from URL
      return getFiltersFromUrl() || {}
    })

    const [serializedValue, setSerializedValue] = useState(() =>
      serializeFilters(filters)
    )

    // Update URL and serialized value whenever filters change
    useEffect(() => {
      updateUrlWithFilters(filters)
      setSerializedValue(serializeFilters(filters))
    }, [filters])

    const handleSerializedValueChange = (value: string) => {
      setSerializedValue(value)
      try {
        const newFilters = deserializeFilters(value)
        setFilters(newFilters)
      } catch {
        // If the value is invalid, we just update the input but not the filters
      }
    }

    return (
      <div className="flex w-[600px] flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="serialized-filters">Serialized Filters</Label>
          <Input
            id="serialized-filters"
            value={serializedValue}
            onChange={(e) => handleSerializedValueChange(e.target.value)}
            className="font-mono text-sm"
          />
          <p className="text-muted-foreground text-sm">
            This field shows the serialized filter state that would normally be
            in the URL. You can modify it to see how the filters update.
          </p>
        </div>
        <Filters
          {...args}
          filters={filters}
          presets={samplePresets}
          onChange={setFilters}
        />
      </div>
    )
  },
}

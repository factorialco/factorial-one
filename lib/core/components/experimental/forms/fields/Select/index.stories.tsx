import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { Select, SelectProps } from "./index.tsx"

import { Appearance, Circle, Desktop } from "@/icons/app"
import { useState } from "react"

// Wraps the Select component with a hook to show the selected value
const SelectWithHooks = (props: SelectProps<string>) => {
  const [localValue, setLocalValue] = useState(props.value)
  const [, setSearchValue] = useState("")
  // Sets a click handler to change the label's value
  const handleOnChange = (value: string) => {
    setLocalValue(value)
    console.log("value", value)
  }

  const handleOnSearchChange = (value: string) => {
    setSearchValue(value)
    console.log("searchValue", value)
  }

  return (
    <Select
      {...props}
      value={localValue}
      onChange={handleOnChange}
      onSearchChange={handleOnSearchChange}
    />
  )
}

const meta: Meta = {
  title: "Select",
  component: SelectWithHooks,
  parameters: {
    a11y: {
      skipCi: true,
    },
  },
  argTypes: {
    showSearchBox: {
      description:
        "Shows a search box. The component will filter the items by name and by description unless searchFunc will be in use",
    },
    externalSearch: {
      description:
        "Disable the internal filtering when the search box delegating the filtering in the parent. Useful for async data",
    },
    searchValue: {
      description: "Default value for the search box",
    },
    searchEmptyMessage: {
      description: "Message to show when filter returns no results",
    },
    searchBoxPlaceholder: {
      description: "Placeholder for the search box",
    },
  },
  args: {
    placeholder: "Select a theme",
    onChange: fn(),
    value: "light",
    options: [
      {
        value: "light",
        label: "Light",
        icon: Circle,
        description:
          "A bright and airy theme for a visually appealing interface",
      },
      {
        value: "dark",
        label: "Dark",
        icon: Appearance,
        description: "A sleek and modern theme for a sophisticated look",
      },
      {
        value: "system",
        label: "System",
        icon: Desktop,
        description: "A theme that adapts to the system's default appearance",
      },
      ...Array.from({ length: 10 }, (_, i) => ({
        value: `option-${i}`,
        label: `Option ${i}`,
        icon: Circle,
        description: `Description for option ${i}`,
      })),
    ],
    disabled: false,
    showSearchBox: false,
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithSearchBox: Story = {
  args: {
    showSearchBox: true,
    searchEmptyMessage: "No results found",
    searchBoxPlaceholder: "Search for a theme",
  },
}

export const WithCustomTrigger: Story = {
  args: {
    placeholder: "Choose a color",
    onChange: fn(),
    value: "red",
    options: [
      { value: "red", label: "Red" },
      { value: "green", label: "Green" },
      "separator",
      { value: "blue", label: "Blue" },
    ],
  },
  render: ({ value, options, placeholder, onChange, ...args }) => (
    <Select
      value={value}
      options={options}
      placeholder={placeholder}
      onChange={onChange}
      {...args}
    >
      <div className="flex h-24 w-24 items-center rounded-md border border-solid border-f1-border bg-f1-background-secondary p-2 text-center transition-colors hover:bg-f1-background-secondary-hover">
        {placeholder}
      </div>
    </Select>
  ),
}

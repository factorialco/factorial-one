import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import { Select, SelectProps } from "./index"

import { IconType } from "@/components/Utilities/Icon"
import { Appearance, Circle, Desktop, Plus } from "@/icons/app"
import { useState } from "react"

// Wraps the Select component with a hook to show the selected value
const SelectWithHooks = (props: SelectProps<string>) => {
  const [localValue, setLocalValue] = useState(props.value)
  const [, setSearchValue] = useState("")
  // Sets a click handler to change the label's value
  const handleOnChange = (value: string, item?: Record<string, string>) => {
    setLocalValue(value)
    console.log("selected value:", value, "- selected item:", item)
  }

  const handleOnSearchChange = (value: string) => {
    setSearchValue(value)
    console.log("searchValue", value)
  }

  return (
    <div className="w-48">
      <Select
        {...props}
        value={localValue}
        onChange={handleOnChange}
        onSearchChange={handleOnSearchChange}
      />
    </div>
  )
}

const icons: Record<string, IconType> = {
  light: Circle,
  dark: Appearance,
  system: Desktop,
}
const items = [
  {
    id: "light",
    name: "Light",
    description: "A bright and airy theme for a visually appealing interface",
    extra: 123,
  },
  {
    id: "dark",
    name: "Dark",
    description: "A sleek and modern theme for a sophisticated look",
    tag: "Paid",
  },
  {
    id: "system",
    name: "System",
    description: "A theme that adapts to the system's default appearance",
    tag: "Unpaid",
  },
]

const meta: Meta = {
  title: "Input/Select",
  component: SelectWithHooks,
  parameters: {
    a11y: {
      skipCi: true,
    },
    docs: {
      description: {
        component:
          "<p>Renders an select input field with a list of options to choose from.</p>" +
          "<p>The list is virtualized so can handle large amount of items</p>",
      },
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
    options: {
      description:
        "<p>Array of options to show in the select. Each option can its an object of type `SelectItemObject` or `'separator'`" +
        " to render a separator line</p>" +
        "```typescript\n" +
        "type SelectItemObject<T> = {\n" +
        "  value: T\n" +
        "  label: string\n" +
        "  description?: string\n" +
        "  avatar?: AvatarVariant\n" +
        "  icon?: IconType\n" +
        "  item?: unknown\n" +
        "}```",
    },
    onChange: {
      description:
        "Function to handle the change event. Returns the value of the selected option, and the item object if it exists",
    },
    actions: {
      description:
        "<p>List of action buttons that will be displayed at the bottom of the select dropdown. Each action should have a label, onClick handler, optional icon, and variant.</p>" +
        "```typescript\n" +
        "type Action = {\n" +
        "  label: string\n" +
        "  onClick: () => void\n" +
        "  icon?: IconType\n" +
        "  variant?: 'ghost' | 'critical'\n" +
        "}```",
    },
    loading: {
      control: "boolean",
      description:
        "Whether the select is loading. If true, the select will be disabled",
    },
  },
  args: {
    placeholder: "Select a theme",
    onChange: fn(),
    value: "light",
    options: items.map((item) => {
      return {
        value: item.id,
        label: item.name,
        icon: icons[item.id],
        description: item.description,
        tag: item.tag,
        item,
      }
    }),
    disabled: false,
    showSearchBox: false,
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof SelectWithHooks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Select a theme",
    value: undefined,
    placeholder: undefined,
  },
}

export const WithPreselectedValue: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: "Select a theme",
    value: "dark",
  },
}

export const WithPlaceholder: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: "Select a theme",
    placeholder: "Select a theme",
    value: undefined,
  },
}

export const WithHiddenLabel: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: "Select a theme",
    hideLabel: true,
  },
}

export const WithIcon: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: "Select a theme",
    icon: Desktop,
  },
}

export const WithLabelIcon: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: "Select a theme",
    labelIcon: Circle,
  },
}

export const SizeMd: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: "Select a theme",
    icon: Desktop,
    size: "md",
  },
}

export const WithError: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: "Select a theme",
    error: "Error message",
  },
}

export const WithClearable: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: "Select a theme",
    clearable: true,
  },
}

export const WithSearchBox: Story = {
  args: {
    showSearchBox: true,
    searchEmptyMessage: "No results found",
    searchBoxPlaceholder: "Search for a theme",
  },
}

export const WithActions: Story = {
  args: {
    showSearchBox: true,
    searchEmptyMessage: "No results found",
    searchBoxPlaceholder: "Search for a theme",
    actions: [
      {
        label: "Create new option",
        onClick: fn(),
        icon: Plus,
        variant: "ghost",
      },
    ],
  },
}

export const LargeList: Story = {
  args: {
    ...WithSearchBox.args,
    options: [
      ...(meta.args?.options || []),
      { type: "separator" },
      ...Array.from({ length: 10000 }, (_, i) => ({
        value: `option-${i}`,
        label: `Option ${i}`,
        icon: Circle,
        description: `Description for option ${i}`,
      })),
    ],
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
      { type: "separator" },
      { value: "blue", label: "Blue" },
    ],
  },
  render: ({ value, options, placeholder, onChange, ...args }) => (
    <Select
      label="Select a color"
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

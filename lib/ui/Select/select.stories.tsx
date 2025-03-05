import { Circle, Desktop } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { useMemo, useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./"

const SelectWithHooks = ({
  options,
  placeholder,
  ...props
}: {
  options: { value: string; label: string }[]
  placeholder?: string
}) => {
  const [value, setValue] = useState("")

  const items = useMemo(
    () =>
      options.map((option) => ({
        value: option.value,
        height: 40,
        item: <SelectItem value={option.value}>{option.label}</SelectItem>,
      })),
    [options]
  )

  return (
    <Select value={value} onValueChange={setValue} {...props}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent items={items}></SelectContent>
    </Select>
  )
}

const meta = {
  title: "Components/Select",
  component: SelectWithHooks,
  parameters: {
    a11y: {
      skipCi: true, // Todo add aria labels
    },
    layout: "centered",
    docs: {
      description: {
        component:
          "<p>The `Select` component the base component for the `Select` component. It provides the basic styling and " +
          "functionality for the select component.</p>" +
          "<p>The pop content contains the list of items, but it can also contain a `Top` and/or `Bottom` content fixed" +
          " (not scrollable). Useful for searchboxes, buttons, etc</p>" +
          "<p>You can pass the options items as children or via the `items` props. When the items are passed in the " +
          "items props of `SelectContent` the list is virtualized to manage  huge amount of items",
      },
    },
  },
  args: {
    placeholder: "Select an option",
    options: [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" },
      { value: "system", label: "System" },
    ],
  },
  tags: ["autodocs", "internal"],
} satisfies Meta<typeof SelectWithHooks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithTopContent: Story = {
  render: ({ options, placeholder }) => {
    const [value, setValue] = useState("")

    return (
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          top={<div className="border-b border-f1-border p-3">Top Content</div>}
        >
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

export const WithBottomContent: Story = {
  render: ({ options, placeholder }) => {
    const [value, setValue] = useState("")

    return (
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          bottom={
            <div className="border-t border-f1-border p-3">Bottom Content</div>
          }
        >
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

export const WithBothTopAndBottom: Story = {
  render: ({ options, placeholder }) => {
    const [value, setValue] = useState("")

    return (
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          top={
            <div className="border-b border-f1-border p-3">
              Search or Filter
            </div>
          }
          bottom={
            <div className="border-t border-f1-border p-3">
              <button className="w-full text-center text-f1-foreground-secondary hover:text-f1-foreground">
                Add New Option
              </button>
            </div>
          }
        >
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

export const VirtualizedItems: Story = {
  args: {
    options: Array.from({ length: 10000 }, (_, i) => ({
      value: `option-${i}`,
      label: `Option 123123 ${i}`,
    })),
  },
}

export const WithCustomTrigger: Story = {
  render: ({ options }) => {
    const [value, setValue] = useState("")

    return (
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger asChild>
          <button className="flex h-10 w-full items-center justify-between rounded-md border border-f1-border bg-f1-background px-3 text-f1-foreground">
            <span>{value || "Select theme..."}</span>
            <Circle className="h-4 w-4" />
          </button>
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <div className="flex items-center gap-2">
                <Desktop className="h-4 w-4" />
                {option.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

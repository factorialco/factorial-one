import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { Select } from "."

import { Appearance, Circle, Desktop } from "@/icons/app"

const meta: Meta = {
  title: "Select",
  component: Select,
  parameters: {
    a11y: {
      skipCi: true,
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
    ],
    disabled: false,
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

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

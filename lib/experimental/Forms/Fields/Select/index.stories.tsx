import type { Meta, StoryObj } from "@storybook/react"

import { fn } from "@storybook/test"
import { Select } from "."

const meta: Meta = {
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
      },
      {
        value: "dark",
        label: "Dark",
      },
      {
        value: "system",
        label: "System",
      },
    ],
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

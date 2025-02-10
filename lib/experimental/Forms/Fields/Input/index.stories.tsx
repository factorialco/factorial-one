import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "."

const meta = {
  component: Input,
  title: "Input",
  tags: ["autodocs", "experimental"],
  args: {
    type: "text",
    disabled: false,
    placeholder: "Placeholder text here",
  },
  argTypes: {
    type: {
      control: { type: "radio" },
    },
    value: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: "Placeholder text here",
  },
}

export const File: Story = {
  args: {
    type: "file",
    disabled: false,
    placeholder: "Placeholder text here",
  },
}

export const Password: Story = {
  args: {
    type: "password",
    disabled: false,
    placeholder: "Placeholder text here",
  },
}

export const Disabled: Story = {
  args: {
    type: "text",
    disabled: true,
    placeholder: "Placeholder text here",
  },
}

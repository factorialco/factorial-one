import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "./input"
import { Label } from "./label"

const meta = {
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    type: "text",
    disabled: false,
    placeholder: "Placeholder text here",
  },
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["text", "email", "password", "number", "file"],
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
  render: (props) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        <Label htmlFor="input">Label</Label>
        <Input id="input" {...props} />
      </div>
    )
  },
}

import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Checkbox } from "./index"

const meta = {
  component: Checkbox,
  tags: ["autodocs", "experimental"],
  title: "Checkbox",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title of the checkbox",
    },
    id: {
      control: "text",
      description: "The id of the checkbox",
    },
    checked: {
      control: "boolean",
      description: "The checked state of the checkbox",
    },
    onCheckedChange: {
      control: false,
      description:
        "The callback function that is called when the checkbox is checked",
    },
    indeterminate: {
      control: "boolean",
      description: "Whether the checkbox is indeterminate",
      defaultValue: { summary: false },
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
      defaultValue: { summary: false },
    },
    value: {
      control: "text",
      description: "The value of the checkbox",
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    title: "Checkbox",
  },
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <Checkbox {...args} checked={checked} onCheckedChange={setChecked} />
  },
}

export const Disabled: Story = {
  args: {
    title: "Disabled checkbox",
    disabled: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <Checkbox {...args} checked={checked} onCheckedChange={setChecked} />
  },
}

export const Indeterminate: Story = {
  args: {
    title: "Indeterminate checkbox",
    indeterminate: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <Checkbox {...args} checked={checked} onCheckedChange={setChecked} />
  },
}

export const Checked: Story = {
  args: {
    title: "Checked checkbox",
    checked: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState(true)
    return <Checkbox {...args} checked={checked} onCheckedChange={setChecked} />
  },
}

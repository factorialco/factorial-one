import { ComponentProps, useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { CheckboxField } from "./"

const meta = {
  component: CheckboxField,
  parameters: {
    layout: "centered",
    a11y: {
      disable: true,
    },
  },
  tags: ["autodocs"],
  args: {
    label: "This is a nice checkbox",
    checked: false,
    onChange: fn(),
  } satisfies ComponentProps<typeof CheckboxField>,
} satisfies Meta<typeof CheckboxField>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Interactive: Story = {
  render: (props) => {
    const [checked, setChecked] = useState(props.checked)

    const handleChange = (value: boolean) => {
      setChecked(value)
      props.onChange?.(value)
    }

    return (
      <CheckboxField
        {...props}
        checked={checked}
        onChange={(value) => handleChange(value)}
      />
    )
  },
}

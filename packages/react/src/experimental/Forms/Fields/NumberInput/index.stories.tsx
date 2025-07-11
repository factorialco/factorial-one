import type { Meta, StoryObj } from "@storybook/react-vite"

import { Placeholder } from "@/icons/app"
import { useState } from "react"
import { NumberInput } from "./index"

const meta = {
  render: (props) => <NumberInput key={JSON.stringify(props)} {...props} />,
  title: "Input/Number",
  component: NumberInput,
  tags: ["autodocs", "experimental"],
  args: {
    disabled: false,
    placeholder: "Placeholder text here",
    locale: "en-US",
  },
  argTypes: {
    value: {
      control: { type: "number" },
    },
    locale: {
      options: ["en-US", "es-ES", "pt-BR"],
      control: { type: "select" },
    },
    maxDecimals: {
      control: { type: "number" },
    },
  },
  parameters: {
    jsx: {
      filterProps: (_: unknown, propName: string) => propName !== "key",
    },
  },
} satisfies Meta<typeof NumberInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: "Label text here",
  },
  render: (props) => {
    const [value, setValue] = useState<number | null>(props.value ?? 1)
    console.log("value", value)
    return <NumberInput {...props} value={value} onChange={setValue} />
  },
}

export const WithStep: Story = {
  args: {
    label: "Label text here",
    min: 1,
    max: 5,
    step: 1,
  },
  render: (props) => {
    const [value, setValue] = useState<number | null>(props.value ?? 1)
    return <NumberInput {...props} value={value} onChange={setValue} />
  },
}

export const Disabled: Story = {
  args: {
    label: "Label text here",
    value: 32.5,
    disabled: true,
    locale: "es-ES",
  },
}

export const WithLabel: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: "Label text here",
  },
}

export const WithHiddenLabel: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: "Label text here",
    hideLabel: true,
  },
}

export const WithLabelIcon: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: "Label text here",
    labelIcon: Placeholder,
  },
}

export const WithIcon: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: "Label text here",
    icon: Placeholder,
  },
}

export const WithError: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: "Label text here",
    error: "Error message here",
  },
}

export const WithMaxLength: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: "Label text here",
    maxLength: 10,
  },
}

export const Clearable: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: "Label text here",
    clearable: true,
  },
}

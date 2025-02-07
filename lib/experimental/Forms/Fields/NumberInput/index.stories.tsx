import type { Meta, StoryObj } from "@storybook/react"

import { useState } from "react"
import { NumberInput } from "."

const meta = {
  render: (props) => <NumberInput key={JSON.stringify(props)} {...props} />,
  title: "NumberInput",
  tags: ["autodocs", "alpha"],
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
  args: {},
}

export const WithStep: Story = {
  args: {
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
    value: 32.5,
    disabled: true,
    locale: "es-ES",
  },
}

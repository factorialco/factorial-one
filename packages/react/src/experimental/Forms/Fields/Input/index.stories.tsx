import type { Meta, StoryObj } from "@storybook/react-vite"

import { Placeholder } from "@/icons/app"
import { Input } from "./index"

const meta = {
  component: Input,
  title: "Input/Text",
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
  parameters: {
    docs: {
      description: {
        component: "A text input field",
      },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: "Label text here",
    placeholder: "Placeholder text here",
  },
}

export const File: Story = {
  args: {
    label: "Label text here",
    type: "file",
    disabled: false,
    placeholder: "Placeholder text here",
  },
}

export const Password: Story = {
  args: {
    label: "Label text here",
    type: "password",
    disabled: false,
    placeholder: "Placeholder text here",
  },
}

export const Disabled: Story = {
  args: {
    label: "Label text here",
    type: "text",
    disabled: true,
    placeholder: "Placeholder text here",
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
    maxLength: 10,
    clearable: true,
  },
}

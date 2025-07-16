import { Placeholder } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Textarea } from "./index"

const meta = {
  title: "Input/TextArea",
  component: Textarea,
  tags: ["autodocs", "experimental"],
  args: {
    disabled: false,
    placeholder: "Placeholder text here",
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Label text here",
    placeholder: "Placeholder text here",
  },
}

export const Disabled: Story = {
  args: {
    label: "Label text here",
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
    clearable: true,
  },
}

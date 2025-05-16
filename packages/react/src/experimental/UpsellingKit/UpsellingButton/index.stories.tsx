import type { Meta, StoryObj } from "@storybook/react"
import { UpsellingButton } from "./index"

const meta = {
  title: "UpsellingKit/UpsellingButton",
  component: UpsellingButton,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/pZzg1KTe9lpKTSGPUZa8OJ/Web-components?node-id=41-1256&t=99GWQFvFLZtKW49N-4",
    },
  },
  tags: ["autodocs", "stable"],
  args: {
    onClick: () => {
      console.log("Button clicked")
    },
    label: "Request Information",
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the button",
    },
    label: {
      control: "text",
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show the Upsell icon (default: true)",
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    hideLabel: {
      control: "boolean",
      description: "Hide label and show only icon",
    },
    showConfirmation: {
      control: "boolean",
      description: "Whether to show the confirmation dialog after request",
    },
  },
} satisfies Meta<typeof UpsellingButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Request Information",
  },
}

export const WithoutIcon: Story = {
  args: {
    label: "Request Information",
    showIcon: false,
  },
}

export const WithoutConfirmation: Story = {
  args: {
    label: "Request Information",
    onRequest: async () => {
      // Simulamos una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 2000))
    },
    showConfirmation: true,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    label: "Processing...",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Request Information",
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <UpsellingButton {...args} size="sm" label="Request Information" />
      <UpsellingButton {...args} size="md" label="Request Information" />
      <UpsellingButton {...args} size="lg" label="Request Information" />
    </div>
  ),
}

export const SuccessExample: Story = {
  args: {
    label: "Request Information",
    onRequest: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // No lanza error → éxito
    },
    showConfirmation: true,
  },
}

export const ErrorExample: Story = {
  args: {
    label: "Request Information",
    onRequest: async () => {
      await new Promise((_, reject) =>
        setTimeout(() => reject(new Error("fail")), 1000)
      )
      // Lanza error → error
    },
    showConfirmation: true,
  },
}

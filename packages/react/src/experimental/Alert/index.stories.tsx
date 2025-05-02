import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { Alert } from "./index"

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "Home/Alert",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      description: "Main heading for the alert",
    },
    description: {
      description:
        "Secondary text to provide additional information for the alert",
    },
    action: {
      description: "Button configuration",
    },
    link: {
      description: "Link configuration",
    },
    variant: {
      description: "Variant for the alert composition",
    },
  },
  decorators: [
    (Story) => (
      <div className="p-2">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    title: "Your workspace includes up to 3 invoices.",
    description: "Start creating invoices: it’s free with your plan!",
    action: {
      label: "Request info",
      onClick: fn(),
    },
    link: {
      label: "See all invoices",
      href: "https://factorialhr.com/",
    },
    variant: "info",
  },
}

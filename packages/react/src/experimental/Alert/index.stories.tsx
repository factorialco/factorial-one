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
    buttonPrimaryLabel: "Request info",
    buttonSecondaryLabel: "See all invoices",
    variant: "info",
    onRequestClick: fn(),
    onSeeClick: fn(),
  },
}

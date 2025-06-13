import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import { OneAlert } from "./index"

const meta: Meta<typeof OneAlert> = {
  component: OneAlert,
  title: "Home/OneAlert",
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

type Story = StoryObj<typeof OneAlert>

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

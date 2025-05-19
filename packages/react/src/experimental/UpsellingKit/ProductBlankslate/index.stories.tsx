// packages/react/src/experimental/ProductBlankslate/ProductBlankslate.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import { ProductBlankslate } from "."

const meta: Meta<typeof ProductBlankslate> = {
  title: "UpsellingKit/ProductBlankslate",
  component: ProductBlankslate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "promote"],
      description: "ProductBlankslate purpose (activation or upselling)",
    },
    primaryAction: {
      control: "object",
      description: "ProductBlankslate primary action",
    },
    secondaryAction: {
      control: "object",
      description: "ProductBlankslate secondary action",
    },
    benefits: {
      control: { type: "object" },
      description: "List of benefits to display (array of strings)",
    },
  },
}

export default meta

type Story = StoryObj<typeof ProductBlankslate>

export const Default: Story = {
  args: {
    title:
      "Optimize and centralize your sales processes with quotes and invoices",
    image: "https://placehold.co/280x328", // 3:4 ratio
    variant: "promote",
    benefits: [
      "Track every sale from quote to final invoice.",
      "Customize with client data, taxes, and discounts.",
      "Link invoices to projects and manage billable amounts.",
      "Export easily to PDF or Excel in one click.",
    ],
    primaryAction: {
      label: "Request information",
      onClick: () => alert("Request information"),
    },
    secondaryAction: {
      label: "Learn more",
      onClick: () => alert("Read more"),
    },
  },
}

import * as Icon from "@/icons/app/"
import type { Meta, StoryObj } from "@storybook/react"
import { CompanyHeader } from "./index"

const meta: Meta<typeof CompanyHeader> = {
  component: CompanyHeader,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof CompanyHeader>

export const Default: Story = {
  args: {
    name: "Factorial",
    description: "HR Software to Empower Your Team",
    src: "https://github.com/factorialco.png",
    primaryAction: {
      label: "Edit",
      icon: Icon.Pencil,
      onClick: () => console.log("Edit clicked"),
    },
    secondaryActions: [
      {
        label: "Promote",
        onClick: () => console.log("Promote clicked"),
      },
      {
        label: "Remove",
        icon: Icon.Delete,
        variant: "critical",
        onClick: () => console.log("Remove clicked"),
      },
    ],
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
  },
}

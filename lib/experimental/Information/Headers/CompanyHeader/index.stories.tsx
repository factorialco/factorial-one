import * as Icon from "@/icons/app/"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { CompanyHeader } from "./index"

const meta: Meta<typeof CompanyHeader> = {
  title: "ResourceHeader/CompanyHeader",
  component: CompanyHeader,
  parameters: {
    layout: "padded",
  },
}

export default meta

type Story = StoryObj<typeof CompanyHeader>

export const Default: Story = {
  args: {
    name: "Factorial",
    description: "HR Software to Empower Your Team",
    src: "https://github.com/factorialco.png",
    secondaryActions: [
      {
        label: "Edit client",
        icon: Icon.Pencil,
        onClick: fn(),
      },
    ],
    metadata: [
      {
        label: "Legal name",
        value: { type: "text", content: "Everyday Software S.L." },
        actions: [
          {
            label: "Copy",
            icon: Icon.LayersFront,
            onClick: fn(),
          },
        ],
      },
      {
        label: "Tax identification number",
        value: { type: "text", content: "B-675254394" },
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

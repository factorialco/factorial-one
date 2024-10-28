import type { Meta, StoryObj } from "@storybook/react"

import { CompanyTag } from "."

const meta: Meta = {
  component: CompanyTag,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    companyName: "Factorial",
    companyImageUrl: "./factorial-logo.png",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCompanyTag: Story = {}

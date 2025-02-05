import type { Meta, StoryObj } from "@storybook/react"

import { CompanyTag } from "."

const meta: Meta = {
  component: CompanyTag,
  title: "Tag/CompanyTag",
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  args: {
    companyName: "Factorial",
    companyImageUrl:
      "https://avatars.githubusercontent.com/u/21041797?s=200&v=4",
    onClick: () => {},
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCompanyTag: Story = {}

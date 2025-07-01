import type { Meta, StoryObj } from "@storybook/react-vite"

import { CompanyTag } from "./index"

const meta: Meta = {
  component: CompanyTag,
  title: "Tag/CompanyTag",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  args: {
    companyName: "Factorial",
    companyImageUrl: "/avatars/factorial.png",
    onClick: () => {},
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCompanyTag: Story = {}

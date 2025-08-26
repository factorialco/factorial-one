import type { Meta, StoryObj } from "@storybook/react-vite"

import { TagCompany } from "./index"

const meta: Meta = {
  component: TagCompany,
  title: "Tag/TagCompany",
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

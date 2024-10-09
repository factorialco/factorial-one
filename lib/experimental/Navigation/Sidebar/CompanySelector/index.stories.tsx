import type { Meta, StoryObj } from "@storybook/react"
import { CompanySelector } from "./index"

const meta: Meta<typeof CompanySelector> = {
  title: "Navigation/Sidebar/CompanySelector",
  component: CompanySelector,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof CompanySelector>

const mockCompanies = [
  { id: "1", name: "Acme Corp" },
  { id: "2", name: "Globex Corporation" },
  { id: "3", name: "Initech" },
]

export const Default: Story = {
  args: {
    companies: mockCompanies,
    value: "1",
  },
}

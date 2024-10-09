import type { Meta, StoryObj } from "@storybook/react"
import { CompanySelector } from "./index"

const meta: Meta<typeof CompanySelector> = {
  component: CompanySelector,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="bg-f1-background-tertiary p-3">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CompanySelector>

const exampleCompanies = [
  { id: "1", name: "Factorial" },
  { id: "2", name: "Dazlog" },
  { id: "3", name: "Acme Corp" },
]

export const Default: Story = {
  args: {
    companies: exampleCompanies,
    selected: "1",
  },
}

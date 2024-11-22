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
  { id: "1", name: "Factorial", logo: "https://github.com/factorial.png" },
  { id: "2", name: "Dazlog", logo: "https://github.com/dazlog.png" },
  { id: "3", name: "Acme Corp" },
]

export const Default: Story = {
  args: {
    companies: exampleCompanies,
    selected: "1",
  },
}

export const SingleEntry: Story = {
  args: {
    companies: [exampleCompanies[0]],
    selected: "1",
  },
}

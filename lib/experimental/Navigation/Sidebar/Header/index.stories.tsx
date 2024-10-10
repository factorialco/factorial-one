import type { Meta, StoryObj } from "@storybook/react"
import { SidebarHeader } from "./index"

const meta: Meta<typeof SidebarHeader> = {
  component: SidebarHeader,
  tags: ["autodocs"],
} satisfies Meta<typeof SidebarHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    companies: [
      { id: "1", name: "Factorial" },
      { id: "2", name: "Dazlog" },
      { id: "3", name: "Acme Corp" },
    ],
    selected: "1",
    onChange: (company) => console.log("Selected company:", company),
    isExpanded: true,
  },
}

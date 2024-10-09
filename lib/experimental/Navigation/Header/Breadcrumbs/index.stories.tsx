import type { Meta, StoryObj } from "@storybook/react"
import Breadcrumbs from "./index"

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  args: {
    breadcrumbs: [
      { label: "Recruitment", href: "/recruitment", icon: "Recruitment" },
      { label: "Candidates", href: "/recruitment/candidates" },
      { label: "Dani Moreno" },
    ],
  },
}

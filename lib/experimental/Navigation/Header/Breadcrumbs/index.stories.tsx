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
    tree: [
      { label: "Recruitment", href: "/recruitment" },
      { label: "Candidates", href: "/candidates" },
      { label: "Juan Pérez" },
    ],
  },
}

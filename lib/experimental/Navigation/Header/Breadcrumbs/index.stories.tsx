import { Documents, Recruitment } from "@/icons/modules"
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
      { label: "Recruitment", href: "/recruitment", icon: Recruitment },
      { label: "Candidates", href: "/recruitment/candidates" },
      { label: "Dani Moreno" },
    ],
  },
}

export const LongBreadcrumbs: Story = {
  args: {
    breadcrumbs: [
      { label: "Documents", href: "/", icon: Documents },
      { label: "Employee Documents", href: "/documents" },
      { label: "Human Resources", href: "/documents/hr" },
      { label: "Recruitment", href: "/documents/hr/recruitment" },
      { label: "Candidates", href: "/documents/hr/recruitment/candidates" },
      {
        label: "Dani Moreno",
        href: "/dani-moreno",
      },
      {
        label: "Applications",
        href: "/dani-moreno/applications",
      },
      {
        label: "Interviews",
        href: "/dani-moreno/applications/interviews",
      },
    ],
  },
}

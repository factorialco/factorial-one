import EllipsisHorizontal from "@/icons/EllipsisHorizontal"
import Settings from "@/icons/Settings"

import type { Meta, StoryObj } from "@storybook/react"
import { PageHeader } from "."

const meta = {
  component: PageHeader,
  tags: ["autodocs"],
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    module: {
      name: "Recruitment",
      href: "/recruitment",
      icon: "Recruitment",
    },
    breadcrumbs: [
      { label: "Candidates", href: "/recruitment/candidates" },
      { label: "Dani Moreno" },
    ],
    actions: [
      {
        label: "Settings",
        icon: Settings,
        onClick: () => console.log("Settings clicked"),
      },
      {
        label: "More options",
        icon: EllipsisHorizontal,
        onClick: () => console.log("More clicked"),
      },
    ],
  },
}

export const FirstLevel: Story = {
  args: {
    module: {
      name: "Recruitment",
      href: "/recruitment",
      icon: "Recruitment",
    },
  },
}

export const LongBreadcrumbs: Story = {
  args: {
    module: {
      name: "Documents",
      href: "/documents",
      icon: "Documents",
    },
    breadcrumbs: [
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
    actions: [
      {
        label: "Settings",
        icon: Settings,
        onClick: () => console.log("Settings clicked"),
      },
      {
        label: "More options",
        icon: EllipsisHorizontal,
        onClick: () => console.log("More clicked"),
      },
    ],
  },
}

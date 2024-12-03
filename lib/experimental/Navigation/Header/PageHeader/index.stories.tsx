import EllipsisHorizontal from "@/icons/app/EllipsisHorizontal"
import Settings from "@/icons/app/Settings"

import { Documents, Recruitment } from "@/icons/modules"
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
      icon: Recruitment,
    },
    breadcrumbs: [
      { label: "Candidates", href: "/recruitment/candidates" },
      { label: "Dani Moreno" },
    ],
    actions: [
      {
        label: "Settings",
        icon: Settings,
        href: "/recruitment/settings",
      },
      {
        label: "More options",
        icon: EllipsisHorizontal,
        actions: [
          {
            label: "Profile",
            href: "/recruitment/profile",
          },
          {
            label: "Whatever",
            href: "/whatever",
          },
        ],
      },
    ],
  },
}

export const FirstLevel: Story = {
  args: {
    module: {
      name: "Recruitment",
      href: "/recruitment",
      icon: Recruitment,
    },
  },
}

export const FirstLevelWithTag: Story = {
  args: {
    module: {
      name: "Recruitment",
      href: "/recruitment",
      icon: Recruitment,
    },
    statusTag: {
      text: "Published",
      variant: "positive",
    },
  },
}

export const FirstLevelWithTagAndActions: Story = {
  args: {
    module: {
      name: "Documents",
      href: "/documents",
      icon: Recruitment,
    },
    statusTag: {
      text: "Published",
      variant: "positive",
    },
    actions: [
      {
        label: "Settings",
        icon: Settings,
        href: "/recruitment/settings",
      },
    ],
  },
}

const StatusTag = () => {
  return <span>This is custom tag</span>
}

export const FirstLevelWithCustomStatus: Story = {
  args: {
    module: {
      name: "Documents",
      href: "/documents",
      icon: Recruitment,
    },
    statusComponent: <StatusTag />,
  },
}

export const LongBreadcrumbs: Story = {
  args: {
    module: {
      name: "Documents",
      href: "/documents",
      icon: Documents,
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
        href: "/recruitment/settings",
      },
      {
        label: "More options",
        icon: EllipsisHorizontal,
        href: "/recruitment/settings",
      },
    ],
  },
}

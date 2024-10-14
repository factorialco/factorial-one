import EllipsisHorizontal from "@/icons/EllipsisHorizontal"
import Settings from "@/icons/Settings"
import { action } from "@storybook/addon-actions"

import type { Meta, StoryObj } from "@storybook/react"
import Header from "."

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Header>

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
    menu: {
      show: true,
      onClick: () => console.log("Menu clicked"),
    },
  },
}

export const FirstLevel: Story = {
  args: {
    module: {
      name: "Recruitment",
      href: "/recruitment",
      icon: "Recruitment",
    },
    menu: {
      show: true,
      onClick: () => console.log("Menu clicked"),
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
    menu: {
      show: true,
      onClick: () => console.log("Menu clicked"),
    },
  },
}

export const WithNavigation: Story = {
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
        label: "More options",
        icon: EllipsisHorizontal,
        onClick: action("More clicked"),
      },
    ],
    menu: {
      show: false,
      onClick: action("Menu clicked"),
    },
    navigation: {
      current: 3,
      total: 10,
      onPrevious: action("Previous clicked"),
      onNext: action("Next clicked"),
    },
  },
}

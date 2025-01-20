import { Documents, Recruitment } from "@/icons/modules"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
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
      {
        id: "recruitment",
        label: "Recruitment",
        href: "/recruitment",
        icon: Recruitment,
      },
      {
        id: "candidates",
        label: "Candidates",
        href: "/recruitment/candidates",
      },
      { id: "dani-moreno", label: "Dani Moreno" },
    ],
  },
}

export const LoadingLastItem: Story = {
  args: {
    breadcrumbs: [
      {
        id: "recruitment",
        label: "Recruitment",
        href: "/recruitment",
        icon: Recruitment,
      },
      {
        id: "candidates",
        label: "Candidates",
        href: "/recruitment/candidates",
      },
      { id: "loading", label: "Loading", loading: true },
    ],
  },
}

export const LoadingLastTwoItems: Story = {
  args: {
    breadcrumbs: [
      {
        id: "recruitment",
        label: "Recruitment",
        href: "/recruitment",
        icon: Recruitment,
      },
      { id: "loading-1", label: "Loading", loading: true },
      { id: "loading-2", label: "Loading", loading: true },
    ],
  },
}

export const LongBreadcrumbs: Story = {
  args: {
    breadcrumbs: [
      { id: "documents", label: "Documents", href: "/", icon: Documents },
      {
        id: "employee-documents",
        label: "Employee Documents",
        href: "/documents",
      },
      {
        id: "human-resources",
        label: "Human Resources",
        href: "/documents/hr",
      },
      {
        id: "recruitment",
        label: "Recruitment",
        href: "/documents/hr/recruitment",
      },
      {
        id: "candidates",
        label: "Candidates",
        href: "/documents/hr/recruitment/candidates",
      },
      {
        id: "dani-moreno",
        label: "Dani Moreno",
        href: "/dani-moreno",
      },
      {
        id: "applications",
        label: "Applications",
        href: "/dani-moreno/applications",
      },
      {
        id: "interviews",
        label: "Interviews",
        href: "/dani-moreno/applications/interviews",
      },
    ],
  },
}

export const Interactive: Story = {
  render: () => {
    const [showLast, setShowLast] = useState(true)

    const baseBreadcrumbs = [
      {
        id: "recruitment",
        label: "Recruitment",
        href: "/recruitment",
        icon: Recruitment,
      },
      {
        id: "candidates",
        label: "Candidates",
        href: "/recruitment/candidates",
      },
    ]

    const breadcrumbs = showLast
      ? [...baseBreadcrumbs, { id: "dani-moreno", label: "Dani Moreno" }]
      : baseBreadcrumbs

    return (
      <div className="space-y-4">
        <button
          onClick={() => setShowLast((prev) => !prev)}
          className="rounded-md bg-f1-background-secondary px-4 py-2 text-sm font-medium text-f1-foreground hover:bg-f1-background-secondary/80"
        >
          {showLast ? "Remove Last Item" : "Add Last Item"}
        </button>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
    )
  },
}

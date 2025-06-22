import { Documents, Recruitment } from "@/icons/modules"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Button } from "../../../../ui/button"
import { Breadcrumbs, BreadcrumbsProps } from "./index"

const meta: Meta<typeof Breadcrumbs> = {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs", "experimental"],
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

export const WithSelectBreadcrumb: Story = {
  args: {
    breadcrumbs: [
      {
        id: "recruitment",
        label: "Recruitment",
        href: "/recruitment",
        icon: Recruitment,
      },
      {
        id: "offers",
        label: "Offers",
        href: "/offers",
      },
      {
        id: "my-entity",
        type: "select",
        searchbox: true,
        options: Array.from({ length: 10 }, (_, idx) => ({
          value: idx.toString(),
          label: `Offer ${idx}`,
        })),
        label: `Offer 1`,
        value: "1",
        onChange: (value) => {
          console.log("WithSelectBreadcrumb value", value)
        },
      },
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
    const recruitmentBreadcrumbs: BreadcrumbsProps["breadcrumbs"] = [
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
      {
        id: "dani-moreno",
        label: "Dani Moreno",
        href: "/recruitment/candidates/dani-moreno",
      },
      {
        id: "applications",
        label: "Applications",
        href: "/recruitment/candidates/dani-moreno/applications",
      },
    ]

    const documentsBreadcrumbs: BreadcrumbsProps["breadcrumbs"] = [
      {
        id: "documents",
        label: "Documents",
        href: "/documents",
        icon: Documents,
      },
      {
        id: "employee-documents",
        label: "Employee Documents",
        href: "/documents/employee",
      },
      {
        id: "contracts",
        label: "Contracts",
        href: "/documents/employee/contracts",
      },
      {
        id: "templates",
        label: "Templates",
        href: "/documents/employee/contracts/templates",
      },
    ]

    const [currentSection, setCurrentSection] = useState<
      "recruitment" | "documents"
    >("recruitment")
    const [breadcrumbs, setBreadcrumbs] = useState<
      BreadcrumbsProps["breadcrumbs"]
    >(recruitmentBreadcrumbs)

    const handleAdd = () => {
      const sourceBreadcrumbs =
        currentSection === "recruitment"
          ? recruitmentBreadcrumbs
          : documentsBreadcrumbs
      if (breadcrumbs.length < sourceBreadcrumbs.length) {
        setBreadcrumbs((prev) => [...prev, sourceBreadcrumbs[prev.length]])
      }
    }

    const handleRemove = () => {
      setBreadcrumbs((prev) => prev.slice(0, -1))
    }

    const handleSwitch = () => {
      const newSection =
        currentSection === "recruitment" ? "documents" : "recruitment"
      setCurrentSection(newSection)
      setBreadcrumbs(
        newSection === "recruitment"
          ? recruitmentBreadcrumbs
          : documentsBreadcrumbs
      )
    }

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button
            onClick={handleAdd}
            disabled={
              breadcrumbs.length >=
              (currentSection === "recruitment"
                ? recruitmentBreadcrumbs.length
                : documentsBreadcrumbs.length)
            }
            variant="outline"
          >
            Add Breadcrumb
          </Button>
          <Button
            onClick={handleRemove}
            disabled={breadcrumbs.length <= 1}
            variant="outline"
          >
            Remove Breadcrumb
          </Button>
          <Button onClick={handleSwitch} variant="outline">
            Switch Section
          </Button>
        </div>
        <div
          className="flex w-full items-center"
          data-testid="breadcrumbs-container"
        >
          <Breadcrumbs key={currentSection} breadcrumbs={breadcrumbs} />
        </div>
      </div>
    )
  },
}

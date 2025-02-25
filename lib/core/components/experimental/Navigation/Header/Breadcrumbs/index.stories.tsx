import { Documents, Recruitment } from "@/icons/modules"
import { Button } from "@/core/internal/button.tsx"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, waitFor, within } from "@storybook/test"
import { useState } from "react"
import Breadcrumbs, { BreadcrumbItemType } from "./index.tsx"

const meta: Meta<typeof Breadcrumbs> = {
  title: "Header/Breadcrumbs",
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

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const Interactive: Story = {
  render: () => {
    const recruitmentBreadcrumbs: BreadcrumbItemType[] = [
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

    const documentsBreadcrumbs: BreadcrumbItemType[] = [
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
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItemType[]>(
      recruitmentBreadcrumbs
    )

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Initial state - full Recruitment breadcrumbs
    await waitFor(() => {
      expect(canvas.getByText("Recruitment")).toBeInTheDocument()
      expect(canvas.getByText("Candidates")).toBeInTheDocument()
      expect(canvas.getByText("Dani Moreno")).toBeInTheDocument()
      expect(canvas.getByText("Applications")).toBeInTheDocument()
    })

    // Remove some items
    const removeButton = canvas.getByText("Remove Breadcrumb")
    await userEvent.click(removeButton)
    await waitFor(() => {
      expect(canvas.queryByText("Applications")).not.toBeInTheDocument()
    })
    await sleep(500)

    await userEvent.click(removeButton)
    await waitFor(() => {
      expect(canvas.queryByText("Dani Moreno")).not.toBeInTheDocument()
    })
    await sleep(500)

    // Add items back
    const addButton = canvas.getByText("Add Breadcrumb")
    await userEvent.click(addButton)
    await waitFor(() => {
      expect(canvas.getByText("Dani Moreno")).toBeInTheDocument()
    })
    await sleep(500)

    // Switch to Documents section
    const switchButton = canvas.getByText("Switch Section")
    await userEvent.click(switchButton)

    // Verify full Documents section loaded
    await waitFor(() => {
      expect(canvas.getByText("Documents")).toBeInTheDocument()
      expect(canvas.getByText("Employee Documents")).toBeInTheDocument()
      expect(canvas.getByText("Contracts")).toBeInTheDocument()
      expect(canvas.getByText("Templates")).toBeInTheDocument()
    })
    await sleep(500)

    // Remove some items from Documents
    await userEvent.click(removeButton)
    await userEvent.click(removeButton)
    await waitFor(() => {
      expect(canvas.queryByText("Templates")).not.toBeInTheDocument()
      expect(canvas.queryByText("Contracts")).not.toBeInTheDocument()
    })
    await sleep(500)

    // Switch back to Recruitment
    await userEvent.click(switchButton)
    await waitFor(() => {
      // Should show full Recruitment breadcrumbs again
      expect(canvas.getByText("Recruitment")).toBeInTheDocument()
      expect(canvas.getByText("Candidates")).toBeInTheDocument()
      expect(canvas.getByText("Dani Moreno")).toBeInTheDocument()
      expect(canvas.getByText("Applications")).toBeInTheDocument()
    })
  },
}

import { Documents, Recruitment } from "@/icons/modules"
import { Button } from "@/ui/button"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, waitFor, within } from "@storybook/test"
import { useState } from "react"
import Breadcrumbs, { BreadcrumbItemType } from "./index"

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

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const Interactive: Story = {
  render: () => {
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItemType[]>([
      {
        id: "recruitment",
        label: "Recruitment",
        href: "/recruitment",
        icon: Recruitment,
      },
    ])

    const additionalItems: BreadcrumbItemType[] = [
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

    const handleAdd = () => {
      setBreadcrumbs((prev) => [...prev, additionalItems[prev.length - 1]])
    }

    const handleRemove = () => {
      setBreadcrumbs((prev) => prev.slice(0, -1))
    }

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button
            onClick={handleAdd}
            disabled={breadcrumbs.length >= 4}
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
        </div>
        <div
          className="flex w-full items-center"
          data-testid="breadcrumbs-container"
        >
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Initial state - just Recruitment
    await waitFor(() => {
      expect(canvas.getByText("Recruitment")).toBeInTheDocument()
    })

    // Add and check each breadcrumb
    const addButton = canvas.getByText("Add Breadcrumb")

    // Add Candidates
    await userEvent.click(addButton)
    await waitFor(() => {
      expect(canvas.getByText("Candidates")).toBeInTheDocument()
    })
    await sleep(500)

    // Add Dani Moreno
    await userEvent.click(addButton)
    await waitFor(() => {
      expect(canvas.getByText("Dani Moreno")).toBeInTheDocument()
    })
    await sleep(500)

    // Add Applications
    await userEvent.click(addButton)
    await waitFor(() => {
      expect(canvas.getByText("Applications")).toBeInTheDocument()
    })
    await sleep(500)

    // Remove breadcrumbs and verify
    const removeButton = canvas.getByText("Remove Breadcrumb")

    // Remove Applications
    await userEvent.click(removeButton)
    await waitFor(() =>
      expect(canvas.queryByText("Applications")).not.toBeInTheDocument()
    )
    await sleep(500)

    // Remove Dani Moreno
    await userEvent.click(removeButton)
    await waitFor(() =>
      expect(canvas.queryByText("Dani Moreno")).not.toBeInTheDocument()
    )
    await sleep(500)

    // Check final state
    await waitFor(() => {
      expect(canvas.getByText("Recruitment")).toBeInTheDocument()
      expect(canvas.getByText("Candidates")).toBeInTheDocument()
    })
  },
}

export const SingleLevelTransition: Story = {
  render: () => {
    const [currentSection, setCurrentSection] = useState<
      "recruitment" | "documents"
    >("recruitment")
    const [isLoading, setIsLoading] = useState(false)

    const sections = {
      recruitment: {
        id: "recruitment",
        label: "Recruitment",
        href: "/recruitment",
        icon: Recruitment,
      },
      documents: {
        id: "documents",
        label: "Documents",
        href: "/documents",
        icon: Documents,
      },
    }

    const handleSwitch = async () => {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setCurrentSection((current) =>
        current === "recruitment" ? "documents" : "recruitment"
      )
      setIsLoading(false)
    }

    return (
      <div className="space-y-4">
        <Button onClick={handleSwitch} variant="outline" disabled={isLoading}>
          Switch Section
        </Button>
        <div
          className="flex w-full items-center"
          data-testid="breadcrumbs-container"
        >
          <Breadcrumbs
            breadcrumbs={[
              isLoading
                ? { id: "loading", label: "Loading", loading: true }
                : sections[currentSection],
            ]}
          />
        </div>
      </div>
    )
  },
}

import type { Meta, StoryObj } from "@storybook/react"
import { BreadcrumbItemType } from "../Breadcrumbs"
import Header from "./index"

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Header>

const defaultTree: BreadcrumbItemType[] = [
  { label: "Home", href: "/" },
  { label: "Candidates", href: "/candidates" },
  { label: "John Doe", href: "/candidates/john-doe" },
]

export const Default: Story = {
  args: {
    tree: defaultTree,
    moduleName: "Recruitment",
    moduleHref: "/recruitment",
  },
}

export const WithoutBreadcrumbs: Story = {
  args: {
    moduleName: "Recruitment",
    moduleHref: "/recruitment",
  },
}

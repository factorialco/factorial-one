import { Meta, StoryObj } from "@storybook/react"
import { TagList } from "./index"

const mockAvatarUrl = "https://i.pravatar.cc/150"
const mockTeamImageUrl = "https://placehold.co/64/5856D6/ffffff?text=T"
const mockCompanyImageUrl = "https://placehold.co/64/007AFF/ffffff?text=C"

// Sample dot tags
const dotTags = [
  {
    text: "Category 1",
    color: "viridian" as const,
    description: "This is a category tag with a description",
  },
  {
    text: "Category 2",
    color: "malibu" as const,
    description: "Another category with description",
  },
  {
    text: "Category 3",
    color: "yellow" as const,
  },
  {
    text: "Category 4",
    color: "purple" as const,
    description: "Yet another category description",
  },
  {
    text: "Category 5",
    color: "lilac" as const,
    description: "Yet another category description",
  },
]

// Sample person tags
const personTags = [
  {
    name: "John Doe",
    avatarUrl: mockAvatarUrl,
  },
  {
    name: "Jane Smith",
    avatarUrl: mockAvatarUrl,
  },
  {
    name: "Bob Johnson",
    avatarUrl: mockAvatarUrl,
  },
]

// Sample team tags
const teamTags = [
  {
    teamName: "Engineering",
    teamImageUrl: mockTeamImageUrl,
  },
  {
    teamName: "Product",
    teamImageUrl: mockTeamImageUrl,
  },
  {
    teamName: "Design",
    teamImageUrl: mockTeamImageUrl,
  },
]

// Sample company tags
const companyTags = [
  {
    companyName: "Acme Inc",
    companyImageUrl: mockCompanyImageUrl,
  },
  {
    companyName: "Globex Corp",
    companyImageUrl: mockCompanyImageUrl,
  },
]

// Sample status tags
const statusTags = [
  {
    variant: "positive" as const,
    text: "Active",
  },
  {
    variant: "warning" as const,
    text: "Pending",
  },
  {
    variant: "critical" as const,
    text: "Inactive",
  },
  {
    variant: "info" as const,
    text: "Processing",
  },
]

// Sample alert tags
const alertTags = [
  {
    level: "info" as const,
    text: "Information",
  },
  {
    level: "warning" as const,
    text: "Warning",
  },
  {
    level: "critical" as const,
    text: "Critical",
  },
]

// Sample balance tags
const balanceTags = [
  {
    status: "positive" as const,
    text: "+$1,234.56",
  },
  {
    status: "negative" as const,
    text: "-$567.89",
  },
  {
    status: "neutral" as const,
    text: "$0.00",
  },
]

/**
 * The TagList component displays a collection of tags of a single type.
 *
 * **Note:** The TagList only accepts one tag type at a time. The `type` prop
 * specifies which tag variant to use, and the `tags` array must contain only data
 * relevant to that specific tag type.
 */
const meta = {
  title: "Tag/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "TagList displays a collection of tags of a single type with overflow handling.",
      },
    },
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof TagList>

export default meta

type Story = StoryObj<typeof meta>

export const DotTags: Story = {
  args: {
    type: "dot",
    tags: dotTags,
    max: 4,
    layout: "compact",
  },
}

export const PersonTags: Story = {
  args: {
    type: "person",
    tags: personTags,
    max: 2,
  },
}

export const TeamTags: Story = {
  args: {
    type: "team",
    tags: teamTags,
  },
}

export const CompanyTags: Story = {
  args: {
    type: "company",
    tags: companyTags,
  },
}

export const StatusTags: Story = {
  args: {
    type: "status",
    tags: statusTags,
    max: 3,
  },
}

export const AlertTags: Story = {
  args: {
    type: "alert",
    tags: alertTags,
  },
}

export const BalanceTags: Story = {
  args: {
    type: "balance",
    tags: balanceTags,
  },
}

export const WithCustomMax: Story = {
  args: {
    type: "dot",
    tags: dotTags,
    max: 2,
  },
}

export const WithRemainingCount: Story = {
  args: {
    type: "dot",
    tags: dotTags.slice(0, 2),
    remainingCount: 10,
  },
}

export const WithFillLayout: Story = {
  args: {
    type: "dot",
    tags: dotTags,
    layout: "fill",
  },
  parameters: {
    layout: "padded",
  },
}

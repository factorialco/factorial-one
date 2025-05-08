import { Meta, StoryObj } from "@storybook/react"
import { TagVariant } from "../Tag"
import { TagList } from "./index"

const mockAvatarUrl = "https://i.pravatar.cc/150"
const mockTeamImageUrl = "https://placehold.co/64/5856D6/ffffff?text=T"
const mockCompanyImageUrl = "https://placehold.co/64/007AFF/ffffff?text=C"

const sampleTags: TagVariant[] = [
  {
    type: "dot",
    text: "Category",
    color: "viridian",
  },
  {
    type: "person",
    name: "John Doe",
    avatarUrl: mockAvatarUrl,
  },
  {
    type: "team",
    teamName: "Engineering",
    teamImageUrl: mockTeamImageUrl,
  },
  {
    type: "company",
    companyName: "Acme Inc",
    companyImageUrl: mockCompanyImageUrl,
  },
  {
    type: "alert",
    level: "info",
    text: "Information",
  },
  {
    type: "status",
    variant: "positive",
    text: "Active",
  },
  {
    type: "balance",
    status: "positive",
    text: "+$1,234.56",
  },
  {
    type: "dot",
    text: "Category",
    color: "viridian",
  },
  {
    type: "dot",
    text: "Category",
    color: "viridian",
  },
]

const sampleTagsWithDescriptions: TagVariant[] = [
  {
    type: "dot",
    text: "Category",
    color: "viridian",
    description: "This is a category tag with a description",
  },
  {
    type: "person",
    name: "John Doe",
    avatarUrl: mockAvatarUrl,
    description: "Team Lead - Engineering",
  },
  {
    type: "team",
    teamName: "Engineering",
    teamImageUrl: mockTeamImageUrl,
    description: "Frontend development team",
  },
  {
    type: "company",
    companyName: "Acme Inc",
    companyImageUrl: mockCompanyImageUrl,
    description: "Global technology company",
  },
  {
    type: "status",
    variant: "positive",
    text: "Active",
    description: "This project is currently active",
  },
]

const meta: Meta<typeof TagList> = {
  title: "Tag/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
}

type Story = StoryObj<typeof TagList>

export const Default: Story = {
  args: {
    tags: sampleTags,
  },
}

export const CompactLayout: Story = {
  args: {
    tags: sampleTags,
    max: 4,
    layout: "compact",
  },
}

export const FillLayout: Story = {
  args: {
    tags: sampleTags,
    layout: "fill",
  },
  parameters: {
    layout: "padded",
  },
}

export const CustomMax: Story = {
  args: {
    tags: sampleTags,
    max: 2,
  },
}

export const WithRemainingCount: Story = {
  args: {
    tags: sampleTags.slice(0, 3),
    remainingCount: 10,
  },
}

export const WithDescriptions: Story = {
  args: {
    tags: sampleTagsWithDescriptions,
    max: 5,
  },
  parameters: {
    layout: "padded",
  },
}

export default meta

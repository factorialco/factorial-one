import type { Meta, StoryObj } from "@storybook/react"
import { AvatarList } from "./index"

const dummyPeople = [
  {
    type: "person" as const,
    firstName: "Nik",
    lastName: "Lopin",
    src: "https://github.com/nlopin.png",
  },
  {
    type: "person" as const,
    firstName: "Josep Jaume",
    lastName: "Rey",
    src: "https://github.com/josepjaume.png",
  },
  {
    type: "person" as const,
    firstName: "Saúl",
    lastName: "Domínguez",
  },
]

const dummyCompanies = [
  {
    type: "company" as const,
    name: "Factorial",
    src: "https://github.com/factorialco.png",
  },
  {
    type: "company" as const,
    name: "Itnig",
  },
  {
    type: "company" as const,
    name: "Another cool company",
  },
]

const dummyTeams = [
  { type: "team" as const, name: "Designers" },
  { type: "team" as const, name: "Engineering" },
  { type: "team" as const, name: "Product Management" },
]

function getDummyAvatars(
  count: number,
  type: "person" | "company" | "team" = "person"
) {
  const sourceData = {
    person: dummyPeople,
    company: dummyCompanies,
    team: dummyTeams,
  }[type]

  return Array.from({ length: count }, (_, index) => ({
    ...sourceData[index % sourceData.length],
  }))
}

const meta: Meta<typeof AvatarList> = {
  component: AvatarList,
  title: "Avatars/AvatarList",
  tags: ["autodocs", "experimental"],
  args: {
    size: "medium",
    type: "person",
    avatars: getDummyAvatars(3, "person"),
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AvatarList>

export default meta

type Story = StoryObj<typeof AvatarList>

export const Default: Story = {}

export const Companies: Story = {
  args: {
    size: "medium",
    type: "company",
    avatars: getDummyAvatars(3, "company"),
  },
}

export const Teams: Story = {
  args: {
    size: "medium",
    type: "team",
    avatars: getDummyAvatars(3, "team"),
  },
}

export const WithTooltip: Story = {
  args: {
    showTooltip: true,
  },
}

export const CompaniesWithTooltip: Story = {
  args: {
    ...Companies.args,
    showTooltip: true,
  },
}

export const WithMaxAvatars: Story = {
  args: {
    ...Default.args,
    avatars: getDummyAvatars(50, "person"),
    max: 3,
  },
}

export const CompaniesWithMaxAvatars: Story = {
  args: {
    ...Companies.args,
    avatars: getDummyAvatars(50, "company"),
    max: 3,
  },
}

export const WithMaxAvatarsAndTooltip: Story = {
  args: {
    ...WithMaxAvatars.args,
    showTooltip: true,
  },
}

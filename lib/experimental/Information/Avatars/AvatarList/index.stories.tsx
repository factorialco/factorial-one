import type { Meta, StoryObj } from "@storybook/react"
import { AvatarList } from "./index"

const meta: Meta<typeof AvatarList> = {
  component: AvatarList,
  title: "Avatars/AvatarList",
  tags: ["autodocs", "experimental"],
  args: {
    size: "medium",
    type: "person",
    avatars: [
      {
        type: "person",
        firstName: "Nik",
        lastName: "Lopin",
        src: "https://github.com/nlopin.png",
      },
      {
        type: "person",
        firstName: "Josep Jaume",
        lastName: "Rey",
        src: "https://github.com/josepjaume.png",
      },
      { type: "person", firstName: "Saúl", lastName: "Domínguez" },
    ],
  },
} satisfies Meta<typeof AvatarList>

export default meta

type Story = StoryObj<typeof AvatarList>

export const Default: Story = {}

export const Companies: Story = {
  args: {
    size: "medium",
    type: "company",
    avatars: [
      {
        type: "company",
        name: "Factorial",
        src: "https://github.com/factorialco.png",
      },
      { type: "company", name: "Itnig" },
      { type: "company", name: "Another cool company" },
    ],
  },
}

export const Teams: Story = {
  args: {
    size: "medium",
    type: "team",
    avatars: [
      { type: "team", name: "Designers" },
      { type: "team", name: "Engineering" },
      { type: "team", name: "Product Management" },
    ],
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
    avatars: Array(50)
      .fill(0)
      .map((_, index: number) => ({
        type: "person" as const,
        firstName: `Employee ${index + 1}`,
        lastName: "Surname",
      })),
    max: 3,
  },
}

export const CompaniesWithMaxAvatars: Story = {
  args: {
    ...Companies.args,
    avatars: Array(50)
      .fill(0)
      .map((_, index: number) => ({
        type: "company" as const,
        name: `Company ${index + 1}`,
      })),
    max: 3,
  },
}

export const WithMaxAvatarsAndTooltip: Story = {
  args: {
    ...WithMaxAvatars.args,
    showTooltip: true,
  },
}

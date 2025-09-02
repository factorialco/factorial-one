import { avatarVariants } from "@/factorial-one"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { getBaseAvatarArgTypes } from "../../BaseAvatar/__stories__/utils"
import { F0AvatarList } from "../F0AvatarList"
import {
  avatarListSizes,
  CompanyAvatar,
  PersonAvatar,
  TeamAvatar,
} from "../types"

const dummyPeople = [
  {
    firstName: "Nik",
    lastName: "Lopin",
    src: "/avatars/person01.jpg",
  },
  {
    firstName: "Josep Jaume",
    lastName: "Rey",
    src: "/avatars/person02.jpg",
  },
  {
    firstName: "Saúl",
    lastName: "Domínguez",
  },
]

const dummyCompanies = [
  {
    name: "Factorial",
    src: "/avatars/company01.jpg",
  },
  {
    name: "Itnig",
  },
  {
    name: "Another cool company",
    src: "/avatars/company02.jpg",
  },
]

const dummyTeams = [
  { name: "Designers" },
  { name: "Engineering" },
  { name: "Product Management" },
]

function getDummyAvatars<T extends "person" | "company" | "team" = "person">(
  count: number,
  type: T
): T extends "person"
  ? PersonAvatar[]
  : T extends "company"
    ? CompanyAvatar[]
    : TeamAvatar[] {
  const sourceData = {
    person: dummyPeople,
    company: dummyCompanies,
    team: dummyTeams,
  }[type]

  return Array.from({ length: count }, (_, index) => ({
    ...sourceData[index % sourceData.length],
  })) as T extends "person"
    ? PersonAvatar[]
    : T extends "company"
      ? CompanyAvatar[]
      : TeamAvatar[]
}

const meta: Meta<typeof F0AvatarList> = {
  component: F0AvatarList,
  title: "Avatars/AvatarList",
  tags: ["autodocs"],
  args: {
    size: "md",
    type: "person",
    avatars: getDummyAvatars(3, "person"),
    noTooltip: false,
  },
  parameters: {
    docs: {
      description: {
        component: [
          "An avatar component that displays a list of avatars of the same type.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
    layout: "centered",
  },
  argTypes: {
    ...getBaseAvatarArgTypes(["aria-label", "aria-labelledby"]),
    size: {
      control: "select",
      options: avatarListSizes,
      description: "The size of the avatars in the list",
    },
    type: {
      control: "select",
      options: avatarVariants,
      description: "The type of the avatars in the list",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[270px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0AvatarList>

export default meta

type Story = StoryObj<typeof F0AvatarList>

export const Default: Story = {}

export const Companies: Story = {
  args: {
    size: "md",
    type: "company",
    avatars: getDummyAvatars(3, "company"),
  },
}

export const Teams: Story = {
  args: {
    size: "md",
    type: "team",
    avatars: getDummyAvatars(3, "team"),
  },
}

export const WithMaxAvatars: Story = {
  args: {
    ...Default.args,
    type: "person",
    avatars: getDummyAvatars(50, "person"),
    max: 3,
  },
}

export const FillContainer: Story = {
  args: {
    ...Default.args,
    type: "person",
    avatars: getDummyAvatars(50, "person"),
    layout: "fill",
  },
}

export const CompaniesWithMaxAvatars: Story = {
  args: {
    ...Companies.args,
    type: "company",
    avatars: getDummyAvatars(50, "company"),
    max: 3,
  },
}

export const WithRemainingCount: Story = {
  args: {
    ...Default.args,
    type: "person",
    avatars: getDummyAvatars(7, "person"),
    remainingCount: 10,
  },
}

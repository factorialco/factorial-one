import type { Meta, StoryObj } from "@storybook/react"

import { Badge } from "@/components/Information/Badge"
import avatar from "~/storybook-assets/avatar.jpeg"
import { DetailsItemsList } from "."
import { Weekdays } from "../../../Widgets/Content/Weekdays"
import { BadgesList } from "../BadgesList"

const manager = (
  <Badge text="Isabella González" avatar={{ src: avatar, alt: "I" }} />
)

const weekdays = (
  <Weekdays
    activatedDays={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
  />
)
const teams = (
  <BadgesList
    badges={[
      { text: "Management", avatar: { alt: "M" } },
      { text: "Engineering", avatar: { alt: "E" } },
      { text: "Managers", avatar: { alt: "M" } },
      { text: "Office/Spain", avatar: { alt: "S" } },
      { text: "Office/Remote", avatar: { alt: "R" } },
      { text: "Engineering/Management", avatar: { alt: "E" } },
    ]}
  />
)

const meta: Meta = {
  component: DetailsItemsList,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    title: "Details",
    details: [
      {
        title: "Manager",
        content: manager,
      },
      {
        title: "Email",
        content: "alicia.keys@factorial.co",
      },
      {
        title: "Phone",
        content: "(120) 687-3123",
      },
      {
        title: "Legal entity",
        content: "Everyday Software SL",
      },
      {
        title: "Contract type",
        content: "Full time",
      },
      {
        title: "Start date",
        content: "01/01/2023",
      },
      {
        title: "End date",
        content: "01/01/2025",
      },
      {
        title: "Workable days",
        content: weekdays,
      },
      {
        title: "Teams",
        content: teams,
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

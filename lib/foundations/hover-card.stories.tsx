import type { Meta, StoryObj } from "@storybook/react"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/foundations/hover-card"

const meta = {
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => {
    return (
      <HoverCard>
        <HoverCardTrigger>Hover</HoverCardTrigger>
        <HoverCardContent>The React Framework.</HoverCardContent>
      </HoverCard>
    )
  },
}

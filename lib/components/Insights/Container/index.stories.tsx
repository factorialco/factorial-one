import type { Meta, StoryObj } from "@storybook/react"

import { Placeholder } from "@/lib/storybook-utils"
import { ComponentProps } from "react"
import { InsightsContainer } from "."

const meta = {
  component: InsightsContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    header: {
      title: "An insight",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    footer: {
      trend: "Increased by 12%",
      time: "Since last month",
    },
    children: <Placeholder>Put your content in there</Placeholder>,
  } satisfies ComponentProps<typeof InsightsContainer>,
} satisfies Meta<typeof InsightsContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

import type { Meta, StoryObj } from "@storybook/react"

import { Placeholder } from "@/lib/storybook-utils"
import { ComponentProps } from "react"
import { WidgetContainer } from "."

const meta = {
  component: WidgetContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    header: {
      title: "A widget",
      subtitle: "2024",
      info: "Lorem ipsum dolor",
    },
    children: <Placeholder>Put your content in there</Placeholder>,
  } satisfies ComponentProps<typeof WidgetContainer>,
} satisfies Meta<typeof WidgetContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

import type { Meta, StoryObj } from "@storybook/react"

import * as Icons from "@/icons/app"
import { ComponentProps } from "react"
import { Icon } from "."

const meta = {
  component: Icon,
  parameters: {
    layout: "centered",
  },
  args: {
    size: "md",
    icon: Icons.ArrowDown,
  },
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(Icons),
      mapping: Icons,
      description: "Select an icon to display",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Size of the icon",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<ComponentProps<typeof Icon>>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

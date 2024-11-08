import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import * as AnimatedIcons from "@/icons/animated"
import * as Icons from "@/icons/app"
import { ComponentProps } from "react"
import { Icon } from "."

const meta = {
  component: Icon,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<ComponentProps<typeof Icon>>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
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
}

export const Animated: Story = {
  args: {
    size: "md",
    icon: AnimatedIcons.HomeAnimatedIcon,
  },
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(AnimatedIcons),
      mapping: AnimatedIcons,
      description: "Select an icon to display",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Size of the icon",
    },
  },
  render: ({ size, icon }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <div
        className="flex items-center justify-center rounded-lg p-4 transition-colors hover:bg-f1-background-secondary"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Icon
          icon={icon}
          state={isHovered ? "animate" : "normal"}
          size={size}
        />
      </div>
    )
  },
}

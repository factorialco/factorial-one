import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { AIIcon } from "."

const meta = {
  component: AIIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AIIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    animate: "normal",
  },
}

export const AnimatedOnHover: Story = {
  render: () => {
    const [isHovered, setIsHovered] = useState(false)
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AIIcon animate={isHovered ? "animate" : "normal"} />
      </div>
    )
  },
}

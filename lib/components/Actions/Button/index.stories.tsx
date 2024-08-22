import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import Add from "@/icons/Add"
import Archive from "@/icons/Archive"
import { Button } from "."

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    variant: "default",
    onClick: fn(),
    label: "Click me",
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
}

export const Positive: Story = {
  args: {
    variant: "positive",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
}

export const Neutral: Story = {
  args: {
    variant: "neutral",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
  },
}

export const WithIcon: Story = {
  args: {
    icon: Archive,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const LoadingState: Story = {
  args: {
    label: "Async button with a promise",
  },
  render: (args) => {
    const onClick = async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      args.onClick?.(event)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert("Done!")
    }

    return <Button {...args} onClick={onClick} />
  },
}

export const Round: Story = {
  args: {
    round: true,
    hideLabel: true,
    icon: Add,
  },
}

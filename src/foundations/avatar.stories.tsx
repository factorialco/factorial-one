import type { Meta, StoryObj } from "@storybook/react"

import { Avatar, AvatarImage, AvatarFallback, sizes } from "@/foundations/avatar"

const meta = {
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    size: "medium",
  },
  argTypes: {
    size: {
        control: {
          type: "select",
        },
        options: sizes,
      },
  }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = ({
    size,
  }) => {
    return (
      <Avatar size={size}>
        <AvatarImage src="https://github.com/dani-moreno.png" alt="@dani-moreno" />
        <AvatarFallback>DM</AvatarFallback>
      </Avatar>
    )
  }
  
Basic.args = {
    size: "medium",
};

export const Fallback: Story = ({
    size,
  }) => {
    return (
        <Avatar size={size}>
        <AvatarFallback>DM</AvatarFallback>
        </Avatar>
    )
}

Fallback.args = {
    size: "medium",
};

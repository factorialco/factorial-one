import type { Meta, StoryObj } from "@storybook/react"

import AddAvatarSvg from "@/icons/AddAvatar"
import EnvelopeSvg from "@/icons/Envelope"
import FaceIdSvg from "@/icons/FaceId"

import { ComponentProps } from "react"
import { AnimatedSvg } from "."

const meta = {
  component: AnimatedSvg,
  parameters: {
    layout: "centered",
  },
  args: {
    className: "text-primary-foreground",
  },
  tags: ["autodocs"],
} satisfies Meta<ComponentProps<typeof AnimatedSvg>>

export default meta
type Story = StoryObj<typeof meta>

export const AddAvatar: Story = {
  args: {
    svg: AddAvatarSvg,
  },
}

export const FaceId: Story = {
  args: {
    svg: FaceIdSvg,
  },
}

export const Envelope: Story = {
  args: {
    svg: EnvelopeSvg,
  },
}

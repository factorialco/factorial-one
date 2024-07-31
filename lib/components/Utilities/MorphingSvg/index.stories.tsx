import type { Meta, StoryObj } from "@storybook/react"

import AddAvatarSvg from "@/icons/AddAvatar"
import EnvelopeSvg from "@/icons/Envelope"
import FaceIdSvg from "@/icons/FaceId"

import { ComponentProps } from "react"
import { MorphingSvg } from "."

const meta = {
  component: MorphingSvg,
  parameters: {
    layout: "centered",
  },
  args: {
    className: "text-primary-foreground w-64 h-64",
    duration: 2,
  },
  tags: ["autodocs"],
} satisfies Meta<ComponentProps<typeof MorphingSvg>>

export default meta
type Story = StoryObj<typeof meta>

export const AddAvatarToEnvelope: Story = {
  args: {
    svg1: AddAvatarSvg,
    svg2: EnvelopeSvg,
  },
}

export const EnvelopeToFaceId: Story = {
  args: {
    svg1: EnvelopeSvg,
    svg2: FaceIdSvg,
  },
}

export const FaceIdToAddAvatar: Story = {
  args: {
    svg1: FaceIdSvg,
    svg2: AddAvatarSvg,
  },
}

export const SlowMorph: Story = {
  args: {
    svg1: AddAvatarSvg,
    svg2: FaceIdSvg,
    duration: 5,
  },
}

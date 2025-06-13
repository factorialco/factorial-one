import type { Meta, StoryObj } from "@storybook/react"
import { Check } from "../../../../icons/app"
import { sizes } from "../../../../ui/avatar"
import { PersonAvatar, PersonAvatarProps } from "./index"

const PersonAvatarExample = (
  props: PersonAvatarProps & { hasBadge: boolean }
) => {
  return <PersonAvatar {...props} />
}

const meta: Meta<typeof PersonAvatarExample> = {
  component: PersonAvatarExample,
  title: "Avatars/PersonAvatar",
  tags: ["autodocs", "experimental"],
  argTypes: {
    size: {
      control: "select",
      options: sizes,
      description: "Select the size of the avatar",
    },
    hasBadge: {
      control: "boolean",
      description: "Toggle badge visibility",
    },
    badge: {
      table: { disable: true },
    },
  },
  args: {
    firstName: "Dani",
    lastName: "Moreno",
    size: "medium",
    hasBadge: false,
  },
  decorators: [
    (Story, context) => {
      const { hasBadge, ...args } = context.args
      const badgeProps = hasBadge
        ? { type: "positive" as const, icon: Check }
        : undefined
      return <Story args={{ ...args, badge: badgeProps }} />
    },
  ],
} satisfies Meta<typeof PersonAvatarExample>

export default meta

type Story = StoryObj<typeof PersonAvatarExample>

export const Default: Story = {}

export const WithImage: Story = {
  args: {
    src: "https://github.com/dani-moreno.png",
  },
}

export const WithBadge: Story = {
  args: {
    badge: {
      type: "positive",
      icon: Check,
    },
    size: "medium",
  },
}

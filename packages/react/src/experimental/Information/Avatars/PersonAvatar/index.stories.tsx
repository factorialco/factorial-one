import type { Meta, StoryObj } from "@storybook/react-vite"
import { Check } from "../../../../icons/app"
import { sizes } from "../../../../ui/avatar"
import { PersonAvatar } from "./index"

const meta: Meta<typeof PersonAvatar> = {
  component: PersonAvatar,
  title: "Avatars/PersonAvatar",
  tags: ["autodocs", "experimental"],
  argTypes: {
    size: {
      control: "select",
      options: sizes,
      description: "Select the size of the avatar",
    },
    firstName: {
      control: "text",
    },
    lastName: {
      control: "text",
    },
    badge: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof PersonAvatar>

export default meta

type Story = StoryObj<typeof PersonAvatar>

export const Default: Story = {
  args: {
    firstName: "Dani",
    lastName: "Moreno",
    size: "medium",
  },
}

export const WithImage: Story = {
  args: {
    ...Default.args,
    src: "/avatars/person04.jpg",
  },
}

export const WithBadge: Story = {
  args: {
    ...Default.args,
    badge: {
      type: "positive",
      icon: Check,
    },
  },
}

export const WithModuleBadge: Story = {
  args: {
    ...Default.args,
    badge: {
      type: "module",
      module: "timeoff",
    },
  },
}

export const WithModuleBadgeAllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-start gap-3">
      {sizes.map((size) => (
        <PersonAvatar
          key={size}
          firstName="Dani"
          lastName="Moreno"
          size={size}
          badge={{
            type: "module",
            module: "timeoff",
          }}
        />
      ))}
    </div>
  ),
}

export const WithBadgeTooltip: Story = {
  args: {
    ...Default.args,
    badge: {
      type: "positive",
      icon: Check,
      tooltip: "This is a tooltip",
    },
  },
}

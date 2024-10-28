import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { AvatarListItem, AvatarListItemProps } from "./index"

const meta: Meta<AvatarListItemProps> = {
  component: AvatarListItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[348px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<AvatarListItemProps>

export const Default: Story = {
  args: {
    hideIcon: false,
    onClick: fn(),
    item: {
      id: 1,
      // src: "https://github.com/Rogermax.png",
      title: "Title",
      description: "Subtitle",
      value: "0,00 €",
      badgeValue: {
        type: "positive",
        value: "2% · 1.522,48 €",
      },
    },
  },
}

export const WithImage: Story = {
  args: {
    hideIcon: false,
    onClick: fn(),
    item: {
      id: 1,
      src: "https://github.com/Rogermax.png",
      title: "Title",
      description: "Subtitle",
      value: "0,00 €",
      badgeValue: {
        type: "negative",
        value: "19.5% · 1.522,48 €",
      },
    },
  },
}

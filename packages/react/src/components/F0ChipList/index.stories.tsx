import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0ChipList } from "./index"

const meta = {
  component: F0ChipList,
  title: "ChipList",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof F0ChipList>

export default meta
type Story = StoryObj<typeof meta>

const mockAvatarUrl = "https://i.pravatar.cc/150"

export const Default: Story = {
  args: {
    layout: "compact",
    max: 2,
    chips: [
      {
        label: "John Doe",
        avatar: {
          type: "person",
          firstName: "John",
          lastName: "Doe",
          src: `${mockAvatarUrl}?img=1`,
        },
      },
      {
        label: "Jane Smith",
        avatar: {
          type: "person",
          firstName: "John",
          lastName: "Doe",
          src: `${mockAvatarUrl}?img=2`,
        },
      },
      {
        label: "Bob Johnson",
        avatar: {
          type: "person",
          firstName: "John",
          lastName: "Doe",
          src: `${mockAvatarUrl}?img=3`,
        },
      },
    ],
  },
}

export const WithClose: Story = {
  args: {
    ...Default.args,
    chips: Default.args.chips.map((chip) => ({
      ...chip,
      onClose: () => {},
    })),
  },
}

export const WithFillLayout: Story = {
  args: {
    ...Default.args,
    layout: "fill",
  },
  parameters: {
    layout: "padded",
  },
}

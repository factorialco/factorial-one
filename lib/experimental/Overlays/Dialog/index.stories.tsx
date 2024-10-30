import type { Meta, StoryObj } from "@storybook/react"

import { LogoAvatar } from "@/icons/app"
import { Dialog } from "."

const meta = {
  component: Dialog,
  parameters: {
    layout: "fullscreen",
    a11y: {
      skipCi: true,
    },
    docs: {
      story: { inline: false, height: "800px" },
    },
  },
  args: {
    children: <span>Dialog Content</span>,
    open: true,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Header: Story = {
  args: {
    header: {
      title: "Dialog title",
      description: "Dialog description",
      icon: LogoAvatar,
    },
  },
}

export const WithActions: Story = {
  args: {
    ...Header.args,
    actions: {
      primary: {
        label: "Primary",
        onClick: () => alert("Primary"),
      },
      secondary: {
        label: "Secondary",
        onClick: () => alert("Secondary"),
      },
    },
  },
}

export const Overflow: Story = {
  args: {
    children: (
      <>
        {Array.from({ length: 100 }).map((_, i) => (
          <p key={i}>Content</p>
        ))}
      </>
    ),
  },
}

export const Loading: Story = {
  args: {
    ...WithActions.args,
    loading: true,
  },
}

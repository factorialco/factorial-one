import type { Meta, StoryObj } from "@storybook/react"

import AddAvatar from "@/icons/AddAvatar"
import { Button } from "@/ui/button"
import { useState } from "react"
import { Dialog } from "."

const meta = {
  component: Dialog,
  decorators: [
    (Story, { args }) => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <Button onClick={() => setOpen(true)}>Click me</Button>
          <Story args={{ ...args, open, onClose: () => setOpen(false) }} />
        </>
      )
    },
  ],
  parameters: {
    layout: "centered",
    a11y: {
      skipCi: true,
    },
  },
  args: {
    children: <span>Dialog Content</span>,
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
      icon: AddAvatar,
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

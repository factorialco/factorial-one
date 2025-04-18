import { CrossedCircle } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { FileItem } from "."

const meta = {
  component: FileItem,
  title: "Rich text/FileItem",
} satisfies Meta<typeof FileItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  tags: ["experimental"],
  args: {
    file: new File(["test"], "test.txt", { type: "text/plain" }),
    actions: [
      {
        label: "Delete file",
        onClick: () => {
          alert("file action")
        },
      },
    ],
    disabled: false,
  },
}

export const WithMultipleActions: Story = {
  args: {
    file: new File(["test"], "test of a long file name.pdf", {
      type: "application/pdf",
    }),
    actions: [
      {
        icon: CrossedCircle,
        label: "Delete file",
        onClick: () => {
          alert("delete file")
        },
        critical: true,
      },
      {
        label: "Forward file",
        onClick: () => {
          alert("forward file")
        },
      },
    ],
  },
}

export const WithoutActions: Story = {
  args: {
    file: new File(["test"], "test of a long file name.pdf", {
      type: "application/pdf",
    }),
    actions: [],
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

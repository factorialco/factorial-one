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
    onRemoveFile: () => {
      alert("remove file")
    },
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const WithImage: Story = {
  args: {
    ...Default.args,
    file: new File([], "test.png", { type: "image/png" }),
  },
}

export const WithPDF: Story = {
  args: {
    ...Default.args,
    file: new File([], "test.pdf", { type: "application/pdf" }),
  },
}

import { ArrowRight, CrossedCircle } from "@/icons/app"
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
    onAction: () => {
      alert("file action")
    },
    actionIcon: CrossedCircle,
    disabled: false,
  },
}

export const WithCustomIcon: Story = {
  args: {
    ...Default.args,
    actionIcon: ArrowRight,
  },
}

export const WithoutAction: Story = {
  args: {
    ...Default.args,
    onAction: undefined,
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

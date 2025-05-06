import type { Meta, StoryObj } from "@storybook/react"

import { expect, within } from "@storybook/test"
import { ComponentProps } from "react"
import { Link } from "./index"

const meta = {
  title: "Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable"],
  argTypes: {
    target: {
      control: "select",
      options: [undefined, "_blank", "_self", "_parent", "_top"],
    },
  },
  args: {
    children: "This is a link",
    href: "/foo",
    "data-test": "foo",
  },
} satisfies Meta<ComponentProps<typeof Link>>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const link = canvas.getByRole("link")
    await expect(link.dataset.test).toBe("foo")
  },
}
export const TargetBlank: Story = {
  args: {
    target: "_blank",
    children: "This link opens in a new tab",
  },
}

export const AsText: Story = {
  args: {
    variant: "text",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

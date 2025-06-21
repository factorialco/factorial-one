import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps } from "react"
import { expect, within } from "storybook/test"
import { Link } from ".."

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

export const Variants: Story = {
  render: (args) => (
    <div className="[&>h3]:mt-5 [&>h3]:pb-2">
      <h3 className="!m-0">Basic usage</h3>
      <Link {...args} variant="link" />
      <h3>External link</h3>
      <Link {...args} variant="link" target="_blank" />
      <h3>Unstyled</h3>
      <Link {...args} variant="unstyled" />
      <h3>Disabled</h3>
      <Link {...args} variant="link" disabled />
    </div>
  ),
}

export const Inline: Story = {
  args: {
    href: "#",
    children: "link",
  },
  render: (args) => (
    <p>
      Do not click this <Link {...args} /> because it goes nowhere.
    </p>
  ),
}

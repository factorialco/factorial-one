import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps } from "react"
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
    children: "Link",
    href: "/foo",
    variant: "link",
  },
} satisfies Meta<ComponentProps<typeof Link>>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <p>
      Do not click this <Link {...args} /> because it goes nowhere.
    </p>
  ),
}

export const Variants: Story = {
  render: (args) => (
    <div className="[&>h3]:mt-5 [&>h3]:pb-2">
      <h3 className="!m-0">Basic usage</h3>
      <Link {...args} />
      <h3>As button</h3>
      <Link {...args} variant="default" />
      <h3>External link</h3>
      <Link {...args} target="_blank" />
      <h3>Disabled</h3>
      <Link {...args} disabled />
    </div>
  ),
}

export const States: Story = {
  render: (args) => (
    <div className="flex flex-row items-center justify-center space-x-6">
      <Link {...args}>Default link</Link>
      <Link {...args} disabled>
        Disabled link
      </Link>
    </div>
  ),
}

export const InteractiveExamples: Story = {
  render: (args) => (
    <div className="flex flex-row items-center justify-center space-x-6">
      <Link {...args} href="/internal">
        Internal link
      </Link>
      <Link {...args} href="https://example.com" target="_blank">
        External link
      </Link>
    </div>
  ),
}

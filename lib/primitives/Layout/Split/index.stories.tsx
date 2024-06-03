import type { Meta, StoryObj } from "@storybook/react"

import { Placeholder } from "@/lib/storybook-utils"
import { Split } from "."

const meta = {
  component: Split,
  tags: ["autodocs"],
  args: {
    gap: "4",
  },
  render: (args) => (
    <Split {...args}>
      {Array.from({ length: 10 }).map((_, i) => (
        <Placeholder shrink>{i + 1}</Placeholder>
      ))}
    </Split>
  ),
} satisfies Meta<typeof Split>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Wrap: Story = {
  render: (args) => {
    return (
      <Split {...args}>
        {Array.from({ length: 30 }).map((_, i) => (
          <Placeholder shrink>{i + 1}</Placeholder>
        ))}
      </Split>
    )
  },
}

export const Grow: Story = {
  render: (args) => (
    <Split {...args} grow>
      <Placeholder shrink>1</Placeholder>
      <Placeholder grow>Grow (2)</Placeholder>
      <Placeholder shrink>3</Placeholder>
    </Split>
  ),
}

export const WrapGrow: Story = {
  args: {
    gap: "4",
  },
  render: (args) => (
    <Split {...args}>
      {Array.from({ length: 30 }).map((_, i) => (
        <Placeholder grow>{i + 1}</Placeholder>
      ))}
    </Split>
  ),
}

export const VerticalAlign: Story = {
  args: {
    verticalAlign: "center",
  },
  render: (args) => (
    <Split {...args}>
      <Placeholder>Single line content</Placeholder>
      <Placeholder grow>
        Content with <br /> multiple lines <br /> of text <br /> to showcase how
        elements <br /> with different <br /> height will be aligned
      </Placeholder>
      <Placeholder>
        Content with <br /> two lines
      </Placeholder>
    </Split>
  ),
}

export const Inline: Story = {
  args: {
    inline: true,
    gap: "4",
  },
  render: (args) => (
    <div>
      This is some
      <Split {...args}>
        <Placeholder>Inline</Placeholder>
        <Placeholder>Content</Placeholder>
      </Split>
      that plays well with text.
    </div>
  ),
}

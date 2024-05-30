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
  args: {
    wrap: true,
  },
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
    <Split {...args}>
      <Placeholder shrink>1</Placeholder>
      <Placeholder grow>Grow (2)</Placeholder>
      <Placeholder shrink>3</Placeholder>
    </Split>
  ),
}

export const WrapGrow: Story = {
  args: {
    wrap: true,
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

export const Basis: Story = {
  args: {
    wrap: true,
  },
  render: (args) => (
    <Split {...args}>
      <Placeholder basis="1/4" shrink={false} grow>
        1/4
      </Placeholder>
      <Placeholder basis="1/4" shrink={false} grow>
        1/4
      </Placeholder>
      <Placeholder basis="1/2" shrink={false} grow>
        <pre>A big piece of content that will wrap</pre>
      </Placeholder>
      <Placeholder basis="1/2" shrink={false} grow>
        Rest
      </Placeholder>
      <Placeholder basis="1/4" shrink={false} grow>
        1/4
      </Placeholder>
      <Placeholder basis="1/4" shrink={false} grow>
        1/4
      </Placeholder>
    </Split>
  ),
}

export const VerticalAlign: Story = {
  args: {
    verticalAlign: "center",
  },
  render: (args) => (
    <Split {...args}>
      <Placeholder basis="1/4">Single line content</Placeholder>
      <Placeholder grow>
        Content with <br /> multiple lines <br /> of text <br /> to showcase how
        elements <br /> with different <br /> height will be aligned
      </Placeholder>
      <Placeholder basis="1/4">
        Content with <br /> two lines
      </Placeholder>
    </Split>
  ),
}

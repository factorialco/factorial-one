import type { Meta, StoryObj } from "@storybook/react"

import { Placeholder } from "@/lib/storybook-utils"
import { Split, SplitColumn } from "."

const meta = {
  component: Split,
  tags: ["autodocs"],
  args: {
    gap: "md",
    children: Array.from({ length: 20 }).map((_, i) => (
      <SplitColumn>
        <Placeholder>{i + 1}</Placeholder>
      </SplitColumn>
    )),
  },
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
}

export const Grow: Story = {
  args: {
    children: (
      <>
        <SplitColumn>
          <Placeholder>1</Placeholder>
        </SplitColumn>
        <SplitColumn grow>
          <Placeholder>Grow (2)</Placeholder>
        </SplitColumn>
        <SplitColumn>
          <Placeholder>3</Placeholder>
        </SplitColumn>
      </>
    ),
  },
}

export const WrapGrow: Story = {
  args: {
    wrap: true,
    children: Array.from({ length: 10 }).map((_, i) => (
      <SplitColumn grow>
        <Placeholder>{i + 1}</Placeholder>
      </SplitColumn>
    )),
  },
}

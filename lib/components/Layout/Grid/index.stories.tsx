import type { Meta, StoryObj } from "@storybook/react"

import { Placeholder } from "@/lib/storybook-utils"
import { Grid } from "."

const meta = {
  component: Grid,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        {Array.from({ length: 10 }).map((_, i) => (
          <Placeholder key={i}>{i + 1}</Placeholder>
        ))}
      </>
    ),
  },
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Small: Story = {
  args: {
    size: "sm",
  },
}

export const Medium: Story = {
  args: {
    size: "md",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
  },
}

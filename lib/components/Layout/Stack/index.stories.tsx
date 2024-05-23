import type { Meta, StoryObj } from "@storybook/react"

import { Placeholder } from "@/lib/storybook-utils"
import { Stack } from "."

const meta = {
  component: Stack,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <Placeholder>Test</Placeholder>
        <Placeholder>Test</Placeholder>
        <Placeholder>Test</Placeholder>
      </>
    ),
  },
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    gap: "md",
  },
}

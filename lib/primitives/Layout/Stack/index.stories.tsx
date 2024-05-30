import type { Meta, StoryObj } from "@storybook/react"

import { Placeholder } from "@/lib/storybook-utils"
import { Stack } from "."

const meta = {
  component: Stack,
  tags: ["autodocs"],
  render: (args) => (
    <Stack {...args}>
      {Array.from({ length: 10 }).map((_, i) => (
        <Placeholder key={i}>{i + 1}</Placeholder>
      ))}
    </Stack>
  ),
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

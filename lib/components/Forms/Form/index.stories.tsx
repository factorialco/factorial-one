import type { Meta, StoryObj } from "@storybook/react"

import { Form } from "."

const meta = {
  component: Form,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

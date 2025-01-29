import type { Meta, StoryObj } from "@storybook/react"

import { Placeholder } from "@/lib/storybook-utils/placeholder"
import { ComponentProps } from "react"
import { EmployeeSelector } from "."

const meta: Meta = {
  component: EmployeeSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full min-w-72 max-w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    header: {
      title: "A widget",
      subtitle: "2024",
      count: 2,
    },
    children: <Placeholder>Put your content in there</Placeholder>,
  } satisfies ComponentProps<typeof EmployeeSelector>,
} satisfies Meta<typeof EmployeeSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

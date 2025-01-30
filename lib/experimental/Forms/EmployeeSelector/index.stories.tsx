import type { Meta, StoryObj } from "@storybook/react"

import { ComponentProps } from "react"
import { EmployeeSelector } from "."
import { famousEmployees } from "./employee.factory.spec"

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
    employees: famousEmployees,
    placeholder: "Select employees...",
  } satisfies ComponentProps<typeof EmployeeSelector>,
} satisfies Meta<typeof EmployeeSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { EqFilter } from "./eqFilter"

const meta: Meta<typeof EqFilter> = {
  title: "Experimental/OneDataCollection/Filters/EqFilter",
  component: EqFilter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const staticOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null)

    return (
      <div className="h-96 w-80 rounded-lg border">
        <EqFilter
          schema={{
            label: "Status",
            options: {
              options: staticOptions,
            },
          }}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
}

export const WithInitialValue: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>("active")

    return (
      <div className="h-96 w-80 rounded-lg border">
        <EqFilter
          schema={{
            label: "Status",
            options: {
              options: staticOptions,
            },
          }}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
}

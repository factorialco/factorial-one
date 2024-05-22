import type { Meta, StoryObj } from "@storybook/react"

import { ThemeSwitcher } from "./theme-switcher"

const meta: Meta = {
  component: ThemeSwitcher,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render() {
    return (
      <div className="max-w-96 bg-background p-10">
        <div className="flex flex-col gap-3 rounded-lg border bg-card p-6">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-medium">Theme Switcher example</h1>
            <div className="flex-shrink-0">
              <ThemeSwitcher />
            </div>
          </div>
          <p>
            This is a basic demo of a theme toggle using Tailwind and shadcn.
            The user selection is stored using localStorage.
          </p>
        </div>
      </div>
    )
  },
}

import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"
import { SearchBar } from "./index.tsx"

const meta = {
  title: "Sidebar/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[240px] bg-f1-background-tertiary p-3">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Search...",
    onClick: action("SearchBar clicked"),
    shortcut: ["cmd", "k"],
  },
}

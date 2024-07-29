import type { Meta, StoryObj } from "@storybook/react"
import { Tabs } from "../Tabs"

const meta = {
  component: Tabs,
  tags: ["autodocs"],
  args: {
    tabs: [{ name: "one" }, { name: "two" }],
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: [
      { name: "Overview" },
      { name: "Profile" },
      { name: "Personal" },
      { name: "Agreement" },
      { name: "Time off" },
      { name: "Competencies" },
      { name: "Activity" },
    ],
    title: "Alba Horneros",
    subtitle: "Product Designer",
    src: "https://github.com/dani-moreno.png",
    alt: "@dani-moreno",
  },
}

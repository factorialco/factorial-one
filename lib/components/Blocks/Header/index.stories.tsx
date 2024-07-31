import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "."

const meta = {
  component: Header,
  tags: ["autodocs"],
  args: {
    title: "Alba Horneros",
    subtitle: "Product Designer",
    src: "https://github.com/dani-moreno.png",
    alt: "@dani-moreno",
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Alba Horneros",
    subtitle: "Product Designer",
    src: "https://github.com/dani-moreno.png",
    alt: "@dani-moreno",
  },
}

import type { Meta, StoryObj } from "@storybook/react"

import { LinkProvider } from "@/lib/linkHandler"
import { Link } from "."

const meta = {
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "This is a link",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    target: "_blank",
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
export const WithProvider: Story = {
  decorators: [
    (Story) => (
      <LinkProvider
        controller={({ href }) => ({
          onClick: (event) => {
            alert(`Cicked: ${href}`)
            event.preventDefault()
          },
        })}
      >
        <Story />
      </LinkProvider>
    ),
  ],
}

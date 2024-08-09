import type { Meta, StoryObj } from "@storybook/react"

import { Placeholder } from "@/lib/storybook-utils"
import { ComponentProps } from "react"
import { Widget } from "."

const meta = {
  component: Widget.Container,
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
      info: "Lorem ipsum dolor",
    },
    children: <Placeholder>Put your content in there</Placeholder>,
  } satisfies ComponentProps<typeof Widget.Container>,
} satisfies Meta<typeof Widget.Container>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLink: Story = {
  args: {
    ...meta.args,
    header: {
      title: "Wellness programs",
      subtitle: "Boosting workplace health",
      info: "Explore initiatives for physical, mental, and emotional well-being, including health screenings and fitness challenges.",
      link: { url: "/", title: "Go to link" },
    },
  },
}

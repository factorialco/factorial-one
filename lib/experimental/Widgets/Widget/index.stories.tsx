import type { Meta, StoryObj } from "@storybook/react"

import { Placeholder } from "@/lib/storybook-utils"
import { fn } from "@storybook/test"
import { ComponentProps } from "react"
import { Widget } from "."

const meta = {
  component: Widget,
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
  } satisfies ComponentProps<typeof Widget>,
} satisfies Meta<typeof Widget>

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

export const WithAction: Story = {
  args: {
    ...meta.args,
    action: {
      label: "Show more",
      onClick: fn(),
    },
  },
}

export const WithAlert: Story = {
  args: {
    ...meta.args,
    alert: "12 alerts",
  },
}

export const MultipleContent: Story = {
  args: {
    ...meta.args,
    children: [
      Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="rounded-sm bg-f1-background-secondary p-3 text-center text-f1-foreground"
        >
          Content {index + 1}
        </div>
      )),
    ],
  },
}

export const Full: Story = {
  args: {
    ...meta.args,
    header: {
      title: "Wellness programs",
      subtitle: "Boosting workplace health",
      info: "Explore initiatives for physical, mental, and emotional well-being, including health screenings and fitness challenges.",
      link: { url: "/", title: "Go to link" },
    },
    alert: "12 alerts",
    action: {
      label: "Show more",
      onClick: fn(),
    },
    children: [
      Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="rounded-sm bg-f1-background-secondary p-3 text-center text-f1-foreground"
        >
          Content {index + 1}
        </div>
      )),
    ],
  },
}

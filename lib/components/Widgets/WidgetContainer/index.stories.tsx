import type { Meta, StoryObj } from "@storybook/react"

import { Placeholder } from "@/lib/storybook-utils"
import { fn } from "@storybook/test"
import { ComponentProps, Fragment } from "react"
import { WidgetContainer } from "."

const meta = {
  component: WidgetContainer,
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
  } satisfies ComponentProps<typeof WidgetContainer>,
} satisfies Meta<typeof WidgetContainer>

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
    alert: "12 alerts in this period",
  },
}

export const MultipleContent: Story = {
  args: {
    ...meta.args,
    children: [
      Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="rounded-lg bg-muted p-3 text-center text-foreground"
        >
          Content {index + 1}
        </div>
      )),
    ],
  },
}

export const MultipleContentWihNulls: Story = {
  args: {
    ...meta.args,
    children: [
      undefined,
      null,
      false,
      <Fragment></Fragment>,
      <></>,
      Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="rounded-lg bg-muted p-3 text-center text-foreground"
        >
          Content {index + 1}
        </div>
      )),
      undefined,
      null,
      false,
      <Fragment></Fragment>,
      <></>,
    ],
  },
}

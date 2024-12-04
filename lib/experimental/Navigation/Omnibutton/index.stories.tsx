import { Meta, StoryObj } from "@storybook/react"
import { OmniButton } from "."

const meta: Meta<typeof OmniButton> = {
  component: OmniButton,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="relative h-screen w-screen">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof OmniButton>

const mockOptions = [
  {
    title: "Let's talk",
    description: "Contact a specialist by phone.",
    href: "#",
    target: "_blank",
  },
  {
    title: "Drop us a line",
    description: "Send a support request form to our help team.",
    href: "#",
    target: "_blank",
  },
  {
    title: "Help Center",
    href: "#",
    target: "_blank",
  },
]

export const Default: Story = {
  args: {
    label: "Help",
    options: mockOptions,
    hasNewUpdate: false,
  },
}

export const WithNewUpdate: Story = {
  args: {
    label: "Help",
    options: mockOptions,
    hasNewUpdate: true,
  },
}

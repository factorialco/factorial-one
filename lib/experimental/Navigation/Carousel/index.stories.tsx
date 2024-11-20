import { Placeholder } from "@/lib/storybook-utils/placeholder"
import { Meta, StoryObj } from "@storybook/react"
import { Carousel } from "."

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    autoScroll: { control: "boolean" },
    responsive: {
      control: "boolean",
      description:
        "Displays more slides per page depending on the screen size.",
    },
  },
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="w-full p-6">
        <Story />
      </div>
    ),
  ],
  args: {
    autoScroll: false,
    responsive: true,
    children: [
      <Placeholder key="1" className="h-32">
        Slide 1
      </Placeholder>,
      <Placeholder key="2" className="h-32">
        Slide 2
      </Placeholder>,
      <Placeholder key="3" className="h-32">
        Slide 3
      </Placeholder>,
      <Placeholder key="4" className="h-32">
        Slide 4
      </Placeholder>,
      <Placeholder key="5" className="h-32">
        Slide 5
      </Placeholder>,
      <Placeholder key="6" className="h-32">
        Slide 6
      </Placeholder>,
    ],
  },
}

export const AutoScroll: Story = {
  decorators: [
    (Story) => (
      <div className="w-full p-6">
        <Story />
      </div>
    ),
  ],
  args: {
    autoScroll: true,
    autoScrollSpeed: 3000,
    children: [
      <Placeholder key="1" className="h-32">
        Slide 1
      </Placeholder>,
      <Placeholder key="2" className="h-32">
        Slide 2
      </Placeholder>,
      <Placeholder key="3" className="h-32">
        Slide 3
      </Placeholder>,
      <Placeholder key="4" className="h-32">
        Slide 4
      </Placeholder>,
      <Placeholder key="5" className="h-32">
        Slide 5
      </Placeholder>,
      <Placeholder key="6" className="h-32">
        Slide 6
      </Placeholder>,
    ],
  },
}

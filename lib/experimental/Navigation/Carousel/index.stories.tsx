import { Placeholder } from "@/lib/storybook-utils/placeholder"
import { Meta, StoryObj } from "@storybook/react"
import { Carousel } from "."

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    autoplay: { control: "boolean" },
  },
}

export default meta

type Story = StoryObj<typeof Carousel>

const SLIDES = Array.from({ length: 6 }, (_, i) => (
  <Placeholder key={i + 1} className="h-32">
    Slide {i + 1}
  </Placeholder>
))

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="w-full p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    autoplay: { table: { disable: true } },
  },
  args: {
    autoplay: false,
    children: SLIDES,
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
    autoplay: true,
    delay: 3000,
    children: SLIDES,
  },
}

export const SneakPeek: Story = {
  decorators: [
    (Story) => (
      <div className="w-full py-6">
        <Story />
      </div>
    ),
  ],
  args: {
    itemClassName: "w-11/12 basis-auto",
    showArrows: false,
    children: SLIDES,
  },
}

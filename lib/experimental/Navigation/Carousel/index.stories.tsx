import { Placeholder } from "@/lib/storybook-utils/placeholder"
import { Meta, StoryObj } from "@storybook/react"
import { Carousel } from "."

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  argTypes: {
    autoplay: { control: "boolean" },
  },
}

export default meta

type Story = StoryObj<typeof Carousel>

const SLIDES = Array.from({ length: 15 }, (_, i) => (
  <Placeholder key={i + 1} className="h-32 min-w-40">
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
    columns: { default: 1 },
  },
}

export const CustomColumns: Story = {
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
    columns: {
      xs: 2,
      sm: 3,
      md: 4,
      lg: 6,
    },
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
    columns: { default: 1 },
  },
}

export const SneakPeek: Story = {
  decorators: [
    (Story) => (
      <div className="w-full p-6">
        <Story />
      </div>
    ),
  ],
  args: {
    showArrows: false,
    children: SLIDES,
    showPeek: true,
    columns: { default: 1 },
  },
}

export const NoColumns: Story = {
  decorators: [
    (Story) => (
      <div className="w-full p-6">
        <Story />
      </div>
    ),
  ],
  args: {
    showArrows: false,
    children: SLIDES,
    showPeek: true,
  },
}

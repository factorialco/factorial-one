import { Placeholder } from "@/lib/storybook-utils/placeholder"
import { Meta, StoryObj } from "@storybook/react"
import { Carousel } from "."

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  argTypes: {
    autoplay: { control: "boolean" },
    showDots: { control: "boolean" },
    showArrows: { control: "boolean" },
    showPeek: { control: "boolean" },
    showFade: { control: "boolean" },
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
    (Story, args) => (
      <div className="w-full p-6">
        <Story {...args} />
      </div>
    ),
  ],
  argTypes: {
    autoplay: { control: "boolean" },
    showDots: { control: "boolean" },
    showArrows: { control: "boolean" },
    showPeek: { control: "boolean" },
    showFade: { control: "boolean" },
  },
  args: {
    autoplay: false,
    showArrows: true,
    showDots: true,
    showPeek: false,
    showFade: false,
    children: SLIDES,
  },
}

/**
 * `columns`: An object specifying the number of columns to display at different breakpoints:
 *   - `xs`: Number of columns for extra small screens. Default is `2`.
 *   - `sm`: Number of columns for small screens. Default is `3`.
 *   - `md`: Number of columns for medium screens. Default is `4`.
 *   - `lg`: Number of columns for large screens. Default is `6`.
 *
 * Try to **resize the window** to see the number of columns change.
 */
export const CustomColumns: Story = {
  decorators: [
    (Story, args) => (
      <div className="w-full p-6">
        <Story {...args} />
      </div>
    ),
  ],
  argTypes: {
    autoplay: { control: "boolean" },
    showDots: { control: "boolean" },
    showArrows: { control: "boolean" },
    showPeek: { control: "boolean" },
    showFade: { control: "boolean" },
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

/**
 * `autoplay`: Whether to automatically scroll through the slides. Default is `false`.
 */
export const AutoScroll: Story = {
  decorators: [
    (Story) => (
      <div className="w-full p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    autoplay: { control: "boolean" },
    showDots: { control: "boolean" },
    showArrows: { control: "boolean" },
    showPeek: { control: "boolean" },
    showFade: { control: "boolean" },
  },
  args: {
    autoplay: true,
    delay: 3000,
    children: SLIDES,
  },
}

/**
 * `sneakPeek`: Whether to show a peek of the next slide. Default is `false`.
 */
export const SneakPeek: Story = {
  decorators: [
    (Story) => (
      <div className="w-full p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    autoplay: { control: "boolean" },
    showDots: { control: "boolean" },
    showArrows: { control: "boolean" },
    showPeek: { control: "boolean" },
    showFade: { control: "boolean" },
  },
  args: {
    showArrows: false,
    children: SLIDES,
    showPeek: true,
  },
}

/**
 * `showFade`: Whether to fade the edges of the carousel. Default is `false`.
 */
export const FadeEdges: Story = {
  decorators: [
    (Story) => (
      <div className="w-full p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    autoplay: { control: "boolean" },
    showDots: { control: "boolean" },
    showArrows: { control: "boolean" },
    showPeek: { control: "boolean" },
    showFade: { control: "boolean" },
  },
  args: {
    showArrows: true,
    children: SLIDES,
    showFade: true,
    columns: {
      xs: 2,
      sm: 2,
      md: 3,
      lg: 3,
    },
  },
}

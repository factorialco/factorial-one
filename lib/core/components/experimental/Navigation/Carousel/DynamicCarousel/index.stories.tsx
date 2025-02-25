import { BarChartProps } from "@/core/components/charts/BarChart"
import BarChartStory from "@/core/components/charts/BarChart/index.stories.tsx"
import { BarChartWidget } from "@/domain/components/widgets/Charts/BarChartWidget"
import { Placeholder } from "@/lib/storybook-utils/placeholder.tsx"
import { Meta, StoryObj } from "@storybook/react"
import { DynamicCarousel } from "./index.tsx"

const meta: Meta<typeof DynamicCarousel> = {
  title: "Carousel/DynamicCarousel",
  component: DynamicCarousel,
  tags: ["autodocs", "experimental"],
}

export default meta

type Story = StoryObj<typeof DynamicCarousel>

const randomClasses = ["h-full", "h-64", "h-32", "w-32", "w-full", "w-64"]

const SLIDES_RANDOM = [
  <BarChartWidget key="widget" chart={BarChartStory.args as BarChartProps} />,
  <BarChartWidget key="widget2" chart={BarChartStory.args as BarChartProps} />,
  ...Array.from({ length: 6 }, (_, i) => {
    const randomHeight = randomClasses[Math.floor(i / 2)]
    const randomWidth = randomClasses[Math.floor(i / 2) + 3]
    return (
      <Placeholder
        key={`widget${i + 2}`}
        className={`${randomHeight} ${randomWidth}`}
      >
        Slide {i + 1} ({randomHeight} {randomWidth})
      </Placeholder>
    )
  }),
]

export const Default: Story = {
  decorators: [
    (Story, args) => (
      <div className="w-full p-6">
        <Story {...args} />
      </div>
    ),
  ],
  args: {
    children: SLIDES_RANDOM,
  },
}

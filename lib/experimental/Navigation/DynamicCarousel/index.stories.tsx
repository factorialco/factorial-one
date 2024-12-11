import { BarChartProps } from "@/components/Charts/BarChart"
import BarChartStory from "@/components/Charts/BarChart/index.stories"
import { BarChartWidget } from "@/experimental/Widgets/Charts/BarChartWidget"
import { Placeholder } from "@/lib/storybook-utils/placeholder"
import { Meta, StoryObj } from "@storybook/react"
import { DynamicCarousel } from "."

const meta: Meta<typeof DynamicCarousel> = {
  component: DynamicCarousel,
}

export default meta

type Story = StoryObj<typeof DynamicCarousel>

const randomClasses = ["h-full", "h-64", "h-32", "w-32", "w-full", "w-64"]

const SLIDES_RANDOM = [
  <BarChartWidget key="widget" chart={BarChartStory.args as BarChartProps} />,
  <BarChartWidget key="widget" chart={BarChartStory.args as BarChartProps} />,
  ...Array.from({ length: 6 }, (_, i) => {
    const randomHeight = randomClasses[Math.floor(i / 2)]
    const randomWidth = randomClasses[Math.floor(i / 2) + 3]
    return (
      <Placeholder key={i + 1} className={`${randomHeight} ${randomWidth}`}>
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

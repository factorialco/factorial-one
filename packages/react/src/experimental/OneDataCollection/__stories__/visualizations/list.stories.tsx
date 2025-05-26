import { Meta, StoryObj } from "@storybook/react"
import { ExampleComponent, getMockVisualizations } from "../mockData"

const meta = {
  title: "Data Collection/Visualizations/List",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "List view specific visualization. Displays a list of items with a checkbox column and a list of properties.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BasicListVisualization: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return <ExampleComponent visualizations={[mockVisualizations.list]} />
  },
}

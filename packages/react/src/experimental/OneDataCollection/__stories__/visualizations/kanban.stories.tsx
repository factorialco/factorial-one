import { Meta, StoryObj } from "@storybook/react-vite"
import { ExampleComponent, getMockVisualizations } from "../mockData"

const meta = {
  title: "Data Collection/Visualizations/Kanban",
  parameters: {
    layout: "padded",
    a11y: {
      skipCi: true,
    },
    docs: {
      description: {
        component:
          "[TODO] Kanban view specific visualization. Displays a kanban of items with a checkbox column and a list of properties.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BasicListVisualization: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return <ExampleComponent visualizations={[mockVisualizations.kanban]} />
  },
}

import { Meta, StoryObj } from "@storybook/react"
import { ExampleComponent, getMockVisualizations, mockUsers } from "../mockData"

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
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return <ExampleComponent visualizations={[mockVisualizations.list]} />
  },
}

export const ListVisualizationWithGrouping: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return (
      <ExampleComponent
        visualizations={[mockVisualizations.list]}
        grouping={{
          collapsible: true,
          mandatory: true,
          groupBy: {
            department: {
              name: "Department",
              label: (groupId) => groupId,
              itemCount: async (groupId) => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                return mockUsers.filter((user) => user.department === groupId)
                  .length
              },
            },
          },
        }}
      />
    )
  },
}

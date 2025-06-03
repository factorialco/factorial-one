import { Meta, StoryObj } from "@storybook/react"
import {
  createDataAdapter,
  ExampleComponent,
  generateMockUsers,
} from "./mockData"

const meta = {
  title: "Data collection/Full height",
  component: ExampleComponent,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => <ExampleComponent frozenColumns={2} fullHeight />,
}

export const WithPagination: Story = {
  render: () => {
    const paginatedMockUsers = generateMockUsers(50)
    const dataAdapter = createDataAdapter({
      data: paginatedMockUsers,
      delay: 500,
      paginationType: "pages",
    })

    return (
      <ExampleComponent
        frozenColumns={2}
        fullHeight
        dataAdapter={dataAdapter}
      />
    )
  },
}

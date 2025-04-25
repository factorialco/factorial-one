import { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { TableColumnDefinition } from "../visualizations/collection/Table"
import { ExampleComponent, mockUsers, sortings } from "./mockData"

const meta = {
  title: "Data Collection/Dynamic Columns",
  component: ExampleComponent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "<p>Dynamic columns are columns that are created dynamically based on the data in the collection</p>",
      },
    },
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

const generateCols = (
  index: number
): TableColumnDefinition<(typeof mockUsers)[number], typeof sortings>[] => [
  {
    label: `Name ${index}`,
    width: 140,
    render: (item) => ({
      type: "person",
      value: {
        firstName: item.name.split(" ")[0],
        lastName: item.name.split(" ")[1],
      },
    }),
    sorting: "name",
  },
  {
    label: `Email ${index}`,
    render: (item) => item.email,
    sorting: "email",
  },
]

export const Default: Story = {
  render: (args) => {
    const [cols, setCols] = useState(generateCols(1))

    return (
      <>
        <ExampleComponent {...args} dynamicColumns={cols} />
        <hr />
        <button
          onClick={() =>
            setCols((prev) => [...prev, ...generateCols(cols.length + 1)])
          }
        >
          Add Colset
        </button>
      </>
    )
  },
}

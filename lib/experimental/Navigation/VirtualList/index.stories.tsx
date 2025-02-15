import type { Meta, StoryObj } from "@storybook/react"
import { VirtualList } from "."

interface ItemObj {
  a: number
  b: number
}

const generateItems = (count: number): ItemObj[] => {
  return Array.from({ length: count }, (_, index) => ({
    a: index + 1,
    b: Math.floor(Math.random() * 10) + 1,
  }))
}

const meta: Meta<typeof VirtualList<ItemObj>> = {
  title: "VirtualList",
  component: VirtualList,
  tags: ["autodocs", "experimental"],
  argTypes: {
    renderer: { table: { disable: true } },
    items: { table: { disable: true } },
    itemCount: { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const ItemComponent = (item?: ItemObj) => {
  return (
    <div className="h-[32px] w-[200px]">{`${item?.a} + ${item?.b} = ${(item?.a ?? 0) + (item?.b ?? 0)}`}</div>
  )
}

export const Default: Story = {
  args: {
    renderer: ItemComponent,
    items: generateItems(100000),
    itemSize: 32,
    itemCount: 100000,
    height: 400,
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="font-weight-bold text-xl">
          List of 100.000 elements
        </span>
        <div className="w-[250px]">
          <Story />
        </div>
      </div>
    ),
  ],
}

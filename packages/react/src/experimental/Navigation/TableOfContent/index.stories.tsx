import { Placeholder } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { fn } from "storybook/test"
import { TableOfContent } from "./index"
import { TOCItem, TOCItemAction } from "./types"

const mockOtherActions: TOCItemAction[] = [
  {
    label: "Edit",
    onClick: fn(),
    icon: Placeholder,
  },
  {
    type: "separator",
  },
  {
    label: "Delete",
    onClick: fn(),
    icon: Placeholder,
  },
]

const mockTOCData = (setActiveItem: (id: string) => void): TOCItem[] => [
  {
    id: "section-0",
    label: "Item with actions",
    onClick: setActiveItem,
    icon: Placeholder,
    otherActions: mockOtherActions,
  },
  {
    id: "section-1",
    label: "Section header",
    icon: Placeholder,
    otherActions: mockOtherActions,

    children: [
      {
        id: "item-1-1",
        label: "Section item",
        onClick: setActiveItem,
        icon: Placeholder,
      },
      {
        id: "item-1-2",
        label: "Section item",
        onClick: setActiveItem,
        icon: Placeholder,
      },
      {
        id: "item-1-3",
        label: "Section item",
        onClick: setActiveItem,
        disabled: true,
      },
      {
        id: "item-1-4",
        label: "Section item",
        onClick: setActiveItem,
      },
      {
        id: "item-1-5",
        label: "Section item",
        onClick: setActiveItem,
      },
      {
        id: "item-1-6",
        label: "Section item",
        onClick: setActiveItem,
      },
    ],
  },
  {
    id: "section-2",
    label: "Label",
    icon: Placeholder,
    children: [
      {
        id: "item-2-1",
        label: "Label",
        onClick: setActiveItem,
        icon: Placeholder,
        otherActions: mockOtherActions,
      },
      {
        id: "section-2-2",
        label: "Label",
        onClick: setActiveItem,
        children: [
          {
            id: "item-2-2-1",
            label: "Option",
            disabled: true,
            onClick: setActiveItem,
          },
        ],
      },
    ],
  },
  {
    id: "item-3",
    label: "Label",
    onClick: setActiveItem,
  },
  {
    id: "deep-nesting-example",
    label: "4-Level Deep Example",
    icon: Placeholder,
    onClick: setActiveItem,
    children: [
      {
        id: "level-2",
        label: "Level 2 Item",
        onClick: setActiveItem,
        children: [
          {
            id: "level-3",
            label: "Level 3 Item",
            onClick: setActiveItem,
            children: [
              {
                id: "level-4",
                label: "Level 4 Item (Max Depth)",
                onClick: setActiveItem,
                // TypeScript error if you try to add children here:
                // in level 4, you can't add children
              },
            ],
          },
        ],
      },
    ],
  },
]

const meta: Meta<typeof TableOfContent> = {
  title: "Navigation/TableOfContent",
  component: TableOfContent,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title displayed at the top of the table of contents",
      required: true,
    },
    items: {
      control: "object",
      description:
        "Array of TOCItem objects that define the navigation structure. TOCItem properties: id (string), label (string), onClick (function), icon (IconType), disabled (boolean), children (TOCItem[]), otherActions (TOCItemAction[]). Items with children become section headers. **Strictly limited to 4 levels maximum** - TypeScript will prevent deeper nesting.",
      required: true,
    },
    activeItem: {
      control: "text",
      description:
        "ID of the currently active item. This item will be highlighted with a selected background",
    },
    className: {
      control: "text",
      description:
        "Additional CSS classes to apply to the table of contents container",
    },
  },
  decorators: [
    (Story) => (
      <div className="h-[400px] w-fit border border-solid border-f1-border">
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [activeItem, setActiveItem] = useState("item-1-1")

    return (
      <TableOfContent
        {...args}
        items={mockTOCData((id) => setActiveItem(id))}
        activeItem={activeItem}
      />
    )
  },
  args: {
    title: "Example title",
  },
}

export default meta

type Story = StoryObj<typeof TableOfContent>

export const Default: Story = {}

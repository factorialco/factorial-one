import { Button } from "@/components/Actions/Button"
import { Checkbox } from "@/experimental/Forms/Fields/Checkbox"
import {
  Delete,
  EyeInvisible,
  EyeVisible,
  LayersFront,
  Settings,
  Share,
  Upload,
} from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { useState } from "react"
import { ActionBar } from "."

const meta: Meta<typeof ActionBar> = {
  title: "ActionBar",
  component: ActionBar,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "400px" },
    },
  },
  tags: ["autodocs", "experimental"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls the visibility of the action bar",
    },
  },
}

export default meta
type Story = StoryObj<typeof ActionBar>

interface Item {
  id: string
  name: string
  selected: boolean
}

export const Default: Story = {
  args: {
    isOpen: true,
    primaryAction: {
      label: "Export",
      onClick: fn(),
      icon: Upload,
    },
    secondaryActions: [
      {
        label: "Share",
        onClick: fn(),
        icon: Share,
      },
      {
        label: "Duplicate",
        onClick: fn(),
        icon: LayersFront,
      },
      {
        label: "Edit permissions",
        onClick: fn(),
        icon: Settings,
      },
      {
        label: "Remove",
        onClick: fn(),
        icon: Delete,
        critical: true,
      },
    ],
    selectedNumber: 10,
    onUnselect: fn(),
  },
  render: (args) => {
    const [items, setItems] = useState<Item[]>([
      { id: "1", name: "Payslip 2025", selected: true },
      { id: "2", name: "Medical leaves", selected: false },
      { id: "3", name: "Contract", selected: false },
      { id: "4", name: "Employee expenses", selected: false },
      { id: "5", name: "ID card", selected: false },
    ])

    const selectedItems = items.filter((item) => item.selected)
    const hasSelectedItems = selectedItems.length > 0

    const toggleItem = (id: string) => {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, selected: !item.selected } : item
        )
      )
    }

    const handleUnselect = () => {
      setItems(items.map((item) => ({ ...item, selected: false })))
    }

    return (
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="h-fit w-[90%] max-w-[400px] overflow-hidden rounded-md bg-f1-background">
          {items.map((item) => (
            <div
              className="flex h-[44px] items-center gap-3 border border-solid border-transparent border-b-f1-border-secondary px-2 last:border-b-transparent"
              id={item.id}
            >
              <Checkbox
                id={item.id}
                title={item.name}
                hideLabel
                checked={item.selected}
                onCheckedChange={() => toggleItem(item.id)}
              />
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </div>
        <ActionBar
          {...args}
          isOpen={hasSelectedItems}
          selectedNumber={selectedItems.length}
          onUnselect={handleUnselect}
        />
      </div>
    )
  },
}

export const NoSelectedItems: Story = {
  args: {
    ...Default.args,
    secondaryActions: [
      {
        label: "Share",
        onClick: fn(),
        icon: Share,
      },
      {
        label: "Remove",
        onClick: fn(),
        icon: Delete,
        critical: true,
      },
    ],
    selectedNumber: undefined,
  },
  render: (args) => {
    const [open, setOpen] = useState(true)

    return (
      <div className="relative flex h-full w-full items-center justify-center">
        <Button
          variant="outline"
          onClick={() => setOpen(!open)}
          label={open ? "Hide ActionBar" : "Show ActionBar"}
          icon={open ? EyeInvisible : EyeVisible}
        />
        <ActionBar {...args} isOpen={open} />
      </div>
    )
  },
}

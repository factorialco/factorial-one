import { Delete, LayersFront, Settings, Share, Upload } from "@/icons/app"
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
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls the visibility of the action bar",
    },
  },
}

export default meta
type Story = StoryObj<typeof ActionBar>

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
    ],
    otherActions: [
      {
        label: "Edit permissions",
        onClick: fn(),
        icon: Settings,
      },
      {
        label: "Duplicate",
        onClick: fn(),
        icon: LayersFront,
      },
      "separator",
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
    const [isOpen, setIsOpen] = useState(args.isOpen)
    return (
      <div className="relative flex h-full w-full items-center justify-center">
        <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        <ActionBar {...args} isOpen={isOpen} />
      </div>
    )
  },
}

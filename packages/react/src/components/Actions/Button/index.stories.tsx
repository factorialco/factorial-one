import type { Meta, StoryObj } from "@storybook/react"

import Add from "../../../icons/app/Add"
import Archive from "../../../icons/app/Archive"
import Delete from "../../../icons/app/Delete"
import Save from "../../../icons/app/Save"
import { Button } from "./index"

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/pZzg1KTe9lpKTSGPUZa8OJ/Web-components?node-id=41-1256&t=99GWQFvFLZtKW49N-4",
    },
  },
  tags: ["autodocs", "stable"],
  args: {
    variant: "default",
    onClick: () => {
      console.log("Button clicked")
      //fn()
    },
    label: "Click me",
    size: "md",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "critical",
        "neutral",
        "ghost",
        "outline",
        "promote",
      ],
      description: "Visual style variant of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the button",
    },
    label: {
      control: "text",
    },
    icon: {
      control: "boolean",
      description: "Whether to show an icon",
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    hideLabel: {
      control: "boolean",
      description: "Hide label and show only icon",
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variants
export const Default: Story = {
  args: {
    variant: "default",
    label: "Default Button",
  },
}

export const Critical: Story = {
  args: {
    variant: "critical",
    label: "Delete Item",
    icon: Delete,
  },
}

export const Neutral: Story = {
  args: {
    variant: "neutral",
    label: "Cancel",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    label: "View Details",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    label: "Secondary Action",
  },
}

export const Promote: Story = {
  args: {
    variant: "promote",
    label: "Upgrade Now",
  },
}

// Size Variants
export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="sm" label="Small" />
      <Button {...args} size="md" label="Medium" />
      <Button {...args} size="lg" label="Large" />
    </div>
  ),
}

// Icon Variations
export const WithIcon: Story = {
  args: {
    icon: Archive,
    label: "Archive Item",
  },
}

export const IconRound: Story = {
  args: {
    round: true,
    hideLabel: true,
    icon: Add,
    label: "Add Item",
  },
}

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled Button",
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    label: "Processing...",
  },
}

// Interactive Examples
export const AsyncAction: Story = {
  args: {
    label: "Save Changes",
    icon: Save,
  },
  render: (args) => {
    const onClick = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      alert("Changes saved!")
    }

    return <Button {...args} onClick={onClick} />
  },
}

// Common Use Cases
export const PrimaryAction: Story = {
  args: {
    variant: "default",
    label: "Create New Project",
    icon: Add,
    size: "lg",
  },
}

export const DestructiveAction: Story = {
  args: {
    variant: "critical",
    label: "Delete Account",
    icon: Delete,
  },
}

export const IconButtonGroup: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button variant="ghost" icon={Add} hideLabel round label="Add" />
      <Button variant="ghost" icon={Archive} hideLabel round label="Archive" />
      <Button variant="ghost" icon={Delete} hideLabel round label="Delete" />
    </div>
  ),
}

export const OnlyEmoji: Story = {
  args: {
    emoji: "🥰",
    label: "🥰",
    variant: "neutral",
    hideLabel: true,
  },
}

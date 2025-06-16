import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"
import { Add, Archive, Delete, Save, Upsell } from "../../../icons/app"
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
        "outlinePromote",
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
    pressed: {
      control: "boolean",
      description: "Force the button to be pressed",
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
    "data-test": "data",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByRole("button")
    await expect(button.dataset.test).toBe("data")
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <h3>Default</h3>
      <div className="flex gap-2">
        <Button {...args} variant="default" label="Default" />
        <Button {...args} variant="critical" label="Critical" />
        <Button {...args} variant="neutral" label="Neutral" />
        <Button {...args} variant="ghost" label="Ghost" />
        <Button {...args} variant="outline" label="Outline" />
        <Button {...args} variant="promote" label="Promote" />
        <Button {...args} variant="outlinePromote" label="Outline Promote" />
      </div>
      <h3 className="mt-4">With icon</h3>
      <div className="flex gap-2">
        <Button {...args} variant="default" label="Default" icon={Add} />
        <Button {...args} variant="critical" label="Critical" icon={Delete} />
        <Button {...args} variant="neutral" label="Neutral" icon={Archive} />
        <Button {...args} variant="ghost" label="Ghost" icon={Save} />
        <Button {...args} variant="outline" label="Outline" icon={Add} />
        <Button {...args} variant="promote" label="Promote" icon={Add} />
        <Button
          {...args}
          variant="outlinePromote"
          label="Outline Promote"
          icon={Upsell}
        />
      </div>
      <h3 className="mt-4">Only icon</h3>
      <div className="flex gap-2">
        <Button
          {...args}
          variant="default"
          label="Default"
          icon={Add}
          hideLabel
          round
        />
        <Button
          {...args}
          variant="critical"
          label="Critical"
          icon={Delete}
          hideLabel
          round
        />
        <Button
          {...args}
          variant="neutral"
          label="Neutral"
          icon={Archive}
          hideLabel
          round
        />
        <Button
          {...args}
          variant="ghost"
          label="Ghost"
          icon={Save}
          hideLabel
          round
        />
        <Button
          {...args}
          variant="outline"
          label="Outline"
          icon={Add}
          hideLabel
          round
        />
        <Button
          {...args}
          variant="promote"
          label="Promote"
          icon={Add}
          hideLabel
          round
        />
        <Button
          {...args}
          variant="outlinePromote"
          label="Outline Promote"
          icon={Upsell}
          hideLabel
          round
        />
      </div>
    </div>
  ),
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

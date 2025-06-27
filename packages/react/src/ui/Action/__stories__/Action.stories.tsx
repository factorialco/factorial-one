import type { Meta, StoryObj } from "@storybook/react-vite"
import { Action } from "../Action"

const meta: Meta<typeof Action> = {
  title: "Components/Action",
  component: Action,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "default",
        "outline",
        "neutral",
        "critical",
        "ghost",
        "promote",
        "outlinePromote",
        "link",
      ],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["zero", "sm", "md", "lg"],
    },
    pressed: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    children: "Action Button",
    size: "md",
  },
}

export default meta
type Story = StoryObj<typeof Action>

export const Basic: Story = {
  args: {
    children: "Basic Action",
  },
}

export const WithClick: Story = {
  args: {
    children: "Clickable Action",
    onClick: () => alert("Action clicked!"),
  },
}

export const AsLink: Story = {
  args: {
    children: "Link Action",
    href: "https://example.com",
    target: "_blank",
  },
}

export const AsLinkWithButtonVariant: Story = {
  args: {
    children: "Link with Button Style",
    href: "https://example.com",
    target: "_blank",
    variant: "default",
  },
}

export const AsButtonWithLinkVariant: Story = {
  args: {
    children: "Button with Link Style",
    variant: "link",
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled Action",
    disabled: true,
  },
}

export const WithPrepend: Story = {
  args: {
    children: "Action with Prepend",
    prepend: "→",
  },
}

export const WithAppend: Story = {
  args: {
    children: "Action with Append",
    append: "←",
  },
}

export const LinkDisabled: Story = {
  args: {
    children: "Link Disabled",
    href: "https://example.com",
    target: "_blank",
    disabled: true,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Action variant="default">Default</Action>
      <Action variant="outline">Outline</Action>
      <Action variant="neutral">Neutral</Action>
      <Action variant="critical">Critical</Action>
      <Action variant="ghost">Ghost</Action>
      <Action variant="promote">Promote</Action>
      <Action variant="outlinePromote">Outline Promote</Action>
      <Action variant="link">Link</Action>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Action size="sm">Small</Action>
      <Action size="md">Medium</Action>
      <Action size="lg">Large</Action>
    </div>
  ),
}

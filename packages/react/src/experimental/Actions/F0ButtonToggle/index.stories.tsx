import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"
import { Placeholder } from "../../../icons/app"
import { F0ButtonToggle } from "./index"

const meta = {
  title: "Actions/ButtonToggle",
  component: F0ButtonToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  args: {
    onClick: () => {
      console.log("Button toggle clicked")
    },
    label: "Toggle me",
    size: "md",
    icon: Placeholder,
    selected: false,
    disabled: false,
  },
  argTypes: {
    selected: {
      control: "boolean",
      description: "Whether the button is in selected/active state.",
    },
    size: {
      control: "select",
      options: ["sm", "md"],
      description:
        "Sets the button size. 'md' for desktop, 'sm' for compact/secondary actions.",
    },
    label: {
      control: "text",
      description:
        "The accessible label for the button. Required for accessibility.",
    },
    icon: {
      description: "Icon to display in the button. Required prop.",
    },
    disabled: {
      control: "boolean",
      description:
        "The button is inactive and does not respond to user interaction.",
    },
    onClick: {
      action: "clicked",
      description: "Callback fired when the button is clicked.",
    },
  },
} satisfies Meta<typeof F0ButtonToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    selected: false,
    label: "Default Toggle",
    icon: Placeholder,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByRole("button")
    await expect(button.dataset.test).toBe("data")
  },
}

export const Selected: Story = {
  args: {
    selected: true,
    label: "Selected Toggle",
    icon: Placeholder,
  },
}

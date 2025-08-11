import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0Text } from "../index"

const meta = {
  component: F0Text,
  title: "Text",
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="flex w-full items-center justify-center p-4">
        <div className="w-full max-w-2xl space-y-4">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof F0Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "body",
    children: "This is the default body text variant.",
  },
}

export const HeadingLarge: Story = {
  args: {
    variant: "heading-large",
    children: "Large Heading Text",
  },
}

export const Heading: Story = {
  args: {
    variant: "heading",
    children: "Regular Heading Text",
  },
}

export const Body: Story = {
  args: {
    variant: "body",
    children:
      "This is body text used for main content and paragraphs. It provides good readability for longer passages of text.",
  },
}

export const Description: Story = {
  args: {
    variant: "description",
    children:
      "This is description text, typically used for secondary information with muted styling.",
  },
}

export const Label: Story = {
  args: {
    variant: "label",
    children: "Label Text",
  },
}

export const LabelInput: Story = {
  args: {
    variant: "label-input",
    children: "Input Label",
  },
}

export const LongText: Story = {
  args: {
    variant: "body",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
}

export const TextAlignment: Story = {
  args: {
    variant: "body",
    children: "This text demonstrates different alignment options.",
  },
  render: (args) => (
    <div className="w-full space-y-4">
      <F0Text {...args} align="left">
        Left aligned text (default)
      </F0Text>
      <F0Text {...args} align="center">
        Center aligned text
      </F0Text>
      <F0Text {...args} align="right">
        Right aligned text
      </F0Text>
    </div>
  ),
}

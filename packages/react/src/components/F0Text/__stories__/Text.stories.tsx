import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0Text } from "../index"

const meta = {
  component: F0Text,
  title: "Text",
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
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

export const WithCustomTagName: Story = {
  args: {
    variant: "heading",
    tagName: "h3",
    children: "Heading rendered as h3 element",
  },
}

export const WithTitle: Story = {
  args: {
    variant: "body",
    title: "This is a tooltip that appears on hover",
    children: "Text with title attribute (hover to see tooltip)",
  },
}

export const LongText: Story = {
  args: {
    variant: "body",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
}

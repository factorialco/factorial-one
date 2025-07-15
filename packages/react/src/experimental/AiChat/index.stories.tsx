import { Meta, StoryObj } from "@storybook/react-vite"
import { AiChat } from "./index"

const meta = {
  title: "Experimental/AiChat",
  component: AiChat,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    runtimeUrl: {
      control: "text",
      description: "The URL of the CopilotKit runtime",
    },
    children: {
      control: false,
      description: "The content to wrap with CopilotKit",
    },
  },
} satisfies Meta<typeof AiChat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    runtimeUrl: "/api/copilotkit",
    children: (
      <div className="rounded border p-4">Your app content goes here</div>
    ),
  },
}

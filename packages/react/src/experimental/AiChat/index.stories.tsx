import { Meta, StoryObj } from "@storybook/react-vite"
import { AiChat, AiChatProvider } from "./index"

const meta = {
  title: "Experimental/AiChat",
  component: AiChat,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <div className="h-full w-full bg-[hsl(0,0,98)]">
          <AiChatProvider
            runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
            agent="one-workflow"
          >
            <Story />
          </AiChatProvider>
        </div>
      )
    },
  ],
} satisfies Meta<typeof AiChat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    labels: {
      greeting: "Hey Adam,",
      initial: ["How can I help you today?"],
    },
    children: (
      <div className="rounded border p-4">Your app content goes here</div>
    ),
  },
}

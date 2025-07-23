import { CopilotKit } from "@copilotkit/react-core"
import { Meta, StoryObj } from "@storybook/react-vite"
import { AiChat } from "./index"

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
          <CopilotKit
            runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
            agent="OneLight"
          >
            <Story />
          </CopilotKit>
        </div>
      )
    },
  ],
} satisfies Meta<typeof AiChat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="rounded border p-4">Your app content goes here</div>
    ),
  },
}

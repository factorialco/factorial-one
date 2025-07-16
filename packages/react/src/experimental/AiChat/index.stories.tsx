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
        <CopilotKit runtimeUrl="https://mastra.local.factorial.dev/copilotkit">
          <Story />
        </CopilotKit>
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
